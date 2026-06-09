import { Server, Socket } from "socket.io";
import { roomManager } from "./rooms/roomManager";
import { generateUserId } from "./utils/id";
import { validateNickname } from "./utils/sanitize";
import { getAvailableGrades } from "./quiz/questions";
import { getFlowSettings } from "./admin/settings";

/* ── per-socket 상태 ── */

interface SocketState {
  userId: string | null;
  nickname: string | null;
  lastSubmitAt: number;
}

const socketStates = new Map<string, SocketState>();
const matchTimeouts = new Map<string, NodeJS.Timeout>(); // userId → 30s timeout

function getState(sid: string): SocketState {
  let s = socketStates.get(sid);
  if (!s) { s = { userId: null, nickname: null, lastSubmitAt: 0 }; socketStates.set(sid, s); }
  return s;
}

function cancelMatchTimeout(userId: string): void {
  const t = matchTimeouts.get(userId);
  if (t) { clearTimeout(t); matchTimeouts.delete(userId); }
}

/* ── 게임 진행 헬퍼 ── */

function startQuestionForRoom(io: Server, roomId: string): void {
  const data = roomManager.getCurrentQuestion(roomId);
  const room = roomManager.getRoom(roomId);
  if (!data || !room) return;

  io.to(`room_${roomId}`).emit("questionStarted", data);

  // 봇들이 이번 문제에 확률적으로 아이템 사용(정산 때 발동)
  roomManager.maybeBotsUseItems(roomId);

  roomManager.startQuestionTimer(roomId, () => handleTimeUp(io, roomId));

  // 봇 답변 스케줄
  roomManager.scheduleBotAnswers(
    roomId,
    (botUserId, isCorrect, isFirstCorrect, comboNext) => {
      io.to(`room_${roomId}`).emit("answerSubmitted", { userId: botUserId });
      if (isCorrect) {
        const bot = roomManager.getRoom(roomId)?.users.find((u) => u.userId === botUserId);
        io.to(`room_${roomId}`).emit("answerCorrect", {
          userId: botUserId,
          nickname: bot?.nickname ?? "상대",
          isBot: bot?.isBot ?? true,
          isFirst: isFirstCorrect,
          combo: comboNext,
        });
      }
      const pressure = roomManager.applyTimePressure(roomId, botUserId, () => handleTimeUp(io, roomId));
      if (pressure) io.to(`room_${roomId}`).emit("timePressure", pressure);
    },
    () => { roomManager.clearQuestionTimer(roomId); processQuestionResult(io, roomId); },
  );
}

function handleTimeUp(io: Server, roomId: string): void {
  roomManager.clearBotTimers(roomId);
  processQuestionResult(io, roomId);
}

function processQuestionResult(io: Server, roomId: string): void {
  roomManager.clearBotTimers(roomId);
  const result = roomManager.getQuestionResult(roomId);
  if (!result) return;

  io.to(`room_${roomId}`).emit("questionResult", result);

  const tko = result.battle.tkoWinnerTeam !== null;
  if (tko) roomManager.endGame(roomId); // 더 이상 진행되지 않도록 종료 처리

  if (result.isLastQuestion || tko) {
    setTimeout(() => {
      const gameResult = roomManager.getGameResult(roomId);
      if (gameResult) io.to(`room_${roomId}`).emit("gameFinished", gameResult);
    }, getFlowSettings().finalResultDelayMs);
  } else {
    setTimeout(() => {
      const room = roomManager.getRoom(roomId);
      if (!room || room.status !== "PLAYING") return;
      if (roomManager.advanceToNextQuestion(roomId)) startQuestionForRoom(io, roomId);
    }, getFlowSettings().resultDelayMs);
  }
}

/** 매칭 성사 → 방 생성 → 게임 시작 */
function startMatchedGame(io: Server, roomId: string): void {
  const room = roomManager.getRoom(roomId);
  if (!room) return;

  // 인간 플레이어 소켓을 방 채널에 추가
  for (const u of room.users) {
    if (u.isBot) continue;
    const s = io.sockets.sockets.get(u.socketId);
    if (s) { s.leave("lobby"); s.join(`room_${roomId}`); }
  }

  // matchFound 이벤트
  io.to(`room_${roomId}`).emit("matchFound", roomManager.getRoomInfoForClient(room));

  setTimeout(() => {
    const room = roomManager.getRoom(roomId);
    if (!room || room.status !== "PLAYING" || room.questionStartedAt) return;
    io.to(`room_${roomId}`).emit("gameStarted");
    startQuestionForRoom(io, roomId);
  }, getFlowSettings().matchStartDelayMs);
}

