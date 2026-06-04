import styles from "./Timer.module.css";

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

function Timer({ timeLeft, totalTime }: TimerProps) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const progress = totalTime > 0 ? timeLeft / totalTime : 0;
  const dashOffset = circumference * (1 - progress);

  const getColorClass = () => {
    const ratio = timeLeft / totalTime;
    if (ratio > 0.5) return { stroke: styles.green, text: styles.textGreen };
    if (ratio > 0.25) return { stroke: styles.yellow, text: styles.textYellow };
    return { stroke: styles.red, text: styles.textRed };
  };

  const colors = getColorClass();

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timerCircle}>
        <svg className={styles.timerSvg} viewBox="0 0 80 80">
          <circle
            className={styles.timerTrack}
            cx="40"
            cy="40"
            r={radius}
          />
          <circle
            className={`${styles.timerProgress} ${colors.stroke}`}
            cx="40"
            cy="40"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <span className={`${styles.timerText} ${colors.text}`}>
          {timeLeft}
        </span>
      </div>
    </div>
  );
}

export default Timer;
