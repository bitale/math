import { QuizQuestion } from "./quizTypes";

/*
 * 수학(유아+초등) 문제 절차적 생성기.
 *
 * 정적 데이터가 학년당 15~38문제뿐이라 금방 반복된다. 이 모듈은 산술/세기/비교/규칙 등을
 * 코드 템플릿으로 무제한 생성해 풀(pool)을 매 게임마다 새로 채운다. API/비용 없음.
 *
 * 각 생성기는 GenSpec(문제+선택지+해설+힌트+오답분석+난이도)을 반환하고,
 * generateMathQuestions()가 검증(정답이 선택지에 정확히 포함/선택지 중복 없음)을 거쳐
 * QuizQuestion으로 변환한다. 정답 문자열은 반드시 선택지 중 하나와 글자까지 동일해야 한다
 * (서버가 `choices[idx] === answer`로 채점하므로).
 *
 * LaTeX 주의: 템플릿 리터럴에서 `\t`(\times)·`\f`(\frac) 등은 제어문자로 해석되므로
 * 반드시 `\\`로 이스케이프한다. 아래 TIMES/DIV/frac 헬퍼를 쓰면 안전.
 */

interface GenSpec {
  category: string;
  lessonTitle: string;
  learningObjective: string;
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
  hints: string[];
  wrongAnalysis: string;
  commonMistakes: string[];
  nextConnection: string;
  difficulty: number;
}

type Gen = () => GenSpec;

/* ── 공용 유틸 ── */

const ri = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const TIMES = "\\times";
const DIV = "\\div";
const frac = (a: number | string, b: number | string): string => `\\frac{${a}}{${b}}`;
const M = (s: number | string): string => `$${s}$`; // 인라인 수식 한 토막

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

function sampleDistinct(min: number, max: number, n: number): number[] {
  const out: number[] = [];
  let guard = 0;
  while (out.length < n && guard < n * 40) {
    guard++;
    const v = ri(min, max);
    if (!out.includes(v)) out.push(v);
  }
  return out;
}

/**
 * 숫자 정답용 선택지 빌더. correct를 fmt로 포맷해 정답으로 쓰고, extra(오답 후보)와
 * correct±d 폴백으로 서로 다른 보기 3개를 채워 4지선다를 만든다. 음수는 제외.
 */
function numericChoices(
  correct: number,
  extra: number[] = [],
  fmt: (n: number) => string = (n) => M(n),
): { choices: string[]; answer: string } {
  const answer = fmt(correct);
  const seen = new Set<string>([answer]);
  const out: string[] = [];
  const push = (v: number) => {
    if (out.length >= 3 || v < 0) return;
    const s = fmt(v);
    if (!seen.has(s)) {
      seen.add(s);
      out.push(s);
    }
  };
  for (const v of extra) push(v);
  let d = 1;
  while (out.length < 3 && d < 80) {
    push(correct + d);
    push(correct - d);
    d++;
  }
  return { choices: shuffle([answer, ...out]), answer };
}

/** 문자열 정답용 선택지 빌더(분수 등). candidates에서 서로 다른 보기 3개를 채운다. */
function stringChoices(answer: string, candidates: string[]): { choices: string[]; answer: string } {
  const seen = new Set<string>([answer]);
  const out: string[] = [];
  for (const c of candidates) {
    if (out.length >= 3) break;
    if (!seen.has(c)) {
      seen.add(c);
      out.push(c);
    }
  }
  return { choices: shuffle([answer, ...out]), answer };
}

/** 정수 tenths(예: 7 → "0.7", 12 → "1.2")를 소수 문자열로. */
const decStr = (tenths: number): string => {
  const whole = Math.trunc(tenths / 10);
  const fr = Math.abs(tenths % 10);
  return `${whole}.${fr}`;
};
const decM = (tenths: number): string => M(decStr(tenths));

/* ──────────────────────────────────────────────────────────────────────
 * 공통 산술 생성기 빌더 (여러 학년이 범위만 바꿔 재사용)
 * ────────────────────────────────────────────────────────────────────── */

