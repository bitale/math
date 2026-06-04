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

/* ── 그래프 시각화 타입 ── */

export interface GraphFunction {
  expr: string;          // 수학 표현식: "sin(x)", "x^2", "1/(1+x^2)"
  color?: string;
  label?: string;
  dashed?: boolean;
  domain?: [number, number];
}

export interface GraphPoint {
  x: number;
  y: number;
  label?: string;
  color?: string;
  hollow?: boolean;
}

export interface GraphLine {
  from: [number, number];
  to: [number, number];
  color?: string;
  dashed?: boolean;
  label?: string;
}

export interface GraphRegion {
  fn: string;            // 상단 함수 표현식
  fn2?: string;          // 하단 함수 (기본 0, 즉 x축)
  from: number;
  to: number;
  color?: string;
}

export interface GraphShape {
  type: "circle" | "ellipse";
  cx: number;
  cy: number;
  rx: number;
  ry?: number;
  color?: string;
  fill?: string;
}

export interface GraphAnnotation {
  x: number;
  y: number;
  text: string;
  color?: string;
}

export interface GraphConfig {
  type: "function" | "geometry";
  title?: string;
  xRange?: [number, number];
  yRange?: [number, number];
  xLabel?: string;
  yLabel?: string;
  gridStep?: number;
  functions?: GraphFunction[];
  points?: GraphPoint[];
  lines?: GraphLine[];
  regions?: GraphRegion[];
  shapes?: GraphShape[];
  annotations?: GraphAnnotation[];
}

/* ── 레슨 타입 ── */

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
    visuals?: GraphConfig[];
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

export type SubjectId = "preschool" | "elementary" | "middle-school" | "precalculus" | "calculus-1" | "calculus-2" | "linear-vector" | "multivariable" | "diff-eq" | "real-analysis" | "set-theory" | "algebra" | "complex-analysis";

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
