export interface Example {
  title: string;
  problem: string;
  steps: string[];
  answer: string;
  lesson: string;
}

export interface Problem {
  id: string;
  type: "number" | "text" | "choice";
  difficulty: 1 | 2 | 3;
  question: string;
  choices?: string[];
  answer: string;
  hints: string[];
  explanation: string;
  wrongAnalysis: string;
}

export interface Lesson {
  id: number;
  title: string;
  category: string;
  level: string;
  question: string;
  concept: {
    intro: string;
    intuition: string;
    formula: string;
    summary: string;
  };
  examples: Example[];
  problems: Problem[];
  summary: {
    keyPoints: string[];
    formulas: string[];
    commonMistakes: string[];
    nextConnection: string;
  };
}

export interface WrongNoteEntry {
  lessonId: number;
  problemId: string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  wrongAnalysis: string;
  timestamp: number;
}

export type SubjectId = "analysis" | "set-theory";

export interface SubjectConfig {
  id: SubjectId;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  flow: string[];
}

export type Route =
  | { name: "select-subject" }
  | { name: "home" }
  | { name: "curriculum" }
  | { name: "lesson"; lessonId: number }
  | { name: "wrong-note" };
