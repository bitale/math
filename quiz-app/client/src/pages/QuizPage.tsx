import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import katex from "katex";
import socket from "../socket";
import type { ClientQuestion, QuestionResultData, MatchInfo, TimePressureData, AnswerCorrectData, PlayerScoreData } from "../types";
import BattleFX, { type BattleFXHandle } from "../components/BattleFX";
import { sfx } from "../lib/sfx";
import styles from "./QuizPage.module.css";

interface QuizPageProps {
  question: ClientQuestion | null;
  questionResult: QuestionResultData | null;
  timeLeft: number;
  userId: string;
  connected: boolean;
  answeredUsers: Set<string>;
  matchInfo: MatchInfo | null;
  timePressure: TimePressureData | null;
  answerCorrect: AnswerCorrectData | null;
  battleScores: PlayerScoreData[];
}

interface BattleStat {
  hp: number;
  maxHp: number;
  combo: number;
  downed: boolean;
}

const DEFAULT_STAT: BattleStat = { hp: 100, maxHp: 100, combo: 0, downed: false };

const TEAM_LABELS = ["볼트", "노바"];
const teamLabel = (t: number): string => TEAM_LABELS[t] ?? `${t + 1}팀`;

function hpPct(s: BattleStat): number {
  return s.maxHp > 0 ? Math.max(0, Math.min(100, Math.round((s.hp / s.maxHp) * 100))) : 0;
}

/* 위험(저체력 생존) 여부 — 위험 표시용 */
function isDanger(s: BattleStat): boolean {
  return !s.downed && s.maxHp > 0 && s.hp / s.maxHp <= DANGER_RATIO;
}

function renderLatex(text: string): string {
  if (!text) return "";
  let result = text.replace(/\$\$([\s\S]*?)\$\$/g, (_m, latex) => {
    try { return katex.renderToString(latex.trim(), { displayMode: true, throwOnError: false, trust: true }); }
    catch { return latex; }
  });
  result = result.replace(/\$([^$]+?)\$/g, (_m, latex) => {
    try { return katex.renderToString(latex.trim(), { displayMode: false, throwOnError: false, trust: true }); }
    catch { return latex; }
  });
  return result;
}

function LatexText({ text }: { text: string }) {
  return <span dangerouslySetInnerHTML={{ __html: renderLatex(text) }} />;
}

const CHOICE_COLORS = ["choiceRed", "choiceBlue", "choiceGreen", "choiceOrange"] as const;
const CHOICE_SHAPES = ["\u25B2", "\u25C6", "\u25CF", "\u25A0"];
const CHOICE_HEX = ["#ff315f", "#00e5ff", "#00ff95", "#ffd400"];

/* \u2500\u2500 \uC804\uD22C FX \uCEEC\uB7EC \u2500\u2500 */
const FX_ALLY = "#00e5ff";   // \uC6B0\uB9AC\uD300(\uC544\uAD70) \uACF5\uACA9
const FX_FOE = "#ff315f";    // \uC0C1\uB300\uD300(\uC801) \uACF5\uACA9 / \uD53C\uACA9
const FX_GOLD = "#ffd400";   // \uC120\uCDE8 / \uC2B9\uB9AC
const FX_HEAL = "#9bf6ff";   // \uC544\uAD70 \uB370\uBBF8\uC9C0 \uC22B\uC790
const FX_DESP = "#ff7a00";   // \uC704\uAE30 \uBC18\uACA9(\uADFC\uC131)
const FX_HEALG = "#00ff95";  // \uCEF4\uBC31 \uD790(\uD68C\uBCF5)
const FX_SHIELD = "#00e5ff"; // \uC644\uC804 \uBC29\uC5B4 \uBC29\uD328

const DANGER_RATIO = 0.3;    // \uC774 HP \uBE44\uC728 \uC774\uD558 = \uC704\uD5D8

/* ── 참가자 아바타 컬러 ── */
const AVATAR_COLORS = [
  "#6c5ce7", "#00cec9", "#e17055", "#00b894",
  "#fdcb6e", "#e84393", "#0984e3", "#55efc4",
];

function getAvatarColor(index: number) {
  return AVATAR_COLORS[index % AVATAR_COLORS.length];
}

function getInitial(name: string) {
  return name.charAt(0).toUpperCase();
}

function getBannerIconClass(isCorrect?: boolean, selectedIndex?: number | null) {
  if (isCorrect) return `${styles.bannerIcon} ${styles.bannerIconCorrect}`;
  if (selectedIndex === null) return `${styles.bannerIcon} ${styles.bannerIconMissed}`;
  return `${styles.bannerIcon} ${styles.bannerIconWrong}`;
}

