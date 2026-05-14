import { Problem } from "../types";

export interface JudgeResult {
  correct: boolean;
  reason: string;
}

const NUMBER_TOLERANCE = 0.001;

function normalizeText(value: string): string {
  return value.replace(/\s+/g, "").toLowerCase();
}

function parseNumber(value: string): number | null {
  const cleaned = value.replace(/\s+/g, "").replace(/,/g, "");
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
          ? "수치 오차 범위 내에서 정답"
          : `오차 ${diff.toFixed(4)} 만큼 차이가 납니다.`,
    };
  }

  if (problem.type === "choice") {
    return {
      correct: userInput.trim() === problem.answer.trim(),
      reason:
        userInput.trim() === problem.answer.trim()
          ? "보기 선택 일치"
          : "선택한 보기가 정답과 다릅니다.",
    };
  }

  const user = normalizeText(userInput);
  const correct = normalizeText(problem.answer);
  return {
    correct: user === correct,
    reason: user === correct ? "텍스트 일치" : "정답 문자열과 일치하지 않습니다.",
  };
}
