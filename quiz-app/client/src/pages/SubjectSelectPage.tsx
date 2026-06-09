import { useEffect, useState } from "react";
import socket from "../socket";
import type { GradeInfo } from "../types";
import { sfx } from "../lib/sfx";
import styles from "./SubjectSelectPage.module.css";

interface Props {
  nickname: string;
  grades: GradeInfo[];
  connected: boolean;
  onSelectGrade: (gradeKey: string) => void;
  onChangeNickname: () => void;
}

const SUBJECTS = [
  {
    id: "preschool",
    title: "유아수학",
    subtitle: "5세 ~ 예비 초등학생",
    icon: "/assets/icon-cyber-preschool-math.png",
    color: "linear-gradient(135deg, #ff2bd6, #ffd400)",
    prefix: "preschool-",
    gradeBadges: { "preschool-5": "5", "preschool-6": "6", "preschool-7": "7" } as Record<string, string>,
  },
  {
    id: "elementary",
    title: "초등수학",
    subtitle: "1학년 ~ 6학년",
    icon: "/assets/icon-cyber-elementary-math.png",
    color: "linear-gradient(135deg, #00e5ff, #8d4dff)",
    prefix: "elementary-",
    gradeBadges: {
      "elementary-1": "1", "elementary-2": "2", "elementary-3": "3",
      "elementary-4": "4", "elementary-5": "5", "elementary-6": "6",
    } as Record<string, string>,
  },
  {
    id: "eng-preschool",
    title: "유아영어",
    subtitle: "5세 ~ 예비 초등학생",
    icon: "/assets/icon-cyber-preschool-english.png",
    color: "linear-gradient(135deg, #00ff95, #ffd400)",
    prefix: "eng-preschool-",
    gradeBadges: {
      "eng-preschool-5": "5", "eng-preschool-6": "6", "eng-preschool-7": "7",
    } as Record<string, string>,
  },
  {
    id: "eng-elementary",
    title: "초등영어",
    subtitle: "1학년 ~ 6학년",
    icon: "/assets/icon-cyber-elementary-english.png",
    color: "linear-gradient(135deg, #ff2bd6, #00e5ff)",
    prefix: "eng-elementary-",
    gradeBadges: {
      "eng-elementary-1": "1", "eng-elementary-2": "2", "eng-elementary-3": "3",
      "eng-elementary-4": "4", "eng-elementary-5": "5", "eng-elementary-6": "6",
    } as Record<string, string>,
  },
  {
    id: "general-knowledge",
    title: "시사상식 장학퀴즈",
    subtitle: "5세 ~ 12세 · 나이별 상식 문제",
    icon: "/assets/icon-cyber-general-knowledge.png",
    color: "linear-gradient(135deg, #ffd400, #00e5ff)",
    prefix: "gk-age-",
    gradeBadges: {
      "gk-age-5": "5", "gk-age-6": "6", "gk-age-7": "7", "gk-age-8": "8",
      "gk-age-9": "9", "gk-age-10": "10", "gk-age-11": "11", "gk-age-12": "12",
    } as Record<string, string>,
  },
  {
    id: "diff-eq",
    title: "미분방정식",
    subtitle: "ODE · 적분변환 · PDE · 분산형 PDE",
    icon: "/assets/icon-cyber-diff-eq.png",
    color: "linear-gradient(135deg, #8d4dff, #00e5ff)",
    prefix: "diff-eq-",
    gradeBadges: {
      "diff-eq-ode": "ODE", "diff-eq-transform": "T",
      "diff-eq-pde": "PDE", "diff-eq-dispersive": "D",
    } as Record<string, string>,
  },
];

const RULES = [
  { icon: "⚔️", title: "2팀 대전", desc: "매칭되면 자동으로 볼트·노바 두 팀으로 균등하게 나뉩니다 (2:2, 2:1 등). 모두 같은 문제를 동시에 풀고, 각자 시작 체력은 HP 100." },
  { icon: "🎯", title: "정답 = 적팀 공격", desc: "내가 맞히면 우리 팀의 '공격'이 됩니다. 공격은 상대 팀에서 틀렸거나 못 푼 사람 중 HP가 가장 낮은 한 명에게 집중타로 들어갑니다. 아예 못 풀면(시간 초과) 추가 피해까지." },
  { icon: "🛡️", title: "완전 방어", desc: "우리 팀이 한 명도 빠짐없이 다 맞히면 상대 공격을 통째로 막아내는 '완전 방어'! 반대로 한 명이라도 틀리면 그 사람이 표적이 됩니다." },
  { icon: "🥇", title: "선공 (선취)", desc: "그 문제에서 가장 먼저 맞힌 단 한 명만 '선공'을 가집니다. 양 팀 각각이 아니라 전체에서 단 1명! 선공 팀은 추가 점수와 함께 상대에게 강한 선제 타격을 넣습니다." },
  { icon: "🔥", title: "콤보", desc: "연속으로 맞힐수록 콤보가 쌓여 얻는 점수 배수와 공격력이 함께 올라갑니다. 한 번이라도 틀리거나 못 풀면 콤보는 0으로 초기화돼요." },
  { icon: "⏳", title: "시간 압박", desc: "빠르게 정답을 내면 아직 못 푼 상대의 '남은 시간'을 깎아 압박합니다. 빠를수록, 그리고 어려운 문제일수록 더 많이 깎입니다." },
  { icon: "💢", title: "위기 반격 (근성)", desc: "내 HP가 바닥일 때(약 30% 이하) 맞히면 평소보다 강한 추가 타격을 날립니다. 벼랑 끝일수록 한 방이 매워지니 끝까지 포기하지 마세요!" },
  { icon: "💚", title: "컴백 힐", desc: "우리 팀 전체 체력이 위태로울 때(약 절반 이하) 선공을 잡으면, 가장 많이 다친 팀원이 체력을 조금 회복합니다. 불리할수록 선공이 중요!" },
  { icon: "💥", title: "HP 0 = KO", desc: "HP가 0이 되면 쓰러져(KO) 더 이상 문제를 풀 수 없고, 남은 팀원을 응원하며 관전합니다. KO 이후 문제는 내 정답률 집계에서 빠집니다." },
  { icon: "🏆", title: "TKO & 승패", desc: "상대 팀 전원이 KO되면 그 즉시 TKO 승리! 끝까지 가면 생존 인원 수 → 팀 총 HP → 팀 총점 순으로 승부를 가립니다." },
];

