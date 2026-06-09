import {
  Room, User, QueueEntry, PlayerAnswer, PlayerScore, ItemType, ItemInventory,
  QuestionResultData, GameResultData, QuestionReviewData, LearningAnalysisData, TeamSummary,
} from "./roomTypes";
import { ClientQuestion } from "../quiz/quizTypes";
import { getRandomQuestions, getGameSettings } from "../quiz/questions";
import { generateRoomId, generateUserId } from "../utils/id";
import { getBattleSettings, getBotSettings, getFlowSettings, getItemSettings } from "../admin/settings";

function startingInventory(): ItemInventory {
  const n = Math.max(0, getItemSettings().startingItemCount);
  return { heal: n, curse: n, destroy: n };
}

/* ── 봇 이름 ── */

const BOT_NAMES = [
  "수학천재봇", "계산왕봇", "퀴즈마스터봇", "숫자요정봇",
  "공식박사봇", "연산달인봇", "두뇌왕봇", "풀이고수봇",
  "수학탐험가봇", "숫자마법사봇",
];

function pickBotName(existing: string[]): string {
  const available = BOT_NAMES.filter((n) => !existing.includes(n));
  if (available.length === 0) return `봇${Math.floor(Math.random() * 999)}`;
  return available[Math.floor(Math.random() * available.length)];
}

/* ── 매칭 상수 ── */

export interface TimePressureData {
  attackerUserId: string;
  attackerNickname: string;
  penaltySeconds: number;
  remainingTime: number;
}

function getQuestionPoints(question: { difficulty?: number }): number {
  const difficulty = question.difficulty ?? 1;
  if (difficulty >= 3) return 3;
  if (difficulty >= 2) return 2;
  return 1;
}

function getAccuracy(correct: number, total: number): number {
  return total > 0 ? Math.round((correct / total) * 100) : 0;
}

/* ── RoomManager ── */

export class RoomManager {
  private rooms = new Map<string, Room>();
  private userRoomMap = new Map<string, string>();
  private queues = new Map<string, QueueEntry[]>();
  private userQueueMap = new Map<string, string>();
  private disconnectTimers = new Map<string, NodeJS.Timeout>();

  /* ── 매칭 큐 ── */

  joinQueue(gradeKey: string, entry: QueueEntry): void {
    this.leaveQueue(entry.userId);
    let queue = this.queues.get(gradeKey);
    if (!queue) { queue = []; this.queues.set(gradeKey, queue); }
    queue.push(entry);
    this.userQueueMap.set(entry.userId, gradeKey);
  }

  leaveQueue(userId: string): QueueEntry | null {
    const gradeKey = this.userQueueMap.get(userId);
    if (!gradeKey) return null;
    const queue = this.queues.get(gradeKey);
    if (!queue) { this.userQueueMap.delete(userId); return null; }
    const idx = queue.findIndex((e) => e.userId === userId);
    if (idx === -1) { this.userQueueMap.delete(userId); return null; }
    const [entry] = queue.splice(idx, 1);
    this.userQueueMap.delete(userId);
    return entry;
  }

  isInQueue(userId: string): boolean {
    return this.userQueueMap.has(userId);
  }

  /** 큐에서 2명 이상 모이면 매칭 성사. 매칭된 QueueEntry[] 반환, 아니면 null */
  /** 큐에 목표 인원(matchTargetSize)이 다 차면 그만큼만 즉시 매칭(전원 사람, n:n). 아니면 null */
  tryMatch(gradeKey: string): QueueEntry[] | null {
    const queue = this.queues.get(gradeKey);
    const target = getFlowSettings().matchTargetSize;
    if (!queue || queue.length < target) return null;
    return this.takeFromQueue(gradeKey, target);
  }

  /** 큐 앞에서 최대 max명 인출(대기 중 사람들을 묶어 봇으로 채우기 위함) */
  takeFromQueue(gradeKey: string, max: number): QueueEntry[] {
    const queue = this.queues.get(gradeKey);
    if (!queue || queue.length === 0 || max <= 0) return [];
    const taken = queue.splice(0, Math.min(queue.length, max));
    for (const e of taken) this.userQueueMap.delete(e.userId);
    return taken;
  }

  /** 방 인원을 target까지 봇으로 채운다(부족분만). target은 짝수라 채운 뒤 항상 n:n */
  fillBotsToTarget(roomId: string, target: number): void {
    const room = this.rooms.get(roomId);
    if (!room) return;
    const needed = Math.max(0, target - room.users.length);
    if (needed > 0) this.addBots(roomId, needed);
  }

  getQueuePosition(userId: string): number {
    const gradeKey = this.userQueueMap.get(userId);
    if (!gradeKey) return -1;
    const queue = this.queues.get(gradeKey);
    if (!queue) return -1;
    return queue.findIndex((e) => e.userId === userId);
  }

  /* ── 방 생성 ── */

