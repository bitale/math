import { FC, useRef, useState } from "react";
import { Lesson, Problem, WrongNoteEntry } from "../types";
import HintBox from "./HintBox";
import AnswerFeedback from "./AnswerFeedback";
import MathText from "./MathText";
import MathKeyboard from "./MathKeyboard";
import { judgeAnswer } from "../utils/judge";
import {
  addWrongNote,
  removeWrongNote,
  setProblemResult,
} from "../utils/storage";

interface Props {
  lesson: Lesson;
  onAllSolved?: () => void;
}

type Status = "idle" | "correct" | "wrong" | "revealed";

interface State {
  userAnswer: string;
  revealedHints: number;
  status: Status;
  judgeMessage: string;
}

const initialState: State = {
  userAnswer: "",
  revealedHints: 0,
  status: "idle",
  judgeMessage: "",
};

/* ── 숫자 입력 (number 타입) ── */

const NumberInput: FC<{
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}> = ({ value, onChange, disabled }) => (
  <input
    type="text"
    inputMode="decimal"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    disabled={disabled}
    placeholder="숫자로 답을 입력하세요 (예: 3.14)"
    className="w-full rounded-xl border border-navy-200 px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-navy-300 disabled:bg-navy-50"
  />
);

/* ── 메인 컴포넌트 ── */

