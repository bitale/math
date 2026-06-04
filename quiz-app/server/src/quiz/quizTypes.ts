export interface QuizQuestion {
  id: string;
  gradeKey: string;
  category: string;
  lessonId: string;
  lessonTitle: string;
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
  hints: string[];
  wrongAnalysis: string;
  learningObjective: string;
  commonMistakes: string[];
  nextConnection: string;
  difficulty: number;
}

export interface ClientQuestion {
  id: string;
  question: string;
  choices: string[];
  questionNumber: number;
  totalQuestions: number;
  difficulty: number;
  points: number;
}
