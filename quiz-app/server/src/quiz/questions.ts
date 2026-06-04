import { QuizQuestion } from "./quizTypes";
import { preschoolLessons } from "../../../../src/data/preschool/index";
import { elementaryLessons } from "../../../../src/data/elementary/index";
import { diffEqLessons } from "../../../../src/data/diffEq/index";
import { englishLessons } from "../../../../src/data/english/index";
import { generalKnowledgeLessons } from "../../../../src/data/generalKnowledge/index";

/* ── grade key 매핑 ── */

const ENG_CATEGORY_MAP: Record<string, string> = {
  "영어 5세": "eng-preschool-5",
  "영어 6세": "eng-preschool-6",
  "영어 7세": "eng-preschool-7",
  "영어 1학년": "eng-elementary-1",
  "영어 2학년": "eng-elementary-2",
  "영어 3학년": "eng-elementary-3",
  "영어 4학년": "eng-elementary-4",
  "영어 5학년": "eng-elementary-5",
  "영어 6학년": "eng-elementary-6",
};

const GK_CATEGORY_MAP: Record<string, string> = {
  "상식 5세": "gk-age-5",
  "상식 6세": "gk-age-6",
  "상식 7세": "gk-age-7",
  "상식 8세": "gk-age-8",
  "상식 9세": "gk-age-9",
  "상식 10세": "gk-age-10",
  "상식 11세": "gk-age-11",
  "상식 12세": "gk-age-12",
};

const DIFF_EQ_CATEGORY_MAP: Record<string, string> = {
  "미분방정식": "diff-eq-ode",
  "적분변환": "diff-eq-transform",
  "편미분방정식": "diff-eq-pde",
  "분산형 PDE 기초": "diff-eq-dispersive",
  "분산형 PDE": "diff-eq-dispersive",
  "분산형 PDE 연구": "diff-eq-dispersive",
};

function getGradeKey(category: string): string {
  if (category.startsWith("5세")) return "preschool-5";
  if (category.startsWith("6세")) return "preschool-6";
  if (category.startsWith("7세")) return "preschool-7";
  const m = category.match(/^(\d)학년/);
  if (m) return `elementary-${m[1]}`;
  if (ENG_CATEGORY_MAP[category]) return ENG_CATEGORY_MAP[category];
  if (GK_CATEGORY_MAP[category]) return GK_CATEGORY_MAP[category];
  if (DIFF_EQ_CATEGORY_MAP[category]) return DIFF_EQ_CATEGORY_MAP[category];
  return "unknown";
}

/* ── 레슨 → 퀴즈 문제 변환 ── */

function extractQuestions(lessons: any[]): QuizQuestion[] {
  const out: QuizQuestion[] = [];
  for (const lesson of lessons) {
    const gradeKey = getGradeKey(lesson.category);
    if (gradeKey === "unknown") continue;
    for (const p of lesson.problems ?? []) {
      if (p.type !== "choice" || !Array.isArray(p.choices) || p.choices.length < 2) continue;
      out.push({
        id: p.id,
        gradeKey,
        category: lesson.category,
        lessonId: String(lesson.id),
        lessonTitle: lesson.title ?? lesson.category,
        question: p.question,
        choices: p.choices,
        answer: p.answer,
        explanation: p.explanation ?? "",
        hints: Array.isArray(p.hints) ? p.hints : [],
        wrongAnalysis: p.wrongAnalysis ?? "",
        learningObjective: lesson.question ?? lesson.title ?? lesson.category,
        commonMistakes: Array.isArray(lesson.summary?.commonMistakes)
          ? lesson.summary.commonMistakes
          : [],
        nextConnection: lesson.summary?.nextConnection ?? "",
        difficulty: p.difficulty ?? 1,
      });
    }
  }
  return out;
}

const allQuestions: QuizQuestion[] = [
  ...extractQuestions(preschoolLessons),
  ...extractQuestions(elementaryLessons),
  ...extractQuestions(diffEqLessons),
  ...extractQuestions(englishLessons),
  ...extractQuestions(generalKnowledgeLessons),
];

/* ── gradeKey 별 인덱스 ── */

const questionsByGrade = new Map<string, QuizQuestion[]>();
for (const q of allQuestions) {
  let arr = questionsByGrade.get(q.gradeKey);
  if (!arr) { arr = []; questionsByGrade.set(q.gradeKey, arr); }
  arr.push(q);
}

/* ── 공개 API ── */

export function getRandomQuestions(count: number, gradeKey: string): QuizQuestion[] {
  const pool = questionsByGrade.get(gradeKey) || [];
  if (pool.length === 0) return [];

  const hard = pool.filter((q) => q.difficulty >= 3);
  const rest = pool.filter((q) => q.difficulty < 3);

  const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

  // 고난도 1~2문제 보장
  const hardCount = Math.min(hard.length, Math.max(1, Math.floor(count * 0.15)));
  const normalCount = count - hardCount;

  const picked: QuizQuestion[] = [
    ...shuffle(hard).slice(0, hardCount),
    ...shuffle(rest).slice(0, normalCount),
  ];

  // 부족하면 나머지 풀에서 채움
  if (picked.length < count) {
    const ids = new Set(picked.map((q) => q.id));
    const remaining = shuffle(pool).filter((q) => !ids.has(q.id));
    picked.push(...remaining.slice(0, count - picked.length));
  }

  // 고난도가 중간~후반에 배치되도록 셔플 (첫 문제는 쉬운 걸로)
  const easyFirst = picked.filter((q) => q.difficulty < 3);
  const hardOnes = picked.filter((q) => q.difficulty >= 3);
  const ordered: QuizQuestion[] = [];
  const easyShuffled = shuffle(easyFirst);
  const hardShuffled = shuffle(hardOnes);

  // 고난도를 전체의 40~70% 지점에 삽입
  let hardIdx = 0;
  for (let i = 0; i < picked.length; i++) {
    const ratio = picked.length > 1 ? i / (picked.length - 1) : 0;
    if (hardIdx < hardShuffled.length && ratio >= 0.4 && ratio <= 0.8) {
      ordered.push(hardShuffled[hardIdx++]);
    } else if (easyShuffled.length > 0) {
      ordered.push(easyShuffled.shift()!);
    }
  }
  // 남은 문제 추가
  ordered.push(...hardShuffled.slice(hardIdx), ...easyShuffled);

  return ordered.slice(0, count);
}