function SubjectSelectPage({ nickname, grades, connected, onSelectGrade, onChangeNickname }: Props) {
  const [openSubject, setOpenSubject] = useState<string | null>(null);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => { socket.emit("requestGrades"); }, []);

  const toggle = (id: string) => setOpenSubject(prev => prev === id ? null : id);

  return (
    <div className={styles.container}>
      {!connected && <div className={styles.connBar}>재연결 중...</div>}

      {/* HUD 헤더 */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img className={styles.headerIcon} src="/assets/icon-bolt.jpg" alt="" />
          <div className={styles.titleWrap}>
            <h1 className={styles.headerTitle}>QUIZ BATTLE</h1>
            <span className={styles.headerSub}>퀴즈 배틀 · RANKED</span>
          </div>
        </div>
        <div className={styles.userChip}>
          <div className={styles.userAvatar}>{nickname.charAt(0).toUpperCase()}</div>
          <div className={styles.userMeta}>
            <span className={styles.userName}>{nickname}</span>
            <span className={styles.userTag}>PLAYER</span>
          </div>
          <button className={styles.changeBtn} onClick={() => { sfx.play("click"); onChangeNickname(); }}>변경</button>
        </div>
      </header>

      {/* RANKED 배너 */}
      <div className={styles.rankedStrip}>
        <span className={styles.rankedBars} aria-hidden="true">▰▰▰</span>
        <span className={styles.rankedLabel}>SELECT MISSION</span>
        <span className={styles.rankedHint}>과목을 골라 배틀에 입장하세요</span>
      </div>

      {/* 게임 설명서 */}
      <div className={`${styles.rulesCard} ${showRules ? styles.rulesOpen : ""}`}>
        <button className={styles.rulesToggle} onClick={() => { sfx.play("click"); setShowRules((v) => !v); }}>
          <span className={styles.rulesToggleTitle}>📖 게임 방법 (팀 배틀 규칙)</span>
          <span className={`${styles.chevron} ${showRules ? styles.chevronUp : ""}`}>▾</span>
        </button>
        {showRules && (
          <div className={styles.rulesList}>
            {RULES.map((r) => (
              <div key={r.title} className={styles.ruleItem}>
                <span className={styles.ruleIcon}>{r.icon}</span>
                <div className={styles.ruleText}>
                  <span className={styles.ruleTitle}>{r.title}</span>
                  <span className={styles.ruleDesc}>{r.desc}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 과목 카드 */}
      <div className={styles.subjects}>
        {SUBJECTS.map((subj, si) => {
          const subGrades = grades.filter((g) => g.key.startsWith(subj.prefix));
          const isOpen = openSubject === subj.id;
          const totalQ = subGrades.reduce((s, g) => s + g.questionCount, 0);

          return (
            <div key={subj.id} className={`${styles.subjectCard} ${isOpen ? styles.subjectOpen : ""}`}
                 style={{ animationDelay: `${si * 0.08}s` }}>
              <button className={styles.subjectBtn} onClick={() => { sfx.play("select"); toggle(subj.id); }}>
                <span className={styles.subjectBar} style={{ background: subj.color }} aria-hidden="true" />
                <div className={styles.subjectIconWrap} style={{ background: subj.color }}>
                  <img className={styles.subjectImage} src={subj.icon} alt="" />
                </div>
                <div className={styles.subjectInfo}>
                  <span className={styles.subjectTitle}>{subj.title}</span>
                  <span className={styles.subjectSub}>{subj.subtitle}</span>
                </div>
                <div className={styles.subjectMeta}>
                  {totalQ > 0 && <span className={styles.qCount}>{totalQ}</span>}
                  <span className={`${styles.enterArrow} ${isOpen ? styles.enterArrowOpen : ""}`}>▷</span>
                </div>
              </button>

              {isOpen && (
                <div className={styles.gradeGrid}>
                  {subGrades.length === 0 ? (
                    <div className={styles.noData}>문제 준비 중...</div>
                  ) : subGrades.map((g, gi) => (
                    <button
                      key={g.key}
                      className={styles.gradeBtn}
                      onClick={() => { sfx.play("select"); onSelectGrade(g.key); }}
                      disabled={!connected || g.questionCount === 0}
                      style={{ animationDelay: `${gi * 0.05}s` }}
                    >
                      <span className={styles.gradeIcon}>
                        {subj.gradeBadges[g.key] ?? "Q"}
                      </span>
                      <span className={styles.gradeLabel}>{g.label}</span>
                      <span className={styles.gradeCount}>{g.questionCount}문제</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SubjectSelectPage;
