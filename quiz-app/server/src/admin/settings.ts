export interface BattleSettings {
  pressureFastRatio: number;
  pressureMidRatio: number;
  pressureSlowRatio: number;
  pressureFastPenalty: number;
  pressureMidPenalty: number;
  pressureSlowPenalty: number;
  difficulty2Bonus: number;
  difficulty3Bonus: number;
  minRemainingSeconds: number;
  // ── HP 배틀 / 콤보 / 선취 ──
  maxHp: number;               // 시작 체력
  hitBaseDamage: number;       // 오답/미응답 기본 피해
  missExtraDamage: number;     // 미응답 추가 피해
  firstStrikeDamage: number;   // 선취(가장 먼저 정답) 시 오답자에게 가하는 추가 피해
  comboDamageStep: number;     // 선취자 콤보 1단계당 추가 피해
  comboDamageMaxSteps: number; // 콤보 피해 증폭 최대 단계
  firstCorrectBonus: number;   // 선취 추가 점수
  comboBonusStep: number;      // 콤보 1단계당 점수 배수 증가 (0.25 = +25%)
  comboBonusMaxSteps: number;  // 콤보 점수 배수 최대 단계
  // ── 위기 반격(근성) ──
  desperationHpRatio: number;     // 이 HP 비율 이하에서 정답 시 위기 반격(추가 공격력)
  desperationDamageBonus: number; // 위기 반격 추가 공격력
  // ── 컴백 힐 ──
  comebackHealThreshold: number;  // 선공 팀의 총 HP 비율이 이 값 이하이면 힐 발동
  comebackHealAmount: number;     // 컴백 힐 회복량
}

export interface FlowSettings {
  submitRateLimitMs: number;
  matchTimeoutMs: number;
  matchStartDelayMs: number;
  soloStartDelayMs: number;
  resultDelayMs: number;
  finalResultDelayMs: number;
  disconnectGraceMs: number;
  botFillCount: number;
  maxPlayers: number;
}

export interface BotSettings {
  botMinAnswerDelayMs: number;
  botMaxDelayRatio: number;
  botMinAccuracy: number;
  botMaxAccuracy: number;
}

export interface AdminSettings {
  battle: BattleSettings;
  flow: FlowSettings;
  bot: BotSettings;
}

const DEFAULT_BATTLE_SETTINGS: BattleSettings = {
  pressureFastRatio: 0.25,
  pressureMidRatio: 0.45,
  pressureSlowRatio: 0.65,
  pressureFastPenalty: 5,
  pressureMidPenalty: 3,
  pressureSlowPenalty: 2,
  difficulty2Bonus: 1,
  difficulty3Bonus: 3,
  minRemainingSeconds: 3,
  maxHp: 100,
  hitBaseDamage: 16,
  missExtraDamage: 6,
  firstStrikeDamage: 8,
  comboDamageStep: 3,
  comboDamageMaxSteps: 5,
  firstCorrectBonus: 2,
  comboBonusStep: 0.25,
  comboBonusMaxSteps: 4,
  desperationHpRatio: 0.3,
  desperationDamageBonus: 6,
  comebackHealThreshold: 0.5,
  comebackHealAmount: 12,
};

