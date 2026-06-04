import { useState, useEffect, useCallback, FormEvent } from "react";
import socket from "../socket";
import styles from "./NicknamePage.module.css";

interface NicknamePageProps {
  onSubmit: (nickname: string) => void;
  connected: boolean;
}

const NICKNAME_REGEX = /^[가-힣a-zA-Z0-9]{2,12}$/;

function NicknamePage({ onSubmit, connected }: NicknamePageProps) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const isValid = NICKNAME_REGEX.test(value);

  const getValidation = () => {
    if (!touched || value.length === 0) return { msg: "", err: false };
    if (value.length < 2) return { msg: "2자 이상 입력해주세요", err: true };
    if (value.length > 12) return { msg: "12자 이하로 입력해주세요", err: true };
    if (!NICKNAME_REGEX.test(value)) return { msg: "한글, 영문, 숫자만 사용 가능", err: true };
    return { msg: "사용 가능!", err: false };
  };
  const validation = getValidation();

  useEffect(() => {
    const onRejected = (data: { reason: string }) => { setSubmitting(false); setServerError(data.reason); };
    const onAccepted = () => setSubmitting(false);
    socket.on("nicknameRejected", onRejected);
    socket.on("nicknameAccepted", onAccepted);
    return () => { socket.off("nicknameRejected", onRejected); socket.off("nicknameAccepted", onAccepted); };
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (!isValid || submitting || !connected) return;
    setServerError("");
    setSubmitting(true);
    onSubmit(value.trim());
  }, [isValid, submitting, connected, onSubmit, value]);

  return (
    <div className={styles.container}>
      <div className={styles.luxBackdrop} />

      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <img className={styles.logo} src="/assets/icon-bolt.jpg" alt="" />
          <div className={styles.logoRing} />
        </div>
        <h1 className={styles.title}>퀴즈 배틀</h1>
        <p className={styles.subtitle}>닉네임을 정해주세요</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrap}>
            <input
              className={`${styles.input} ${touched && value.length > 0 ? (isValid ? styles.inputOk : styles.inputErr) : ""}`}
              type="text"
              placeholder="닉네임 (2~12자)"
              value={value}
              onChange={(e) => { setValue(e.target.value); setServerError(""); }}
              onBlur={() => setTouched(true)}
              maxLength={12}
              autoFocus
              disabled={submitting}
            />
            {validation.msg && (
              <span className={`${styles.hint} ${validation.err ? styles.hintErr : styles.hintOk}`}>
                {validation.msg}
              </span>
            )}
          </div>

          {serverError && <div className={styles.serverErr}>{serverError}</div>}

          <button type="submit" className={styles.startBtn} disabled={!isValid || submitting || !connected}>
            <span className={styles.btnText}>{submitting ? "확인 중..." : "시작하기"}</span>
            <span className={styles.btnArrow}>→</span>
          </button>
        </form>

        <div className={styles.status}>
          <span className={`${styles.dot} ${connected ? styles.dotOn : styles.dotOff}`} />
          {connected ? "서버 연결됨" : "연결 중..."}
        </div>
      </div>
    </div>
  );
}

export default NicknamePage;