function nextNumberGen(maxN: number, cat: string, title: string): Gen {
  return () => {
    const n = ri(1, maxN - 1);
    const { choices, answer } = numericChoices(n + 1, [n - 1, n, n + 2]);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "수의 순서를 알고 다음에 오는 수를 찾을 수 있어요.",
      question: `${M(n)} 다음에 오는 수는?`,
      choices,
      answer,
      explanation: `수를 셀 때는 하나씩 커져요. ${M(n)} 바로 다음은 ${M(n + 1)}이에요.`,
      hints: ["수를 순서대로 소리 내어 세어 보세요.", `${M(n)}에서 한 칸 더 가면 돼요.`],
      wrongAnalysis: "다음 수와 바로 앞 수를 헷갈리면 작은 수를 고르기 쉬워요.",
      commonMistakes: ["‘다음 수’와 ‘앞 수’를 반대로 고르기"],
      nextConnection: "수의 순서를 알면 1씩 더하는 덧셈으로 이어져요.",
      difficulty: 1,
    };
  };
}

function beforeNumberGen(maxN: number, cat: string, title: string): Gen {
  return () => {
    const n = ri(2, maxN);
    const { choices, answer } = numericChoices(n - 1, [n + 1, n, n - 2]);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "수의 순서를 알고 바로 앞에 오는 수를 찾을 수 있어요.",
      question: `${M(n)} 바로 앞의 수는?`,
      choices,
      answer,
      explanation: `바로 앞의 수는 하나 작은 수예요. ${M(n)} 앞은 ${M(n - 1)}이에요.`,
      hints: ["수를 거꾸로 세어 보세요.", `${M(n)}에서 한 칸 되돌아가면 돼요.`],
      wrongAnalysis: "‘앞’을 ‘다음’으로 생각하면 더 큰 수를 고르게 돼요.",
      commonMistakes: ["앞의 수 대신 다음 수를 고르기"],
      nextConnection: "1씩 작아지는 규칙은 뺄셈의 바탕이 돼요.",
      difficulty: 1,
    };
  };
}

function compareGen(maxN: number, biggest: boolean, cat: string, title: string): Gen {
  return () => {
    const nums = sampleDistinct(1, maxN, 4);
    const target = biggest ? Math.max(...nums) : Math.min(...nums);
    const answer = M(target);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "수의 크기를 비교할 수 있어요.",
      question: `다음 중 가장 ${biggest ? "큰" : "작은"} 수는?`,
      choices: shuffle(nums.map((n) => M(n))),
      answer,
      explanation: `${nums.join(", ")} 중에서 가장 ${biggest ? "큰" : "작은"} 수는 ${M(target)}이에요.`,
      hints: ["수를 작은 것부터 순서대로 늘어놓아 보세요.", "자릿수가 많을수록 큰 수예요."],
      wrongAnalysis: `가장 ${biggest ? "큰" : "작은"} 수 대신 반대쪽 수를 고르기 쉬워요.`,
      commonMistakes: ["가장 큰 수와 가장 작은 수를 혼동하기"],
      nextConnection: "수의 크기 비교는 부등호(>, <)로 이어져요.",
      difficulty: 1,
    };
  };
}

function addGen(opts: {
  build: () => [number, number];
  cat: string;
  title: string;
  difficulty: number;
}): Gen {
  return () => {
    const [a, b] = opts.build();
    const sum = a + b;
    const { choices, answer } = numericChoices(sum, [sum + 1, sum - 1, sum + 10, sum - 10, a, b]);
    return {
      category: opts.cat,
      lessonTitle: opts.title,
      learningObjective: "두 수를 더해 합을 구할 수 있어요.",
      question: `${M(`${a} + ${b}`)} 는 얼마일까요?`,
      choices,
      answer,
      explanation: `${M(a)}에 ${M(b)}를 더하면 ${M(sum)}이에요. ${M(`${a} + ${b} = ${sum}`)}.`,
      hints: [`${M(a)}에서 ${M(b)}만큼 이어 세어 보세요.`, "큰 수에서 작은 수만큼 더하면 빨라요."],
      wrongAnalysis: "받아올림을 빠뜨리면 일의 자리만 더해 답이 작아져요.",
      commonMistakes: ["받아올림한 1을 십의 자리에 더하지 않기"],
      nextConnection: "덧셈이 익숙해지면 두 자리 수의 받아올림으로 이어져요.",
      difficulty: opts.difficulty,
    };
  };
}