  createMatchRoom(gradeKey: string, entries: QueueEntry[], isSolo: boolean): Room {
    const settings = getGameSettings(gradeKey);
    let roomId: string;
    do { roomId = generateRoomId(); } while (this.rooms.has(roomId));

    const users: User[] = entries.map((e) => ({
      socketId: e.socketId,
      userId: e.userId,
      nickname: e.nickname,
      connected: true,
      isBot: false,
      joinedAt: e.joinedAt,
      teamId: 0,
    }));

    const questions = getRandomQuestions(settings.questionCount, gradeKey);

    const room: Room = {
      id: roomId,
      gradeKey,
      users,
      status: "PLAYING",
      questionCount: questions.length,
      timeLimitSeconds: settings.timeLimitSeconds,
      currentQuestionIndex: 0,
      questions,
      answers: new Map(),
      scores: new Map(),
      createdAt: Date.now(),
      questionStartedAt: null,
      questionEndsAt: null,
      questionTimer: null,
      botTimers: [],
      isSolo,
      pendingItems: [],
    };

    this.rooms.set(roomId, room);
    for (const u of users) this.userRoomMap.set(u.userId, roomId);

    // 점수 초기화
    const maxHp = getBattleSettings().maxHp;
    for (const u of users) {
      room.scores.set(u.userId, {
        userId: u.userId, nickname: u.nickname, isBot: false, teamId: u.teamId,
        correct: 0, wrong: 0, missed: 0, score: 0,
        hp: maxHp, maxHp, combo: 0, maxCombo: 0, downed: false, downedAtQuestion: null,
        items: isSolo ? { heal: 0, curse: 0, destroy: 0 } : startingInventory(),
        silencedForQuestion: null,
      });
    }

    if (!isSolo) this.assignTeams(room);

    return room;
  }

  addBots(roomId: string, count: number): void {
    const room = this.rooms.get(roomId);
    if (!room) return;
    const existingNames = room.users.map((u) => u.nickname);
    const maxHp = getBattleSettings().maxHp;
    for (let i = 0; i < count; i++) {
      const name = pickBotName(existingNames);
      existingNames.push(name);
      const botUser: User = {
        socketId: "",
        userId: `bot_${generateUserId()}`,
        nickname: name,
        connected: true,
        isBot: true,
        joinedAt: Date.now(),
        teamId: 0,
      };
      room.users.push(botUser);
      room.scores.set(botUser.userId, {
        userId: botUser.userId, nickname: botUser.nickname, isBot: true, teamId: 0,
        correct: 0, wrong: 0, missed: 0, score: 0,
        hp: maxHp, maxHp, combo: 0, maxCombo: 0, downed: false, downedAtQuestion: null,
        items: room.isSolo ? { heal: 0, curse: 0, destroy: 0 } : startingInventory(),
        silencedForQuestion: null,
      });
    }
    if (!room.isSolo) this.assignTeams(room);
  }

