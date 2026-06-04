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
    icon: "/assets/icon-preschool.jpg",
    color: "linear-gradient(135deg, #ff8a7a, #ffd166)",
    prefix: "preschool-",
    gradeBadges: { "preschool-5": "5", "preschool-6": "6", "preschool-7": "7" } as Record<string, string>,
  },
  {
    id: "elementary",
    title: "초등수학",
    subtitle: "1학년 ~ 6학년",
    icon: "/assets/icon-elementary.jpg",
    color: "linear-gradient(135deg, #168a8f, #6c63ff)",
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
    icon: "/assets/icon-eng-preschool.jpg",
    color: "linear-gradient(135deg, #35c99b, #ffd166)",
    prefix: "eng-preschool-",
    gradeBadges: {
      "eng-preschool-5": "5", "eng-preschool-6": "6", "eng-preschool-7": "7",
    } as Record<string, string>,
  },
  {
    id: "eng-elementary",
    title: "초등영어",
    subtitle: "1학년 ~ 6학년",
    icon: "/assets/icon-eng-elementary.jpg",
    color: "linear-gradient(135deg, #ff6b6b, #6c63ff)",
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
    icon: "/assets/icon-gk.jpg",
    color: "linear-gradient(135deg, #ffd166, #35c99b)",
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
    icon: "/assets/icon-diff-eq.jpg",
    color: "linear-gradient(135deg, #ffd166, #ff8a7a)",
    prefix: "diff-eq-",
    gradeBadges: {
      "diff-eq-ode": "ODE", "diff-eq-transform": "T",
      "diff-eq-pde": "PDE", "diff-eq-dispersive": "D",
    } as Record<string, string>,
  },
];

function SubjectSelectPage({ nickname, grades, connected, onSelectGrade, onChangeNickname }: Props) {
  const [openSubject, setOpenSubject] = useState<string | null>(null);

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