function subGen(opts: {
  build: () => [number, number];
  cat: string;
  title: string;
  difficulty: number;
}): Gen {
  return () => {
    const [a, b] = opts.build();
    const diff = a - b;
    const { choices, answer } = numericChoices(diff, [diff + 1, diff - 1, diff + 10, a + b]);
    return {
      category: opts.cat,
      lessonTitle: opts.title,
      learningObjective: "두 수의 차를 구할 수 있어요.",
      question: `${M(`${a} - ${b}`)} 는 얼마일까요?`,
      choices,
      answer,
      explanation: `${M(a)}에서 ${M(b)}를 빼면 ${M(diff)}이에요. ${M(`${a} - ${b} = ${diff}`)}.`,
      hints: [`${M(a)}에서 ${M(b)}만큼 거꾸로 세어 보세요.`, "더해서 확인해 보세요: 답 + 빼는 수 = 처음 수."],
      wrongAnalysis: "받아내림을 잊으면 일의 자리에서 큰 수를 작은 수로 잘못 빼요.",
      commonMistakes: ["받아내림을 하지 않고 큰 숫자에서 작은 숫자를 빼기"],
      nextConnection: "뺄셈은 덧셈과 역연산이라 함께 익히면 좋아요.",
      difficulty: opts.difficulty,
    };
  };
}

function sequenceGen(cat: string, title: string): Gen {
  return () => {
    const step = pick([1, 1, 2]);
    const start = ri(1, 14);
    const terms = [0, 1, 2, 3, 4].map((i) => start + i * step);
    const blank = ri(1, 3);
    const target = terms[blank];
    const shown = terms.map((t, i) => (i === blank ? "?" : String(t))).join(", ");
    const { choices, answer } = numericChoices(target, [target + step, target - step, target + 1, target - 1]);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "수의 규칙(몇씩 커지는지)을 찾아 빈칸을 채울 수 있어요.",
      question: `${M(shown)} — 빈칸에 들어갈 수는?`,
      choices,
      answer,
      explanation: `${M(step)}씩 커지는 규칙이에요. 빈칸에는 ${M(target)}이 들어가요.`,
      hints: ["앞뒤 수의 차이를 살펴보세요.", `${M(step)}씩 더해지고 있어요.`],
      wrongAnalysis: "규칙(몇씩 커지는지)을 잘못 보면 한 칸 어긋난 수를 고르게 돼요.",
      commonMistakes: ["증가하는 양을 1로만 생각하기"],
      nextConnection: "수의 규칙 찾기는 뛰어 세기와 곱셈으로 이어져요.",
      difficulty: 2,
    };
  };
}

function placeValueGen(cat: string, title: string): Gen {
  return () => {
    const a = ri(1, 9);
    const b = ri(0, 9);
    const n = a * 10 + b;
    const { choices, answer } = numericChoices(n, [b * 10 + a, a + b, n + 1, n - 1, n + 10]);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "십의 자리와 일의 자리를 이해할 수 있어요.",
      question: `${M(10)}이 ${M(a)}개, ${M(1)}이 ${M(b)}개이면 얼마일까요?`,
      choices,
      answer,
      explanation: `${M(10)}이 ${M(a)}개면 ${M(a * 10)}, 여기에 낱개 ${M(b)}을 더하면 ${M(n)}이에요.`,
      hints: ["십의 자리부터 생각해 보세요.", `${M(`${a}0 + ${b}`)} 를 계산해요.`],
      wrongAnalysis: "두 숫자를 그냥 이어 붙이거나 자리를 바꿔 쓰면 틀려요.",
      commonMistakes: ["십의 자리와 일의 자리를 뒤바꿔 쓰기"],
      nextConnection: "자릿값을 알면 받아올림·받아내림을 이해하기 쉬워요.",
      difficulty: 2,
    };
  };
}

