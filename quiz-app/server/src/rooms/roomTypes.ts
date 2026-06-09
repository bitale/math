import { QuizQuestion } from "../quiz/quizTypes";

export type RoomStatus = "PLAYING" | "RESULT";

export type ItemType = "heal" | "curse" | "destroy";
export type ItemInventory = Record<ItemType, number>;

export interface User {
  socketId: string;
  userId: string;
  nickname: string;
  connected: boolean;
  isBot: boolean;
  joinedAt: number;
  teamId: number;
}

export interface QueueEntry {
  socketId: string;
  userId: string;
  nickname: string;
  joinedAt: number;
}

export interface PlayerAnswer {
  userId: string;
  questionId: string;
  selectedIndex: number | null;
  answeredAt: number | null;
  isCorrect: boolean;
}

export interface PlayerScore {
  userId: string;
  nickname: string;
  isBot: boolean;
  teamId: number;
  correct: number;
  wrong: number;
  missed: number;
  score: number;
  hp: number;
  maxHp: number;
  combo: number;
  maxCombo: number;
  downed: boolean;
  downedAtQuestion: number | null; // KO된 문제 인덱스 (이후 문제는 응답 불가 → 정답률 집계 제외)
  items: ItemInventory;            // 보유 아이템(힐/저주/파괴)
  silencedForQuestion: number | null; // 저주: 이 문제 인덱스에서 공격 봉인
}

export interface Room {
  id: string;
  gradeKey: string;
  users: User[];
  status: RoomStatus;
  questionCount: number;
  timeLimitSeconds: number;
  currentQuestionIndex: number;
  questions: QuizQuestion[];
  answers: Map<string, PlayerAnswer[]>;
  scores: Map<string, PlayerScore>;
  createdAt: number;
  questionStartedAt: number | null;
  questionEndsAt: number | null;
  questionTimer: NodeJS.Timeout | null;
  botTimers: NodeJS.Timeout[];
  isSolo: boolean;
  pendingItems: Array<{ userId: string; type: ItemType }>; // 이번 문제에 사용된 아이템(정산 때 해결)
}

export interface QuestionResultData {
  questionId: string;
  questionNumber: number;
  question: string;
  choices: string[];
  category: string;
  lessonTitle: string;
  difficulty: number;
  points: number;
  correctAnswer: string;
  correctIndex: number;
  explanation: string;
  hints: string[];
  wrongAnalysis: string;
  learningObjective: string;
  commonMistakes: string[];
  nextConnection: string;
  results: Array<{
    userId: string;
    nickname: string;
    isBot: boolean;
    teamId: number;
    selectedIndex: number | null;
    isCorrect: boolean;
    scoreDelta: number;      // 이 문제에서 얻은 점수
    isFirstCorrect: boolean; // 전역 선공(선취) 여부
    damageTaken: number;     // 이 문제에서 입은 피해
    healed: number;          // 이 문제에서 회복한 체력(컴백 힐)
    hp: number;
    maxHp: number;
    combo: number;
    downed: boolean;
    justDowned: boolean;     // 이 문제에서 쓰러졌는지
  }>;
  scores: PlayerScore[];
  battle: {
    koUserIds: string[];     // 이 문제에서 쓰러진 사람들
    teamAttacks: Array<{
      teamId: number;
      attack: number;                    // 팀 총 공격력
      firstCorrectNickname: string | null; // 선공(선취)자 — 선공 가진 팀에만
      combo: number;                     // 선공자 콤보
      attackerUserIds: string[];         // 이 공격에 기여한 정답자들 (누가 공격했는지)
      desperationUserIds: string[];      // 위기 반격(저체력 정답)으로 추가타를 낸 사람들
      targets: Array<{ userId: string; nickname: string; damage: number }>; // 적팀 피격자
    }>;
    heals: Array<{ userId: string; nickname: string; amount: number }>; // 컴백 힐
    perfectDefenseTeams: number[];       // 적 공격을 완전 방어한 팀
    tkoWinnerTeam: number | null;        // 이 문제에서 한 팀 전멸 시 승리 팀
    itemUses: Array<{                    // 이 문제에 사용된 아이템 (힐/저주/파괴)
      userId: string; nickname: string;
      type: ItemType;
      targetUserId: string; targetNickname: string;
      amount: number;                    // 힐 회복량 / 파괴 피해 (저주는 0)
    }>;
  };
  isLastQuestion: boolean;
}

export interface QuestionReviewData {
  questionNumber: number;
  questionId: string;
  question: string;
  choices: string[];
  selectedIndex: number | null;
  correctIndex: number;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: string;
  hints: string[];
  wrongAnalysis: string;
  learningObjective: string;
  category: string;
  lessonTitle: string;
  difficulty: number;
  points: number;
  commonMistakes: string[];
  nextConnection: string;
}

export interface LearningAnalysisData {
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  missedCount: number;
  accuracy: number;
  strengths: string[];
  needsPractice: string[];
  recommendedReview: string[];
  byCategory: Array<{
    category: string;
    total: number;
    correct: number;
    missed: number;
    accuracy: number;
  }>;
  byDifficulty: Array<{
    difficulty: number;
    total: number;
    correct: number;
    missed: number;
    accuracy: number;
  }>;
}

export interface TeamSummary {
  teamId: number;
  aliveCount: number;
  totalHp: number;
  totalScore: number;
  members: Array<{
    userId: string;
    nickname: string;
    isBot: boolean;
    score: number;
    hp: number;
    maxHp: number;
    downed: boolean;
    maxCombo: number;
  }>;
}

export interface GameResultData {
  rankings: Array<PlayerScore & { rank: number }>;
  gradeKey: string;
  teamBattle: {
    isTeamBattle: boolean;
    winnerTeam: number | null; // null = 무승부
    tko: boolean;
    teams: TeamSummary[];
  };
  reviewsByUser: Record<string, QuestionReviewData[]>;
  analysisByUser: Record<string, LearningAnalysisData>;
}
