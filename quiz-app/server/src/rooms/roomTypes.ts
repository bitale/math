import { QuizQuestion } from "../quiz/quizTypes";

export type RoomStatus = "PLAYING" | "RESULT";

export interface User {
  socketId: string;
  userId: string;
  nickname: string;
  connected: boolean;
  isBot: boolean;
  joinedAt: number;
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
  correct: number;
  wrong: number;
  missed: number;
  score: number;
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
    selectedIndex: number | null;
    isCorrect: boolean;
  }>;
  scores: PlayerScore[];
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

export interface GameResultData {
  rankings: Array<PlayerScore & { rank: number }>;
  gradeKey: string;
  reviewsByUser: Record<string, QuestionReviewData[]>;
  analysisByUser: Record<string, LearningAnalysisData>;
}