function multTableGen(cat: string, title: string, difficulty = 2): Gen {
  return () => {
    const a = ri(2, 9);
    const b = ri(2, 9);
    const p = a * b;
    const { choices, answer } = numericChoices(p, [p + a, p - a, p + b, p - b, a + b, a * (b + 1)]);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "곱셈구구를 외워 곱을 구할 수 있어요.",
      question: `${M(`${a} ${TIMES} ${b}`)} 는 얼마일까요?`,
      choices,
      answer,
      explanation: `${M(`${a} ${TIMES} ${b}`)}는 ${M(a)}를 ${M(b)}번 더한 것과 같아요. 답은 ${M(p)}이에요.`,
      hints: [`${a}단을 떠올려 보세요.`, `${M(a)}씩 ${M(b)}번 뛰어 세어 보세요.`],
      wrongAnalysis: "곱셈을 덧셈으로 착각하면 훨씬 작은 수를 고르게 돼요.",
      commonMistakes: ["곱셈을 덧셈으로 계산하기"],
      nextConnection: "곱셈구구는 두 자리 수 곱셈과 나눗셈의 바탕이에요.",
      difficulty,
    };
  };
}

function multBigGen(opts: {
  build: () => [number, number];
  cat: string;
  title: string;
  difficulty: number;
}): Gen {
  return () => {
    const [a, b] = opts.build();
    const p = a * b;
    const { choices, answer } = numericChoices(p, [p + a, p - a, p + b, p - b, p + 10, p - 10]);
    return {
      category: opts.cat,
      lessonTitle: opts.title,
      learningObjective: "여러 자리 수의 곱셈을 할 수 있어요.",
      question: `${M(`${a} ${TIMES} ${b}`)} 는 얼마일까요?`,
      choices,
      answer,
      explanation: `${M(`${a} ${TIMES} ${b} = ${p}`)} 이에요. 자리마다 나누어 곱한 뒤 더하면 돼요.`,
      hints: ["일의 자리부터 차례로 곱해 보세요.", "각 자리의 곱을 자릿값에 맞춰 더해요."],
      wrongAnalysis: "자릿값을 맞추지 않고 더하면 답이 크게 어긋나요.",
      commonMistakes: ["부분 곱을 자릿수에 맞춰 정렬하지 않기"],
      nextConnection: "큰 수의 곱셈은 넓이·비율 계산으로 이어져요.",
      difficulty: opts.difficulty,
    };
  };
}

function divExactGen(opts: {
  buildBC: () => [number, number]; // [나누는 수 B, 몫 C], A = B*C
  cat: string;
  title: string;
  difficulty: number;
}): Gen {
  return () => {
    const [b, c] = opts.buildBC();
    const a = b * c;
    const { choices, answer } = numericChoices(c, [c + 1, c - 1, a - b, b, c + 2]);
    return {
      category: opts.cat,
      lessonTitle: opts.title,
      learningObjective: "나눗셈으로 똑같이 나눈 몫을 구할 수 있어요.",
      question: `${M(`${a} ${DIV} ${b}`)} 는 얼마일까요?`,
      choices,
      answer,
      explanation: `${M(a)}을 ${M(b)}묶음으로 똑같이 나누면 한 묶음에 ${M(c)}이에요. ${M(`${b} ${TIMES} ${c} = ${a}`)}.`,
      hints: [`${b}단에서 ${M(a)}이 되는 곱을 찾아보세요.`, "곱셈을 거꾸로 생각하면 나눗셈이에요."],
      wrongAnalysis: "곱셈구구가 흔들리면 몫을 한두 칸 어긋나게 골라요.",
      commonMistakes: ["나눗셈을 뺄셈으로 계산하기"],
      nextConnection: "나눗셈은 분수·약수와 자연스럽게 이어져요.",
      difficulty: opts.difficulty,
    };
  };
}

/* ──────────────────────────────────────────────────────────────────────
 * 고학년 전용 생성기 (소수/분수/약수배수/백분율/평균)
 * ────────────────────────────────────────────────────────────────────── */

function decimalAddGen(cat: string, title: string): Gen {
  return () => {
    let a = ri(1, 9);
    let b = ri(1, 12);
    while ((a + b) % 10 === 0) b = ri(1, 12);
    const sum = a + b;
    const { choices, answer } = numericChoices(sum, [sum + 1, sum - 1, sum + 10, sum - 10], decM);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "소수의 덧셈을 할 수 있어요.",
      question: `${M(`${decStr(a)} + ${decStr(b)}`)} 는 얼마일까요?`,
      choices,
      answer,
      explanation: `소수점끼리 맞추어 더하면 돼요. ${M(`${decStr(a)} + ${decStr(b)} = ${decStr(sum)}`)}.`,
      hints: ["소수점의 자리를 맞춰 세로로 더해 보세요.", "0.1이 모두 몇 개인지 세어도 돼요."],
      wrongAnalysis: "소수점을 무시하고 더하면 자리가 어긋나 큰 오차가 생겨요.",
      commonMistakes: ["소수점 위치를 맞추지 않고 계산하기"],
      nextConnection: "소수의 덧셈은 소수의 곱셈·나눗셈으로 이어져요.",
      difficulty: 2,
    };
  };
}