export const ProblemTab: FC<Props> = ({ lesson, onAllSolved }) => {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState<State>(initialState);

  const problem: Problem | undefined = lesson.problems[index];

  if (!problem) {
    return (
      <div className="card p-6 text-center">
        <div className="text-lg font-bold text-navy-900">
          이 단원의 모든 문제를 풀었습니다!
        </div>
        <p className="mt-2 text-sm text-navy-700 leading-7">
          요약 탭에서 핵심 내용을 정리한 뒤, 다음 단원으로 넘어가 보세요.
        </p>
      </div>
    );
  }

  const isText = problem.type === "text";

  /* 자동 채점 제출 (number, choice) */
  const submitAuto = () => {
    const result = judgeAnswer(problem, state.userAnswer);
    setProblemResult(problem.id, result.correct);

    if (result.correct) {
      removeWrongNote(problem.id);
    } else {
      addWrongNote({
        lessonId: lesson.id,
        problemId: problem.id,
        question: problem.question,
        userAnswer: state.userAnswer,
        correctAnswer: problem.answer,
        explanation: problem.explanation,
        wrongAnalysis: problem.wrongAnalysis,
        timestamp: Date.now(),
      });
    }

    setState((prev) => ({
      ...prev,
      status: result.correct ? "correct" : "wrong",
      judgeMessage: result.reason,
    }));
  };

  /* 정답 공개 (text 타입) */
  const revealAnswer = () => {
    setState((prev) => ({
      ...prev,
      status: "revealed",
      judgeMessage: "",
    }));
  };

  /* 자기 채점 (text 타입) */
  const selfCheck = (correct: boolean) => {
    setProblemResult(problem.id, correct);

    if (correct) {
      removeWrongNote(problem.id);
    } else {
      addWrongNote({
        lessonId: lesson.id,
        problemId: problem.id,
        question: problem.question,
        userAnswer: "(서술형 — 자기 채점)",
        correctAnswer: problem.answer,
        explanation: problem.explanation,
        wrongAnalysis: problem.wrongAnalysis,
        timestamp: Date.now(),
      });
    }

    setState((prev) => ({
      ...prev,
      status: correct ? "correct" : "wrong",
      judgeMessage: correct ? "정답입니다!" : "다시 풀어 보세요.",
    }));
  };

  const nextProblem = () => {
    if (index + 1 < lesson.problems.length) {
      setIndex(index + 1);
      setState(initialState);
    } else {
      onAllSolved?.();
      setIndex(index + 1);
      setState(initialState);
    }
  };

  const revealHint = () => {
    setState((prev) => ({
      ...prev,
      revealedHints: Math.min(prev.revealedHints + 1, problem.hints.length),
    }));
  };

  const isDone = state.status === "correct" || state.status === "wrong";

  return (
    <div className="space-y-5">
      {/* 진행 바 */}
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-navy-600">
          문제 {index + 1} / {lesson.problems.length}
        </div>
        <div className="flex items-center gap-2">
          {isText && (
            <span className="chip bg-amber-50 text-amber-700">서술형</span>
          )}
          <span className="chip bg-navy-50 text-navy-700">
            난이도{" "}
            {"★".repeat(problem.difficulty) +
              "☆".repeat(3 - problem.difficulty)}
          </span>
        </div>
      </div>

      <article className="card p-5">
        {/* 문제 */}
        <div className="text-[15px] md:text-base text-navy-900 leading-8">
          <MathText>{problem.question}</MathText>
        </div>

        {/* 입력 영역 */}
        <div className="mt-4">
          {problem.type === "choice" ? (
            /* 객관식 */
            <div className="grid sm:grid-cols-2 gap-2">
              {problem.choices?.map((choice, idx) => {
                const selected = state.userAnswer === choice;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() =>
                      setState((prev) => ({ ...prev, userAnswer: choice }))
                    }
                    disabled={state.status !== "idle"}
                    className={`p-3 rounded-xl border text-left text-sm transition ${
                      selected
                        ? "border-navy-500 bg-navy-50 text-navy-900"
                        : "border-navy-100 hover:bg-navy-50 text-navy-800"
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    <span className="font-semibold mr-2 text-navy-600">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    <MathText>{choice}</MathText>
                  </button>
                );
              })}
            </div>
          ) : problem.type === "number" ? (
            /* 숫자 입력 */
            <NumberInput
              value={state.userAnswer}
              onChange={(v) =>
                setState((prev) => ({ ...prev, userAnswer: v }))
              }
              disabled={state.status !== "idle"}
            />
          ) : (
            /* 서술형 — 안내 문구 */
            state.status === "idle" && (
              <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 text-sm text-amber-900 leading-7">
                <div className="font-semibold mb-1">서술형 문제</div>
                종이나 노트에 직접 풀어 본 뒤, 아래 "정답 확인" 버튼을 눌러 정답과 비교해 보세요.
              </div>
            )
          )}
        </div>

        {/* 버튼 영역 */}
        <div className="mt-4 flex flex-wrap gap-2">
          {state.status === "idle" && (
            <>
              {isText ? (
                /* 서술형: 정답 확인 버튼 */
                <button
                  type="button"
                  className="btn-primary"
                  onClick={revealAnswer}
                >
                  정답 확인
                </button>
              ) : (
                /* 객관식/숫자: 제출 버튼 */
                <button
                  type="button"
                  className="btn-primary"
                  onClick={submitAuto}
                  disabled={state.userAnswer.trim() === ""}
                >
                  정답 제출
                </button>
              )}
              <button
                type="button"
                className="btn-secondary"
                onClick={revealHint}
                disabled={state.revealedHints >= problem.hints.length}
              >
                힌트 보기 ({state.revealedHints}/{problem.hints.length})
              </button>
            </>
          )}

          {/* 서술형: 정답 공개 후 자기 채점 */}
          {state.status === "revealed" && (
            <div className="w-full space-y-3">
              <div className="card p-4 bg-emerald-50 border-emerald-200">
                <div className="text-xs font-semibold text-emerald-800">
                  정답
                </div>
                <div className="mt-2 text-base font-semibold text-emerald-900 leading-8">
                  <MathText>{problem.answer}</MathText>
                </div>
              </div>
              <div className="card p-4">
                <div className="text-xs font-semibold text-navy-700">해설</div>
                <div className="mt-2 text-[15px] text-navy-800 leading-8">
                  <MathText>{problem.explanation}</MathText>
                </div>
              </div>
              <div className="text-sm font-semibold text-navy-700">
                내 풀이가 맞았나요?
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="btn-primary bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => selfCheck(true)}
                >
                  맞았어요
                </button>
                <button
                  type="button"
                  className="btn-primary bg-rose-600 hover:bg-rose-700"
                  onClick={() => selfCheck(false)}
                >
                  틀렸어요
                </button>
              </div>
            </div>
          )}

          {/* 다음 문제 버튼 */}
          {isDone && (
            <button
              type="button"
              className="btn-primary"
              onClick={nextProblem}
            >
              {index + 1 < lesson.problems.length
                ? "다음 문제"
                : "문제 풀이 완료"}
            </button>
          )}
        </div>
      </article>

      {/* 힌트 */}
      <HintBox
        hints={problem.hints}
        revealed={state.revealedHints}
        onReveal={revealHint}
      />

      {/* 자동 채점 결과 (number, choice) */}
      {!isText && <AnswerFeedback status={state.status} message={state.judgeMessage} />}

      {/* 해설 (자동 채점 후) */}
      {isDone && !isText && (
        <div className="space-y-4">
          <div className="card p-5">
            <div className="text-xs font-semibold text-navy-700">해설</div>
            <div className="mt-2 text-[15px] text-navy-800 leading-8">
              <MathText>{problem.explanation}</MathText>
            </div>
            <div className="mt-3 card p-3 bg-emerald-50 border-emerald-200">
              <span className="text-xs font-semibold text-emerald-800">
                정답
              </span>
              <span className="ml-2 font-bold text-emerald-900">
                <MathText>{problem.answer}</MathText>
              </span>
            </div>
          </div>

          {state.status === "wrong" && (
            <div className="card p-5 bg-rose-50/60 border-rose-200">
              <div className="text-xs font-semibold text-rose-800">
                오답 분석
              </div>
              <div className="mt-2 text-[15px] text-rose-900 leading-8">
                <MathText>{problem.wrongAnalysis}</MathText>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 서술형 오답 분석 (자기 채점에서 틀렸을 때) */}
      {isText && state.status === "wrong" && (
        <div className="card p-5 bg-rose-50/60 border-rose-200">
          <div className="text-xs font-semibold text-rose-800">
            오답 분석
          </div>
          <div className="mt-2 text-[15px] text-rose-900 leading-8">
            <MathText>{problem.wrongAnalysis}</MathText>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemTab;
