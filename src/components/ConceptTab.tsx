import { FC } from "react";
import { Lesson } from "../types";
import FormulaCard from "./FormulaCard";
import MathText from "./MathText";
import MathGraph from "./MathGraph";
import RichContent from "./RichContent";

interface Props {
  lesson: Lesson;
}

export const ConceptTab: FC<Props> = ({ lesson }) => {
  const visuals = lesson.concept.visuals;

  return (
    <div className="space-y-6">
      <section className="card p-5">
        <div className="text-xs font-semibold text-purple-700 uppercase tracking-wider">
          오늘의 질문
        </div>
        <div className="mt-2 text-lg md:text-xl font-bold text-navy-900 leading-9">
          <MathText>{lesson.question}</MathText>
        </div>
      </section>

      <section className="card p-5 prose-kor">
        <h3 className="text-base font-bold text-navy-900">개념 설명</h3>
        <div className="mt-3 text-[15px] text-navy-800 leading-8">
          <RichContent>{lesson.concept.intro}</RichContent>
        </div>
      </section>

      {/* ── 시각화 그래프 ── */}
      {visuals && visuals.length > 0 && (
        <section className="card p-5">
          <h3 className="text-base font-bold text-navy-900 mb-2">시각화</h3>
          {visuals.map((v, i) => (
            <MathGraph key={i} config={v} />
          ))}
        </section>
      )}

      <section className="card p-5 prose-kor bg-amber-50/40 border-amber-100">
        <h3 className="text-base font-bold text-amber-900">직관적 비유</h3>
        <div className="mt-3 text-[15px] text-amber-900 leading-8">
          <RichContent>{lesson.concept.intuition}</RichContent>
        </div>
      </section>

      <FormulaCard
        title="공식 정리"
        formula={lesson.concept.formula}
        note="공식만 외우지 말고, 위의 직관과 함께 떠올려 보세요."
      />

      <section className="card p-5 prose-kor">
        <h3 className="text-base font-bold text-navy-900">핵심 요약</h3>
        <div className="mt-3 text-[15px] text-navy-800 leading-8">
          <RichContent>{lesson.concept.summary}</RichContent>
        </div>
      </section>
    </div>
  );
};

export default ConceptTab;