function decimalSubGen(cat: string, title: string): Gen {
  return () => {
    let a = ri(5, 19);
    let b = ri(1, a - 1);
    while ((a - b) % 10 === 0) b = ri(1, a - 1);
    const diff = a - b;
    const { choices, answer } = numericChoices(diff, [diff + 1, diff - 1, diff + 10, a + b], decM);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "소수의 뺄셈을 할 수 있어요.",
      question: `${M(`${decStr(a)} - ${decStr(b)}`)} 는 얼마일까요?`,
      choices,
      answer,
      explanation: `소수점을 맞추어 빼면 돼요. ${M(`${decStr(a)} - ${decStr(b)} = ${decStr(diff)}`)}.`,
      hints: ["소수점의 자리를 맞춰 세로로 빼 보세요.", "0.1이 몇 개 남는지 세어도 돼요."],
      wrongAnalysis: "소수점을 맞추지 않으면 자리가 밀려 답이 크게 틀려요.",
      commonMistakes: ["소수점 위치를 맞추지 않고 계산하기"],
      nextConnection: "소수의 뺄셈은 거스름돈·길이 계산에 바로 쓰여요.",
      difficulty: 2,
    };
  };
}

function fractionAddSameDenGen(cat: string, title: string): Gen {
  return () => {
    const d = pick([5, 7, 9]);
    let a = 1;
    let b = 1;
    let guard = 0;
    do {
      a = ri(1, d - 2);
      b = ri(1, d - 1 - a);
      guard++;
    } while (gcd(a + b, d) !== 1 && guard < 40);
    const s = a + b;
    const answer = M(frac(s, d));
    const { choices } = stringChoices(answer, [
      M(frac(s, d + d)), // 분모끼리 더한 실수
      M(frac(s + 1, d)),
      M(frac(Math.abs(a - b), d)),
      M(frac(s - 1, d)),
    ]);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "분모가 같은 분수의 덧셈을 할 수 있어요.",
      question: `${M(`${frac(a, d)} + ${frac(b, d)}`)} 는 얼마일까요?`,
      choices,
      answer,
      explanation: `분모가 같으면 분자끼리만 더하고 분모는 그대로 둬요. ${M(`${frac(a, d)} + ${frac(b, d)} = ${frac(s, d)}`)}.`,
      hints: ["분모는 바뀌지 않아요.", "분자 두 개를 더해 보세요."],
      wrongAnalysis: "분모끼리도 더하면 안 돼요. 분모는 그대로 두는 게 핵심이에요.",
      commonMistakes: ["분모끼리 더해 버리기"],
      nextConnection: "분모가 같은 덧셈을 익히면 분모가 다른 분수의 덧셈으로 나아가요.",
      difficulty: 3,
    };
  };
}

function divisorPickGen(cat: string, title: string): Gen {
  return () => {
    const n = pick([6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 24]);
    const divisors: number[] = [];
    const nonDivisors: number[] = [];
    for (let k = 2; k <= n; k++) {
      if (n % k === 0 && k !== n) divisors.push(k);
      else if (n % k !== 0) nonDivisors.push(k);
    }
    const target = pick(divisors);
    const distractors = shuffle(nonDivisors).slice(0, 3);
    const answer = M(target);
    const { choices } = stringChoices(answer, distractors.map((d) => M(d)));
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "약수의 뜻을 알고 약수를 찾을 수 있어요.",
      question: `다음 중 ${M(n)}의 약수는?`,
      choices,
      answer,
      explanation: `약수는 나누어떨어지게 하는 수예요. ${M(`${n} ${DIV} ${target} = ${n / target}`)} 로 ${M(n)}을 나누어떨어지게 해요.`,
      hints: [`${M(n)}을 나누어 보세요.`, "나머지가 0이면 약수예요."],
      wrongAnalysis: "나누어떨어지는지 확인하지 않으면 배수와 헷갈리기 쉬워요.",
      commonMistakes: ["약수와 배수를 혼동하기"],
      nextConnection: "약수를 알면 최대공약수와 약분으로 이어져요.",
      difficulty: 2,
    };
  };
}

