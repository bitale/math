import { subjects } from "../../src/data/subjects";
import { englishLessons } from "../../src/data/english/index";
import { generalKnowledgeLessons } from "../../src/data/generalKnowledge/index";

type Lesson = {
  id: number | string;
  title: string;
  category: string;
  level: string;
  question: string;
  problems?: Problem[];
  summary?: {
    commonMistakes?: string[];
    nextConnection?: string;
  };
};

type Problem = {
  id: string;
  type: "number" | "text" | "choice";
  difficulty: number;
  question: string;
  choices?: string[];
  answer: string;
  hints?: string[];
  explanation?: string;
  wrongAnalysis?: string;
};

type IssueSeverity = "error" | "warn" | "info";

type Issue = {
  severity: IssueSeverity;
  source: string;
  lessonTitle: string;
  category: string;
  problemId: string;
  field: string;
  message: string;
};

type SourceGroup = {
  source: string;
  lessons: Lesson[];
};

const sourceGroups: SourceGroup[] = [
  ...Object.entries(subjects).map(([source, subject]) => ({
    source,
    lessons: subject.lessons as Lesson[],
  })),
  { source: "english", lessons: englishLessons as Lesson[] },
  { source: "generalKnowledge", lessons: generalKnowledgeLessons as Lesson[] },
];

const MOJIBAKE_PATTERN = /(?:Ã.|Â.|â(?:€|€™|€œ|€|‰|ˆ|œ)|[ìíëê][\u0080-\u02ff]|�)/;
const CONTROL_PATTERN = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/;
const TIME_SENSITIVE_PATTERN = /(현재|요즘|최근|최신|올해|지금|인구|국회의원 수|회원국|정상회의 구성)/;

const gradeRules: Array<{
  source: string;
  categoryPattern: RegExp;
  maxNumber?: number;
  bannedTerms?: RegExp;
  message: string;
}> = [
  {
    source: "preschool",
    categoryPattern: /^5세/,
    maxNumber: 10,
    bannedTerms: /(분수|소수|곱셈|나눗셈|방정식|각도|비율|확률)/,
    message: "5세 문항은 1~5 수 세기, 비교, 기본 도형, 간단한 변화 추적 중심이어야 합니다.",
  },
  {
    source: "preschool",
    categoryPattern: /^6세/,
    maxNumber: 20,
    bannedTerms: /(분수|소수|곱셈구구|방정식|비율|확률)/,
    message: "6세 문항은 10 안팎의 수, 간단한 덧셈·뺄셈, 위치·분류 중심이어야 합니다.",
  },
  {
    source: "preschool",
    categoryPattern: /^7세/,
    maxNumber: 30,
    bannedTerms: /(소수|방정식|비율|확률|음수)/,
    message: "7세 문항은 20까지의 수와 초등 입문 전 단계 중심이어야 합니다.",
  },
  {
    source: "elementary",
    categoryPattern: /^1학년/,
    maxNumber: 100,
    bannedTerms: /(분수|소수|곱셈구구|나눗셈|각도|넓이|부피|비율|확률)/,
    message: "초등 1학년 문항은 수 세기, 두 자리 수, 한 자리 덧셈·뺄셈, 비교와 모양 중심이어야 합니다.",
  },
  {
    source: "elementary",
    categoryPattern: /^2학년/,
    maxNumber: 1000,
    bannedTerms: /(약분|통분|소수|비율|확률|방정식|원주율)/,
    message: "초등 2학년 문항은 세 자리 수, 덧뺄셈, 곱셈구구, 길이·시간 중심이어야 합니다.",
  },
  {
    source: "elementary",
    categoryPattern: /^3학년/,
    bannedTerms: /(약분|통분|비례식|원주율|부피|확률|음수)/,
    message: "초등 3학년 문항은 곱셈·나눗셈, 분수 기초, 원과 평면도형 중심이어야 합니다.",
  },
];

function textFields(lesson: Lesson, problem: Problem): Array<[string, string]> {
  return [
    ["lesson.title", lesson.title],
    ["lesson.category", lesson.category],
    ["problem.question", problem.question],
    ["problem.answer", problem.answer],
    ["problem.explanation", problem.explanation ?? ""],
    ["problem.wrongAnalysis", problem.wrongAnalysis ?? ""],
    ...(problem.choices ?? []).map((choice, index) => [`problem.choices.${index}`, choice] as [string, string]),
    ...(problem.hints ?? []).map((hint, index) => [`problem.hints.${index}`, hint] as [string, string]),
  ];
}

function addIssue(issues: Issue[], severity: IssueSeverity, source: string, lesson: Lesson, problem: Problem, field: string, message: string): void {
  issues.push({
    severity,
    source,
    lessonTitle: lesson.title,
    category: lesson.category,
    problemId: problem.id,
    field,
    message,
  });
}

function numbersIn(text: string): number[] {
  return Array.from(text.matchAll(/(?<![a-zA-Z])-?\d+(?:\.\d+)?/g), (match) => Number(match[0]))
    .filter((value) => Number.isFinite(value));
}

