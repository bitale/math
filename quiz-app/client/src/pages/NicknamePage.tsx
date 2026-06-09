import { useState, useEffect, useCallback, FormEvent } from "react";
import socket from "../socket";
import { sfx } from "../lib/sfx";
import styles from "./NicknamePage.module.css";

interface NicknamePageProps {
  onSubmit: (nickname: string) => void;            // 비회원(게스트) 시작
  onMemberAuth: (token: string) => void;           // 회원 로그인/가입 성공
  connected: boolean;
}

const NICKNAME_REGEX = /^[가-힣a-zA-Z0-9]{2,12}$/;

type Mode = "guest" | "member";
type MemberMode = "login" | "register";

function NicknamePage({ onSubmit, onMemberAuth, connected }: NicknamePageProps) {
  const [mode, setMode] = useState<Mode>("guest");

  // 게스트
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  // 회원
  const [memberMode, setMemberMode] = useState<MemberMode>("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [memberNick, setMemberNick] = useState("");
  const [memberBusy, setMemberBusy] = useState(false);
  const [memberErr, setMemberErr] = useState("");

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

  const handleGuestSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (!isValid || submitting || !connected) return;
    setServerError("");
    setSubmitting(true);
    sfx.play("select");
    onSubmit(value.trim());
  }, [isValid, submitting, connected, onSubmit, value]);

  const handleMemberSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (memberBusy || !connected) return;
    setMemberErr("");
    setMemberBusy(true);
    try {
      const url = memberMode === "login" ? "/api/auth/login" : "/api/auth/register";
      const body = memberMode === "login"
        ? { username: username.trim(), password }
        : { username: username.trim(), password, nickname: memberNick.trim() };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) { setMemberErr(data.error || "실패했습니다"); setMemberBusy(false); return; }
      sfx.play("select");
      onMemberAuth(data.token); // 이후 App이 소켓 인증 + 페이지 전환
    } catch {
      setMemberErr("서버에 연결할 수 없습니다");
      setMemberBusy(false);
    }
  }, [memberBusy, connected, memberMode, username, password, memberNick, onMemberAuth]);

  return (
    <div className={styles.container}>
      <div className={styles.luxBackdrop} />

      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <img className={styles.logo} src="/assets/icon-bolt.jpg" alt="" />
          <div className={styles.logoRing} />
        </div>
        <h1 className={`${styles.title} gameTitle`}>퀴즈 배틀</h1>

        {/* 비회원 / 회원 탭 */}
        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${mode === "guest" ? styles.tabActive : ""}`}
            onClick={() => { sfx.play("click"); setMode("guest"); }}
          >비회원</button>
          <button
            type="button"
            className={`${styles.tab} ${mode === "member" ? styles.tabActive : ""}`}
            onClick={() => { sfx.play("click"); setMode("member"); }}
          >회원</button>
        </div>

        {mode === "guest" ? (
          <>
            <p className={styles.subtitle}>닉네임만 정하면 바로 시작!</p>
            <form className={styles.form} onSubmit={handleGuestSubmit}>
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
          </>
        ) : (
          <>
            <p className={styles.subtitle}>{memberMode === "login" ? "회원 로그인" : "회원 가입"}</p>
            <form className={styles.form} onSubmit={handleMemberSubmit}>
              <input
                className={styles.input}
                type="text"
                placeholder="아이디 (영문/숫자 3~32자)"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setMemberErr(""); }}
                maxLength={32}
                autoComplete="username"
                disabled={memberBusy}
              />
              <input
                className={styles.input}
                type="password"
                placeholder="비밀번호 (4자 이상)"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setMemberErr(""); }}
                autoComplete={memberMode === "login" ? "current-password" : "new-password"}
                disabled={memberBusy}
              />
              {memberMode === "register" && (
                <input
                  className={styles.input}
                  type="text"
                  placeholder="닉네임 (2~12자)"
                  value={memberNick}
                  onChange={(e) => { setMemberNick(e.target.value); setMemberErr(""); }}
                  maxLength={12}
                  disabled={memberBusy}
                />
              )}

              {memberErr && <div className={styles.serverErr}>{memberErr}</div>}

              <button type="submit" className={styles.startBtn} disabled={memberBusy || !connected}>
                <span className={styles.btnText}>
                  {memberBusy ? "처리 중..." : memberMode === "login" ? "로그인" : "가입하고 시작"}
                </span>
                <span className={styles.btnArrow}>→</span>
              </button>
            </form>

            <button
              type="button"
              className={styles.linkBtn}
              onClick={() => { sfx.play("click"); setMemberErr(""); setMemberMode((m) => m === "login" ? "register" : "login"); }}
            >
              {memberMode === "login" ? "계정이 없나요? 회원가입" : "이미 계정이 있나요? 로그인"}
            </button>
          </>
        )}

        <div className={styles.status}>
          <span className={`${styles.dot} ${connected ? styles.dotOn : styles.dotOff}`} />
          {connected ? "서버 연결됨" : "연결 중..."}
        </div>
      </div>
    </div>
  );
}

export default NicknamePage;