function multiplePickGen(cat: string, title: string): Gen {
  return () => {
    const k = ri(2, 9);
    const q = ri(2, 9);
    const target = k * q;
    const cand = new Set<number>();
    let off = 1;
    while (cand.size < 3 && off < 30) {
      for (const v of [target + off, target - off]) {
        if (v > 0 && v % k !== 0) cand.add(v);
      }
      off++;
    }
    const answer = M(target);
    const { choices } = stringChoices(answer, [...cand].map((v) => M(v)));
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "배수의 뜻을 알고 배수를 찾을 수 있어요.",
      question: `다음 중 ${M(k)}의 배수는?`,
      choices,
      answer,
      explanation: `${M(k)}의 배수는 ${M(k)}씩 뛰어 센 수예요. ${M(`${k} ${TIMES} ${q} = ${target}`)}.`,
      hints: [`${k}단을 떠올려 보세요.`, `${M(k)}로 나누어떨어지는 수를 찾아요.`],
      wrongAnalysis: "배수를 약수와 헷갈리면 더 작은 수를 고르게 돼요.",
      commonMistakes: ["배수와 약수를 혼동하기"],
      nextConnection: "배수를 알면 최소공배수와 통분으로 이어져요.",
      difficulty: 2,
    };
  };
}

function percentOfGen(cat: string, title: string): Gen {
  return () => {
    const cases: Array<[number, () => number]> = [
      [10, () => ri(2, 9) * 10],
      [20, () => ri(2, 9) * 5],
      [25, () => ri(2, 9) * 4],
      [50, () => ri(2, 12) * 2],
    ];
    const [p, makeN] = pick(cases);
    const n = makeN();
    const ans = (n * p) / 100;
    const { choices, answer } = numericChoices(ans, [ans * 2, Math.round(ans / 2), n - ans, ans + 1, ans - 1]);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "백분율로 전체의 일부를 구할 수 있어요.",
      question: `${M(n)}의 ${M(`${p}\\%`)} 는 얼마일까요?`,
      choices,
      answer,
      explanation: `${M(`${p}\\%`)}는 ${M(frac(p, 100))}이에요. ${M(`${n} ${TIMES} ${frac(p, 100)} = ${ans}`)}.`,
      hints: [`${M(`${p}\\%`)}를 분수 ${M(frac(p, 100))}로 바꿔 보세요.`, "전체에 비율을 곱하면 돼요."],
      wrongAnalysis: "백분율을 그대로 곱하면(100으로 나누지 않으면) 답이 100배 커져요.",
      commonMistakes: ["100으로 나누는 단계를 빠뜨리기"],
      nextConnection: "백분율은 할인·이자·비율 그래프로 이어져요.",
      difficulty: 3,
    };
  };
}

function averageGen(cat: string, title: string): Gen {
  return () => {
    let a = ri(1, 30);
    let b = ri(1, 30);
    let c = ri(1, 30);
    while ((a + b + c) % 3 !== 0) c = ri(1, 30);
    const mean = (a + b + c) / 3;
    const { choices, answer } = numericChoices(mean, [a, b, c, mean + 1, mean - 1, Math.round((a + b + c) / 2)]);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "여러 수의 평균을 구할 수 있어요.",
      question: `${M(`${a}, ${b}, ${c}`)} 세 수의 평균은?`,
      choices,
      answer,
      explanation: `모두 더한 뒤 개수로 나눠요. ${M(`(${a} + ${b} + ${c}) ${DIV} 3 = ${mean}`)}.`,
      hints: ["먼저 세 수를 모두 더하세요.", "그 합을 3으로 나누면 평균이에요."],
      wrongAnalysis: "개수로 나누는 단계를 잊으면 합을 답으로 고르게 돼요.",
      commonMistakes: ["합을 개수로 나누지 않기"],
      nextConnection: "평균은 통계의 대표값과 그래프 해석으로 이어져요.",
      difficulty: 3,
    };
  };
}

