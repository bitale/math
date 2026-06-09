import { useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import socket from "./socket";
import type {
  MatchInfo,
  ClientQuestion,
  QuestionResultData,
  GameResult,
  GradeInfo,
  QuestionReview,
  TimePressureData,
  AnswerCorrectData,
  PlayerScoreData,
} from "./types";
import NicknamePage from "./pages/NicknamePage";
import SubjectSelectPage from "./pages/SubjectSelectPage";
import MatchmakingPage from "./pages/MatchmakingPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import AdminPage from "./pages/AdminPage";
import AppShell from "./components/AppShell";
import { sfx } from "./lib/sfx";

type Page = "nickname" | "select" | "matchmaking" | "quiz" | "result";

function App() {
  if (window.location.pathname.startsWith("/admin")) {
    return <AdminPage />;
  }

  const [nickname, setNickname] = useState<string | null>(null);
  const [userId, setUserId] = useState("");
  const [currentPage, setCurrentPage] = useState<Page>("nickname");
  const [connected, setConnected] = useState(socket.connected);

  // 과목 선택
  const [grades, setGrades] = useState<GradeInfo[]>([]);
  const [selectedGrade, setSelectedGrade] = useState("");

  // 매칭/게임
  const [matchInfo, setMatchInfo] = useState<MatchInfo | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<ClientQuestion | null>(null);
  const [questionResult, setQuestionResult] = useState<QuestionResultData | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timePressure, setTimePressure] = useState<TimePressureData | null>(null);
  const [answerCorrect, setAnswerCorrect] = useState<AnswerCorrectData | null>(null);
  const [answeredUsers, setAnsweredUsers] = useState<Set<string>>(new Set());
  const [battleScores, setBattleScores] = useState<PlayerScoreData[]>([]);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [reviewHistory, setReviewHistory] = useState<QuestionReview[]>([]);
  const selectedIndexRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  const startTimer = useCallback((seconds: number) => {
    clearTimer();
    setTimeLeft(seconds);
    timerRef.current = setInterval(() => {
      setTimeLeft((p) => { if (p <= 1) { clearTimer(); return 0; } return p - 1; });
    }, 1000);
  }, [clearTimer]);

  // ─── 연결 ───
  useEffect(() => {
    const onConnect = () => {
      setConnected(true);
      const saved = localStorage.getItem("quiz-nickname");
      const savedId = localStorage.getItem("quiz-userId");
      if (savedId) {
        socket.emit("reconnectToRoom", { userId: savedId });
      } else if (saved) {
        socket.emit("setNickname", { nickname: saved });
      }
    };
    const onDisconnect = () => { setConnected(false); clearTimer(); };
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    if (socket.connected) onConnect();
    return () => { socket.off("connect", onConnect); socket.off("disconnect", onDisconnect); };
  }, [clearTimer]);

  useEffect(() => {
    const onReconnectFailed = () => {
      const saved = localStorage.getItem("quiz-nickname");
      localStorage.removeItem("quiz-userId");
      if (saved) socket.emit("setNickname", { nickname: saved });
      else setCurrentPage("nickname");
    };
    socket.on("reconnectFailed", onReconnectFailed);
    return () => { socket.off("reconnectFailed", onReconnectFailed); };
  }, []);

  // ─── 닉네임 ───
  useEffect(() => {
    const onAccepted = (data: { userId: string; nickname: string }) => {
      setNickname(data.nickname);
      setUserId(data.userId);
      localStorage.setItem("quiz-nickname", data.nickname);
      localStorage.setItem("quiz-userId", data.userId);
      if (currentPage === "nickname") setCurrentPage("select");
    };
    socket.on("nicknameAccepted", onAccepted);
    socket.on("nicknameRejected", () => {});
    return () => { socket.off("nicknameAccepted", onAccepted); socket.off("nicknameRejected"); };
  }, [currentPage]);

  // ─── 과목 목록 ───
  useEffect(() => {
    const onGrades = (data: GradeInfo[]) => setGrades(data);
    socket.on("availableGrades", onGrades);
    return () => { socket.off("availableGrades", onGrades); };
  }, []);

  // ─── 매칭 & 게임 이벤트 ───
  useEffect(() => {
    const onMatchmaking = () => {
      if (currentPage !== "matchmaking") setCurrentPage("matchmaking");
    };
    const onMatchFound = (data: MatchInfo) => {
      setMatchInfo(data);
    };
    const onMatchCancelled = () => {
      setCurrentPage("select");
    };
    const onGameStarted = () => {
      setQuestionResult(null);
      setTimePressure(null);
      setAnswerCorrect(null);
      setCurrentQuestion(null);
      setGameResult(null);
      setAnsweredUsers(new Set());
      setBattleScores([]);
      setReviewHistory([]);
      selectedIndexRef.current = null;
      setCurrentPage("quiz");
    };
    const onQuestionStarted = (data: ClientQuestion) => {
      setCurrentQuestion(data);
      setQuestionResult(null);
      setTimePressure(null);
      setAnswerCorrect(null);
      setAnsweredUsers(new Set());
      selectedIndexRef.current = null;
      startTimer(data.timeLimit);
    };
    const onAnswerSubmitted = (data: { userId: string; selectedIndex?: number }) => {
      setAnsweredUsers((prev) => new Set(prev).add(data.userId));
      // 내 응답이면 selectedIndex 저장
      if (data.userId === userId && data.selectedIndex !== undefined) {
        selectedIndexRef.current = data.selectedIndex;
      }
    };
    const onQuestionResult = (data: QuestionResultData) => {
      clearTimer();
      setTimePressure(null);
      setAnswerCorrect(null);
      setQuestionResult(data);
      setBattleScores(data.scores);
      // 리뷰 히스토리에 추가
      const myResult = data.results.find((r) => r.userId === userId);
      setReviewHistory((h) => [...h, {
        questionNumber: data.questionNumber,
        questionId: data.questionId,
        question: data.question,
        choices: data.choices,
        selectedIndex: myResult?.selectedIndex ?? selectedIndexRef.current,
        correctIndex: data.correctIndex,
        correctAnswer: data.correctAnswer,
        isCorrect: myResult?.isCorrect ?? false,
        explanation: data.explanation,
        hints: data.hints,
        wrongAnalysis: data.wrongAnalysis,
        learningObjective: data.learningObjective,
        category: data.category,
        lessonTitle: data.lessonTitle,
        difficulty: data.difficulty,
        points: data.points,
        commonMistakes: data.commonMistakes,
        nextConnection: data.nextConnection,
      }]);
      selectedIndexRef.current = null;
    };
    const onTimePressure = (data: TimePressureData) => {
      setTimePressure(data);
      setTimeLeft((prev) => Math.min(prev, data.remainingTime));
    };
    const onAnswerCorrect = (data: AnswerCorrectData) => {
      setAnswerCorrect(data);
    };
    const onGameFinished = (data: GameResult) => {
      clearTimer();
      setGameResult(data);
      const serverReviews = data.reviewsByUser?.[userId];
      if (serverReviews?.length) setReviewHistory(serverReviews);
      setCurrentPage("result");
    };
    const onError = (data: { message: string }) => alert(data.message);

    socket.on("matchmaking", onMatchmaking);
    socket.on("matchFound", onMatchFound);
    socket.on("matchCancelled", onMatchCancelled);
    socket.on("gameStarted", onGameStarted);
    socket.on("questionStarted", onQuestionStarted);
    socket.on("answerSubmitted", onAnswerSubmitted);
    socket.on("questionResult", onQuestionResult);
    socket.on("timePressure", onTimePressure);
    socket.on("answerCorrect", onAnswerCorrect);
    socket.on("gameFinished", onGameFinished);
    socket.on("errorMessage", onError);

    return () => {
      socket.off("matchmaking", onMatchmaking);
      socket.off("matchFound", onMatchFound);
      socket.off("matchCancelled", onMatchCancelled);
      socket.off("gameStarted", onGameStarted);
      socket.off("questionStarted", onQuestionStarted);
      socket.off("answerSubmitted", onAnswerSubmitted);
      socket.off("questionResult", onQuestionResult);
      socket.off("timePressure", onTimePressure);
      socket.off("answerCorrect", onAnswerCorrect);
      socket.off("gameFinished", onGameFinished);
      socket.off("errorMessage", onError);
    };
  }, [currentPage, startTimer, clearTimer, userId]);

  // 첫 사용자 제스처에서 오디오 활성화
  useEffect(() => { sfx.arm(); }, []);

  // ─── 핸들러 ───
  const handleNicknameSet = useCallback((name: string) => {
    socket.emit("setNickname", { nickname: name });
  }, []);

  const handleSelectGrade = useCallback((gradeKey: string) => {
    setSelectedGrade(gradeKey);
    socket.emit("findMatch", { gradeKey });
    setCurrentPage("matchmaking");
  }, []);

  const handlePlaySolo = useCallback(() => {
    if (!selectedGrade) return;
    socket.emit("playSolo", { gradeKey: selectedGrade });
  }, [selectedGrade]);

  const handleCancelMatch = useCallback(() => {
    socket.emit("cancelMatch");
    setCurrentPage("select");
  }, []);

  const handlePlayAgain = useCallback(() => {
    socket.emit("leaveGame");
    setMatchInfo(null);
    setCurrentQuestion(null);
    setQuestionResult(null);
    setTimePressure(null);
    setAnswerCorrect(null);
    setGameResult(null);
    setReviewHistory([]);
    if (selectedGrade) {
      socket.emit("findMatch", { gradeKey: selectedGrade });
      setCurrentPage("matchmaking");
    } else {
      setCurrentPage("select");
    }
  }, [selectedGrade]);

  const handleGoToSelect = useCallback(() => {
    socket.emit("leaveGame");
    setMatchInfo(null);
    setCurrentQuestion(null);
    setQuestionResult(null);
    setTimePressure(null);
    setAnswerCorrect(null);
    setGameResult(null);
    setReviewHistory([]);
    setCurrentPage("select");
  }, []);

  const handleChangeNickname = useCallback(() => {
    setNickname(null);
    localStorage.removeItem("quiz-nickname");
    localStorage.removeItem("quiz-userId");
    setCurrentPage("nickname");
  }, []);

  // ─── 렌더 ───
  let pageKey: string = currentPage;
  let pageEl: ReactNode = null;

  if (!nickname || currentPage === "nickname") {
    pageKey = "nickname";
    pageEl = <NicknamePage onSubmit={handleNicknameSet} connected={connected} />;
  } else {
    switch (currentPage) {
      case "select":
        pageEl = (
          <SubjectSelectPage
            nickname={nickname}
            grades={grades}
            connected={connected}
            onSelectGrade={handleSelectGrade}
            onChangeNickname={handleChangeNickname}
          />
        );
        break;
      case "matchmaking":
        pageEl = (
          <MatchmakingPage
            gradeKey={selectedGrade}
            grades={grades}
            connected={connected}
            matchInfo={matchInfo}
            onPlaySolo={handlePlaySolo}
            onCancel={handleCancelMatch}
          />
        );
        break;
      case "quiz":
        pageEl = (
          <QuizPage
            question={currentQuestion}
            questionResult={questionResult}
            timeLeft={timeLeft}
            userId={userId}
            connected={connected}
            answeredUsers={answeredUsers}
            matchInfo={matchInfo}
            timePressure={timePressure}
            answerCorrect={answerCorrect}
            battleScores={battleScores}
          />
        );
        break;
      case "result":
        pageEl = gameResult ? (
          <ResultPage
            result={gameResult}
            userId={userId}
            reviewHistory={reviewHistory}
            onPlayAgain={handlePlayAgain}
            onGoToSelect={handleGoToSelect}
          />
        ) : null;
        break;
    }
  }

  return <AppShell pageKey={pageKey}>{pageEl}</AppShell>;
}

export default App;
