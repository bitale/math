import { FC } from "react";
import { Lesson } from "../types";
import MathText from "./MathText";

interface Props {
  lesson: Lesson;
}

export const ExampleTab: FC<Props> = ({ lesson }) => {
  return (
    <div className="space-y-6">
      {lesson.examples.map((ex, idx) => (
        <article key={idx} className="card p-5">
          <div className="text-xs font-semibold text-navy-600">
            예제 {idx + 1}
          </div>
          <h3 className="mt-1 text-lg font-bold text-navy-900">{ex.title}</h3>
          <div className="mt-3 card p-4 bg-navy-50/40 border-navy-100">
            <div className="text-xs font-semibold text-navy-700">문제</div>
            <div className="mt-1 text-[15px] text-navy-900 leading-8">
              <MathText>{ex.problem}</MathText>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm font-semibold text-navy-900">
              단계별 풀이
            </div>
            <ol className="mt-2 space-y-2 list-decimal pl-5 text-[15px] text-navy-800 leading-8">
              {ex.steps.map((s, i) => (
                <li key={i}>
                  <MathText>{s}</MathText>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-4 card p-4 bg-emerald-50 border-emerald-200">
            <div className="text-xs font-semibold text-emerald-800">
              최종 답
            </div>
            <div className="mt-1 text-base font-semibold text-emerald-900">
              <MathText>{ex.answer}</MathText>
            </div>
          </div>

          <div className="mt-4 card p-4 bg-purple-50/60 border-purple-200">
            <div className="text-xs font-semibold text-purple-800">
              이 예제에서 배워야 할 점
            </div>
            <div className="mt-1 text-[15px] text-purple-900 leading-7">
              <MathText>{ex.lesson}</MathText>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ExampleTab;
