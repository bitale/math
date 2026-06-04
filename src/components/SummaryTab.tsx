import { FC } from "react";
import { Lesson, Route } from "../types";
import MathText from "./MathText";

interface Props {
  lesson: Lesson;
  nextLesson?: Lesson;
  onNavigate: (route: Route) => void;
  onMarkCompleted: () => void;
  completed: boolean;
}

export const SummaryTab: FC<Props> = ({
  lesson,
  nextLesson,
  onNavigate,
  onMarkCompleted,
  completed,
}) => {
  return (
    <div className="space-y-5">
      <section className="card p-5">
        <h3 className="text-base font-bold text-navy-900">단원 핵심 요약</h3>
        <ul className="mt-3 space-y-2 list-disc pl-5 text-[15px] text-navy-800 leading-8">
          {lesson.summary.keyPoints.map((point, idx) => (
            <li key={idx}>
              <MathText>{point}</MathText>
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-5 bg-navy-50/40 border-navy-200">
        <h3 className="text-base font-bold text-navy-900">
          반드시 기억할 공식
        </h3>
        <ul className="mt-3 space-y-2 text-[15px] text-navy-900 leading-8">
          {lesson.summary.formulas.map((f, idx) => (
            <li
              key={idx}
              className="font-semibold p-3 bg-white rounded-xl border border-navy-100 overflow-x-auto"
            >
              <MathText displayMode>{f}</MathText>
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-5 bg-rose-50/40 border-rose-200">
        <h3 className="text-base font-bold text-rose-900">자주 하는 실수</h3>
        <ul className="mt-3 space-y-2 list-disc pl-5 text-[15px] text-rose-900 leading-8">
          {lesson.summary.commonMistakes.map((m, idx) => (
            <li key={idx}>
              <MathText>{m}</MathText>
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-5 bg-emerald-50/50 border-emerald-200">
        <h3 className="text-base font-bold text-emerald-900">
          다음 단원과의 연결
        </h3>
        <div className="mt-3 text-[15px] text-emerald-900 leading-8">
          <MathText>{lesson.summary.nextConnection}</MathText>
        </div>
      </section>

      <div className="flex flex-wrap gap-2 pt-2">
        <button
          type="button"
          className="btn-primary"
          onClick={onMarkCompleted}
          disabled={completed}
        >
          {completed ? "완료된 단원" : "이 단원 완료 표시"}
        </button>
        {nextLesson && (
          <button
            type="button"
            className="btn-secondary"
            onClick={() =>
              onNavigate({ name: "lesson", lessonId: nextLesson.id })
            }
          >
            다음 단원: <MathText>{nextLesson.title}</MathText> →
          </button>
        )}
        <button
          type="button"
          className="btn-ghost"
          onClick={() => onNavigate({ name: "curriculum" })}
        >
          커리큘럼으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default SummaryTab;