function decimalTimesPowGen(cat: string, title: string): Gen {
  return () => {
    let t = ri(11, 99);
    while (t % 10 === 0) t = ri(11, 99);
    const ans = t; // decStr(t) × 10 = t (정수)
    const answer = M(ans);
    const { choices } = stringChoices(answer, [
      decM(t), // 자리 안 옮긴 실수
      M(t * 10), // ×100으로 착각
      M(t + 1),
      M(t - 1),
    ]);
    return {
      category: cat,
      lessonTitle: title,
      learningObjective: "소수에 10을 곱하면 소수점이 한 자리 이동함을 안다.",
      question: `${M(`${decStr(t)} ${TIMES} 10`)} 는 얼마일까요?`,
      choices,
      answer,
      explanation: `10을 곱하면 소수점이 오른쪽으로 한 칸 옮겨가요. ${M(`${decStr(t)} ${TIMES} 10 = ${ans}`)}.`,
      hints: ["소수점이 어느 쪽으로 움직이는지 생각해 보세요.", "10배는 소수점 한 칸, 100배는 두 칸이에요."],
      wrongAnalysis: "소수점을 옮기지 않으면 값이 그대로라 틀려요.",
      commonMistakes: ["10을 곱해도 소수점을 옮기지 않기"],
      nextConnection: "소수점 이동은 단위 변환(cm↔m 등)에 바로 쓰여요.",
      difficulty: 2,
    };
  };
}

/* ──────────────────────────────────────────────────────────────────────
 * 학년별 생성기 등록
 * ────────────────────────────────────────────────────────────────────── */

const MATH_GENERATORS: Record<string, Gen[]> = {
  // ── 유아 ──
  "preschool-5": [
    nextNumberGen(10, "5세 수와 세기", "수와 세기"),
    beforeNumberGen(10, "5세 수와 세기", "수와 세기"),
    compareGen(10, true, "5세 비교", "수의 비교"),
    compareGen(10, false, "5세 비교", "수의 비교"),
    addGen({ build: () => { const a = ri(1, 4); return [a, ri(1, 5 - a)]; }, cat: "5세 모으기", title: "모으기와 가르기", difficulty: 2 }),
  ],
  "preschool-6": [
    nextNumberGen(20, "6세 수와 세기", "수와 세기"),
    compareGen(20, true, "6세 비교", "수의 비교"),
    addGen({ build: () => { const a = ri(1, 9); return [a, ri(1, 10 - a)]; }, cat: "6세 덧셈", title: "10까지의 덧셈", difficulty: 1 }),
    subGen({ build: () => { const a = ri(2, 10); return [a, ri(1, a - 1)]; }, cat: "6세 뺄셈", title: "10까지의 뺄셈", difficulty: 2 }),
  ],
  "preschool-7": [
    addGen({ build: () => { const a = ri(1, 19); return [a, ri(1, 20 - a)]; }, cat: "7세 덧셈", title: "20까지의 덧셈", difficulty: 2 }),
    subGen({ build: () => { const a = ri(2, 20); return [a, ri(1, a - 1)]; }, cat: "7세 뺄셈", title: "20까지의 뺄셈", difficulty: 2 }),
    sequenceGen("7세 규칙", "수의 규칙"),
    compareGen(20, true, "7세 수와 연산", "수의 비교"),
  ],

  // ── 초등 ──
  "elementary-1": [
    addGen({
      build: () => {
        const o1 = ri(1, 8), o2 = ri(0, 9 - o1), t1 = ri(1, 8), t2 = ri(0, 9 - t1);
        return [t1 * 10 + o1, t2 * 10 + o2];
      },
      cat: "1학년 수와 연산", title: "받아올림 없는 덧셈", difficulty: 1,
    }),
    subGen({ build: () => { const a = ri(20, 99); return [a, ri(1, a - 1)]; }, cat: "1학년 수와 연산", title: "두 자리 수의 뺄셈", difficulty: 2 }),
    placeValueGen("1학년 수와 연산", "자릿값"),
    compareGen(99, true, "1학년 수와 연산", "수의 비교"),
  ],
  "elementary-2": [
    addGen({ build: () => { const a = ri(100, 800); return [a, ri(50, 999 - a)]; }, cat: "2학년 수와 연산", title: "세 자리 수의 덧셈", difficulty: 2 }),
    subGen({ build: () => { const a = ri(200, 999); return [a, ri(50, a - 1)]; }, cat: "2학년 수와 연산", title: "세 자리 수의 뺄셈", difficulty: 2 }),
    multTableGen("2학년 곱셈구구", "곱셈구구", 2),
    compareGen(999, true, "2학년 수와 연산", "수의 비교"),
  ],
  "elementary-3": [
    multTableGen("3학년 곱셈", "곱셈구구", 2),
    multBigGen({ build: () => [ri(11, 99), ri(2, 9)], cat: "3학년 곱셈", title: "두 자리 × 한 자리", difficulty: 3 }),
    divExactGen({ buildBC: () => [ri(2, 9), ri(2, 9)], cat: "3학년 나눗셈", title: "나눗셈", difficulty: 2 }),
    addGen({ build: () => { const a = ri(100, 800); return [a, ri(50, 999 - a)]; }, cat: "3학년 수와 연산", title: "덧셈", difficulty: 2 }),
  ],
  "elementary-4": [
    multBigGen({ build: () => [ri(11, 40), ri(11, 30)], cat: "4학년 곱셈", title: "두 자리 × 두 자리", difficulty: 3 }),
    divExactGen({ buildBC: () => [ri(2, 9), ri(11, 30)], cat: "4학년 나눗셈", title: "나눗셈", difficulty: 2 }),
    fractionAddSameDenGen("4학년 분수", "분모가 같은 분수의 덧셈"),
    multBigGen({ build: () => [ri(11, 99), ri(2, 9)], cat: "4학년 곱셈", title: "두 자리 × 한 자리", difficulty: 2 }),
  ],
  "elementary-5": [
    decimalAddGen("5학년 소수", "소수의 덧셈"),
    decimalSubGen("5학년 소수", "소수의 뺄셈"),
    divisorPickGen("5학년 약수와 배수", "약수"),
    multiplePickGen("5학년 약수와 배수", "배수"),
  ],
  "elementary-6": [
    percentOfGen("6학년 비와 비율", "백분율"),
    averageGen("6학년 자료와 평균", "평균"),
    decimalTimesPowGen("6학년 소수", "소수와 10의 곱"),
    fractionAddSameDenGen("6학년 분수", "분수의 덧셈"),
  ],
};