  /** 방 인원을 무작위로 섞어 정확히 2팀으로 균등 분할 */
  private assignTeams(room: Room): void {
    const ordered = [...room.users];
    for (let i = ordered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ordered[i], ordered[j]] = [ordered[j], ordered[i]];
    }
    const half = Math.ceil(ordered.length / 2);
    ordered.forEach((u, idx) => {
      const teamId = idx < half ? 0 : 1;
      u.teamId = teamId;
      const sc = room.scores.get(u.userId);
      if (sc) sc.teamId = teamId;
    });
  }

  /* ── 아이템 ── */

  /** 플레이어가 아이템 사용(문제 중). 인벤토리 차감 후 정산 대기열에 등록. 성공 시 갱신된 인벤토리 반환 */
  useItem(roomId: string, userId: string, type: ItemType): ItemInventory | null {
    const room = this.rooms.get(roomId);
    if (!room || room.status !== "PLAYING" || room.isSolo) return null;
    const score = room.scores.get(userId);
    if (!score || score.downed) return null;
    if ((score.items[type] ?? 0) <= 0) return null;
    score.items[type] -= 1;
    room.pendingItems.push({ userId, type });
    return { ...score.items };
  }

  /** 봇들이 문제 시작 시 확률적으로 아이템 사용(팀이 다치면 힐 우선, 아니면 무작위) */
  maybeBotsUseItems(roomId: string): void {
    const room = this.rooms.get(roomId);
    if (!room || room.isSolo) return;
    const s = getItemSettings();
    if (s.startingItemCount <= 0 || s.botItemUseChance <= 0) return;
    for (const u of room.users) {
      if (!u.isBot) continue;
      const sc = room.scores.get(u.userId);
      if (!sc || sc.downed) continue;
      if (Math.random() > s.botItemUseChance) continue;
      const avail = (["heal", "curse", "destroy"] as ItemType[]).filter((t) => sc.items[t] > 0);
      if (avail.length === 0) continue;
      const mates = Array.from(room.scores.values()).filter((x) => x.teamId === sc.teamId && !x.downed);
      const hurt = mates.some((x) => x.maxHp > 0 && x.hp < x.maxHp * 0.55);
      const type = (hurt && sc.items.heal > 0) ? "heal" : avail[Math.floor(Math.random() * avail.length)];
      sc.items[type] -= 1;
      room.pendingItems.push({ userId: u.userId, type });
    }
  }

  /* ── 게임 흐름 ── */

  getCurrentQuestion(roomId: string): (ClientQuestion & { timeLimit: number; points: number }) | null {
    const room = this.rooms.get(roomId);
    if (!room || room.status !== "PLAYING") return null;
    const idx = room.currentQuestionIndex;
    if (idx < 0 || idx >= room.questions.length) return null;
    const q = room.questions[idx];
    const diff = q.difficulty ?? 1;
    return {
      id: q.id,
      question: q.question,
      choices: q.choices,
      questionNumber: idx + 1,
      totalQuestions: room.questionCount,
      timeLimit: room.timeLimitSeconds,
      difficulty: diff,
      points: getQuestionPoints(q),
    };
  }

  submitAnswer(
    roomId: string, userId: string, selectedIndex: number,
  ): { success: boolean; error?: string; alreadyAnswered?: boolean; isCorrect?: boolean; elapsedMs?: number; isFirstCorrect?: boolean; comboNext?: number } {
    const room = this.rooms.get(roomId);
    if (!room) return { success: false, error: "방 없음" };
    if (room.status !== "PLAYING") return { success: false, error: "진행 중 아님" };

    const myScore = room.scores.get(userId);
    if (myScore?.downed) return { success: false, error: "전투 불능" };

    const questionKey = `q_${room.currentQuestionIndex}`;
    const currentQ = room.questions[room.currentQuestionIndex];
    if (!currentQ) return { success: false, error: "문제 없음" };
    if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= currentQ.choices.length) {
      return { success: false, error: "보기 번호 오류" };
    }

    if (!room.answers.has(questionKey)) room.answers.set(questionKey, []);
    const answers = room.answers.get(questionKey)!;

    if (answers.find((a) => a.userId === userId)) {
      return { success: false, alreadyAnswered: true };
    }

    const isCorrect = currentQ.choices[selectedIndex] === currentQ.answer;
    // 전역 선공(선취): 이 문제에서 아무도 아직 정답을 못 냈고 이번이 정답이면 선공 — 단 한 명만
    const isFirstCorrect = isCorrect && !answers.some((a) => a.isCorrect);
    // 정산 전이므로 콤보는 (현재 콤보 + 1)이 예정값
    const comboNext = isCorrect ? (room.scores.get(userId)?.combo ?? 0) + 1 : 0;
    const answeredAt = Date.now();
    answers.push({
      userId,
      questionId: currentQ.id,
      selectedIndex,
      answeredAt,
      isCorrect,
    });

    return {
      success: true,
      isCorrect,
      isFirstCorrect,
      comboNext,
      elapsedMs: room.questionStartedAt ? Math.max(0, answeredAt - room.questionStartedAt) : undefined,
    };
  }

  checkAllAnswered(roomId: string): boolean {
    const room = this.rooms.get(roomId);
    if (!room) return false;
    const questionKey = `q_${room.currentQuestionIndex}`;
    const answers = room.answers.get(questionKey) || [];
    // 쓰러진(KO) 플레이어는 응답할 수 없으므로 집계에서 제외
    const activePlayers = room.users.filter(
      (u) => u.connected && room.scores.has(u.userId) && !room.scores.get(u.userId)!.downed,
    );
    return answers.length >= activePlayers.length;
  }

  /* ── 타이머 ── */

  startQuestionTimer(roomId: string, onTimeUp: () => void): void {
    const room = this.rooms.get(roomId);
    if (!room) return;
    this.clearQuestionTimer(roomId);
    room.questionStartedAt = Date.now();
    room.questionEndsAt = room.questionStartedAt + room.timeLimitSeconds * 1000;
    room.questionTimer = setTimeout(() => {
      room.questionTimer = null;
      room.questionEndsAt = null;
      onTimeUp();
    }, room.timeLimitSeconds * 1000);
  }

  clearQuestionTimer(roomId: string): void {
    const room = this.rooms.get(roomId);
    if (!room) return;
    if (room.questionTimer) { clearTimeout(room.questionTimer); room.questionTimer = null; }
    room.questionEndsAt = null;
  }

  applyTimePressure(roomId: string, attackerUserId: string, onTimeUp: () => void): TimePressureData | null {
    const room = this.rooms.get(roomId);
    if (!room || room.status !== "PLAYING" || room.isSolo) return null;

    const attacker = room.users.find((u) => u.userId === attackerUserId);
    if (!attacker) return null;

    const questionKey = `q_${room.currentQuestionIndex}`;
    const answers = room.answers.get(questionKey) || [];
    const attackerAnswer = answers.find((a) => a.userId === attackerUserId);
    if (!attackerAnswer?.isCorrect || !attackerAnswer.answeredAt || !room.questionStartedAt || !room.questionEndsAt) return null;

    const activePlayers = room.users.filter(
      (u) => u.connected && room.scores.has(u.userId) && !room.scores.get(u.userId)!.downed,
    );
    const hasUnansweredOpponent = activePlayers.some(
      (u) => u.userId !== attackerUserId && !answers.some((a) => a.userId === u.userId),
    );
    if (!hasUnansweredOpponent) return null;

    const elapsedRatio = (attackerAnswer.answeredAt - room.questionStartedAt) / (room.timeLimitSeconds * 1000);
    const settings = getBattleSettings();
    let penaltySeconds = 0;
    if (elapsedRatio <= settings.pressureFastRatio) penaltySeconds = settings.pressureFastPenalty;
    else if (elapsedRatio <= settings.pressureMidRatio) penaltySeconds = settings.pressureMidPenalty;
    else if (elapsedRatio <= settings.pressureSlowRatio) penaltySeconds = settings.pressureSlowPenalty;

    const currentQ = room.questions[room.currentQuestionIndex];
    const difficulty = currentQ?.difficulty ?? 1;
    if (penaltySeconds > 0) {
      if (difficulty >= 3) penaltySeconds += settings.difficulty3Bonus;
      else if (difficulty >= 2) penaltySeconds += settings.difficulty2Bonus;
    }
    if (penaltySeconds <= 0) return null;

    const now = Date.now();
    const currentRemainingMs = Math.max(0, room.questionEndsAt - now);
    const newRemainingMs = Math.max(
      settings.minRemainingSeconds * 1000,
      currentRemainingMs - penaltySeconds * 1000,
    );

    const actualPenaltyMs = currentRemainingMs - newRemainingMs;
    if (actualPenaltyMs < 1000) return null;

    if (room.questionTimer) clearTimeout(room.questionTimer);
    room.questionEndsAt = now + newRemainingMs;
    room.questionTimer = setTimeout(() => {
      room.questionTimer = null;
      room.questionEndsAt = null;
      onTimeUp();
    }, newRemainingMs);

    return {
      attackerUserId,
      attackerNickname: attacker.nickname,
      penaltySeconds: Math.floor(actualPenaltyMs / 1000),
      remainingTime: Math.ceil(newRemainingMs / 1000),
    };
  }

  clearBotTimers(roomId: string): void {
    const room = this.rooms.get(roomId);
    if (!room) return;
    for (const t of room.botTimers) clearTimeout(t);
    room.botTimers = [];
  }

  /* ── 봇 답변 스케줄링 (socket 계층에서 호출) ── */

  scheduleBotAnswers(
    roomId: string,
    onBotAnswered: (userId: string, isCorrect: boolean, isFirstCorrect: boolean, comboNext: number) => void,
    onAllAnswered: () => void,
  ): void {
    const room = this.rooms.get(roomId);
    if (!room) return;
    // 쓰러진 봇은 응답하지 않음
    const bots = room.users.filter((u) => u.isBot && !room.scores.get(u.userId)?.downed);
    const botSettings = getBotSettings();
    const maxDelay = room.timeLimitSeconds * botSettings.botMaxDelayRatio * 1000;

    for (const bot of bots) {
      const delay = botSettings.botMinAnswerDelayMs + Math.random() * maxDelay;
      const timer = setTimeout(() => {
        if (room.status !== "PLAYING") return;
        const q = room.questions[room.currentQuestionIndex];
        if (!q) return;

        const correctIdx = q.choices.indexOf(q.answer);
        const accuracy = botSettings.botMinAccuracy + Math.random() * (botSettings.botMaxAccuracy - botSettings.botMinAccuracy);
        let sel: number;
        if (Math.random() < accuracy && correctIdx >= 0) {
          sel = correctIdx;
        } else {
          const wrong = q.choices.map((_, i) => i).filter((i) => i !== correctIdx);
          sel = wrong[Math.floor(Math.random() * wrong.length)] ?? 0;
        }

        const result = this.submitAnswer(roomId, bot.userId, sel);
        if (result.success) {
          onBotAnswered(bot.userId, result.isCorrect ?? false, result.isFirstCorrect ?? false, result.comboNext ?? 0);
          if (this.checkAllAnswered(roomId)) onAllAnswered();
        }
      }, delay);
      room.botTimers.push(timer);
    }
  }

  /* ── 결과 ── */

  getQuestionResult(roomId: string): QuestionResultData | null {
    const room = this.rooms.get(roomId);
    if (!room) return null;
    const idx = room.currentQuestionIndex;
    const q = room.questions[idx];
    if (!q) return null;

    const questionKey = `q_${idx}`;
    const answers = room.answers.get(questionKey) || [];
    const correctIndex = q.choices.findIndex((c) => c === q.answer);
    const points = getQuestionPoints(q);
    const battle = getBattleSettings();
    const nameOf = (uid: string) => room.users.find((u) => u.userId === uid)?.nickname ?? "참가자";

    const allScores = Array.from(room.scores.values());
    const teamIds = Array.from(new Set(allScores.map((s) => s.teamId))).sort((a, b) => a - b);
    const isTeamBattle = !room.isSolo && teamIds.length >= 2;

    // ── 전역 선공(선취): 이 문제에서 가장 먼저 정답을 낸 단 한 명 ──
    const firstStrikeUserId = answers
      .filter((x) => x.isCorrect && x.answeredAt != null)
      .sort((x, y) => x.answeredAt! - y.answeredAt!)[0]?.userId ?? null;
    const firstStrikeTeam = firstStrikeUserId != null
      ? (room.scores.get(firstStrikeUserId)?.teamId ?? null)
      : null;

    // ── 1차 패스: 콤보 + 점수 + 통계 ──
    const perUser = new Map<string, { scoreDelta: number; isFirst: boolean }>();
    for (const [userId, score] of room.scores.entries()) {
      // 이미 쓰러진 플레이어는 응답 불가 → 통계/콤보 변동 없음(정답률에서 제외)
      if (score.downed) { perUser.set(userId, { scoreDelta: 0, isFirst: false }); continue; }
      const answer = answers.find((a) => a.userId === userId);
      if (answer?.isCorrect) {
        score.combo += 1;
        if (score.combo > score.maxCombo) score.maxCombo = score.combo;
        const comboSteps = Math.min(Math.max(0, score.combo - 1), battle.comboBonusMaxSteps);
        const comboMult = 1 + battle.comboBonusStep * comboSteps;
        const isFirst = userId === firstStrikeUserId; // 전역 선공 1명만
        const gained = Math.round(points * comboMult) + (isFirst ? battle.firstCorrectBonus : 0);
        score.score += gained;
        score.correct += 1;
        perUser.set(userId, { scoreDelta: gained, isFirst });
      } else {
        score.combo = 0;
        if (!answer) score.missed += 1; else score.wrong += 1;
        perUser.set(userId, { scoreDelta: 0, isFirst: false });
      }
    }

    // ── 2차 패스: 팀 공격 정산 ──
    const koUserIds: string[] = [];
    const damageByUser = new Map<string, number>();
    const teamAttacks: QuestionResultData["battle"]["teamAttacks"] = [];
    const perfectDefenseTeams: number[] = [];

    const answeredCorrect = (uid: string) => answers.find((a) => a.userId === uid)?.isCorrect ?? false;

    if (isTeamBattle) {
      // 각 팀의 공격력 산출 (쓰러지지 않은 정답자만)
      for (const teamId of teamIds) {
        // 저주받은(이 문제 공격 봉인) 사람은 공격에서 제외
        const attackers = allScores.filter((s) => s.teamId === teamId && !s.downed && answeredCorrect(s.userId) && s.silencedForQuestion !== idx);
        let attack = 0;
        const attackerUserIds: string[] = [];
        const desperationUserIds: string[] = [];
        for (const atk of attackers) {
          const steps = Math.min(Math.max(0, atk.combo - 1), battle.comboDamageMaxSteps);
          let contribution = battle.hitBaseDamage + battle.comboDamageStep * steps;
          // 위기 반격(근성): 저체력 정답자는 추가 공격력
          if (battle.desperationDamageBonus > 0 && atk.maxHp > 0 && atk.hp / atk.maxHp <= battle.desperationHpRatio) {
            contribution += battle.desperationDamageBonus;
            desperationUserIds.push(atk.userId);
          }
          attack += contribution;
          attackerUserIds.push(atk.userId);
        }
        // 전역 선공: 선공을 가진 팀만 선취 추가타
        let firstCorrectNickname: string | null = null;
        let combo = 0;
        if (firstStrikeTeam === teamId && firstStrikeUserId && room.scores.get(firstStrikeUserId)?.silencedForQuestion !== idx) {
          attack += battle.firstStrikeDamage;
          firstCorrectNickname = nameOf(firstStrikeUserId);
          combo = room.scores.get(firstStrikeUserId)?.combo ?? 0;
        }
        teamAttacks.push({ teamId, attack, firstCorrectNickname, combo, attackerUserIds, desperationUserIds, targets: [] });
      }

      // 각 팀의 공격을 적팀 노출자(쓰러지지 않았고 오답/미응답) 중 HP 최저에게 집중타
      for (const ta of teamAttacks) {
        if (ta.attack <= 0) continue;
        const enemyTeam = teamIds.find((t) => t !== ta.teamId);
        if (enemyTeam === undefined) continue;
        const exposed = allScores
          .filter((s) => s.teamId === enemyTeam && !s.downed && !answeredCorrect(s.userId))
          .sort((a, b) => a.hp - b.hp);
        if (exposed.length === 0) {
          // 적팀 완전 방어 — 살아있는 수비수가 모두 정답
          const aliveDefenders = allScores.filter((s) => s.teamId === enemyTeam && !s.downed);
          if (aliveDefenders.length > 0 && !perfectDefenseTeams.includes(enemyTeam)) {
            perfectDefenseTeams.push(enemyTeam);
          }
          continue;
        }
        const target = exposed[0];
        const missed = !answers.find((a) => a.userId === target.userId);
        const dmg = ta.attack + (missed ? battle.missExtraDamage : 0);
        const newHp = Math.max(0, target.hp - dmg);
        const actual = target.hp - newHp;
        target.hp = newHp;
        damageByUser.set(target.userId, (damageByUser.get(target.userId) ?? 0) + actual);
        ta.targets.push({ userId: target.userId, nickname: nameOf(target.userId), damage: actual });
        if (newHp === 0 && !target.downed) { target.downed = true; target.downedAtQuestion = idx; koUserIds.push(target.userId); }
      }
    } else {
      // 솔로(연습): 적팀이 없으므로 오답/미응답 시 본인 피해
      for (const [userId, score] of room.scores.entries()) {
        if (score.downed || answeredCorrect(userId)) continue;
        const missed = !answers.find((a) => a.userId === userId);
        const dmg = battle.hitBaseDamage + (missed ? battle.missExtraDamage : 0);
        const newHp = Math.max(0, score.hp - dmg);
        const actual = score.hp - newHp;
        score.hp = newHp;
        damageByUser.set(userId, actual);
        if (newHp === 0 && !score.downed) { score.downed = true; score.downedAtQuestion = idx; koUserIds.push(userId); }
      }
    }

    // 이 문제에 봉인됐던 저주는 소비됨 → 해제
    for (const s of allScores) if (s.silencedForQuestion === idx) s.silencedForQuestion = null;

    // ── 아이템 정산: 문제 중 사용한 힐/저주/파괴를 자동 타겟으로 해결 ──
    const heals: QuestionResultData["battle"]["heals"] = [];      // 컴백 힐(기존 FX)
    const healByUser = new Map<string, number>();                  // 힐 합계(컴백+아이템) → results[].healed
    const itemUses: QuestionResultData["battle"]["itemUses"] = [];
    if (isTeamBattle && room.pendingItems.length > 0) {
      const itemCfg = getItemSettings();
      const lowestEnemy = (teamId: number) =>
        allScores.filter((x) => x.teamId !== teamId && !x.downed).sort((a, b) => a.hp - b.hp)[0];
      for (const use of room.pendingItems) {
        const actor = room.scores.get(use.userId);
        if (!actor) continue;
        const actorName = nameOf(actor.userId);
        if (use.type === "heal") {
          if (itemCfg.itemHealAmount <= 0) continue;
          const mates = allScores.filter((x) => x.teamId === actor.teamId && !x.downed);
          const target = mates.filter((x) => x.hp < x.maxHp).sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp))[0]
            ?? mates.find((x) => x.userId === actor.userId) ?? mates[0];
          if (!target) continue;
          const before = target.hp;
          target.hp = Math.min(target.maxHp, target.hp + itemCfg.itemHealAmount);
          const amount = target.hp - before;
          if (amount > 0) healByUser.set(target.userId, (healByUser.get(target.userId) ?? 0) + amount);
          itemUses.push({ userId: actor.userId, nickname: actorName, type: "heal", targetUserId: target.userId, targetNickname: nameOf(target.userId), amount });
        } else if (use.type === "destroy") {
          if (itemCfg.itemDestroyDamage <= 0) continue;
          const target = lowestEnemy(actor.teamId);
          if (!target) continue;
          const newHp = Math.max(0, target.hp - itemCfg.itemDestroyDamage);
          const amount = target.hp - newHp;
          target.hp = newHp;
          if (amount > 0) damageByUser.set(target.userId, (damageByUser.get(target.userId) ?? 0) + amount);
          if (newHp === 0 && !target.downed) {
            target.downed = true; target.downedAtQuestion = idx;
            if (!koUserIds.includes(target.userId)) koUserIds.push(target.userId);
          }
          itemUses.push({ userId: actor.userId, nickname: actorName, type: "destroy", targetUserId: target.userId, targetNickname: nameOf(target.userId), amount });
        } else { // curse → 적 최저 HP의 다음 문제 공격 봉인
          const target = lowestEnemy(actor.teamId);
          if (!target) continue;
          target.silencedForQuestion = idx + 1;
          itemUses.push({ userId: actor.userId, nickname: actorName, type: "curse", targetUserId: target.userId, targetNickname: nameOf(target.userId), amount: 0 });
        }
      }
    }

    // ── TKO 판정: 한 팀이 전멸했는지 (아이템 파괴로 인한 KO 포함) ──
    let tkoWinnerTeam: number | null = null;
    if (isTeamBattle) {
      const wiped = teamIds.filter((t) => {
        const members = allScores.filter((s) => s.teamId === t);
        return members.length > 0 && members.every((s) => s.downed);
      });
      if (wiped.length === 1) tkoWinnerTeam = teamIds.find((t) => t !== wiped[0]) ?? null;
    }

    // ── 컴백 힐: 선공 팀의 총 HP가 약하면 가장 다친 생존 팀원을 소량 회복 ──
    if (isTeamBattle && firstStrikeTeam !== null && battle.comebackHealAmount > 0) {
      const members = allScores.filter((s) => s.teamId === firstStrikeTeam);
      const totalHp = members.reduce((sum, s) => sum + s.hp, 0);
      const totalMax = members.reduce((sum, s) => sum + s.maxHp, 0);
      const ratio = totalMax > 0 ? totalHp / totalMax : 1;
      if (ratio <= battle.comebackHealThreshold) {
        const wounded = members
          .filter((s) => !s.downed && s.hp < s.maxHp)
          .sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp))[0];
        if (wounded) {
          const before = wounded.hp;
          wounded.hp = Math.min(wounded.maxHp, wounded.hp + battle.comebackHealAmount);
          const amount = wounded.hp - before;
          if (amount > 0) {
            heals.push({ userId: wounded.userId, nickname: nameOf(wounded.userId), amount });
            healByUser.set(wounded.userId, (healByUser.get(wounded.userId) ?? 0) + amount);
          }
        }
      }
    }

    // ── 결과 배열 ──
    const results: QuestionResultData["results"] = [];
    for (const [userId, score] of room.scores.entries()) {
      const user = room.users.find((u) => u.userId === userId);
      if (!user) continue;
      const answer = answers.find((a) => a.userId === userId);
      const meta = perUser.get(userId) ?? { scoreDelta: 0, isFirst: false };
      results.push({
        userId,
        nickname: user.nickname,
        isBot: user.isBot,
        teamId: score.teamId,
        selectedIndex: answer ? answer.selectedIndex : null,
        isCorrect: answer?.isCorrect ?? false,
        scoreDelta: meta.scoreDelta,
        isFirstCorrect: meta.isFirst,
        damageTaken: damageByUser.get(userId) ?? 0,
        healed: healByUser.get(userId) ?? 0,
        hp: score.hp,
        maxHp: score.maxHp,
        combo: score.combo,
        downed: score.downed,
        justDowned: koUserIds.includes(userId),
      });
    }

    const scores = Array.from(room.scores.values()).sort((a, b) => b.score - a.score);
    return {
      questionId: q.id,
      questionNumber: idx + 1,
      question: q.question,
      choices: q.choices,
      category: q.category,
      lessonTitle: q.lessonTitle,
      difficulty: q.difficulty ?? 1,
      points,
      correctAnswer: q.answer,
      correctIndex,
      explanation: q.explanation,
      hints: q.hints,
      wrongAnalysis: q.wrongAnalysis,
      learningObjective: q.learningObjective,
      commonMistakes: q.commonMistakes,
      nextConnection: q.nextConnection,
      results,
      scores,
      battle: { koUserIds, teamAttacks, heals, perfectDefenseTeams, tkoWinnerTeam, itemUses },
      isLastQuestion: idx >= room.questions.length - 1,
    };
  }

  advanceToNextQuestion(roomId: string): boolean {
    const room = this.rooms.get(roomId);
    if (!room) return false;
    room.pendingItems = []; // 다음 문제용으로 비움(이전 문제 정산에서 이미 소비)
    room.currentQuestionIndex++;
    if (room.currentQuestionIndex >= room.questions.length) {
      room.status = "RESULT";
      return false;
    }
    return true;
  }

  /** TKO 등으로 게임을 즉시 종료 */
  endGame(roomId: string): void {
    const room = this.rooms.get(roomId);
    if (!room) return;
    room.status = "RESULT";
    this.clearQuestionTimer(roomId);
    this.clearBotTimers(roomId);
  }

  private buildQuestionReviews(room: Room, userId: string, count: number): QuestionReviewData[] {
    return room.questions.slice(0, Math.max(0, count)).map((q, index) => {
      const questionKey = `q_${index}`;
      const answer = (room.answers.get(questionKey) || []).find((a) => a.userId === userId);
      return {
        questionNumber: index + 1,
        questionId: q.id,
        question: q.question,
        choices: q.choices,
        selectedIndex: answer?.selectedIndex ?? null,
        correctIndex: q.choices.findIndex((c) => c === q.answer),
        correctAnswer: q.answer,
        isCorrect: answer?.isCorrect ?? false,
        explanation: q.explanation,
        hints: q.hints,
        wrongAnalysis: q.wrongAnalysis,
        learningObjective: q.learningObjective,
        category: q.category,
        lessonTitle: q.lessonTitle,
        difficulty: q.difficulty ?? 1,
        points: getQuestionPoints(q),
        commonMistakes: q.commonMistakes,
        nextConnection: q.nextConnection,
      };
    });
  }

  private buildLearningAnalysis(reviews: QuestionReviewData[]): LearningAnalysisData {
    const totalQuestions = reviews.length;
    const correctCount = reviews.filter((r) => r.isCorrect).length;
    const missedCount = reviews.filter((r) => r.selectedIndex === null).length;
    const wrongCount = totalQuestions - correctCount - missedCount;

    const byCategoryMap = new Map<string, { total: number; correct: number; missed: number }>();
    const byDifficultyMap = new Map<number, { total: number; correct: number; missed: number }>();

    for (const review of reviews) {
      const category = review.category || "기타";
      const categoryStats = byCategoryMap.get(category) ?? { total: 0, correct: 0, missed: 0 };
      categoryStats.total++;
      if (review.isCorrect) categoryStats.correct++;
      if (review.selectedIndex === null) categoryStats.missed++;
      byCategoryMap.set(category, categoryStats);

      const difficultyStats = byDifficultyMap.get(review.difficulty) ?? { total: 0, correct: 0, missed: 0 };
      difficultyStats.total++;
      if (review.isCorrect) difficultyStats.correct++;
      if (review.selectedIndex === null) difficultyStats.missed++;
      byDifficultyMap.set(review.difficulty, difficultyStats);
    }

    const byCategory = Array.from(byCategoryMap.entries()).map(([category, stats]) => ({
      category,
      total: stats.total,
      correct: stats.correct,
      missed: stats.missed,
      accuracy: getAccuracy(stats.correct, stats.total),
    })).sort((a, b) => a.accuracy - b.accuracy || b.total - a.total);

    const byDifficulty = Array.from(byDifficultyMap.entries()).map(([difficulty, stats]) => ({
      difficulty,
      total: stats.total,
      correct: stats.correct,
      missed: stats.missed,
      accuracy: getAccuracy(stats.correct, stats.total),
    })).sort((a, b) => a.difficulty - b.difficulty);

    const unique = (items: string[]) => Array.from(new Set(items.filter(Boolean)));
    const nonCorrect = reviews.filter((r) => !r.isCorrect);
    const strengths = unique(
      byCategory
        .filter((row) => row.total > 0 && row.accuracy >= 80)
        .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total)
        .map((row) => row.category),
    ).slice(0, 3);

    const needsPractice = unique([
      ...byCategory.filter((row) => row.accuracy < 80).map((row) => row.category),
      ...nonCorrect.map((r) => r.lessonTitle || r.category),
    ]).slice(0, 3);

    const recommendedReview = unique(
      nonCorrect.map((r) => r.wrongAnalysis || r.learningObjective || r.explanation),
    ).slice(0, 3);

    return {
      totalQuestions,
      correctCount,
      wrongCount,
      missedCount,
      accuracy: getAccuracy(correctCount, totalQuestions),
      strengths,
      needsPractice,
      recommendedReview,
      byCategory,
      byDifficulty,
    };
  }

  getGameResult(roomId: string): GameResultData | null {
    const room = this.rooms.get(roomId);
    if (!room) return null;
    // 생존자 우선 → 점수 → HP → 정답 수
    const scores = Array.from(room.scores.values()).sort((a, b) => {
      if (a.downed !== b.downed) return a.downed ? 1 : -1;
      if (b.score !== a.score) return b.score - a.score;
      if (b.hp !== a.hp) return b.hp - a.hp;
      return b.correct - a.correct;
    });
    const rankings: Array<PlayerScore & { rank: number }> = [];
    let rank = 1;
    for (let i = 0; i < scores.length; i++) {
      const prev = scores[i - 1];
      if (i > 0 && (scores[i].downed !== prev.downed || scores[i].score !== prev.score)) rank = i + 1;
      rankings.push({ ...scores[i], rank });
    }

    // 실제로 진행된 문제 수 (TKO로 조기 종료 시 currentQuestionIndex가 마지막 문제를 가리킴)
    const playedCount = Math.min(room.currentQuestionIndex + 1, room.questions.length);

    const reviewsByUser: Record<string, QuestionReviewData[]> = {};
    const analysisByUser: Record<string, LearningAnalysisData> = {};
    for (const user of room.users) {
      const score = room.scores.get(user.userId);
      if (!score) continue;
      // 응답 가능했던 문제까지만 집계: 진행된 문제 ∩ (KO 전까지). KO된 문제는 본인이 응답을 시도했으므로 포함.
      const limit = score.downedAtQuestion !== null
        ? Math.min(playedCount, score.downedAtQuestion + 1)
        : playedCount;
      const reviews = this.buildQuestionReviews(room, user.userId, limit);
      reviewsByUser[user.userId] = reviews;
      analysisByUser[user.userId] = this.buildLearningAnalysis(reviews);
    }

    // ── 팀 집계 ──
    const allScores = Array.from(room.scores.values());
    const teamIds = Array.from(new Set(allScores.map((s) => s.teamId))).sort((a, b) => a - b);
    const isTeamBattle = !room.isSolo && teamIds.length >= 2;

    const teams: TeamSummary[] = teamIds.map((teamId) => {
      const members = allScores.filter((s) => s.teamId === teamId);
      return {
        teamId,
        aliveCount: members.filter((s) => !s.downed).length,
        totalHp: members.reduce((sum, s) => sum + s.hp, 0),
        totalScore: members.reduce((sum, s) => sum + s.score, 0),
        members: members
          .sort((a, b) => b.score - a.score)
          .map((s) => ({
            userId: s.userId, nickname: s.nickname, isBot: s.isBot,
            score: s.score, hp: s.hp, maxHp: s.maxHp, downed: s.downed, maxCombo: s.maxCombo,
          })),
      };
    });

    // 승패: 생존 인원 수 → 총 HP → 총점
    let winnerTeam: number | null = null;
    let tko = false;
    if (isTeamBattle && teams.length >= 2) {
      tko = teams.some((t) => t.aliveCount === 0);
      const sorted = [...teams].sort(
        (a, b) => b.aliveCount - a.aliveCount || b.totalHp - a.totalHp || b.totalScore - a.totalScore,
      );
      const [first, second] = sorted;
      const tie = first.aliveCount === second.aliveCount
        && first.totalHp === second.totalHp
        && first.totalScore === second.totalScore;
      winnerTeam = tie ? null : first.teamId;
    }

    return {
      rankings,
      gradeKey: room.gradeKey,
      teamBattle: { isTeamBattle, winnerTeam, tko, teams },
      reviewsByUser,
      analysisByUser,
    };
  }

  /* ── 방 삭제 / 나가기 ── */

  deleteRoom(roomId: string): void {
    const room = this.rooms.get(roomId);
    if (!room) return;
    this.clearQuestionTimer(roomId);
    this.clearBotTimers(roomId);
    for (const u of room.users) {
      this.userRoomMap.delete(u.userId);
      const dt = this.disconnectTimers.get(u.userId);
      if (dt) { clearTimeout(dt); this.disconnectTimers.delete(u.userId); }
    }
    this.rooms.delete(roomId);
  }

  leaveRoom(userId: string): string | null {
    const roomId = this.userRoomMap.get(userId);
    if (!roomId) return null;
    const room = this.rooms.get(roomId);
    if (!room) { this.userRoomMap.delete(userId); return null; }

    room.users = room.users.filter((u) => u.userId !== userId);
    this.userRoomMap.delete(userId);

    const dt = this.disconnectTimers.get(userId);
    if (dt) { clearTimeout(dt); this.disconnectTimers.delete(userId); }

    // 인간 플레이어가 없으면 방 삭제
    const humans = room.users.filter((u) => !u.isBot && u.connected);
    if (humans.length === 0) this.deleteRoom(roomId);

    return roomId;
  }

  handleDisconnect(userId: string, callback: (uid: string) => void): void {
    const roomId = this.userRoomMap.get(userId);
    if (!roomId) return;
    const room = this.rooms.get(roomId);
    if (!room) return;
    const user = room.users.find((u) => u.userId === userId);
    if (!user) return;
    user.connected = false;

    const timer = setTimeout(() => {
      this.disconnectTimers.delete(userId);
      callback(userId);
    }, getFlowSettings().disconnectGraceMs);
    this.disconnectTimers.set(userId, timer);
  }

  handleReconnect(userId: string, newSocketId: string): Room | null {
    const dt = this.disconnectTimers.get(userId);
    if (dt) { clearTimeout(dt); this.disconnectTimers.delete(userId); }
    const roomId = this.userRoomMap.get(userId);
    if (!roomId) return null;
    const room = this.rooms.get(roomId);
    if (!room) return null;
    const user = room.users.find((u) => u.userId === userId);
    if (!user) return null;
    user.socketId = newSocketId;
    user.connected = true;
    return room;
  }

  /* ── 헬퍼 ── */

  getRoom(roomId: string): Room | undefined { return this.rooms.get(roomId); }
  getUserRoom(userId: string): Room | undefined {
    const rid = this.userRoomMap.get(userId);
    return rid ? this.rooms.get(rid) : undefined;
  }

  getRoomInfoForClient(room: Room) {
    return {
      id: room.id,
      gradeKey: room.gradeKey,
      users: room.users.map((u) => ({
        userId: u.userId,
        nickname: u.nickname,
        isBot: u.isBot,
        connected: u.connected,
        teamId: u.teamId,
        items: room.scores.get(u.userId)?.items ?? { heal: 0, curse: 0, destroy: 0 },
      })),
      questionCount: room.questionCount,
      timeLimitSeconds: room.timeLimitSeconds,
      isSolo: room.isSolo,
    };
  }
}

export const roomManager = new RoomManager();
