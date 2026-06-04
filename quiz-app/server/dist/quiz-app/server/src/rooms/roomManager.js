"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomManager = exports.RoomManager = void 0;
const questions_1 = require("../quiz/questions");
const id_1 = require("../utils/id");
const settings_1 = require("../admin/settings");
/* ── 봇 이름 ── */
const BOT_NAMES = [
    "수학천재봇", "계산왕봇", "퀴즈마스터봇", "숫자요정봇",
    "공식박사봇", "연산달인봇", "두뇌왕봇", "풀이고수봇",
    "수학탐험가봇", "숫자마법사봇",
];
function pickBotName(existing) {
    const available = BOT_NAMES.filter((n) => !existing.includes(n));
    if (available.length === 0)
        return `봇${Math.floor(Math.random() * 999)}`;
    return available[Math.floor(Math.random() * available.length)];
}
function getQuestionPoints(question) {
    const difficulty = question.difficulty ?? 1;
    if (difficulty >= 3)
        return 3;
    if (difficulty >= 2)
        return 2;
    return 1;
}
function getAccuracy(correct, total) {
    return total > 0 ? Math.round((correct / total) * 100) : 0;
}
/* ── RoomManager ── */
class RoomManager {
    constructor() {
        this.rooms = new Map();
        this.userRoomMap = new Map();
        this.queues = new Map();
        this.userQueueMap = new Map();
        this.disconnectTimers = new Map();
    }
    /* ── 매칭 큐 ── */
    joinQueue(gradeKey, entry) {
        this.leaveQueue(entry.userId);
        let queue = this.queues.get(gradeKey);
        if (!queue) {
            queue = [];
            this.queues.set(gradeKey, queue);
        }
        queue.push(entry);
        this.userQueueMap.set(entry.userId, gradeKey);
    }
    leaveQueue(userId) {
        const gradeKey = this.userQueueMap.get(userId);
        if (!gradeKey)
            return null;
        const queue = this.queues.get(gradeKey);
        if (!queue) {
            this.userQueueMap.delete(userId);
            return null;
        }
        const idx = queue.findIndex((e) => e.userId === userId);
        if (idx === -1) {
            this.userQueueMap.delete(userId);
            return null;
        }
        const [entry] = queue.splice(idx, 1);
        this.userQueueMap.delete(userId);
        return entry;
    }
    isInQueue(userId) {
        return this.userQueueMap.has(userId);
    }
    /** 큐에서 2명 이상 모이면 매칭 성사. 매칭된 QueueEntry[] 반환, 아니면 null */
    tryMatch(gradeKey) {
        const queue = this.queues.get(gradeKey);
        if (!queue || queue.length < 2)
            return null;
        const matched = queue.splice(0, Math.min(queue.length, (0, settings_1.getFlowSettings)().maxPlayers));
        for (const e of matched)
            this.userQueueMap.delete(e.userId);
        return matched;
    }
    getQueuePosition(userId) {
        const gradeKey = this.userQueueMap.get(userId);
        if (!gradeKey)
            return -1;
        const queue = this.queues.get(gradeKey);
        if (!queue)
            return -1;
        return queue.findIndex((e) => e.userId === userId);
    }
    /* ── 방 생성 ── */
    createMatchRoom(gradeKey, entries, isSolo) {
        const settings = (0, questions_1.getGameSettings)(gradeKey);
        let roomId;
        do {
            roomId = (0, id_1.generateRoomId)();
        } while (this.rooms.has(roomId));
        const users = entries.map((e) => ({
            socketId: e.socketId,
            userId: e.userId,
            nickname: e.nickname,
            connected: true,
            isBot: false,
            joinedAt: e.joinedAt,
        }));
        const questions = (0, questions_1.getRandomQuestions)(settings.questionCount, gradeKey);
        const room = {
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
        };
        this.rooms.set(roomId, room);
        for (const u of users)
            this.userRoomMap.set(u.userId, roomId);
        // 점수 초기화
        for (const u of users) {
            room.scores.set(u.userId, {
                userId: u.userId, nickname: u.nickname, isBot: false,
                correct: 0, wrong: 0, missed: 0, score: 0,
            });
        }
        return room;
    }
    addBots(roomId, count) {
        const room = this.rooms.get(roomId);
        if (!room)
            return;
        const existingNames = room.users.map((u) => u.nickname);
        for (let i = 0; i < count; i++) {
            const name = pickBotName(existingNames);
            existingNames.push(name);
            const botUser = {
                socketId: "",
                userId: `bot_${(0, id_1.generateUserId)()}`,
                nickname: name,
                connected: true,
                isBot: true,
                joinedAt: Date.now(),
            };
            room.users.push(botUser);
            room.scores.set(botUser.userId, {
                userId: botUser.userId, nickname: botUser.nickname, isBot: true,
                correct: 0, wrong: 0, missed: 0, score: 0,
            });
        }
    }
    /* ── 게임 흐름 ── */
    getCurrentQuestion(roomId) {
        const room = this.rooms.get(roomId);
        if (!room || room.status !== "PLAYING")
            return null;
        const idx = room.currentQuestionIndex;
        if (idx < 0 || idx >= room.questions.length)
            return null;
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
    submitAnswer(roomId, userId, selectedIndex) {
        const room = this.rooms.get(roomId);
        if (!room)
            return { success: false, error: "방 없음" };
        if (room.status !== "PLAYING")
            return { success: false, error: "진행 중 아님" };
        const questionKey = `q_${room.currentQuestionIndex}`;
        const currentQ = room.questions[room.currentQuestionIndex];
        if (!currentQ)
            return { success: false, error: "문제 없음" };
        if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= currentQ.choices.length) {
            return { success: false, error: "보기 번호 오류" };
        }
        if (!room.answers.has(questionKey))
            room.answers.set(questionKey, []);
        const answers = room.answers.get(questionKey);
        if (answers.find((a) => a.userId === userId)) {
            return { success: false, alreadyAnswered: true };
        }
        const isCorrect = currentQ.choices[selectedIndex] === currentQ.answer;
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
            elapsedMs: room.questionStartedAt ? Math.max(0, answeredAt - room.questionStartedAt) : undefined,
        };
    }
    checkAllAnswered(roomId) {
        const room = this.rooms.get(roomId);
        if (!room)
            return false;
        const questionKey = `q_${room.currentQuestionIndex}`;
        const answers = room.answers.get(questionKey) || [];
        const activePlayers = room.users.filter((u) => u.connected && room.scores.has(u.userId));
        return answers.length >= activePlayers.length;
    }
    /* ── 타이머 ── */
    startQuestionTimer(roomId, onTimeUp) {
        const room = this.rooms.get(roomId);
        if (!room)
            return;
        this.clearQuestionTimer(roomId);
        room.questionStartedAt = Date.now();
        room.questionEndsAt = room.questionStartedAt + room.timeLimitSeconds * 1000;
        room.questionTimer = setTimeout(() => {
            room.questionTimer = null;
            room.questionEndsAt = null;
            onTimeUp();
        }, room.timeLimitSeconds * 1000);
    }
    clearQuestionTimer(roomId) {
        const room = this.rooms.get(roomId);
        if (!room)
            return;
        if (room.questionTimer) {
            clearTimeout(room.questionTimer);
            room.questionTimer = null;
        }
        room.questionEndsAt = null;
    }
    applyTimePressure(roomId, attackerUserId, onTimeUp) {
        const room = this.rooms.get(roomId);
        if (!room || room.status !== "PLAYING" || room.isSolo)
            return null;
        const attacker = room.users.find((u) => u.userId === attackerUserId);
        if (!attacker)
            return null;
        const questionKey = `q_${room.currentQuestionIndex}`;
        const answers = room.answers.get(questionKey) || [];
        const attackerAnswer = answers.find((a) => a.userId === attackerUserId);
        if (!attackerAnswer?.isCorrect || !attackerAnswer.answeredAt || !room.questionStartedAt || !room.questionEndsAt)
            return null;
        const activePlayers = room.users.filter((u) => u.connected && room.scores.has(u.userId));
        const hasUnansweredOpponent = activePlayers.some((u) => u.userId !== attackerUserId && !answers.some((a) => a.userId === u.userId));
        if (!hasUnansweredOpponent)
            return null;
        const elapsedRatio = (attackerAnswer.answeredAt - room.questionStartedAt) / (room.timeLimitSeconds * 1000);
        const settings = (0, settings_1.getBattleSettings)();
        let penaltySeconds = 0;
        if (elapsedRatio <= settings.pressureFastRatio)
            penaltySeconds = settings.pressureFastPenalty;
        else if (elapsedRatio <= settings.pressureMidRatio)
            penaltySeconds = settings.pressureMidPenalty;
        else if (elapsedRatio <= settings.pressureSlowRatio)
            penaltySeconds = settings.pressureSlowPenalty;
        const currentQ = room.questions[room.currentQuestionIndex];
        const difficulty = currentQ?.difficulty ?? 1;
        if (penaltySeconds > 0) {
            if (difficulty >= 3)
                penaltySeconds += settings.difficulty3Bonus;
            else if (difficulty >= 2)
                penaltySeconds += settings.difficulty2Bonus;
        }
        if (penaltySeconds <= 0)
            return null;
        const now = Date.now();
        const currentRemainingMs = Math.max(0, room.questionEndsAt - now);
        const newRemainingMs = Math.max(settings.minRemainingSeconds * 1000, currentRemainingMs - penaltySeconds * 1000);
        const actualPenaltyMs = currentRemainingMs - newRemainingMs;
        if (actualPenaltyMs < 1000)
            return null;
        if (room.questionTimer)
            clearTimeout(room.questionTimer);
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
    clearBotTimers(roomId) {
        const room = this.rooms.get(roomId);
        if (!room)
            return;
        for (const t of room.botTimers)
            clearTimeout(t);
        room.botTimers = [];
    }
    /* ── 봇 답변 스케줄링 (socket 계층에서 호출) ── */
    scheduleBotAnswers(roomId, onBotAnswered, onAllAnswered) {
        const room = this.rooms.get(roomId);
        if (!room)
            return;
        const bots = room.users.filter((u) => u.isBot);
        const botSettings = (0, settings_1.getBotSettings)();
        const maxDelay = room.timeLimitSeconds * botSettings.botMaxDelayRatio * 1000;
        for (const bot of bots) {
            const delay = botSettings.botMinAnswerDelayMs + Math.random() * maxDelay;
            const timer = setTimeout(() => {
                if (room.status !== "PLAYING")
                    return;
                const q = room.questions[room.currentQuestionIndex];
                if (!q)
                    return;
                const correctIdx = q.choices.indexOf(q.answer);
                const accuracy = botSettings.botMinAccuracy + Math.random() * (botSettings.botMaxAccuracy - botSettings.botMinAccuracy);
                let sel;
                if (Math.random() < accuracy && correctIdx >= 0) {
                    sel = correctIdx;
                }
                else {
                    const wrong = q.choices.map((_, i) => i).filter((i) => i !== correctIdx);
                    sel = wrong[Math.floor(Math.random() * wrong.length)] ?? 0;
                }
                const result = this.submitAnswer(roomId, bot.userId, sel);
                if (result.success) {
                    onBotAnswered(bot.userId, result.isCorrect ?? false);
                    if (this.checkAllAnswered(roomId))
                        onAllAnswered();
                }
            }, delay);
            room.botTimers.push(timer);
        }
    }
    /* ── 결과 ── */
    getQuestionResult(roomId) {
        const room = this.rooms.get(roomId);
        if (!room)
            return null;
        const idx = room.currentQuestionIndex;
        const q = room.questions[idx];
        if (!q)
            return null;
        const questionKey = `q_${idx}`;
        const answers = room.answers.get(questionKey) || [];
        const correctIndex = q.choices.findIndex((c) => c === q.answer);
        const points = getQuestionPoints(q);
        const results = [];
        for (const [userId, score] of room.scores.entries()) {
            const user = room.users.find((u) => u.userId === userId);
            if (!user)
                continue;
            const answer = answers.find((a) => a.userId === userId);
            if (answer) {
                if (answer.isCorrect) {
                    score.correct++;
                    score.score += points;
                }
                else {
                    score.wrong++;
                }
                results.push({ userId, nickname: user.nickname, isBot: user.isBot, selectedIndex: answer.selectedIndex, isCorrect: answer.isCorrect });
            }
            else {
                score.missed++;
                results.push({ userId, nickname: user.nickname, isBot: user.isBot, selectedIndex: null, isCorrect: false });
            }
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
            isLastQuestion: idx >= room.questions.length - 1,
        };
    }
    advanceToNextQuestion(roomId) {
        const room = this.rooms.get(roomId);
        if (!room)
            return false;
        room.currentQuestionIndex++;
        if (room.currentQuestionIndex >= room.questions.length) {
            room.status = "RESULT";
            return false;
        }
        return true;
    }
    buildQuestionReviews(room, userId) {
        return room.questions.map((q, index) => {
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
    buildLearningAnalysis(reviews) {
        const totalQuestions = reviews.length;
        const correctCount = reviews.filter((r) => r.isCorrect).length;
        const missedCount = reviews.filter((r) => r.selectedIndex === null).length;
        const wrongCount = totalQuestions - correctCount - missedCount;
        const byCategoryMap = new Map();
        const byDifficultyMap = new Map();
        for (const review of reviews) {
            const category = review.category || "기타";
            const categoryStats = byCategoryMap.get(category) ?? { total: 0, correct: 0, missed: 0 };
            categoryStats.total++;
            if (review.isCorrect)
                categoryStats.correct++;
            if (review.selectedIndex === null)
                categoryStats.missed++;
            byCategoryMap.set(category, categoryStats);
            const difficultyStats = byDifficultyMap.get(review.difficulty) ?? { total: 0, correct: 0, missed: 0 };
            difficultyStats.total++;
            if (review.isCorrect)
                difficultyStats.correct++;
            if (review.selectedIndex === null)
                difficultyStats.missed++;
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
        const unique = (items) => Array.from(new Set(items.filter(Boolean)));
        const nonCorrect = reviews.filter((r) => !r.isCorrect);
        const strengths = unique(byCategory
            .filter((row) => row.total > 0 && row.accuracy >= 80)
            .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total)
            .map((row) => row.category)).slice(0, 3);
        const needsPractice = unique([
            ...byCategory.filter((row) => row.accuracy < 80).map((row) => row.category),
            ...nonCorrect.map((r) => r.lessonTitle || r.category),
        ]).slice(0, 3);
        const recommendedReview = unique(nonCorrect.map((r) => r.wrongAnalysis || r.learningObjective || r.explanation)).slice(0, 3);
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
    getGameResult(roomId) {
        const room = this.rooms.get(roomId);
        if (!room)
            return null;
        const scores = Array.from(room.scores.values()).sort((a, b) => b.score - a.score);
        const rankings = [];
        let rank = 1;
        for (let i = 0; i < scores.length; i++) {
            if (i > 0 && scores[i].score < scores[i - 1].score)
                rank = i + 1;
            rankings.push({ ...scores[i], rank });
        }
        const reviewsByUser = {};
        const analysisByUser = {};
        for (const user of room.users) {
            if (!room.scores.has(user.userId))
                continue;
            const reviews = this.buildQuestionReviews(room, user.userId);
            reviewsByUser[user.userId] = reviews;
            analysisByUser[user.userId] = this.buildLearningAnalysis(reviews);
        }
        return { rankings, gradeKey: room.gradeKey, reviewsByUser, analysisByUser };
    }
    /* ── 방 삭제 / 나가기 ── */
    deleteRoom(roomId) {
        const room = this.rooms.get(roomId);
        if (!room)
            return;
        this.clearQuestionTimer(roomId);
        this.clearBotTimers(roomId);
        for (const u of room.users) {
            this.userRoomMap.delete(u.userId);
            const dt = this.disconnectTimers.get(u.userId);
            if (dt) {
                clearTimeout(dt);
                this.disconnectTimers.delete(u.userId);
            }
        }
        this.rooms.delete(roomId);
    }
    leaveRoom(userId) {
        const roomId = this.userRoomMap.get(userId);
        if (!roomId)
            return null;
        const room = this.rooms.get(roomId);
        if (!room) {
            this.userRoomMap.delete(userId);
            return null;
        }
        room.users = room.users.filter((u) => u.userId !== userId);
        this.userRoomMap.delete(userId);
        const dt = this.disconnectTimers.get(userId);
        if (dt) {
            clearTimeout(dt);
            this.disconnectTimers.delete(userId);
        }
        // 인간 플레이어가 없으면 방 삭제
        const humans = room.users.filter((u) => !u.isBot && u.connected);
        if (humans.length === 0)
            this.deleteRoom(roomId);
        return roomId;
    }
    handleDisconnect(userId, callback) {
        const roomId = this.userRoomMap.get(userId);
        if (!roomId)
            return;
        const room = this.rooms.get(roomId);
        if (!room)
            return;
        const user = room.users.find((u) => u.userId === userId);
        if (!user)
            return;
        user.connected = false;
        const timer = setTimeout(() => {
            this.disconnectTimers.delete(userId);
            callback(userId);
        }, (0, settings_1.getFlowSettings)().disconnectGraceMs);
        this.disconnectTimers.set(userId, timer);
    }
    handleReconnect(userId, newSocketId) {
        const dt = this.disconnectTimers.get(userId);
        if (dt) {
            clearTimeout(dt);
            this.disconnectTimers.delete(userId);
        }
        const roomId = this.userRoomMap.get(userId);
        if (!roomId)
            return null;
        const room = this.rooms.get(roomId);
        if (!room)
            return null;
        const user = room.users.find((u) => u.userId === userId);
        if (!user)
            return null;
        user.socketId = newSocketId;
        user.connected = true;
        return room;
    }
    /* ── 헬퍼 ── */
    getRoom(roomId) { return this.rooms.get(roomId); }
    getUserRoom(userId) {
        const rid = this.userRoomMap.get(userId);
        return rid ? this.rooms.get(rid) : undefined;
    }
    getRoomInfoForClient(room) {
        return {
            id: room.id,
            gradeKey: room.gradeKey,
            users: room.users.map((u) => ({
                userId: u.userId,
                nickname: u.nickname,
                isBot: u.isBot,
                connected: u.connected,
            })),
            questionCount: room.questionCount,
            timeLimitSeconds: room.timeLimitSeconds,
            isSolo: room.isSolo,
        };
    }
}
exports.RoomManager = RoomManager;
exports.roomManager = new RoomManager();