/* ── 소켓 초기화 ── */

export function initializeSocket(io: Server): void {
  io.on("connection", (socket: Socket) => {
    const state = getState(socket.id);
    socket.join("lobby");

    // ─── 닉네임 ───
    socket.on("setNickname", (data: { nickname?: string }) => {
      const nickname = typeof data?.nickname === "string" ? data.nickname.trim() : "";
      const v = validateNickname(nickname);
      if (!v.valid) { socket.emit("nicknameRejected", { reason: v.reason }); return; }
      const userId = generateUserId();
      state.userId = userId;
      state.nickname = nickname;
      socket.emit("nicknameAccepted", { userId, nickname });
    });

    // ─── 과목/학년 목록 요청 ───
    socket.on("requestGrades", () => {
      socket.emit("availableGrades", getAvailableGrades());
    });

    // ─── 매칭 찾기 ───
    socket.on("findMatch", (data: { gradeKey?: string }) => {
      if (!state.userId || !state.nickname) {
        socket.emit("errorMessage", { message: "닉네임을 먼저 설정해주세요." });
        return;
      }
      const gradeKey = typeof data?.gradeKey === "string" ? data.gradeKey : "";
      if (!gradeKey) { socket.emit("errorMessage", { message: "과목을 선택해주세요." }); return; }

      // 기존 방/큐 정리
      cancelMatchTimeout(state.userId);
      roomManager.leaveQueue(state.userId);
      roomManager.leaveRoom(state.userId);

      // 큐에 추가
      roomManager.joinQueue(gradeKey, {
        socketId: socket.id, userId: state.userId, nickname: state.nickname, joinedAt: Date.now(),
      });

      // 즉시 매칭 시도
      const matched = roomManager.tryMatch(gradeKey);
      if (matched) {
        for (const e of matched) cancelMatchTimeout(e.userId);
        const room = roomManager.createMatchRoom(gradeKey, matched, false);
        startMatchedGame(io, room.id);
        return;
      }

      // 대기
      socket.emit("matchmaking", { status: "searching", gradeKey });

      // 타임아웃 → 대기 중인 사람들을 묶고 봇으로 목표 인원(n:n)까지 채워 시작
      const timer = setTimeout(() => {
        matchTimeouts.delete(state.userId!);
        if (!roomManager.isInQueue(state.userId!)) return;

        const target = getFlowSettings().matchTargetSize;
        const group = roomManager.takeFromQueue(gradeKey, target);
        if (group.length === 0) return;
        for (const e of group) cancelMatchTimeout(e.userId);

        const room = roomManager.createMatchRoom(gradeKey, group, false);
        roomManager.fillBotsToTarget(room.id, target);
        startMatchedGame(io, room.id);
      }, getFlowSettings().matchTimeoutMs);
      matchTimeouts.set(state.userId, timer);
    });

    // ─── 매칭 취소 ───
    socket.on("cancelMatch", () => {
      if (!state.userId) return;
      cancelMatchTimeout(state.userId);
      roomManager.leaveQueue(state.userId);
      socket.emit("matchCancelled");
    });

    // ─── 혼자 풀기 ───
    socket.on("playSolo", (data: { gradeKey?: string }) => {
      if (!state.userId || !state.nickname) {
        socket.emit("errorMessage", { message: "닉네임을 먼저 설정해주세요." });
        return;
      }
      const gradeKey = typeof data?.gradeKey === "string" ? data.gradeKey : "";
      if (!gradeKey) return;

      cancelMatchTimeout(state.userId);
      roomManager.leaveQueue(state.userId);
      roomManager.leaveRoom(state.userId);

      const entry = { socketId: socket.id, userId: state.userId, nickname: state.nickname, joinedAt: Date.now() };
      const room = roomManager.createMatchRoom(gradeKey, [entry], true);

      socket.leave("lobby");
      socket.join(`room_${room.id}`);
      socket.emit("matchFound", roomManager.getRoomInfoForClient(room));

      setTimeout(() => {
        const activeRoom = roomManager.getRoom(room.id);
        if (!activeRoom || activeRoom.status !== "PLAYING" || activeRoom.questionStartedAt) return;
        io.to(`room_${room.id}`).emit("gameStarted");
        startQuestionForRoom(io, room.id);
      }, getFlowSettings().soloStartDelayMs);
    });

    // ─── 답변 제출 ───
    socket.on("submitAnswer", (data: { selectedIndex?: number }) => {
      const now = Date.now();
      if (now - state.lastSubmitAt < getFlowSettings().submitRateLimitMs) return;
      state.lastSubmitAt = now;
      if (!state.userId) return;

      const room = roomManager.getUserRoom(state.userId);
      if (!room) return;

      const idx = data?.selectedIndex;
      if (typeof idx !== "number" || !Number.isInteger(idx)) return;

      const result = roomManager.submitAnswer(room.id, state.userId, idx);
      if (!result.success) return;

      io.to(`room_${room.id}`).emit("answerSubmitted", { userId: state.userId });
      if (result.isCorrect) {
        const user = room.users.find((u) => u.userId === state.userId);
        io.to(`room_${room.id}`).emit("answerCorrect", {
          userId: state.userId,
          nickname: user?.nickname ?? state.nickname ?? "참가자",
          isBot: user?.isBot ?? false,
          isFirst: result.isFirstCorrect ?? false,
          combo: result.comboNext ?? 0,
        });
      }

      if (result.isCorrect && !roomManager.checkAllAnswered(room.id)) {
        const pressure = roomManager.applyTimePressure(room.id, state.userId, () => handleTimeUp(io, room.id));
        if (pressure) io.to(`room_${room.id}`).emit("timePressure", pressure);
      }

      if (roomManager.checkAllAnswered(room.id)) {
        roomManager.clearQuestionTimer(room.id);
        roomManager.clearBotTimers(room.id);
        processQuestionResult(io, room.id);
      }
    });

    // ─── 아이템 사용 ───
    socket.on("useItem", (data: { type?: string }) => {
      if (!state.userId) return;
      const type = data?.type;
      if (type !== "heal" && type !== "curse" && type !== "destroy") return;
      const room = roomManager.getUserRoom(state.userId);
      if (!room) return;
      const items = roomManager.useItem(room.id, state.userId, type);
      // 성공/실패 무관하게 현재 인벤토리를 돌려보내 클라가 동기화
      socket.emit("itemSync", {
        items: items ?? room.scores.get(state.userId)?.items ?? { heal: 0, curse: 0, destroy: 0 },
        used: items ? type : null,
      });
    });

    // ─── 게임 나가기 ───
    socket.on("leaveGame", () => {
      if (!state.userId) return;
      const roomId = roomManager.leaveRoom(state.userId);
      if (roomId) socket.leave(`room_${roomId}`);
      socket.join("lobby");
    });

    // ─── 재접속 ───
    socket.on("reconnectToRoom", (data: { userId?: string }) => {
      const userId = typeof data?.userId === "string" ? data.userId : "";
      if (!userId) return;
      const room = roomManager.handleReconnect(userId, socket.id);
      if (!room) {
        socket.emit("reconnectFailed");
        return;
      }

      const user = room.users.find((u) => u.userId === userId);
      if (user) { state.userId = userId; state.nickname = user.nickname; }
      if (user) socket.emit("nicknameAccepted", { userId, nickname: user.nickname });

      socket.leave("lobby");
      socket.join(`room_${room.id}`);
      socket.emit("matchFound", roomManager.getRoomInfoForClient(room));

      if (room.status === "PLAYING") {
        const cq = roomManager.getCurrentQuestion(room.id);
        if (cq) {
          const remaining = room.questionEndsAt ? Math.max(0, Math.ceil((room.questionEndsAt - Date.now()) / 1000)) : 0;
          socket.emit("gameStarted");
          socket.emit("questionStarted", { ...cq, timeLimit: remaining });
        }
      }
    });

    // ─── 연결 해제 ───
    socket.on("disconnect", () => {
      if (state.userId) {
        cancelMatchTimeout(state.userId);
        roomManager.leaveQueue(state.userId);

        roomManager.handleDisconnect(state.userId, (uid) => {
          roomManager.leaveRoom(uid);
        });
      }
      socketStates.delete(socket.id);
    });
  });
}