function auditProblem(source: string, lesson: Lesson, problem: Problem, issues: Issue[], seenIds: Map<string, string>): void {
  const scopedId = `${source}:${problem.id}`;
  const idOwner = seenIds.get(scopedId);
  if (idOwner) {
    addIssue(issues, "error", source, lesson, problem, "id", `중복 problem id입니다. 먼저 발견된 위치: ${idOwner}`);
  } else {
    seenIds.set(scopedId, `${source}/${lesson.category}/${lesson.title}`);
  }

  if (!problem.question?.trim()) addIssue(issues, "error", source, lesson, problem, "question", "문항 본문이 비어 있습니다.");
  if (!problem.answer?.trim()) addIssue(issues, "error", source, lesson, problem, "answer", "정답이 비어 있습니다.");
  if (![1, 2, 3].includes(problem.difficulty)) {
    addIssue(issues, "error", source, lesson, problem, "difficulty", "난이도는 1, 2, 3 중 하나여야 합니다.");
  }

  if (!Array.isArray(problem.hints) || problem.hints.length < 2) {
    addIssue(issues, "warn", source, lesson, problem, "hints", "학습용 문항은 최소 2개의 단계적 힌트를 갖는 것이 좋습니다.");
  }
  if (!problem.explanation || problem.explanation.trim().length < 20) {
    addIssue(issues, "warn", source, lesson, problem, "explanation", "해설이 없거나 너무 짧습니다.");
  }
  if (!problem.wrongAnalysis || problem.wrongAnalysis.trim().length < 18) {
    addIssue(issues, "warn", source, lesson, problem, "wrongAnalysis", "오답 분석이 없거나 학습 행동으로 이어지기 어렵습니다.");
  }

  if (problem.type === "choice") {
    if (!Array.isArray(problem.choices)) {
      addIssue(issues, "error", source, lesson, problem, "choices", "choice 문항에 choices 배열이 없습니다.");
    } else {
      if (problem.choices.length < 2 || problem.choices.length > 4) {
        addIssue(issues, "error", source, lesson, problem, "choices", "퀴즈 UI는 2~4개 보기만 안정적으로 지원합니다.");
      }
      const uniqueChoices = new Set(problem.choices);
      if (uniqueChoices.size !== problem.choices.length) {
        addIssue(issues, "error", source, lesson, problem, "choices", "중복 보기가 있습니다.");
      }
      const answerCount = problem.choices.filter((choice) => choice === problem.answer).length;
      if (answerCount !== 1) {
        addIssue(issues, "error", source, lesson, problem, "answer", `정답은 보기 안에 정확히 한 번 있어야 합니다. 현재 ${answerCount}회입니다.`);
      }
    }
  }

  for (const [field, value] of textFields(lesson, problem)) {
    if (MOJIBAKE_PATTERN.test(value) || CONTROL_PATTERN.test(value)) {
      addIssue(issues, "error", source, lesson, problem, field, "깨진 문자나 제어 문자가 포함되어 있습니다.");
    }
    const dollarCount = (value.match(/(?<!\\)\$/g) ?? []).length;
    if (dollarCount % 2 !== 0) {
      addIssue(issues, "error", source, lesson, problem, field, "LaTeX 달러 기호의 개수가 맞지 않습니다.");
    }
  }

  if (source === "generalKnowledge" && TIME_SENSITIVE_PATTERN.test(`${problem.question} ${problem.answer} ${problem.explanation ?? ""}`)) {
    addIssue(issues, "warn", source, lesson, problem, "question", "상식 문항에 시대에 따라 바뀌거나 출처가 필요한 표현이 있습니다.");
  }

  for (const rule of gradeRules) {
    if (rule.source !== source || !rule.categoryPattern.test(lesson.category)) continue;
    const text = `${problem.question} ${problem.answer} ${problem.explanation ?? ""}`;
    if (rule.maxNumber !== undefined) {
      const outOfRange = numbersIn(text).filter((value) => Math.abs(value) > rule.maxNumber);
      if (outOfRange.length > 0) {
        addIssue(issues, "info", source, lesson, problem, "question", `${rule.message} 범위를 벗어날 수 있는 수: ${outOfRange.slice(0, 5).join(", ")}`);
      }
    }
    if (rule.bannedTerms?.test(text)) {
      addIssue(issues, "warn", source, lesson, problem, "question", rule.message);
    }
  }
}

const issues: Issue[] = [];
const seenIds = new Map<string, string>();
const counts = {
  sources: sourceGroups.length,
  lessons: 0,
  problems: 0,
  choice: 0,
  number: 0,
  text: 0,
};

for (const { source, lessons } of sourceGroups) {
  counts.lessons += lessons.length;
  for (const lesson of lessons) {
    for (const problem of lesson.problems ?? []) {
      counts.problems++;
      if (problem.type === "choice") counts.choice++;
      if (problem.type === "number") counts.number++;
      if (problem.type === "text") counts.text++;
      auditProblem(source, lesson, problem, issues, seenIds);
    }
  }
}

const issueCounts = issues.reduce<Record<string, number>>((acc, issue) => {
  acc[issue.severity] = (acc[issue.severity] ?? 0) + 1;
  return acc;
}, {});

const grouped = issues.reduce<Record<string, number>>((acc, issue) => {
  const key = `${issue.source}:${issue.field}:${issue.message}`;
  acc[key] = (acc[key] ?? 0) + 1;
  return acc;
}, {});

const topPatterns = Object.entries(grouped)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 30)
  .map(([pattern, count]) => ({ count, pattern }));

const sampleIssues = issues
  .sort((a, b) => {
    const order = { error: 0, warn: 1, info: 2 };
    return order[a.severity] - order[b.severity] || a.source.localeCompare(b.source) || a.problemId.localeCompare(b.problemId);
  })
  .slice(0, 200);

console.log(JSON.stringify({ counts, issueCounts, topPatterns, sampleIssues }, null, 2));