const DEFAULT_FLOW_SETTINGS: FlowSettings = {
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

const DEFAULT_BOT_SETTINGS: BotSettings = {
  botMinAnswerDelayMs: 1500,
  botMaxDelayRatio: 0.7,
  botMinAccuracy: 0.45,
  botMaxAccuracy: 0.7,
};

let battleSettings: BattleSettings = { ...DEFAULT_BATTLE_SETTINGS };
let flowSettings: FlowSettings = { ...DEFAULT_FLOW_SETTINGS };
let botSettings: BotSettings = { ...DEFAULT_BOT_SETTINGS };

function clampNumber(value: unknown, min: number, max: number, fallback: number): number {
  const n = typeof value === "number" && Number.isFinite(value) ? value : fallback;
  return Math.min(max, Math.max(min, n));
}

export function getBattleSettings(): BattleSettings {
  return { ...battleSettings };
}

export function getFlowSettings(): FlowSettings {
  return { ...flowSettings };
}

export function getBotSettings(): BotSettings {
  return { ...botSettings };
}

export function getAdminSettings(): AdminSettings {
  return {
    battle: getBattleSettings(),
    flow: getFlowSettings(),
    bot: getBotSettings(),
  };
}

export function updateBattleSettings(patch: Partial<BattleSettings>): BattleSettings {
  const next: BattleSettings = {
    pressureFastRatio: clampNumber(patch.pressureFastRatio, 0.05, 0.95, battleSettings.pressureFastRatio),
    pressureMidRatio: clampNumber(patch.pressureMidRatio, 0.05, 0.95, battleSettings.pressureMidRatio),
    pressureSlowRatio: clampNumber(patch.pressureSlowRatio, 0.05, 0.95, battleSettings.pressureSlowRatio),
    pressureFastPenalty: clampNumber(patch.pressureFastPenalty, 0, 30, battleSettings.pressureFastPenalty),
    pressureMidPenalty: clampNumber(patch.pressureMidPenalty, 0, 30, battleSettings.pressureMidPenalty),
    pressureSlowPenalty: clampNumber(patch.pressureSlowPenalty, 0, 30, battleSettings.pressureSlowPenalty),
    difficulty2Bonus: clampNumber(patch.difficulty2Bonus, 0, 20, battleSettings.difficulty2Bonus),
    difficulty3Bonus: clampNumber(patch.difficulty3Bonus, 0, 20, battleSettings.difficulty3Bonus),
    minRemainingSeconds: clampNumber(patch.minRemainingSeconds, 1, 20, battleSettings.minRemainingSeconds),
    maxHp: clampNumber(patch.maxHp, 20, 500, battleSettings.maxHp),
    hitBaseDamage: clampNumber(patch.hitBaseDamage, 0, 100, battleSettings.hitBaseDamage),
    missExtraDamage: clampNumber(patch.missExtraDamage, 0, 100, battleSettings.missExtraDamage),
    firstStrikeDamage: clampNumber(patch.firstStrikeDamage, 0, 100, battleSettings.firstStrikeDamage),
    comboDamageStep: clampNumber(patch.comboDamageStep, 0, 50, battleSettings.comboDamageStep),
    comboDamageMaxSteps: clampNumber(patch.comboDamageMaxSteps, 0, 20, battleSettings.comboDamageMaxSteps),
    firstCorrectBonus: clampNumber(patch.firstCorrectBonus, 0, 20, battleSettings.firstCorrectBonus),
    comboBonusStep: clampNumber(patch.comboBonusStep, 0, 2, battleSettings.comboBonusStep),
    comboBonusMaxSteps: clampNumber(patch.comboBonusMaxSteps, 0, 20, battleSettings.comboBonusMaxSteps),
    desperationHpRatio: clampNumber(patch.desperationHpRatio, 0, 1, battleSettings.desperationHpRatio),
    desperationDamageBonus: clampNumber(patch.desperationDamageBonus, 0, 100, battleSettings.desperationDamageBonus),
    comebackHealThreshold: clampNumber(patch.comebackHealThreshold, 0, 1, battleSettings.comebackHealThreshold),
    comebackHealAmount: clampNumber(patch.comebackHealAmount, 0, 100, battleSettings.comebackHealAmount),
  };

  const ratios = [next.pressureFastRatio, next.pressureMidRatio, next.pressureSlowRatio].sort((a, b) => a - b);
  next.pressureFastRatio = ratios[0];
  next.pressureMidRatio = ratios[1];
  next.pressureSlowRatio = ratios[2];

  battleSettings = next;
  return getBattleSettings();
}

export function updateFlowSettings(patch: Partial<FlowSettings>): FlowSettings {
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

export function updateBotSettings(patch: Partial<BotSettings>): BotSettings {
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

export function updateAdminSettings(patch: Partial<AdminSettings>): AdminSettings {
  if (patch.battle) updateBattleSettings(patch.battle);
  if (patch.flow) updateFlowSettings(patch.flow);
  if (patch.bot) updateBotSettings(patch.bot);
  return getAdminSettings();
}

export function resetAdminSettings(): AdminSettings {
  battleSettings = { ...DEFAULT_BATTLE_SETTINGS };
  flowSettings = { ...DEFAULT_FLOW_SETTINGS };
  botSettings = { ...DEFAULT_BOT_SETTINGS };
  return getAdminSettings();
}
