import { Problem } from "../types";

export interface JudgeResult {
  correct: boolean;
  reason: string;
}

const NUMBER_TOLERANCE = 0.001;

/**
 * LaTeX 마크업을 일반 텍스트로 변환하여 비교 가능하게 만든다.
 * 예: "$\frac{3}{4}$" → "3/4", "$\{2, 8\}$" → "{2,8}"
 */
function stripLatex(value: string): string {
  let s = value;

  // $ 기호 제거
  s = s.replace(/\$+/g, "");

  // \dfrac{a}{b}, \frac{a}{b} → a/b
  s = s.replace(/\\d?frac\{([^{}]+)\}\{([^{}]+)\}/g, "$1/$2");

  // \sqrt{a} → √a, \sqrt[n]{a} → n√a
  s = s.replace(/\\sqrt\[([^\]]+)\]\{([^{}]+)\}/g, "$1√$2");
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, "√$1");

  // \pm → ±
  s = s.replace(/\\pm/g, "±");
  s = s.replace(/\\mp/g, "∓");

  // 비교 기호
  s = s.replace(/\\leq/g, "≤");
  s = s.replace(/\\geq/g, "≥");
  s = s.replace(/\\neq/g, "≠");
  s = s.replace(/\\approx/g, "≈");
  s = s.replace(/\\infty/g, "∞");

  // 집합 기호
  s = s.replace(/\\emptyset/g, "∅");
  s = s.replace(/\\varnothing/g, "∅");
  s = s.replace(/\\in/g, "∈");
  s = s.replace(/\\notin/g, "∉");
  s = s.replace(/\\subset/g, "⊂");
  s = s.replace(/\\subseteq/g, "⊆");
  s = s.replace(/\\cup/g, "∪");
  s = s.replace(/\\cap/g, "∩");
  s = s.replace(/\\setminus/g, "\\");

  // 그리스 문자
  s = s.replace(/\\alpha/g, "α");
  s = s.replace(/\\beta/g, "β");
  s = s.replace(/\\gamma/g, "γ");
  s = s.replace(/\\delta/g, "δ");
  s = s.replace(/\\theta/g, "θ");
  s = s.replace(/\\lambda/g, "λ");
  s = s.replace(/\\sigma/g, "σ");
  s = s.replace(/\\omega/g, "ω");
  s = s.replace(/\\pi/g, "π");
  s = s.replace(/\\phi/g, "φ");

  // 기타 LaTeX 명령어 제거
  s = s.replace(/\\(text|mathrm|mathbb|mathbf|operatorname)\{([^{}]+)\}/g, "$2");
  s = s.replace(/\\(left|right|big|Big|bigg|Bigg)[.()[\]{}|]/g, "");
  s = s.replace(/\\(left|right|big|Big|bigg|Bigg)/g, "");
  s = s.replace(/\\(quad|qquad|,|;|!|\s)/g, " ");
  s = s.replace(/\\times/g, "×");
  s = s.replace(/\\cdot/g, "·");
  s = s.replace(/\\div/g, "÷");
  s = s.replace(/\\Rightarrow/g, "⇒");
  s = s.replace(/\\rightarrow/g, "→");
  s = s.replace(/\\forall/g, "∀");
  s = s.replace(/\\exists/g, "∃");
  s = s.replace(/\\partial/g, "∂");
  s = s.replace(/\\nabla/g, "∇");

  // ^{n} → 윗첨자 유니코드 (일부)
  s = s.replace(/\^\{2\}/g, "²");
  s = s.replace(/\^2/g, "²");
  s = s.replace(/\^\{3\}/g, "³");
  s = s.replace(/\^3/g, "³");

  // 중괄호 이스케이프 제거: \{ → {, \} → }
  s = s.replace(/\\[{}]/g, (m) => m[1]);

  // 남은 \command 제거 (알 수 없는 명령)
  s = s.replace(/\\[a-zA-Z]+/g, "");

  // 남은 단일 백슬래시 제거
  s = s.replace(/\\/g, "");

  return s;
}

/**
 * 비교를 위해 텍스트를 정규화한다.
 * 공백 제거, 소문자 변환, LaTeX 스트립.
 */
function normalize(value: string): string {
  let s = stripLatex(value);
  // 공백·쉼표 뒤 공백 등 정규화
  s = s.replace(/\s+/g, "");
  s = s.toLowerCase();
  // 곱셈 기호 통일
  s = s.replace(/[×·\*]/g, "*");
  // 나눗셈 기호 통일
  s = s.replace(/[÷]/g, "/");
  return s;
}

function parseNumber(value: string): number | null {
  // LaTeX도 처리: "$3$" → "3"
  const cleaned = stripLatex(value).replace(/\s+/g, "").replace(/,/g, "");
  if (cleaned === "") return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

export function judgeAnswer(problem: Problem, userAnswer: string): JudgeResult {
  const userInput = userAnswer ?? "";

  if (userInput.trim() === "") {
    return { correct: false, reason: "답이 입력되지 않았습니다." };
  }

  if (problem.type === "number") {
    const user = parseNumber(userInput);
    const correct = parseNumber(problem.answer);
    if (user === null) {
      return { correct: false, reason: "숫자로 변환할 수 없는 값입니다." };
    }
    if (correct === null) {
      return { correct: false, reason: "정답 데이터를 확인해주세요." };
    }
    const diff = Math.abs(user - correct);
    return {
      correct: diff <= NUMBER_TOLERANCE,
      reason:
        diff <= NUMBER_TOLERANCE
          ? "정답입니다!"
          : `오차 ${diff.toFixed(4)} 만큼 차이가 납니다.`,
    };
  }

  if (problem.type === "choice") {
    // 선택지는 원문 그대로 비교 (LaTeX 포함)
    return {
      correct: userInput.trim() === problem.answer.trim(),
      reason:
        userInput.trim() === problem.answer.trim()
          ? "정답입니다!"
          : "선택한 보기가 정답과 다릅니다.",
    };
  }

  // text 타입: 정규화 후 비교
  const userNorm = normalize(userInput);
  const correctNorm = normalize(problem.answer);

  // 정규화된 문자열이 일치하면 정답
  if (userNorm === correctNorm) {
    return { correct: true, reason: "정답입니다!" };
  }

  // 숫자로도 파싱 시도 (text인데 숫자 답인 경우)
  const userNum = parseNumber(userInput);
  const correctNum = parseNumber(problem.answer);
  if (userNum !== null && correctNum !== null) {
    const diff = Math.abs(userNum - correctNum);
    if (diff <= NUMBER_TOLERANCE) {
      return { correct: true, reason: "정답입니다!" };
    }
  }

  return {
    correct: false,
    reason: "정답과 일치하지 않습니다.",
  };
}
