import styles from "./ScoreBoard.module.css";

interface ScoreBoardEntry {
  userId?: string;
  nickname: string;
  score: number;
  correct?: number;
  wrong?: number;
  missed?: number;
  rank?: number;
}

interface ScoreBoardProps {
  scores: ScoreBoardEntry[];
  currentUserId?: string;
  showDetails?: boolean;
}

function ScoreBoard({
  scores,
  currentUserId,
  showDetails = false,
}: ScoreBoardProps) {
  const sorted = [...scores].sort((a, b) => b.score - a.score);

  let currentRank = 1;
  const ranked = sorted.map((entry, index) => {
    if (index > 0 && sorted[index - 1].score !== entry.score) {
      currentRank = index + 1;
    }
    return { ...entry, computedRank: entry.rank ?? currentRank };
  });

  return (
    <div className={styles.board}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>닉네임</th>
            <th style={{ textAlign: "right" }}>점수</th>
            {showDetails && (
              <>
                <th style={{ textAlign: "center" }}>O</th>
                <th style={{ textAlign: "center" }}>X</th>
                <th style={{ textAlign: "center" }}>-</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {ranked.map((entry, idx) => (
            <tr
              key={entry.userId ?? idx}
              className={
                entry.userId === currentUserId ? styles.highlight : undefined
              }
            >
              <td className={styles.rankCell}>{entry.computedRank}</td>
              <td className={styles.nicknameCell}>{entry.nickname}</td>
              <td className={styles.scoreCell}>{entry.score}</td>
              {showDetails && (
                <>
                  <td className={styles.correctCell}>
                    {entry.correct ?? 0}
                  </td>
                  <td className={styles.wrongCell}>{entry.wrong ?? 0}</td>
                  <td className={styles.missedCell}>
                    {entry.missed ?? 0}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScoreBoard;
