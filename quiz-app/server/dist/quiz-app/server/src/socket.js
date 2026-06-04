"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeSocket = initializeSocket;
const roomManager_1 = require("./rooms/roomManager");
const id_1 = require("./utils/id");
const sanitize_1 = require("./utils/sanitize");
const questions_1 = require("./quiz/questions");
const settings_1 = require("./admin/settings");
const socketStates = new Map();
const matchTimeouts = new Map(); // userId → 30s timeout
function getState(sid) {
    let s = socketStates.get(sid);
    if (!s) {
        s = { userId: null, nickname: null, lastSubmitAt: 0 };
        socketStates.set(sid, s);
    }
    return s;
}
function cancelMatchTimeout(userId) {
    const t = matchTimeouts.get(userId);
    if (t) {
        clearTimeout(t);
        matchTimeouts.delete(userId);
    }
}
/* ── 게임 진행 헬퍼 ── */
function startQuestionForRoom(io, roomId) {
    const data = roomManager_1.roomManager.getCurrentQuestion(roomId);
    const room = roomManager_1.roomManager.getRoom(roomId);
    if (!data || !room)
        return;
    io.to(`room_${roomId}`).emit("questionStarted", data);
    roomManager_1.roomManager.startQuestionTimer(roomId, () => handleTimeUp(io, roomId));
    // 봇 답변 스케줄
    roomManager_1.roomManager.scheduleBotAnswers(roomId, (botUserId, isCorrect) => {
        io.to(`room_${roomId}`).emit("answerSubmitted", { userId: botUserId });
        if (isCorrect) {
            const bot = roomManager_1.roomManager.getRoom(roomId)?.users.find((u) => u.userId === botUserId);
            io.to(`room_${roomId}`).emit("answerCorrect", {
                userId: botUserId,
                nickname: bot?.nickname ?? "상대",
                isBot: bot?.isBot ?? true,
            });
        }
        const pressure = roomManager_1.roomManager.applyTimePressure(roomId, botUserId, () => handleTimeUp(io, roomId));
        if (pressure)
            io.to(`room_${roomId}`).emit("timePressure", pressure);
    }, () => { roomManager_1.roomManager.clearQuestionTimer(roomId); processQuestionResult(io, roomId); });
}
function handleTimeUp(io, roomId) {
    roomManager_1.roomManager.clearBotTimers(roomId);
    processQuestionResult(io, roomId);
}
function processQuestionResult(io, roomId) {
    roomManager_1.roomManager.clearBotTimers(roomId);
    const result = roomManager_1.roomManager.getQuestionResult(roomId);
    if (!result)
        return;
    io.to(`room_${roomId}`).emit("questionResult", result);
    if (result.isLastQuestion) {
        setTimeout(() => {
            const gameResult = roomManager_1.roomManager.getGameResult(roomId);
            if (gameResult)
                io.to(`room_${roomId}`).emit("gameFinished", gameResult);
        }, (0, settings_1.getFlowSettings)().finalResultDelayMs);
    }
    else {
        setTimeout(() => {
            const room = roomManager_1.roomManager.getRoom(roomId);
            if (!room || room.status !== "PLAYING")
                return;
            if (roomManager_1.roomManager.advanceToNextQuestion(roomId))
                startQuestionForRoom(io, roomId);
        }, (0, settings_1.getFlowSettings)().resultDelayMs);
    }
}
/** 매칭 성사 → 방 생성 → 게임 시작 */
function startMatchedGame(io, roomId) {
    const room = roomManager_1.roomManager.getRoom(roomId);
    if (!room)
        return;
    // 인간 플레이어 소켓을 방 채널에 추가
    for (const u of room.users) {
        if (u.isBot)
            continue;
        const s = io.sockets.sockets.get(u.socketId);
        if (s) {
            s.leave("lobby");
            s.join(`room_${roomId}`);
        }
    }
    // matchFound 이벤트
    io.to(`room_${roomId}`).emit("matchFound", roomManager_1.roomManager.getRoomInfoForClient(room));
    setTimeout(() => {
        const room = roomManager_1.roomManager.getRoom(roomId);
        if (!room || room.status !== "PLAYING" || room.questionStartedAt)
            return;
        io.to(`room_${roomId}`).emit("gameStarted");
        startQuestionForRoom(io, roomId);
    }, (0, settings_1.getFlowSettings)().matchStartDelayMs);
}
/* ── 소켓 초기화 ── */
function initializeSocket(io) {
    io.on("connection", (socket) => {
        const state = getState(socket.id);
        socket.join("lobby");
        // ─── 닉네임 ───
        socket.on("setNickname", (data) => {
            const nickname = typeof data?.nickname === "string" ? data.nickname.trim() : "";
            const v = (0, sanitize_1.validateNickname)(nickname);
            if (!v.valid) {
                socket.emit("nicknameRejected", { reason: v.reason });
                return;
            }
            const userId = (0, id_1.generateUserId)();
            state.userId = userId;
            state.nickname = nickname;
            socket.emit("nicknameAccepted", { userId, nickname });
        });
        // ─── 과목/학년 목록 요청 ───
        socket.on("requestGrades", () => {
            socket.emit("availableGrades", (0, questions_1.getAvailableGrades)());
        });
        // ─── 매칭 찾기 ───
        socket.on("findMatch", (data) => {
            if (!state.userId || !state.nickname) {
                socket.emit("errorMessage", { message: "닉네임을 먼저 설정해주세요." });
                return;
            }
            const gradeKey = typeof data?.gradeKey === "string" ? data.gradeKey : "";
            if (!gradeKey) {
                socket.emit("errorMessage", { message: "과목을 선택해주세요." });
                return;
            }
            // 기존 방/큐 정리
            cancelMatchTimeout(state.userId);
            roomManager_1.roomManager.leaveQueue(state.userId);
            roomManager_1.roomManager.leaveRoom(state.userId);
            // 큐에 추가
            roomManager_1.roomManager.joinQueue(gradeKey, {
                socketId: socket.id, userId: state.userId, nickname: state.nickname, joinedAt: Date.now(),
            });
            // 즉시 매칭 시도
            const matched = roomManager_1.roomManager.tryMatch(gradeKey);
            if (matched) {
                for (const e of matched)
                    cancelMatchTimeout(e.userId);
                const room = roomManager_1.roomManager.createMatchRoom(gradeKey, matched, false);
                startMatchedGame(io, room.id);
                return;
            }
            // 대기
            socket.emit("matchmaking", { status: "searching", gradeKey });
            // 30초 타임아웃 → 봇으로 시작
            const timer = setTimeout(() => {
                matchTimeouts.delete(state.userId);
                if (!roomManager_1.roomManager.isInQueue(state.userId))
                    return;
                const entry = roomManager_1.roomManager.leaveQueue(state.userId);
                if (!entry)
                    return;
                const room = roomManager_1.roomManager.createMatchRoom(gradeKey, [entry], false);
                roomManager_1.roomManager.addBots(room.id, (0, settings_1.getFlowSettings)().botFillCount);
                startMatchedGame(io, room.id);
            }, (0, settings_1.getFlowSettings)().matchTimeoutMs);
            matchTimeouts.set(state.userId, timer);
        });
        // ─── 매칭 취소 ───
        socket.on("cancelMatch", () => {
            if (!state.userId)
                return;
            cancelMatchTimeout(state.userId);
            roomManager_1.roomManager.leaveQueue(state.userId);
            socket.emit("matchCancelled");
        });
        // ─── 혼자 풀기 ───
        socket.on("playSolo", (data) => {
            if (!state.userId || !state.nickname) {
                socket.emit("errorMessage", { message: "닉네임을 먼저 설정해주세요." });
                return;
            }
            const gradeKey = typeof data?.gradeKey === "string" ? data.gradeKey : "";
            if (!gradeKey)
                return;
            cancelMatchTimeout(state.userId);
            roomManager_1.roomManager.leaveQueue(state.userId);
            roomManager_1.roomManager.leaveRoom(state.userId);
            const entry = { socketId: socket.id, userId: state.userId, nickname: state.nickname, joinedAt: Date.now() };
            const room = roomManager_1.roomManager.createMatchRoom(gradeKey, [entry], true);
            socket.leave("lobby");
            socket.join(`room_${room.id}`);
            socket.emit("matchFound", roomManager_1.roomManager.getRoomInfoForClient(room));
            setTimeout(() => {
                const activeRoom = roomManager_1.roomManager.getRoom(room.id);
                if (!activeRoom || activeRoom.status !== "PLAYING" || activeRoom.questionStartedAt)
                    return;
                io.to(`room_${room.id}`).emit("gameStarted");
                startQuestionForRoom(io, room.id);
            }, (0, settings_1.getFlowSettings)().soloStartDelayMs);
        });
        // ─── 답변 제출 ───
        socket.on("submitAnswer", (data) => {
            const now = Date.now();
            if (now - state.lastSubmitAt < (0, settings_1.getFlowSettings)().submitRateLimitMs)
                return;
            state.lastSubmitAt = now;
            if (!state.userId)
                return;
            const room = roomManager_1.roomManager.getUserRoom(state.userId);
            if (!room)
                return;
            const idx = data?.selectedIndex;
            if (typeof idx !== "number" || !Number.isInteger(idx))
                return;
            const result = roomManager_1.roomManager.submitAnswer(room.id, state.userId, idx);
            if (!result.success)
                return;
            io.to(`room_${room.id}`).emit("answerSubmitted", { userId: state.userId });
            if (result.isCorrect) {
                const user = room.users.find((u) => u.userId === state.userId);
                io.to(`room_${room.id}`).emit("answerCorrect", {
                    userId: state.userId,
                    nickname: user?.nickname ?? state.nickname ?? "참가자",
                    isBot: user?.isBot ?? false,
                });
            }
            if (result.isCorrect && !roomManager_1.roomManager.checkAllAnswered(room.id)) {
                const pressure = roomManager_1.roomManager.applyTimePressure(room.id, state.userId, () => handleTimeUp(io, room.id));
                if (pressure)
                    io.to(`room_${room.id}`).emit("timePressure", pressure);
            }
            if (roomManager_1.roomManager.checkAllAnswered(room.id)) {
                roomManager_1.roomManager.clearQuestionTimer(room.id);
                roomManager_1.roomManager.clearBotTimers(room.id);
                processQuestionResult(io, room.id);
            }
        });
        // ─── 게임 나가기 ───
        socket.on("leaveGame", () => {
            if (!state.userId)
                return;
            const roomId = roomManager_1.roomManager.leaveRoom(state.userId);
            if (roomId)
                socket.leave(`room_${roomId}`);
            socket.join("lobby");
        });
        // ─── 재접속 ───
        socket.on("reconnectToRoom", (data) => {
            const userId = typeof data?.userId === "string" ? data.userId : "";
            if (!userId)
                return;
            const room = roomManager_1.roomManager.handleReconnect(userId, socket.id);
            if (!room) {
                socket.emit("reconnectFailed");
                return;
            }
            const user = room.users.find((u) => u.userId === userId);
            if (user) {
                state.userId = userId;
                state.nickname = user.nickname;
            }
            if (user)
                socket.emit("nicknameAccepted", { userId, nickname: user.nickname });
            socket.leave("lobby");
            socket.join(`room_${room.id}`);
            socket.emit("matchFound", roomManager_1.roomManager.getRoomInfoForClient(room));
            if (room.status === "PLAYING") {
                const cq = roomManager_1.roomManager.getCurrentQuestion(room.id);
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
                roomManager_1.roomManager.leaveQueue(state.userId);
                roomManager_1.roomManager.handleDisconnect(state.userId, (uid) => {
                    roomManager_1.roomManager.leaveRoom(uid);
                });
            }
            socketStates.delete(socket.id);
        });
    });
}