function QuizPage({ question, questionResult, timeLeft, userId, connected, answeredUsers, matchInfo, timePressure, answerCorrect, battleScores }: QuizPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [nextCountdown, setNextCountdown] = useState(3);
  const [questionAnim, setQuestionAnim] = useState(false);
  const [revealResult, setRevealResult] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [showTimePressure, setShowTimePressure] = useState(false);
  const [showCorrectToast, setShowCorrectToast] = useState(false);

  /* ── 전투 FX 참조 ── */
  const fxRef = useRef<BattleFXHandle>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const myTeamRef = useRef<HTMLDivElement>(null);
  const enemyTeamRef = useRef<HTMLDivElement>(null);
  const playersBarRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);
  useEffect(() => {
    reducedRef.current = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  /* 화면 흔들림(스크린 셰이크) — 컨테이너에 클래스 토글 */
  const shakeScreen = useCallback((cls: string, dur = 420) => {
    const el = containerRef.current;
    if (!el || reducedRef.current) return;
    el.classList.remove(styles.shakeS, styles.shakeM, styles.shakeL);
    void el.offsetWidth; // 리플로우로 애니메이션 재시작
    el.classList.add(styles[cls]);
    window.setTimeout(() => el.classList.remove(styles[cls]), dur);
  }, []);

  /* 패널 피격 플래시 */
  const flashPanel = useCallback((side: "mine" | "enemy", dur = 360) => {
    const el = side === "mine" ? myTeamRef.current : enemyTeamRef.current;
    if (!el || reducedRef.current) return;
    el.classList.remove(styles.panelHit);
    void el.offsetWidth;
    el.classList.add(styles.panelHit);
    window.setTimeout(() => el.classList.remove(styles.panelHit), dur);
  }, []);

  const rectCenter = (el: Element) => {
    const r = el.getBoundingClientRect();
    // display:none 등 미표시 요소는 0×0 사각형을 반환 → null로 처리해
    // 초소형 레이아웃(playersBar/battleHud 숨김)에서 FX가 좌상단(0,0)에 몰리지 않고
    // 호출부의 screenMid() 폴백(화면 중앙)으로 자연스럽게 넘어가게 한다.
    if (r.width === 0 && r.height === 0) return null;
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };
  const getChipCenter = useCallback((uid: string) => {
    const root = playersBarRef.current;
    if (!root) return null;
    const safe = (window.CSS && CSS.escape) ? CSS.escape(uid) : uid;
    const el = root.querySelector(`[data-uid="${safe}"]`);
    return el ? rectCenter(el) : null;
  }, []);
  const getTeamCenter = useCallback((side: "mine" | "enemy") => {
    const el = side === "mine" ? myTeamRef.current : enemyTeamRef.current;
    return el ? rectCenter(el) : null;
  }, []);

  const bgParticles = useMemo(() => Array.from({ length: 42 }, () => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${6 + Math.random() * 6}s`,
  })), []);
  const speedLines = useMemo(() => Array.from({ length: 18 }, () => ({
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 1.8}s`,
    animationDuration: `${0.85 + Math.random() * 0.9}s`,
  })), []);
  const sparks = useMemo(() => Array.from({ length: 28 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2.4}s`,
  })), []);

  const players = useMemo(() => matchInfo?.users ?? [], [matchInfo]);
  const me = useMemo(() => players.find((p) => p.userId === userId), [players, userId]);
  const nameOf = useCallback((uid: string) => players.find((p) => p.userId === uid)?.nickname ?? "참가자", [players]);

  /* 팀 구성 */
  const myTeamId = me?.teamId ?? 0;
  const enemyTeamId = useMemo(() => {
    const other = players.find((p) => p.teamId !== myTeamId);
    return other ? other.teamId : myTeamId === 0 ? 1 : 0;
  }, [players, myTeamId]);
  const myTeam = useMemo(() => players.filter((p) => p.teamId === myTeamId), [players, myTeamId]);
  const enemyTeam = useMemo(() => players.filter((p) => p.teamId === enemyTeamId), [players, enemyTeamId]);
  const isTeamBattle = !matchInfo?.isSolo && enemyTeam.length > 0;

  /* 누적 HP/콤보 (결과 페이즈는 최신 결과, 진행 중에는 직전 누적값) */
  const statByUser = useMemo(() => {
    const src = questionResult?.scores ?? battleScores;
    const m = new Map<string, BattleStat>();
    for (const s of src) m.set(s.userId, { hp: s.hp, maxHp: s.maxHp, combo: s.combo, downed: s.downed });
    return m;
  }, [questionResult, battleScores]);
  const getStat = useCallback((uid: string): BattleStat => statByUser.get(uid) ?? DEFAULT_STAT, [statByUser]);

  /* 이번 문제의 개인별 정산 (피해/획득/쓰러짐) */
  const resultByUser = useMemo(() => {
    const m = new Map<string, QuestionResultData["results"][number]>();
    if (questionResult) for (const r of questionResult.results) m.set(r.userId, r);
    return m;
  }, [questionResult]);

  const hpStateClass = useCallback((s: BattleStat): string => {
    if (s.hp <= 0) return styles.hpEmpty;
    const r = s.maxHp > 0 ? s.hp / s.maxHp : 0;
    if (r <= 0.3) return styles.hpLow;
    if (r <= 0.6) return styles.hpMid;
    return styles.hpHigh;
  }, []);

  /* 팀 집계 HP/생존 */
  const teamAgg = useCallback((teamPlayers: typeof players): BattleStat & { alive: number; total: number } => {
    let hp = 0, maxHp = 0, alive = 0;
    for (const p of teamPlayers) {
      const s = getStat(p.userId);
      hp += s.hp; maxHp += s.maxHp; if (!s.downed) alive += 1;
    }
    return { hp, maxHp, combo: 0, downed: alive === 0, alive, total: teamPlayers.length };
  }, [getStat]);

  /* 새 문제 진입 애니메이션 */
  useEffect(() => {
    if (question) {
      setSelectedIndex(null);
      setSubmitted(false);
      setNextCountdown(3);
      setQuestionAnim(false);
      setRevealResult(false);
      setShowChoices(false);
      setShowTimePressure(false);
      setShowCorrectToast(false);
      requestAnimationFrame(() => {
        setQuestionAnim(true);
        setTimeout(() => setShowChoices(true), 300);
      });
    }
  }, [question?.questionNumber]);

  useEffect(() => {
    if (!timePressure) return;
    setShowTimePressure(true);
    const t = setTimeout(() => setShowTimePressure(false), 1400);
    return () => clearTimeout(t);
  }, [timePressure]);

  useEffect(() => {
    if (!answerCorrect) return;
    setShowCorrectToast(true);
    const t = setTimeout(() => setShowCorrectToast(false), 1200);
    return () => clearTimeout(t);
  }, [answerCorrect]);

  /* 결과 공개 애니메이션 */
  useEffect(() => {
    if (questionResult) {
      setRevealResult(false);
      setTimeout(() => setRevealResult(true), 100);
    }
  }, [questionResult]);

  /* 다음 문제 카운트다운 */
  useEffect(() => {
    if (!questionResult || questionResult.isLastQuestion) return;
    setNextCountdown(3);
    const iv = setInterval(() => {
      setNextCountdown((p) => { if (p <= 1) { clearInterval(iv); return 0; } return p - 1; });
    }, 1000);
    return () => clearInterval(iv);
  }, [questionResult]);

  /* ════ 전투 이펙트 연출 (결과 페이즈) ════ */
  useEffect(() => {
    const fx = fxRef.current;
    if (!questionResult || !fx || reducedRef.current) return;

    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => { timers.push(window.setTimeout(fn, ms)); };
    const screenMid = () => ({ x: window.innerWidth / 2, y: window.innerHeight * 0.42 });

    const myRes = questionResult.results.find((r) => r.userId === userId);
    const myDmg = myRes?.damageTaken ?? 0;

    /* 1) 내 결과 즉발 반응 */
    at(150, () => {
      if (myRes?.isCorrect) {
        fx.flash(FX_ALLY, 0.13);
        const p = getChipCenter(userId);
        if (p) fx.charge(p.x, p.y, FX_GOLD);
      } else if (myDmg > 0) {
        fx.flash(FX_FOE, 0.2);
        shakeScreen("shakeM");
      }
    });

    /* 2) 완전 방어 방패 (공격이 무산된 팀) */
    questionResult.battle.perfectDefenseTeams.forEach((teamId, i) => {
      const side: "mine" | "enemy" = teamId === myTeamId ? "mine" : "enemy";
      at(360 + i * 120, () => {
        const c = getTeamCenter(side) ?? screenMid();
        fx.ring(c.x, c.y, FX_SHIELD, { power: 1.8 });
        fx.charge(c.x, c.y, FX_SHIELD);
        fx.damageText(c.x, c.y - 6, "방어!", { color: FX_SHIELD, size: 24 });
        flashPanel(side);
        if (side === "mine") fx.flash(FX_SHIELD, 0.1);
      });
    });

    /* 3) 팀 공격 연출: 실제 공격자 칩 → 피격자 칩 빔 → 명중 임팩트 */
    let cursor = 300;
    for (const ta of questionResult.battle.teamAttacks) {
      if (ta.attack <= 0 || ta.targets.length === 0) continue;
      const ally = ta.teamId === myTeamId;
      const beamColor = ally ? FX_ALLY : FX_FOE;
      const hitSide: "mine" | "enemy" = ally ? "enemy" : "mine";
      const attackerIds = ta.attackerUserIds.slice(0, 4);
      const despSet = new Set(ta.desperationUserIds);

      // 선공 플레어
      if (ta.firstCorrectNickname) {
        at(Math.max(0, cursor - 90), () => {
          const src = getTeamCenter(ally ? "mine" : "enemy");
          if (src) fx.ring(src.x, src.y, FX_GOLD, { power: 1.3 });
        });
      }

      ta.targets.forEach((t, i) => {
        const fireAt = cursor + i * 150;
        const dstAt = () => getChipCenter(t.userId) ?? getTeamCenter(hitSide) ?? screenMid();
        // 각 공격자 칩에서 피격자에게 빔 (누가 누구를 공격했는지)
        if (attackerIds.length === 0) {
          at(fireAt, () => {
            const fb = getTeamCenter(ally ? "mine" : "enemy") ?? screenMid();
            const dst = dstAt();
            fx.beam(fb.x, fb.y, dst.x, dst.y, beamColor);
          });
        } else {
          attackerIds.forEach((uid, k) => {
            at(fireAt + k * 55, () => {
              const sp = getChipCenter(uid) ?? getTeamCenter(ally ? "mine" : "enemy") ?? screenMid();
              const dst = dstAt();
              const desp = despSet.has(uid);
              fx.beam(sp.x, sp.y, dst.x, dst.y, desp ? FX_DESP : beamColor);
              if (desp) fx.ring(sp.x, sp.y, FX_DESP, { power: 1.1 });
            });
          });
        }
        // 명중
        at(fireAt + 170, () => {
          const dst = dstAt();
          const desp = ta.desperationUserIds.length > 0;
          const power = Math.min(2.4, 0.8 + t.damage / 20);
          fx.impact(dst.x, dst.y, { color: desp ? FX_DESP : beamColor, power });
          fx.damageText(dst.x, dst.y, `-${t.damage}`, {
            color: ally ? FX_HEAL : "#ff7a96",
            size: 26 + Math.min(22, t.damage),
          });
          flashPanel(hitSide);
          const isMeHit = t.userId === userId;
          shakeScreen(isMeHit ? "shakeL" : ally ? "shakeS" : "shakeM");
          if (isMeHit) fx.flash(FX_FOE, 0.16);
        });
      });
      cursor += ta.targets.length * 150 + 240;
    }

    /* 4) 컴백 힐 */
    questionResult.battle.heals.forEach((hl, i) => {
      at(cursor + i * 170, () => {
        const pos = getChipCenter(hl.userId) ?? getTeamCenter("mine") ?? screenMid();
        fx.charge(pos.x, pos.y, FX_HEALG);
        fx.ring(pos.x, pos.y, FX_HEALG, { power: 1.2 });
        fx.damageText(pos.x, pos.y, `+${hl.amount}`, { color: FX_HEALG, size: 28 });
        if (hl.userId === userId) fx.flash(FX_HEALG, 0.12);
      });
    });
    cursor += questionResult.battle.heals.length * 170;

    /* 5) KO 대폭발 */
    questionResult.battle.koUserIds.forEach((uid, i) => {
      at(cursor + i * 280, () => {
        const dst = getChipCenter(uid) ?? screenMid();
        fx.ko(dst.x, dst.y);
        fx.flash("#ffffff", 0.22);
        shakeScreen("shakeL");
      });
    });
    cursor += questionResult.battle.koUserIds.length * 280;

    /* 6) TKO 승패 */
    if (questionResult.battle.tkoWinnerTeam !== null) {
      const win = questionResult.battle.tkoWinnerTeam === myTeamId;
      at(cursor + 220, () => {
        if (win) {
          const c = getTeamCenter("mine") ?? screenMid();
          fx.victory(c.x, c.y);
          fx.flash(FX_GOLD, 0.2);
        } else {
          fx.flash(FX_FOE, 0.18);
          shakeScreen("shakeM");
        }
      });
    }

    return () => timers.forEach((t) => clearTimeout(t));
  }, [questionResult, myTeamId, userId, getChipCenter, getTeamCenter, shakeScreen, flashPanel]);

  /* ════ 결과 효과음 (감소모션과 무관하게 재생) ════ */
  useEffect(() => {
    if (!questionResult) return;
    const myRes = questionResult.results.find((r) => r.userId === userId);
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => { timers.push(window.setTimeout(fn, ms)); };
    at(160, () => {
      if (myRes?.isCorrect) sfx.play("correct");
      else if ((myRes?.damageTaken ?? 0) > 0) sfx.play("hit");
      else if (myRes && myRes.selectedIndex !== null && !myRes.downed) sfx.play("wrong");
    });
    if ((myRes?.healed ?? 0) > 0) at(440, () => sfx.play("heal"));
    if (questionResult.battle.koUserIds.length > 0) at(640, () => sfx.play("ko"));
    if (questionResult.battle.tkoWinnerTeam !== null) {
      const win = questionResult.battle.tkoWinnerTeam === myTeamId;
      at(920, () => sfx.play(win ? "win" : "lose"));
    }
    return () => timers.forEach((t) => clearTimeout(t));
  }, [questionResult, userId, myTeamId]);

  /* ════ 정답 적립 순간 스파크 (진행 중) ════ */
  useEffect(() => {
    if (!answerCorrect || questionResult) return;
    if (answerCorrect.userId === userId) sfx.play("correct");
    const fx = fxRef.current;
    if (!fx || reducedRef.current) return;
    const pos = getChipCenter(answerCorrect.userId);
    if (!pos) return;
    const mine = answerCorrect.userId === userId;
    fx.charge(pos.x, pos.y, mine ? FX_GOLD : FX_ALLY);
    if (answerCorrect.isFirst) {
      fx.ring(pos.x, pos.y, FX_GOLD, { power: 1.5 });
      fx.damageText(pos.x, pos.y - 18, "선취!", { color: FX_GOLD, size: 22 });
    } else if (answerCorrect.combo > 1) {
      fx.damageText(pos.x, pos.y - 18, `${answerCorrect.combo} COMBO`, { color: FX_GOLD, size: 20 });
    }
  }, [answerCorrect, questionResult, userId, getChipCenter]);

  /* ════ 시간 압박 번개 (진행 중) ════ */
  useEffect(() => {
    if (!timePressure || questionResult) return;
    const fromMe = timePressure.attackerUserId === userId;
    if (!fromMe) sfx.play("hit");
    const fx = fxRef.current;
    if (!fx || reducedRef.current) return;
    const attacker = getChipCenter(timePressure.attackerUserId);
    const me = getChipCenter(userId);
    if (fromMe) {
      const from = attacker ?? { x: window.innerWidth / 2, y: window.innerHeight * 0.7 };
      fx.bolt(from.x, from.y, window.innerWidth / 2, 40, FX_ALLY);
      fx.flash(FX_ALLY, 0.1);
    } else {
      const from = attacker ?? { x: window.innerWidth / 2, y: 40 };
      const to = me ?? { x: window.innerWidth / 2, y: window.innerHeight * 0.7 };
      fx.bolt(from.x, from.y, to.x, to.y, FX_FOE);
      fx.flash(FX_FOE, 0.14);
      shakeScreen("shakeS");
    }
  }, [timePressure, questionResult, userId, getChipCenter, shakeScreen]);

  const iAmDowned = getStat(userId).downed;

  const handleSelect = useCallback((index: number, e?: { clientX: number; clientY: number }) => {
    if (submitted || selectedIndex !== null || !question || getStat(userId).downed) return;
    setSelectedIndex(index);
    setSubmitted(true);
    socket.emit("submitAnswer", { selectedIndex: index });
    sfx.play("click");
    if (!reducedRef.current && fxRef.current && e) {
      fxRef.current.impact(e.clientX, e.clientY, { color: CHOICE_HEX[index] ?? FX_ALLY, power: 0.7 });
    }
  }, [submitted, selectedIndex, question, getStat, userId]);

  if (!question) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.loadingDots}>
            <span /><span /><span />
          </div>
          <p>문제를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  const isResultPhase = questionResult !== null;
  const myResult = questionResult?.results.find((r) => r.userId === userId);
  const totalPlayers = players.length || 1;
  const answeredCount = answeredUsers.size;
  const answerPressure = Math.round((answeredCount / totalPlayers) * 100);
  const progress = (question.questionNumber / question.totalQuestions) * 100;

  /* 타이머 상태 */
  const timeRatio = question.timeLimit > 0 ? timeLeft / question.timeLimit : 0;
  const timerUrgent = timeRatio <= 0.25;
  const timerWarning = timeRatio <= 0.5 && !timerUrgent;

  const getChoiceClass = (index: number): string => {
    const classes = [styles.choiceBtn, styles[CHOICE_COLORS[index]]];
    if (isResultPhase) {
      if (index === questionResult.correctIndex) classes.push(styles.choiceCorrect);
      else if (selectedIndex === index) classes.push(styles.choiceWrong);
      else classes.push(styles.choiceDimmed);
    } else if (selectedIndex === index) {
      classes.push(styles.choiceSelected);
    }
    return classes.join(" ");
  };

  const battleStateClass = isResultPhase
    ? myResult?.isCorrect
      ? styles.battleWon
      : styles.battleLost
    : "";
  const pressureFromMe = timePressure?.attackerUserId === userId;
  const correctFromMe = answerCorrect?.userId === userId;

  const myDelta = resultByUser.get(userId)?.scoreDelta ?? 0;
  const koList = questionResult?.battle.koUserIds ?? [];
  const myAgg = teamAgg(myTeam);
  const enemyAgg = teamAgg(enemyTeam);
  const tkoWinnerTeam = questionResult?.battle.tkoWinnerTeam ?? null;

  return (
    <>
      <BattleFX ref={fxRef} />
      <div ref={containerRef} className={`${styles.container} ${isResultPhase ? styles.resultPhase : ""} ${battleStateClass} ${showTimePressure ? styles.timePressureHit : ""}`}>
      {/* 배경 파티클 */}
      <div className={styles.bgParticles}>
        {bgParticles.map((style, i) => (
          <div key={i} className={styles.particle} style={style} />
        ))}
      </div>
      <div className={styles.speedLines}>
        {speedLines.map((style, i) => (
          <span
            key={i}
            style={style}
          />
        ))}
      </div>
      <div className={styles.sparkField}>
        {sparks.map((style, i) => (
          <i
            key={i}
            style={style}
          />
        ))}
      </div>
      <div className={styles.fxOverlay} aria-hidden="true" />

      {!connected && <div className={styles.connectionBar}>재연결 중...</div>}

      <div className={styles.microStatusToast}>
        <span>{question.questionNumber}/{question.totalQuestions}</span>
        {!isResultPhase && <strong>{timeLeft}초</strong>}
        <span>{answeredCount}/{totalPlayers}명</span>
        <span className={styles.microOptional}>{question.points}점</span>
      </div>

      {/* ── 상단: 진행률 + 타이머 ── */}
      <div className={styles.topSection}>
        <div className={styles.progressWrap}>
          <div className={styles.progressInfo}>
            <span className={styles.questionBadge}>Q{question.questionNumber}</span>
            <span className={styles.questionTotal}>/ {question.totalQuestions}</span>
            {question.difficulty >= 3 && <span className={styles.hardBadge}>고난도</span>}
            <span className={styles.pointsBadge}>{question.points}점</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>

        {!isResultPhase && (
          <div className={`${styles.timerBox} ${timerUrgent ? styles.timerUrgent : timerWarning ? styles.timerWarning : ""}`}>
            <svg className={styles.timerRing} viewBox="0 0 44 44">
              <circle className={styles.timerTrack} cx="22" cy="22" r="18" />
              <circle
                className={styles.timerArc}
                cx="22" cy="22" r="18"
                strokeDasharray={2 * Math.PI * 18}
                strokeDashoffset={2 * Math.PI * 18 * (1 - timeRatio)}
              />
            </svg>
            <span className={styles.timerNum}>{timeLeft}</span>
          </div>
        )}
      </div>

      {timePressure && showTimePressure && !isResultPhase && (
        <div className={`${styles.timePressureNotice} ${pressureFromMe ? styles.pressureAttack : styles.pressureDamage}`}>
          <strong>{pressureFromMe ? "시간 압박 성공" : "상대 시간 압박"}</strong>
          <span>{pressureFromMe ? "상대 남은 시간" : `${timePressure.attackerNickname} 공격`} -{timePressure.penaltySeconds}초</span>
        </div>
      )}

      {answerCorrect && showCorrectToast && !isResultPhase && (
        <div className={`${styles.correctToast} ${correctFromMe ? styles.correctToastMe : ""} ${answerCorrect.isFirst ? styles.correctToastFirst : ""}`}>
          <strong>
            {answerCorrect.isFirst && <span className={styles.firstStrikeTag}>선취</span>}
            {correctFromMe ? "내가 정답" : `${answerCorrect.nickname} 정답`}
            {answerCorrect.combo > 1 && <span className={styles.comboInline}>🔥{answerCorrect.combo}</span>}
          </strong>
          <span>{answerCorrect.isFirst ? "선공 — 상대에게 추가 피해" : correctFromMe ? "콤보 적립 중" : "상대가 맞췄어요"}</span>
        </div>
      )}

      <div className={styles.battleHud}>
        {/* 우리 팀 */}
        <div ref={myTeamRef} className={`${styles.teamPanel} ${styles.teamMine} ${myAgg.downed ? styles.teamWiped : ""}`}>
          <div className={styles.teamHead}>
            <span className={styles.teamName}>{teamLabel(myTeamId)}</span>
            <span className={styles.teamMineTag}>우리팀</span>
            <span className={styles.teamAlive}>생존 {myAgg.alive}/{myAgg.total}</span>
          </div>
          <div className={styles.hpBar}>
            <div className={`${styles.hpBarFill} ${hpStateClass(myAgg)}`} style={{ width: `${hpPct(myAgg)}%` }} />
          </div>
          <div className={styles.teamMembers}>
            {myTeam.map((p) => {
              const s = getStat(p.userId);
              return (
                <span key={p.userId} className={`${styles.teamMember} ${p.userId === userId ? styles.teamMemberMe : ""} ${s.downed ? styles.teamMemberKo : ""} ${isDanger(s) ? styles.danger : ""}`}>
                  <span className={styles.teamMemberName}>{p.nickname}</span>
                  {s.combo > 1 && <i className={styles.teamMemberCombo}>🔥{s.combo}</i>}
                  {s.downed ? <em className={styles.teamMemberKoTag}>KO</em> : <i className={styles.teamMemberHp}>{s.hp}</i>}
                </span>
              );
            })}
          </div>
        </div>

        <div className={styles.vsCore}>
          <span>{isTeamBattle ? "팀전" : "연습"}</span>
          <i />
        </div>

        {/* 상대 팀 */}
        {isTeamBattle ? (
          <div ref={enemyTeamRef} className={`${styles.teamPanel} ${styles.teamEnemy} ${enemyAgg.downed ? styles.teamWiped : ""}`}>
            <div className={styles.teamHead}>
              <span className={styles.teamName}>{teamLabel(enemyTeamId)}</span>
              <span className={styles.teamEnemyTag}>상대팀</span>
              <span className={styles.teamAlive}>생존 {enemyAgg.alive}/{enemyAgg.total}</span>
            </div>
            <div className={styles.hpBar}>
              <div className={`${styles.hpBarFill} ${hpStateClass(enemyAgg)}`} style={{ width: `${hpPct(enemyAgg)}%` }} />
            </div>
            <div className={styles.teamMembers}>
              {enemyTeam.map((p) => {
                const s = getStat(p.userId);
                return (
                  <span key={p.userId} className={`${styles.teamMember} ${s.downed ? styles.teamMemberKo : ""} ${isDanger(s) ? styles.danger : ""}`}>
                    <span className={styles.teamMemberName}>{p.nickname}</span>
                    {s.combo > 1 && <i className={styles.teamMemberCombo}>🔥{s.combo}</i>}
                    {s.downed ? <em className={styles.teamMemberKoTag}>KO</em> : <i className={styles.teamMemberHp}>{s.hp}</i>}
                  </span>
                );
              })}
            </div>
          </div>
        ) : (
          <div className={`${styles.teamPanel} ${styles.teamEnemy}`}>
            <div className={styles.teamHead}><span className={styles.teamName}>연습 모드</span></div>
            <div className={styles.teamSolo}>혼자 풀기 · 팀 전투 없음</div>
          </div>
        )}

        {!isResultPhase && (
          <div className={styles.pressureMeter}>
            <span>응답 {answeredCount}/{totalPlayers}</span>
            <div className={styles.pressureTrack}>
              <div className={styles.pressureFill} style={{ width: `${answerPressure}%` }} />
            </div>
          </div>
        )}
      </div>

      {/* ── 참가자 바 ── */}
      <div ref={playersBarRef} className={styles.playersBar}>
        {players.map((p, idx) => {
          const answered = answeredUsers.has(p.userId);
          const isMe = p.userId === userId;
          /* 결과 페이즈: 정답/오답 표시 */
          let resultState = "";
          if (isResultPhase) {
            const ur = questionResult.results.find(r => r.userId === p.userId);
            if (ur?.isCorrect) resultState = styles.playerCorrect;
            else if (ur?.selectedIndex === null) resultState = styles.playerMissed;
            else resultState = styles.playerWrong;
          }
          const st = getStat(p.userId);
          const pr = resultByUser.get(p.userId);
          const teamClass = p.teamId === myTeamId ? styles.chipTeamMine : styles.chipTeamEnemy;
          return (
            <div key={p.userId} data-uid={p.userId} className={`${styles.playerChip} ${teamClass} ${isMe ? styles.playerMe : ""} ${answered && !isResultPhase ? styles.playerAnswered : ""} ${st.downed ? styles.playerDowned : ""} ${isDanger(st) ? styles.danger : ""} ${resultState}`}>
              <div className={styles.playerAvatar} style={{ background: getAvatarColor(idx) }}>
                {p.isBot ? "봇" : getInitial(p.nickname)}
              </div>
              <span className={styles.playerName}>{p.nickname}</span>
              {answered && !isResultPhase && <span className={styles.answeredCheck} aria-label="응답 완료" />}
              {isResultPhase && pr?.isCorrect && (
                <span className={styles.resultEmoji} aria-label="정답" />
              )}
              <span className={styles.playerHpBar}>
                <span className={`${styles.playerHpFill} ${hpStateClass(st)}`} style={{ width: `${hpPct(st)}%` }} />
              </span>
            </div>
          );
        })}
      </div>

      {/* ── 문제 카드 ── */}
      <div className={`${styles.questionCard} ${questionAnim ? styles.questionEnter : ""}`}>
        <div className={styles.questionText}>
          <LatexText text={question.question} />
        </div>
      </div>

      {/* 선택지 */}
      <div className={`${styles.choices} ${showChoices ? styles.choicesVisible : ""} ${iAmDowned && !isResultPhase ? styles.choicesLocked : ""}`}>
        {question.choices.map((choice, index) => (
          <button
            key={index}
            className={getChoiceClass(index)}
            onClick={(e) => handleSelect(index, e)}
            disabled={submitted || isResultPhase || iAmDowned}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <span className={styles.choiceShape}>{CHOICE_SHAPES[index]}</span>
            <span className={styles.choiceText}><LatexText text={choice} /></span>
            {isResultPhase && index === questionResult.correctIndex && (
              <span className={styles.correctBadge}>정답</span>
            )}
          </button>
        ))}
      </div>

      {/* ── KO 관전 / 응답 대기 ── */}
      {iAmDowned && !isResultPhase && (
        <div className={`${styles.waitingBar} ${styles.downedBar}`}>
          <span>전투 불능 — 우리 팀을 응원하세요 (KO 시 응답 불가)</span>
        </div>
      )}
      {!iAmDowned && submitted && !isResultPhase && (
        <div className={styles.waitingBar}>
          <div className={styles.waitingPulse} />
          <span>{answeredUsers.size}/{totalPlayers}명 응답 완료</span>
        </div>
      )}

      {/* ── 결과 페이즈 ── */}
      {isResultPhase && revealResult && (
        <div className={styles.resultOverlay}>
          {/* 정답/오답 배너 */}
          <div className={`${styles.resultBanner} ${
            myResult?.isCorrect ? styles.bannerCorrect :
            myResult?.selectedIndex === null ? styles.bannerMissed : styles.bannerWrong
          }`}>
            <span className={getBannerIconClass(myResult?.isCorrect, myResult?.selectedIndex)} />
            <span className={styles.bannerText}>
              {myResult?.isCorrect ? "정답!" : myResult?.selectedIndex === null ? "시간 초과" : "오답!"}
            </span>
            {myResult?.isCorrect && myDelta > 0 && (
              <span className={styles.bannerDelta}>
                +{myDelta}점{myResult.isFirstCorrect && <em> 선취</em>}{myResult.combo > 1 && <em> 🔥{myResult.combo}</em>}
              </span>
            )}
            {!myResult?.isCorrect && (myResult?.damageTaken ?? 0) > 0 && (
              <span className={styles.bannerDmg}>-{myResult?.damageTaken} HP{myResult?.justDowned && <em> KO</em>}</span>
            )}
            {(myResult?.healed ?? 0) > 0 && (
              <span className={styles.bannerHeal}>+{myResult?.healed} HP</span>
            )}
          </div>

          {/* 전투 로그 */}
          {(questionResult.battle.teamAttacks.some((t) => t.attack > 0 && t.targets.length > 0)
            || questionResult.battle.heals.length > 0
            || questionResult.battle.perfectDefenseTeams.length > 0
            || koList.length > 0 || tkoWinnerTeam !== null) && (
            <div className={styles.battleLog}>
              {questionResult.battle.teamAttacks
                .filter((ta) => ta.attack > 0 && ta.targets.length > 0)
                .map((ta) => (
                  <span key={ta.teamId} className={ta.teamId === myTeamId ? styles.battleLogAlly : styles.battleLogFoe}>
                    {ta.teamId === myTeamId ? "⚔️ " : "🗡️ "}
                    {ta.attackerUserIds.length
                      ? ta.attackerUserIds.map(nameOf).join("·")
                      : (ta.teamId === myTeamId ? "우리팀" : "상대팀")}
                    {" → "}
                    {ta.targets.map((t) => `${t.nickname} -${t.damage}`).join(", ")}
                    {ta.firstCorrectNickname && <em className={styles.logTagFirst}>선취 {ta.firstCorrectNickname}{ta.combo > 1 ? ` 🔥${ta.combo}` : ""}</em>}
                    {ta.desperationUserIds.length > 0 && <em className={styles.logTagDesp}>위기반격</em>}
                  </span>
                ))}
              {questionResult.battle.perfectDefenseTeams.map((tid) => (
                <span key={`def_${tid}`} className={styles.battleLogDefense}>🛡️ {teamLabel(tid)} 완전 방어!</span>
              ))}
              {questionResult.battle.heals.map((h) => (
                <span key={`heal_${h.userId}`} className={styles.battleLogHeal}>💚 {h.nickname} +{h.amount} 회복</span>
              ))}
              {koList.map((uid) => {
                const ko = questionResult.results.find((r) => r.userId === uid);
                return <span key={uid} className={styles.battleLogKo}>💥 {ko?.nickname ?? "참가자"} 쓰러짐!</span>;
              })}
              {tkoWinnerTeam !== null && (
                <span className={styles.battleLogTko}>
                  🏆 {teamLabel(tkoWinnerTeam)} TKO 승리!
                </span>
              )}
            </div>
          )}

          {/* 풀이 */}
          {questionResult.explanation && (
            <div className={styles.explanation}>
              <LatexText text={questionResult.explanation} />
            </div>
          )}

          {/* 미니 스코어보드 */}
          <div className={styles.liveScores}>
            <div className={styles.liveScoresTitle}>실시간 순위</div>
            <div className={styles.scoreList}>
              {[...questionResult.scores]
                .sort((a, b) => {
                  if (a.downed !== b.downed) return a.downed ? 1 : -1;
                  return b.score - a.score;
                })
                .map((s, idx) => {
                  const isMe = s.userId === userId;
                  const delta = resultByUser.get(s.userId)?.scoreDelta ?? 0;
                  const st: BattleStat = { hp: s.hp, maxHp: s.maxHp, combo: s.combo, downed: s.downed };
                  return (
                    <div key={s.userId} className={`${styles.scoreRow} ${isMe ? styles.scoreRowMe : ""} ${s.downed ? styles.scoreRowDowned : ""}`}
                         style={{ animationDelay: `${idx * 0.1}s` }}>
                      <span className={styles.scoreRank}>
                        {idx + 1}
                      </span>
                      <div className={styles.scoreAvatar} style={{ background: getAvatarColor(players.findIndex(p => p.userId === s.userId)) }}>
                        {s.isBot ? "봇" : getInitial(s.nickname)}
                      </div>
                      <div className={styles.scoreMid}>
                        <span className={styles.scoreName}>
                          {s.nickname}
                          {s.combo > 1 && <span className={styles.comboInline}>🔥{s.combo}</span>}
                          {s.downed && <span className={styles.koTag}>KO</span>}
                        </span>
                        <span className={styles.scoreHpBar}>
                          <span className={`${styles.scoreHpFill} ${hpStateClass(st)}`} style={{ width: `${hpPct(st)}%` }} />
                        </span>
                      </div>
                      <span className={styles.scorePoints}>
                        {s.score}<small>점</small>
                        {delta > 0 && <span className={styles.scoreDelta}>+{delta}</span>}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 다음 문제 카운트다운 */}
          {!questionResult.isLastQuestion ? (
            <div className={styles.nextTimer}>
              <div className={styles.nextTimerRing}>
                <svg viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="16" className={styles.nextTimerTrack} />
                  <circle cx="20" cy="20" r="16" className={styles.nextTimerArc}
                    strokeDasharray={2 * Math.PI * 16}
                    strokeDashoffset={2 * Math.PI * 16 * (1 - nextCountdown / 3)}
                  />
                </svg>
                <span className={styles.nextTimerNum}>{nextCountdown}</span>
              </div>
              <span className={styles.nextTimerLabel}>다음 문제</span>
            </div>
          ) : (
            <div className={styles.finalizing}>
              <div className={styles.loadingDots}><span /><span /><span /></div>
              <p>최종 결과 집계 중...</p>
            </div>
          )}
        </div>
      )}
      </div>
    </>
  );
}

export default QuizPage;
