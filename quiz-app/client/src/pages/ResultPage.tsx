import { useEffect, useState } from "react";
import katex from "katex";
import type { GameResult, QuestionReview } from "../types";
import styles from "./ResultPage.module.css";

interface ResultPageProps {
  result: GameResult;
  userId: string;
  reviewHistory: QuestionReview[];
  onPlayAgain: () => void;
  onGoToSelect: () => void;
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

function Latex({ text }: { text: string }) {
  return <span dangerouslySetInnerHTML={{ __html: renderLatex(text) }} />;
}

const CHOICE_COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12"];
const PODIUM_COLORS = ["#fdcb6e", "#b2bec3", "#e17055"];
const AVATAR_COLORS = [
  "#6c5ce7", "#00cec9", "#e17055", "#00b894",
  "#fdcb6e", "#e84393", "#0984e3", "#55efc4",
];

function ResultPage({ result, userId, reviewHistory, onPlayAgain, onGoToSelect }: ResultPageProps) {
  const { rankings } = result;
  const [showPodium, setShowPodium] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [confetti, setConfetti] = useState(true);
  const [reviewOpen, setReviewOpen] = useState(false);
  // 오답/시간초과 문제는 처음부터 펼쳐둠
  const [expandedQ, setExpandedQ] = useState<Set<number>>(() => {
    const wrongNums = new Set<number>();
    for (const q of reviewHistory) {
      if (!q.isCorrect) wrongNums.add(q.questionNumber);
    }
    return wrongNums;
  });

  useEffect(() => {
    setTimeout(() => setShowPodium(true), 300);
    setTimeout(() => setShowTable(true), 800);
    setTimeout(() => setShowReview(true), 1200);
    const t = setTimeout(() => setConfetti(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const top3 = rankings.slice(0, 3);
  const podiumOrder = top3.length >= 3
    ? [top3[1], top3[0], top3[2]]
    : top3.length === 2
    ? [top3[1], top3[0]]
    : top3;

  const toggleQ = (num: number) => {
    setExpandedQ((prev) => {
      const next = new Set(prev);
      next.has(num) ? next.delete(num) : next.add(num);
      return next;
    });
  };

  const correctCount = reviewHistory.filter((r) => r.isCorrect).length;
  const wrongCount = reviewHistory.filter((r) => !r.isCorrect && r.selectedIndex !== null).length;
  const missedCount = reviewHistory.filter((r) => r.selectedIndex === null).length;
  const analysis = result.analysisByUser?.[userId];

  return (
    <div className={styles.container}>
      <div className={styles.bgGlow} />

      {confetti && (
        <div className={styles.confettiWrap}>
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i} className={styles.confetti} style={{
              left: `${Math.random() * 100}%`,
              background: ["#6c5ce7","#00cec9","#fdcb6e","#e17055","#00b894","#e84393","#a29bfe","#55efc4"][i % 8],
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
            }} />
          ))}
        </div>
      )}

      {/* 헤더 */}
      <div className={styles.header}>
        <img className={styles.trophyIcon} src="/assets/icon-trophy.jpg" alt="" />
        <h1 className={styles.title}>최종 결과</h1>
      </div>

      {/* 포디움 */}
      {showPodium && (
        <div className={styles.podium}>
          {podiumOrder.map((r, idx) => {
            const isCenter = (top3.length >= 3 && idx === 1) || (top3.length < 3 && idx === (top3.length === 1 ? 0 : 1));
            const actualRank = r.rank;
            const isMe = r.userId === userId;
            return (
              <div key={r.userId} className={`${styles.podiumSlot} ${isCenter ? styles.podiumFirst : ""} ${isMe ? styles.podiumMe : ""}`}
                   style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className={styles.podiumMedal}>{actualRank}</div>
                <div className={styles.podiumAvatar} style={{ background: AVATAR_COLORS[rankings.indexOf(r) % AVATAR_COLORS.length] }}>
                  {r.isBot ? "봇" : r.nickname.charAt(0).toUpperCase()}
                </div>
                <div className={styles.podiumName}>
                  {r.nickname}
                  {isMe && <span className={styles.meTag}>나</span>}
                </div>
                <div className={styles.podiumScore}>{r.score}<small>점</small></div>
                <div className={styles.podiumBar} style={{
                  height: isCenter ? "80px" : actualRank === 2 ? "56px" : "40px",
                  background: `linear-gradient(180deg, ${PODIUM_COLORS[actualRank - 1] || "#636e72"}, transparent)`,
                }} />
              </div>
            );
          })}
        </div>
      )}

      {/* 전체 순위 */}
      {showTable && (
        <div className={styles.rankingsCard}>
          <div className={styles.rankingsTitle}>전체 순위</div>
          <div className={styles.rankList}>
            {rankings.map((r, idx) => {
              const isMe = r.userId === userId;
              return (
                <div key={r.userId}
                     className={`${styles.rankRow} ${isMe ? styles.rankRowMe : ""} ${idx === 0 ? styles.rankRowGold : ""}`}
                     style={{ animationDelay: `${idx * 0.08}s` }}>
                  <span className={styles.rankNum}>{r.rank}</span>
                  <div className={styles.rankAvatar} style={{ background: AVATAR_COLORS[idx % AVATAR_COLORS.length] }}>
                    {r.isBot ? "봇" : r.nickname.charAt(0).toUpperCase()}
                  </div>
                  <div className={styles.rankInfo}>
                    <span className={styles.rankName}>
                      {r.nickname}
                      {isMe && <span className={styles.meTag}>나</span>}
                    </span>
                    <div className={styles.rankStats}>
                      <span className={styles.statG}>{r.correct}O</span>
                      <span className={styles.statR}>{r.wrong}X</span>
                      <span className={styles.statM}>{r.missed}-</span>
                    </div>
                  </div>
                  <span className={styles.rankScore}>{r.score}<small>점</small></span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {showReview && analysis && (
        <div className={styles.analysisCard}>
          <div className={styles.analysisHeader}>
            <div>
              <span className={styles.analysisEyebrow}>학습 분석</span>
              <h2 className={styles.analysisTitle}>정답률 {analysis.accuracy}%</h2>
            </div>
            <div className={styles.analysisStats}>
              <span>{analysis.correctCount}O</span>
              <span>{analysis.wrongCount}X</span>
              {analysis.missedCount > 0 && <span>{analysis.missedCount}-</span>}
            </div>
          </div>

          <div className={styles.analysisGrid}>
            <div className={styles.analysisBlock}>
              <span className={styles.analysisBlockTitle}>잘한 영역</span>
              <div className={styles.analysisPills}>
                {(analysis.strengths.length > 0 ? analysis.strengths : ["정답 문항을 먼저 복습"]).map((item) => (
                  <span key={item} className={styles.analysisPillGood}>{item}</span>
                ))}
              </div>
            </div>
            <div className={styles.analysisBlock}>
              <span className={styles.analysisBlockTitle}>보완할 영역</span>
              <div className={styles.analysisPills}>
                {(analysis.needsPractice.length > 0 ? analysis.needsPractice : ["오답 없음"]).map((item) => (
                  <span key={item} className={styles.analysisPillWarn}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          {analysis.recommendedReview.length > 0 && (
            <div className={styles.analysisAdvice}>
              {analysis.recommendedReview.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          )}

          {analysis.byCategory.length > 0 && (
            <div className={styles.categoryBreakdown}>
              {analysis.byCategory.slice(0, 4).map((row) => (
                <div key={row.category} className={styles.categoryRow}>
                  <span className={styles.categoryName}>{row.category}</span>
                  <div className={styles.categoryTrack}>
                    <div className={styles.categoryFill} style={{ width: `${row.accuracy}%` }} />
                  </div>
                  <span className={styles.categoryScore}>{row.correct}/{row.total}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ══ 문제 리뷰 ══ */}
      {showReview && reviewHistory.length > 0 && (
        <div className={styles.reviewSection}>
          <button className={styles.reviewToggle} onClick={() => setReviewOpen(!reviewOpen)}>
            <div className={styles.reviewToggleLeft}>
              <span className={styles.reviewToggleTitle}>문제 풀이 리뷰</span>
              <div className={styles.reviewSummary}>
                <span className={styles.reviewCorrect}>{correctCount}O</span>
                <span className={styles.reviewWrong}>{wrongCount}X</span>
                {missedCount > 0 && <span className={styles.reviewMissed}>{missedCount}-</span>}
              </div>
            </div>
            <span className={`${styles.reviewChevron} ${reviewOpen ? styles.reviewChevronUp : ""}`}>▾</span>
          </button>

          {reviewOpen && (
            <div className={styles.reviewList}>
              {[...reviewHistory].sort((a, b) => {
                // 오답/시간초과 먼저, 그 안에서는 원래 순서 유지
                const aWrong = a.isCorrect ? 1 : 0;
                const bWrong = b.isCorrect ? 1 : 0;
                return aWrong - bWrong || a.questionNumber - b.questionNumber;
              }).map((q) => {
                const isExpanded = expandedQ.has(q.questionNumber);
                return (
                  <div key={q.questionNumber}
                       className={`${styles.reviewItem} ${q.isCorrect ? styles.reviewItemCorrect : q.selectedIndex === null ? styles.reviewItemMissed : styles.reviewItemWrong}`}>
                    <button className={styles.reviewItemHeader} onClick={() => toggleQ(q.questionNumber)}>
                      <span className={`${styles.reviewBadge} ${q.isCorrect ? styles.badgeCorrect : q.selectedIndex === null ? styles.badgeMissed : styles.badgeWrong}`}>
                        {q.isCorrect ? "O" : q.selectedIndex === null ? "-" : "X"}
                      </span>
                      <span className={styles.reviewQNum}>Q{q.questionNumber}</span>
                      {q.difficulty >= 3 && <span className={styles.reviewHardBadge}>고난도</span>}
                      <span className={styles.reviewQText}><Latex text={q.question} /></span>
                      <span className={`${styles.reviewItemChevron} ${isExpanded ? styles.reviewItemChevronUp : ""}`}>▾</span>
                    </button>

                    {isExpanded && (
                      <div className={styles.reviewDetail}>
                        {(q.lessonTitle || q.learningObjective) && (
                          <div className={styles.reviewMeta}>
                            {q.lessonTitle && <span>{q.lessonTitle}</span>}
                            {q.learningObjective && <p>{q.learningObjective}</p>}
                          </div>
                        )}
                        <div className={styles.reviewChoices}>
                          {q.choices.map((c, ci) => {
                            const isMyPick = q.selectedIndex === ci;
                            const isAnswer = q.correctIndex === ci;
                            let cls = styles.reviewChoice;
                            if (isAnswer) cls += ` ${styles.reviewChoiceCorrect}`;
                            if (isMyPick && !isAnswer) cls += ` ${styles.reviewChoiceWrong}`;
                            return (
                              <div key={ci} className={cls}>
                                <span className={styles.reviewChoiceColor} style={{ background: CHOICE_COLORS[ci] }} />
                                <span className={styles.reviewChoiceText}><Latex text={c} /></span>
                                {isAnswer && <span className={styles.reviewAnswerTag}>정답</span>}
                                {isMyPick && !isAnswer && <span className={styles.reviewMyTag}>내 선택</span>}
                              </div>
                            );
                          })}
                        </div>
                        {q.selectedIndex === null && (
                          <div className={styles.reviewMissedNote}>시간 초과로 응답하지 못했습니다.</div>
                        )}
                        {q.explanation && (
                          <div className={styles.reviewExplanation}>
                            <span className={styles.reviewExplanationLabel}>해설</span>
                            <Latex text={q.explanation} />
                          </div>
                        )}
                        {!q.isCorrect && q.wrongAnalysis && (
                          <div className={styles.reviewWrongAnalysis}>
                            <span>오답 분석</span>
                            <p><Latex text={q.wrongAnalysis} /></p>
                          </div>
                        )}
                        {!q.isCorrect && q.hints && q.hints.length > 0 && (
                          <div className={styles.reviewHints}>
                            <span>다시 풀 때 힌트</span>
                            {q.hints.slice(0, 2).map((hint, idx) => (
                              <p key={idx}><Latex text={hint} /></p>
                            ))}
                          </div>
                        )}
                        {!q.isCorrect && q.commonMistakes && q.commonMistakes.length > 0 && (
                          <div className={styles.reviewMistakes}>
                            <span>공통 실수</span>
                            {q.commonMistakes.slice(0, 2).map((mistake, idx) => (
                              <p key={idx}><Latex text={mistake} /></p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 액션 */}
      <div className={styles.actions}>
        <button className={styles.restartBtn} onClick={onPlayAgain}>다시 하기</button>
        <button className={styles.selectBtn} onClick={onGoToSelect}>과목 선택으로</button>
      </div>
    </div>
  );
}

export default ResultPage;
