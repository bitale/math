"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBattleSettings = getBattleSettings;
exports.getFlowSettings = getFlowSettings;
exports.getBotSettings = getBotSettings;
exports.getAdminSettings = getAdminSettings;
exports.updateBattleSettings = updateBattleSettings;
exports.updateFlowSettings = updateFlowSettings;
exports.updateBotSettings = updateBotSettings;
exports.updateAdminSettings = updateAdminSettings;
exports.resetAdminSettings = resetAdminSettings;
const DEFAULT_BATTLE_SETTINGS = {
    pressureFastRatio: 0.25,
    pressureMidRatio: 0.45,
    pressureSlowRatio: 0.65,
    pressureFastPenalty: 5,
    pressureMidPenalty: 3,
    pressureSlowPenalty: 2,
    difficulty2Bonus: 1,
    difficulty3Bonus: 3,
    minRemainingSeconds: 3,
};
const DEFAULT_FLOW_SETTINGS = {
    submitRateLimitMs: 300,
    matchTimeoutMs: 30000,
    matchStartDelayMs: 1500,
    soloStartDelayMs: 500,
    resultDelayMs: 3000,
    finalResultDelayMs: 3000,
    disconnectGraceMs: 5000,
    botFillCount: 3,
    maxPlayers: 6,
};
const DEFAULT_BOT_SETTINGS = {
    botMinAnswerDelayMs: 1500,
    botMaxDelayRatio: 0.7,
    botMinAccuracy: 0.45,
    botMaxAccuracy: 0.7,
};
let battleSettings = { ...DEFAULT_BATTLE_SETTINGS };
let flowSettings = { ...DEFAULT_FLOW_SETTINGS };
let botSettings = { ...DEFAULT_BOT_SETTINGS };
function clampNumber(value, min, max, fallback) {
    const n = typeof value === "number" && Number.isFinite(value) ? value : fallback;
    return Math.min(max, Math.max(min, n));
}
function getBattleSettings() {
    return { ...battleSettings };
}
function getFlowSettings() {
    return { ...flowSettings };
}
function getBotSettings() {
    return { ...botSettings };
}
function getAdminSettings() {
    return {
        battle: getBattleSettings(),
        flow: getFlowSettings(),
        bot: getBotSettings(),
    };
}
function updateBattleSettings(patch) {
    const next = {
        pressureFastRatio: clampNumber(patch.pressureFastRatio, 0.05, 0.95, battleSettings.pressureFastRatio),
        pressureMidRatio: clampNumber(patch.pressureMidRatio, 0.05, 0.95, battleSettings.pressureMidRatio),
        pressureSlowRatio: clampNumber(patch.pressureSlowRatio, 0.05, 0.95, battleSettings.pressureSlowRatio),
        pressureFastPenalty: clampNumber(patch.pressureFastPenalty, 0, 30, battleSettings.pressureFastPenalty),
        pressureMidPenalty: clampNumber(patch.pressureMidPenalty, 0, 30, battleSettings.pressureMidPenalty),
        pressureSlowPenalty: clampNumber(patch.pressureSlowPenalty, 0, 30, battleSettings.pressureSlowPenalty),
        difficulty2Bonus: clampNumber(patch.difficulty2Bonus, 0, 20, battleSettings.difficulty2Bonus),
        difficulty3Bonus: clampNumber(patch.difficulty3Bonus, 0, 20, battleSettings.difficulty3Bonus),
        minRemainingSeconds: clampNumber(patch.minRemainingSeconds, 1, 20, battleSettings.minRemainingSeconds),
    };
    const ratios = [next.pressureFastRatio, next.pressureMidRatio, next.pressureSlowRatio].sort((a, b) => a - b);
    next.pressureFastRatio = ratios[0];
    next.pressureMidRatio = ratios[1];
    next.pressureSlowRatio = ratios[2];
    battleSettings = next;
    return getBattleSettings();
}
function updateFlowSettings(patch) {
    flowSettings = {
        submitRateLimitMs: clampNumber(patch.submitRateLimitMs, 0, 3000, flowSettings.submitRateLimitMs),
        matchTimeoutMs: clampNumber(patch.matchTimeoutMs, 3000, 120000, flowSettings.matchTimeoutMs),
        matchStartDelayMs: clampNumber(patch.matchStartDelayMs, 0, 10000, flowSettings.matchStartDelayMs),
        soloStartDelayMs: clampNumber(patch.soloStartDelayMs, 0, 10000, flowSettings.soloStartDelayMs),
        resultDelayMs: clampNumber(patch.resultDelayMs, 500, 15000, flowSettings.resultDelayMs),
        finalResultDelayMs: clampNumber(patch.finalResultDelayMs, 500, 15000, flowSettings.finalResultDelayMs),
        disconnectGraceMs: clampNumber(patch.disconnectGraceMs, 1000, 60000, flowSettings.disconnectGraceMs),
        botFillCount: clampNumber(patch.botFillCount, 0, 10, flowSettings.botFillCount),
        maxPlayers: clampNumber(patch.maxPlayers, 2, 12, flowSettings.maxPlayers),
    };
    return getFlowSettings();
}
function updateBotSettings(patch) {
    const minAccuracy = clampNumber(patch.botMinAccuracy, 0, 1, botSettings.botMinAccuracy);
    const maxAccuracy = clampNumber(patch.botMaxAccuracy, 0, 1, botSettings.botMaxAccuracy);
    botSettings = {
        botMinAnswerDelayMs: clampNumber(patch.botMinAnswerDelayMs, 0, 15000, botSettings.botMinAnswerDelayMs),
        botMaxDelayRatio: clampNumber(patch.botMaxDelayRatio, 0.05, 1, botSettings.botMaxDelayRatio),
        botMinAccuracy: Math.min(minAccuracy, maxAccuracy),
        botMaxAccuracy: Math.max(minAccuracy, maxAccuracy),
    };
    return getBotSettings();
}
function updateAdminSettings(patch) {
    if (patch.battle)
        updateBattleSettings(patch.battle);
    if (patch.flow)
        updateFlowSettings(patch.flow);
    if (patch.bot)
        updateBotSettings(patch.bot);
    return getAdminSettings();
}
function resetAdminSettings() {
    battleSettings = { ...DEFAULT_BATTLE_SETTINGS };
    flowSettings = { ...DEFAULT_FLOW_SETTINGS };
    botSettings = { ...DEFAULT_BOT_SETTINGS };
    return getAdminSettings();
}
