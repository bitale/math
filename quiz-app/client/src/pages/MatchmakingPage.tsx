import { useState, useEffect, useRef } from "react";
import type { GradeInfo, MatchInfo } from "../types";
import { sfx } from "../lib/sfx";
import styles from "./MatchmakingPage.module.css";

interface Props {
  gradeKey: string;
  grades: GradeInfo[];
  connected: boolean;
  matchInfo: MatchInfo | null;
  onPlaySolo: () => void;
  onCancel: () => void;
}

const AVATAR_COLORS = ["#6c5ce7","#00cec9","#e17055","#00b894","#fdcb6e","#e84393","#0984e3","#55efc4"];

function MatchmakingPage({ gradeKey, grades, connected, matchInfo, onPlaySolo, onCancel }: Props) {
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const gradeLabel = grades.find((g) => g.key === gradeKey)?.label ?? gradeKey;
  const matched = matchInfo !== null;

  useEffect(() => {
    setElapsed(0);
    intervalRef.current = setInterval(() => setElapsed((p) => p + 1), 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [gradeKey]);

  useEffect(() => {
    if (matched) {
      if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
      sfx.play("correct");
    }
  }, [matched]);

  return (
    <div className={styles.container}>
      {/* 레이더 배경 */}
      <div className={styles.radarWrap}>
        <div className={styles.radar} />
        <div className={styles.radarPing} />
        <div className={styles.radarPing2} />
      </div>

      {!connected && <div className={styles.connBar}>재연결 중...</div>}

      <div className={styles.content}>
        {matched ? (
          <div className={styles.matchedSection}>
            <div className={styles.matchBurst}>
              {[...Array(12)].map((_, i) => (
                <div key={i} className={styles.burstLine} style={{
                  transform: `rotate(${i * 30}deg)`,
                  animationDelay: `${i * 0.05}s`,
                }} />
              ))}
              <img className={styles.matchEmoji} src="/assets/icon-battle.jpg" alt="" />
            </div>
            <h2 className={`${styles.matchTitle} gameTitle`}>매칭 완료!</h2>
            <p className={styles.matchSub}>배틀이 곧 시작됩니다</p>
            <div className={styles.vsBar}>
              {matchInfo!.users.map((u, i) => (
                <div key={u.userId} className={styles.vsPlayer} style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className={styles.vsAvatar} style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}>
                    {u.isBot ? "봇" : u.nickname.charAt(0).toUpperCase()}
                  </div>
                  <span className={styles.vsName}>{u.nickname}</span>
                </div>
              ))}
            </div>
            <div className={styles.countdownBar}>
              <div className={styles.countdownFill} />
            </div>
          </div>
        ) : (
          <div className={styles.searchSection}>
            <div className={styles.searchIcon}>
              <img className={styles.searchEmoji} src="/assets/icon-search.jpg" alt="" />
              <div className={styles.searchRing} />
              <div className={styles.searchRing2} />
            </div>
            <h2 className={styles.searchTitle}>상대를 찾는 중</h2>
            <div className={styles.badge}>{gradeLabel}</div>
            <div className={styles.timer}>
              <span className={styles.timerNum}>{elapsed}</span>
              <span className={styles.timerUnit}>초</span>
            </div>
            {elapsed >= 10 && (
              <p className={styles.hint}>30초 후 봇과 함께 시작돼요!</p>
            )}
            <div className={styles.actions}>
              <button className={styles.soloBtn} onClick={() => { sfx.play("select"); onPlaySolo(); }} disabled={!connected}>
                혼자 풀기
              </button>
              <button className={styles.cancelBtn} onClick={() => { sfx.play("click"); onCancel(); }}>
                취소
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MatchmakingPage;
