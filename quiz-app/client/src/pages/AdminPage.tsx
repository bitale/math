import { useEffect, useState } from "react";
import styles from "./AdminPage.module.css";

interface BattleSettings {
  pressureFastRatio: number;
  pressureMidRatio: number;
  pressureSlowRatio: number;
  pressureFastPenalty: number;
  pressureMidPenalty: number;
  pressureSlowPenalty: number;
  difficulty2Bonus: number;
  difficulty3Bonus: number;
  minRemainingSeconds: number;
  maxHp: number;
  hitBaseDamage: number;
  missExtraDamage: number;
  firstStrikeDamage: number;
  comboDamageStep: number;
  comboDamageMaxSteps: number;
  firstCorrectBonus: number;
  comboBonusStep: number;
  comboBonusMaxSteps: number;
}

interface FlowSettings {
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

interface BotSettings {
  botMinAnswerDelayMs: number;
  botMaxDelayRatio: number;
  botMinAccuracy: number;
  botMaxAccuracy: number;
}

interface AdminSettings {
  battle: BattleSettings;
  flow: FlowSettings;
  bot: BotSettings;
}

type FieldMeta<T extends string> = Record<T, { label: string; hint: string; step: number; min: number; max: number }>;

const BATTLE_FIELD_LABELS: FieldMeta<keyof BattleSettings> = {
  pressureFastRatio: { label: "초고속 기준", hint: "문제 제한 시간 대비 비율", step: 0.01, min: 0.05, max: 0.95 },
  pressureMidRatio: { label: "고속 기준", hint: "문제 제한 시간 대비 비율", step: 0.01, min: 0.05, max: 0.95 },
  pressureSlowRatio: { label: "보통 기준", hint: "문제 제한 시간 대비 비율", step: 0.01, min: 0.05, max: 0.95 },
  pressureFastPenalty: { label: "초고속 차감", hint: "초 단위", step: 1, min: 0, max: 30 },
  pressureMidPenalty: { label: "고속 차감", hint: "초 단위", step: 1, min: 0, max: 30 },
  pressureSlowPenalty: { label: "보통 차감", hint: "초 단위", step: 1, min: 0, max: 30 },
  difficulty2Bonus: { label: "난도 2 보너스", hint: "추가 차감 초", step: 1, min: 0, max: 20 },
  difficulty3Bonus: { label: "고난도 보너스", hint: "추가 차감 초", step: 1, min: 0, max: 20 },
  minRemainingSeconds: { label: "최소 남은 시간", hint: "초 단위", step: 1, min: 1, max: 20 },
  maxHp: { label: "시작 HP", hint: "각 플레이어 시작 체력", step: 5, min: 20, max: 500 },
  hitBaseDamage: { label: "기본 피해", hint: "오답/미응답 시 피해", step: 1, min: 0, max: 100 },
  missExtraDamage: { label: "미응답 추가 피해", hint: "무응답 시 추가 피해", step: 1, min: 0, max: 100 },
  firstStrikeDamage: { label: "선취 추가 피해", hint: "선취 시 오답자 추가 피해", step: 1, min: 0, max: 100 },
  comboDamageStep: { label: "콤보 피해/단계", hint: "선취자 콤보당 추가 피해", step: 1, min: 0, max: 50 },
  comboDamageMaxSteps: { label: "콤보 피해 최대 단계", hint: "피해 증폭 상한", step: 1, min: 0, max: 20 },
  firstCorrectBonus: { label: "선취 추가 점수", hint: "가장 먼저 정답 보너스", step: 1, min: 0, max: 20 },
  comboBonusStep: { label: "콤보 점수 배수/단계", hint: "0.25 = +25%", step: 0.05, min: 0, max: 2 },
  comboBonusMaxSteps: { label: "콤보 점수 최대 단계", hint: "배수 증폭 상한", step: 1, min: 0, max: 20 },
};

const FLOW_FIELD_LABELS: FieldMeta<keyof FlowSettings> = {
  submitRateLimitMs: { label: "제출 제한", hint: "중복 제출 방지 ms", step: 50, min: 0, max: 3000 },
  matchTimeoutMs: { label: "봇 투입 대기", hint: "매칭 실패 후 봇 시작 ms", step: 1000, min: 3000, max: 120000 },
  matchStartDelayMs: { label: "대전 시작 지연", hint: "매칭 후 시작 ms", step: 100, min: 0, max: 10000 },
  soloStartDelayMs: { label: "혼자 시작 지연", hint: "혼자 풀기 시작 ms", step: 100, min: 0, max: 10000 },
  resultDelayMs: { label: "다음 문제 지연", hint: "결과 후 다음 문제 ms", step: 500, min: 500, max: 15000 },
  finalResultDelayMs: { label: "최종 결과 지연", hint: "마지막 결과 후 종료 ms", step: 500, min: 500, max: 15000 },
  disconnectGraceMs: { label: "재접속 유예", hint: "새로고침 대기 ms", step: 500, min: 1000, max: 60000 },
  botFillCount: { label: "봇 투입 수", hint: "매칭 타임아웃 후", step: 1, min: 0, max: 10 },
  maxPlayers: { label: "최대 인원", hint: "한 방 최대 참가자", step: 1, min: 2, max: 12 },
};

const BOT_FIELD_LABELS: FieldMeta<keyof BotSettings> = {
  botMinAnswerDelayMs: { label: "봇 최소 응답", hint: "답변 시작 최소 ms", step: 100, min: 0, max: 15000 },
  botMaxDelayRatio: { label: "봇 최대 지연 비율", hint: "문제 제한시간 대비", step: 0.01, min: 0.05, max: 1 },
  botMinAccuracy: { label: "봇 최소 정답률", hint: "0~1 비율", step: 0.01, min: 0, max: 1 },
  botMaxAccuracy: { label: "봇 최대 정답률", hint: "0~1 비율", step: 0.01, min: 0, max: 1 },
};

const BATTLE_FIELD_ORDER: Array<keyof BattleSettings> = [
  "pressureFastRatio",
  "pressureMidRatio",
  "pressureSlowRatio",
  "pressureFastPenalty",
  "pressureMidPenalty",
  "pressureSlowPenalty",
  "difficulty2Bonus",
  "difficulty3Bonus",
  "minRemainingSeconds",
];

const BATTLE_HP_FIELD_ORDER: Array<keyof BattleSettings> = [
  "maxHp",
  "hitBaseDamage",
  "missExtraDamage",
  "firstStrikeDamage",
  "comboDamageStep",
  "comboDamageMaxSteps",
  "firstCorrectBonus",
  "comboBonusStep",
  "comboBonusMaxSteps",
];

const FLOW_FIELD_ORDER: Array<keyof FlowSettings> = [
  "submitRateLimitMs",
  "matchTimeoutMs",
  "matchStartDelayMs",
  "soloStartDelayMs",
  "resultDelayMs",
  "finalResultDelayMs",
  "disconnectGraceMs",
  "botFillCount",
  "maxPlayers",
];

const BOT_FIELD_ORDER: Array<keyof BotSettings> = [
  "botMinAnswerDelayMs",
  "botMaxDelayRatio",
  "botMinAccuracy",
  "botMaxAccuracy",
];

function AdminPage() {
  const [settings, setSettings] = useState<AdminSettings | null>(null);
  const [status, setStatus] = useState("불러오는 중");

  const load = async () => {
    const res = await fetch("/api/admin/settings");
    const data = await res.json();
    setSettings(data);
    setStatus("현재 서버 수치");
  };

  useEffect(() => {
    load().catch(() => setStatus("설정을 불러오지 못했습니다"));
  }, []);

  const updateBattleField = (key: keyof BattleSettings, value: number) => {
    setSettings((prev) => prev ? { ...prev, battle: { ...prev.battle, [key]: value } } : prev);
  };

  const updateFlowField = (key: keyof FlowSettings, value: number) => {
    setSettings((prev) => prev ? { ...prev, flow: { ...prev.flow, [key]: value } } : prev);
  };

  const updateBotField = (key: keyof BotSettings, value: number) => {
    setSettings((prev) => prev ? { ...prev, bot: { ...prev.bot, [key]: value } } : prev);
  };

  const save = async () => {
    if (!settings) return;
    setStatus("저장 중");
    const res = await fetch("/api/admin/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    const data = await res.json();
    setSettings(data);
    setStatus("저장됨");
  };

  const reset = async () => {
    setStatus("초기화 중");
    const res = await fetch("/api/admin/settings/reset", { method: "POST" });
    const data = await res.json();
    setSettings(data);
    setStatus("기본값으로 초기화됨");
  };

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div>
          <p className={styles.eyebrow}>관리자</p>
          <h1>퀴즈 배틀 설정</h1>
        </div>
        <a className={styles.playLink} href="/">게임으로</a>
      </section>

      <section className={styles.summary}>
        <strong>{status}</strong>
        <span>저장하면 새로 시작되는 문제부터 바로 적용됩니다.</span>
      </section>

      {settings && (
        <section className={styles.panel}>
          <h2>시간 압박</h2>
          <div className={styles.grid}>
            {BATTLE_FIELD_ORDER.map((key) => {
              const meta = BATTLE_FIELD_LABELS[key];
              return (
                <label key={key} className={styles.field}>
                  <span>{meta.label}</span>
                  <small>{meta.hint}</small>
                  <input
                    type="number"
                    min={meta.min}
                    max={meta.max}
                    step={meta.step}
                    value={settings.battle[key]}
                    onChange={(event) => updateBattleField(key, Number(event.target.value))}
                  />
                </label>
              );
            })}
          </div>

          <div className={styles.preview}>
            <div>
              <span>난도 1 초고속</span>
              <strong>-{settings.battle.pressureFastPenalty}초</strong>
            </div>
            <div>
              <span>난도 2 초고속</span>
              <strong>-{settings.battle.pressureFastPenalty + settings.battle.difficulty2Bonus}초</strong>
            </div>
            <div>
              <span>고난도 초고속</span>
              <strong>-{settings.battle.pressureFastPenalty + settings.battle.difficulty3Bonus}초</strong>
            </div>
          </div>

          <h2>HP 배틀 / 콤보</h2>
          <div className={styles.grid}>
            {BATTLE_HP_FIELD_ORDER.map((key) => {
              const meta = BATTLE_FIELD_LABELS[key];
              return (
                <label key={key} className={styles.field}>
                  <span>{meta.label}</span>
                  <small>{meta.hint}</small>
                  <input
                    type="number"
                    min={meta.min}
                    max={meta.max}
                    step={meta.step}
                    value={settings.battle[key]}
                    onChange={(event) => updateBattleField(key, Number(event.target.value))}
                  />
                </label>
              );
            })}
          </div>

          <div className={styles.preview}>
            <div>
              <span>난도 1 정답</span>
              <strong>{1}점</strong>
            </div>
            <div>
              <span>콤보 최대 배수</span>
              <strong>x{(1 + settings.battle.comboBonusStep * settings.battle.comboBonusMaxSteps).toFixed(2)}</strong>
            </div>
            <div>
              <span>선취 최대 피해</span>
              <strong>{settings.battle.hitBaseDamage + settings.battle.missExtraDamage + settings.battle.firstStrikeDamage + settings.battle.comboDamageStep * settings.battle.comboDamageMaxSteps}</strong>
            </div>
          </div>

          <h2>게임 흐름</h2>
          <div className={styles.grid}>
            {FLOW_FIELD_ORDER.map((key) => {
              const meta = FLOW_FIELD_LABELS[key];
              return (
                <label key={key} className={styles.field}>
                  <span>{meta.label}</span>
                  <small>{meta.hint}</small>
                  <input
                    type="number"
                    min={meta.min}
                    max={meta.max}
                    step={meta.step}
                    value={settings.flow[key]}
                    onChange={(event) => updateFlowField(key, Number(event.target.value))}
                  />
                </label>
              );
            })}
          </div>

          <h2>봇</h2>
          <div className={styles.grid}>
            {BOT_FIELD_ORDER.map((key) => {
              const meta = BOT_FIELD_LABELS[key];
              return (
                <label key={key} className={styles.field}>
                  <span>{meta.label}</span>
                  <small>{meta.hint}</small>
                  <input
                    type="number"
                    min={meta.min}
                    max={meta.max}
                    step={meta.step}
                    value={settings.bot[key]}
                    onChange={(event) => updateBotField(key, Number(event.target.value))}
                  />
                </label>
              );
            })}
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={save}>저장</button>
            <button type="button" onClick={reset} className={styles.secondary}>기본값</button>
          </div>
        </section>
      )}
    </main>
  );
}

export default AdminPage;
