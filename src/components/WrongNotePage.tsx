import { FC } from "react";
import { Route, WrongNoteEntry } from "../types";
import MathText from "./MathText";

interface Props {
  entries: WrongNoteEntry[];
  onNavigate: (route: Route) => void;
  onRemove: (problemId: string) => void;
}

export const WrongNotePage: FC<Props> = ({ entries, onNavigate, onRemove }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-navy-900">
        오답 노트
      </h1>
      <p className="mt-2 text-sm text-navy-700 leading-7">
        틀린 문제는 자동으로 이곳에 모여요. 일주일 뒤 다시 풀어보면 개념이
        진짜로 자리잡았는지 확인할 수 있어요.
      </p>

      {entries.length === 0 ? (
        <div className="card p-8 text-center mt-6">
          <div className="text-lg font-bold text-navy-900">
            아직 기록된 오답이 없어요.
          </div>
          <p className="mt-2 text-sm text-navy-700 leading-7">
            지금부터 문제를 풀어보면, 틀린 문제는 여기 자동으로 저장돼요.
          </p>
          <button
            type="button"
            className="btn-primary mt-4"
            onClick={() => onNavigate({ name: "curriculum" })}
          >
            커리큘럼으로 가기
          </button>
        </div>
      ) : (
        <ul className="mt-6 space-y-4">
          {entries.map((entry) => (
            <li key={entry.problemId} className="card p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-navy-600">
                  단원 #{entry.lessonId} · 문제 {entry.problemId}
                </span>
                <span className="text-xs text-navy-500">
                  {new Date(entry.timestamp).toLocaleString("ko-KR")}
                </span>
              </div>
              <div className="mt-2 text-[15px] text-navy-900 leading-7">
                <MathText>{entry.question}</MathText>
              </div>
              <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                <div className="card p-3 bg-rose-50/50 border-rose-200">
                  <div className="text-xs font-semibold text-rose-800">
                    내가 쓴 답
                  </div>
                  <div className="mt-1 text-rose-900 font-medium break-words">
                    {entry.userAnswer || "(미입력)"}
                  </div>
                </div>
                <div className="card p-3 bg-emerald-50/60 border-emerald-200">
                  <div className="text-xs font-semibold text-emerald-800">
                    정답
                  </div>
                  <div className="mt-1 text-emerald-900 font-medium break-words">
                    <MathText>{entry.correctAnswer}</MathText>
                  </div>
                </div>
              </div>
              <div className="mt-3 card p-3">
                <div className="text-xs font-semibold text-navy-700">해설</div>
                <div className="mt-1 text-sm text-navy-800 leading-7">
                  <MathText>{entry.explanation}</MathText>
                </div>
              </div>
              <div className="mt-2 card p-3 bg-amber-50/60 border-amber-200">
                <div className="text-xs font-semibold text-amber-800">
                  오답 분석
                </div>
                <div className="mt-1 text-sm text-amber-900 leading-7">
                  <MathText>{entry.wrongAnalysis}</MathText>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() =>
                    onNavigate({ name: "lesson", lessonId: entry.lessonId })
                  }
                >
                  다시 풀기
                </button>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => onRemove(entry.problemId)}
                >
                  노트에서 지우기
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WrongNotePage;