/** 이 gradeKey에 절차적 생성기가 있는지. */
export function hasGenerator(gradeKey: string): boolean {
  return (MATH_GENERATORS[gradeKey]?.length ?? 0) > 0;
}

/**
 * gradeKey의 생성기로 서로 다른 문제 최대 count개를 만든다. 생성기가 없으면 [].
 * 정답이 선택지에 정확히 포함되고 보기가 4개·중복 없음인 문제만 통과시킨다(방어).
 */
export function generateMathQuestions(gradeKey: string, count: number): QuizQuestion[] {
  const gens = MATH_GENERATORS[gradeKey];
  if (!gens || gens.length === 0 || count <= 0) return [];

  const out: QuizQuestion[] = [];
  const seenQ = new Set<string>();
  let guard = 0;
  while (out.length < count && guard < count * 15) {
    guard++;
    let spec: GenSpec;
    try {
      spec = pick(gens)();
    } catch {
      continue;
    }
    if (!spec || seenQ.has(spec.question)) continue;
    // 검증: 정답이 선택지에 글자까지 일치하고, 선택지 4개가 모두 서로 다른지
    if (spec.choices.length < 4) continue;
    if (!spec.choices.includes(spec.answer)) continue;
    if (new Set(spec.choices).size !== spec.choices.length) continue;

    seenQ.add(spec.question);
    out.push({
      id: `gen-${gradeKey}-${out.length}`,
      gradeKey,
      category: spec.category,
      lessonId: `gen-${gradeKey}`,
      lessonTitle: spec.lessonTitle,
      question: spec.question,
      choices: spec.choices,
      answer: spec.answer,
      explanation: spec.explanation,
      hints: spec.hints,
      wrongAnalysis: spec.wrongAnalysis,
      learningObjective: spec.learningObjective,
      commonMistakes: spec.commonMistakes,
      nextConnection: spec.nextConnection,
      difficulty: spec.difficulty,
    });
  }
  return out;
}