export interface GradeInfo {
  key: string;
  label: string;
  questionCount: number;
}

const GRADE_LABELS: Record<string, string> = {
  "preschool-5": "5세",
  "preschool-6": "6세",
  "preschool-7": "7세 (예비초등)",
  "elementary-1": "1학년",
  "elementary-2": "2학년",
  "elementary-3": "3학년",
  "elementary-4": "4학년",
  "elementary-5": "5학년",
  "elementary-6": "6학년",
  "eng-preschool-5": "영어 5세",
  "eng-preschool-6": "영어 6세",
  "eng-preschool-7": "영어 7세 (예비초등)",
  "eng-elementary-1": "영어 1학년",
  "eng-elementary-2": "영어 2학년",
  "eng-elementary-3": "영어 3학년",
  "eng-elementary-4": "영어 4학년",
  "eng-elementary-5": "영어 5학년",
  "eng-elementary-6": "영어 6학년",
  "gk-age-5": "상식 5세",
  "gk-age-6": "상식 6세",
  "gk-age-7": "상식 7세",
  "gk-age-8": "상식 8세",
  "gk-age-9": "상식 9세",
  "gk-age-10": "상식 10세",
  "gk-age-11": "상식 11세",
  "gk-age-12": "상식 12세",
  "diff-eq-ode": "상미분방정식 (ODE)",
  "diff-eq-transform": "적분변환",
  "diff-eq-pde": "편미분방정식 (PDE)",
  "diff-eq-dispersive": "분산형 PDE",
};

export function getAvailableGrades(): GradeInfo[] {
  const grades: GradeInfo[] = [];
  for (const [key, label] of Object.entries(GRADE_LABELS)) {
    const count = (questionsByGrade.get(key) || []).length;
    if (count > 0) grades.push({ key, label, questionCount: count });
  }
  return grades;
}

/* ── 게임 설정 ── */

export interface GameSettings {
  questionCount: number;
  timeLimitSeconds: number;
}

const SETTINGS: Record<string, GameSettings> = {
  "preschool-5": { questionCount: 5, timeLimitSeconds: 20 },
  "preschool-6": { questionCount: 8, timeLimitSeconds: 20 },
  "preschool-7": { questionCount: 10, timeLimitSeconds: 20 },
  "elementary-1": { questionCount: 10, timeLimitSeconds: 20 },
  "elementary-2": { questionCount: 10, timeLimitSeconds: 20 },
  "elementary-3": { questionCount: 10, timeLimitSeconds: 25 },
  "elementary-4": { questionCount: 10, timeLimitSeconds: 25 },
  "elementary-5": { questionCount: 10, timeLimitSeconds: 30 },
  "elementary-6": { questionCount: 10, timeLimitSeconds: 30 },
  "eng-preschool-5": { questionCount: 5, timeLimitSeconds: 20 },
  "eng-preschool-6": { questionCount: 8, timeLimitSeconds: 20 },
  "eng-preschool-7": { questionCount: 10, timeLimitSeconds: 20 },
  "eng-elementary-1": { questionCount: 10, timeLimitSeconds: 20 },
  "eng-elementary-2": { questionCount: 10, timeLimitSeconds: 20 },
  "eng-elementary-3": { questionCount: 10, timeLimitSeconds: 25 },
  "eng-elementary-4": { questionCount: 10, timeLimitSeconds: 25 },
  "eng-elementary-5": { questionCount: 10, timeLimitSeconds: 30 },
  "eng-elementary-6": { questionCount: 10, timeLimitSeconds: 30 },
  "gk-age-5": { questionCount: 10, timeLimitSeconds: 20 },
  "gk-age-6": { questionCount: 10, timeLimitSeconds: 20 },
  "gk-age-7": { questionCount: 15, timeLimitSeconds: 20 },
  "gk-age-8": { questionCount: 15, timeLimitSeconds: 25 },
  "gk-age-9": { questionCount: 15, timeLimitSeconds: 25 },
  "gk-age-10": { questionCount: 15, timeLimitSeconds: 30 },
  "gk-age-11": { questionCount: 15, timeLimitSeconds: 30 },
  "gk-age-12": { questionCount: 15, timeLimitSeconds: 30 },
  "diff-eq-ode": { questionCount: 10, timeLimitSeconds: 45 },
  "diff-eq-transform": { questionCount: 10, timeLimitSeconds: 45 },
  "diff-eq-pde": { questionCount: 10, timeLimitSeconds: 45 },
  "diff-eq-dispersive": { questionCount: 10, timeLimitSeconds: 60 },
};

export function getGameSettings(gradeKey: string): GameSettings {
  return SETTINGS[gradeKey] ?? { questionCount: 10, timeLimitSeconds: 20 };
}
