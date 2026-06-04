import { useEffect, useState } from "react";
import socket from "../socket";
import type { GradeInfo } from "../types";
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
  { icon: "⚔️", title: "2팀 대전", desc: "매칭되면 자동으로 청팀·홍팀 두 팀으로 나뉘어 싸웁니다 (2:2, 2:1 등)." },
  { icon: "🎯", title: "정답 = 적팀 공격", desc: "맞히면 우리 팀이 '틀리거나 못 푼' 상대를 공격해 HP를 깎습니다. 우리 팀 전원 정답이면 완전 방어!" },
  { icon: "⚡", title: "선취 · 콤보", desc: "팀에서 가장 먼저 맞히면(선취) 추가 점수·추가 공격. 연속 정답 콤보가 쌓일수록 점수 배수와 공격력이 올라가고, 틀리면 콤보가 끊깁니다." },
  { icon: "💥", title: "HP 0 = KO", desc: "HP가 0이 되면 쓰러져서 더 이상 문제를 풀 수 없고 관전만 합니다." },
  { icon: "🏆", title: "TKO 승리", desc: "상대 팀 전원이 KO되면 즉시 승리! 끝까지 가면 생존 인원 → 총 HP → 총점 순으로 승패를 정합니다." },
];

function SubjectSelectPage({ nickname, grades, connected, onSelectGrade, onChangeNickname }: Props) {
  const [openSubject, setOpenSubject] = useState<string | null>(null);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => { socket.emit("requestGrades"); }, []);

  const toggle = (id: string) => setOpenSubject(prev => prev === id ? null : id);

  return (
    <div className={styles.container}>
      {!connected && <div className={styles.connBar}>재연결 중...</div>}

      {/* 헤더 */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img className={styles.headerIcon} src="/assets/icon-bolt.jpg" alt="" />
          <h1 className={styles.headerTitle}>퀴즈 배틀</h1>
        </div>
        <div className={styles.userChip}>
          <div className={styles.userAvatar}>{nickname.charAt(0).toUpperCase()}</div>
          <span className={styles.userName}>{nickname}</span>
          <button className={styles.changeBtn} onClick={onChangeNickname}>변경</button>
        </div>
      </header>

      <p className={styles.tagline}>과목을 선택하고 배틀을 시작하세요!</p>

      {/* 게임 설명서 */}
      <div className={`${styles.rulesCard} ${showRules ? styles.rulesOpen : ""}`}>
        <button className={styles.rulesToggle} onClick={() => setShowRules((v) => !v)}>
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
              <button className={styles.subjectBtn} onClick={() => toggle(subj.id)}>
                <div className={styles.subjectIconWrap} style={{ background: subj.color }}>
                  <img className={styles.subjectImage} src={subj.icon} alt="" />
                </div>
                <div className={styles.subjectInfo}>
                  <span className={styles.subjectTitle}>{subj.title}</span>
                  <span className={styles.subjectSub}>{subj.subtitle}</span>
                </div>
                <div className={styles.subjectMeta}>
                  {totalQ > 0 && <span className={styles.qCount}>{totalQ}문제</span>}
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronUp : ""}`}>▾</span>
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
                      onClick={() => onSelectGrade(g.key)}
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
