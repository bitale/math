export interface GradeInfo {
  key: string;
  label: string;
  questionCount: number;
}

export interface RoomUser {
  userId: string;
  nickname: string;
  isBot: boolean;
  connected: boolean;
}

export interface MatchInfo {
  id: string;
  gradeKey: string;
  users: RoomUser[];
  questionCount: number;
  timeLimitSeconds: number;
  isSolo: boolean;
}

export interface ClientQuestion {
  id: string;
  question: string;
  choices: string[];
  questionNumber: number;
  totalQuestions: number;
  timeLimit: number;
  difficulty: number;
  points: number;
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
  scores: Array<{
    userId: string;
    nickname: string;
    isBot: boolean;
    score: number;
    correct: number;
    wrong: number;
    missed: number;
  }>;
  isLastQuestion: boolean;
}

export interface TimePressureData {
  attackerUserId: string;
  attackerNickname: string;
  penaltySeconds: number;
  remainingTime: number;
}

export interface AnswerCorrectData {
  userId: string;
  nickname: string;
  isBot: boolean;
}

export interface QuestionReview {
  questionNumber: number;
  questionId?: string;
  question: string;
  choices: string[];
  selectedIndex: number | null;
  correctIndex: number;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: string;
  hints?: string[];
  wrongAnalysis?: string;
  learningObjective?: string;
  category?: string;
  lessonTitle?: string;
  difficulty: number;
  points?: number;
  commonMistakes?: string[];
  nextConnection?: string;
}

export interface LearningAnalysis {
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

export interface GameResult {
  rankings: Array<{
    rank: number;
    userId: string;
    nickname: string;
    isBot: boolean;
    score: number;
    correct: number;
    wrong: number;
    missed: number;
  }>;
  gradeKey: string;
  reviewsByUser?: Record<string, QuestionReview[]>;
  analysisByUser?: Record<string, LearningAnalysis>;
}
