export interface GradeInfo {
  key: string;
  label: string;
  questionCount: number;
}

export type ItemType = "heal" | "curse" | "destroy";
export type ItemInventory = Record<ItemType, number>;

export interface RoomUser {
  userId: string;
  nickname: string;
  isBot: boolean;
  connected: boolean;
  teamId: number;
  items?: ItemInventory;
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
    teamId: number;
    selectedIndex: number | null;
    isCorrect: boolean;
    scoreDelta: number;
    isFirstCorrect: boolean;
    damageTaken: number;
    healed: number;
    hp: number;
    maxHp: number;
    combo: number;
    downed: boolean;
    justDowned: boolean;
  }>;
  scores: PlayerScoreData[];
  battle: {
    koUserIds: string[];
    teamAttacks: Array<{
      teamId: number;
      attack: number;
      firstCorrectNickname: string | null;
      combo: number;
      attackerUserIds: string[];
      desperationUserIds: string[];
      targets: Array<{ userId: string; nickname: string; damage: number }>;
    }>;
    heals: Array<{ userId: string; nickname: string; amount: number }>;
    perfectDefenseTeams: number[];
    tkoWinnerTeam: number | null;
    itemUses: Array<{
      userId: string; nickname: string;
      type: ItemType;
      targetUserId: string; targetNickname: string;
      amount: number;
    }>;
  };
  isLastQuestion: boolean;
}

export interface PlayerScoreData {
  userId: string;
  nickname: string;
  isBot: boolean;
  teamId: number;
  score: number;
  correct: number;
  wrong: number;
  missed: number;
  hp: number;
  maxHp: number;
  combo: number;
  maxCombo: number;
  downed: boolean;
  items?: ItemInventory;
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
  isFirst: boolean;
  combo: number;
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

export interface GameResult {
  rankings: Array<{
    rank: number;
    userId: string;
    nickname: string;
    isBot: boolean;
    teamId: number;
    score: number;
    correct: number;
    wrong: number;
    missed: number;
    hp: number;
    maxHp: number;
    combo: number;
    maxCombo: number;
    downed: boolean;
  }>;
  gradeKey: string;
  teamBattle: {
    isTeamBattle: boolean;
    winnerTeam: number | null;
    tko: boolean;
    teams: TeamSummary[];
  };
  reviewsByUser?: Record<string, QuestionReview[]>;
  analysisByUser?: Record<string, LearningAnalysis>;
}
