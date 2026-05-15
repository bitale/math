import { FC } from "react";
import { SubjectConfig } from "../types";

interface Props {
  subjects: SubjectConfig[];
  onSelect: (subjectId: string) => void;
}

export const SubjectSelectPage: FC<Props> = ({ subjects, onSelect }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
          개념과 문제를 함께 배우는 수학 학습 앱
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight">
          어떤 주제를 학습할까요?
        </h1>
        <p className="mt-4 text-base md:text-lg text-navy-700 max-w-2xl mx-auto leading-8">
          학습할 주제를 선택하세요. 각 주제는 독립적으로 진행되며, 언제든지
          자유롭게 전환할 수 있어요.
        </p>
      </section>

      <section className="mt-12 grid md:grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            type="button"
            onClick={() => onSelect(subject.id)}
            className="card p-8 text-left hover:-translate-y-1 hover:shadow-lg transition group"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${subject.color} grid place-items-center text-white font-bold text-2xl`}
              >
                {subject.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-navy-500 uppercase tracking-wider">
                  {subject.subtitle}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-navy-900 group-hover:text-navy-700 transition">
                  {subject.title}
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm text-navy-700 leading-7">
              {subject.description}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <span className="chip bg-navy-50 text-navy-700">
                총 {subject.lessons.length}단원
              </span>
              <span className="text-sm font-semibold text-navy-500 group-hover:text-navy-700 transition">
                학습 시작 →
              </span>
            </div>
          </button>
        ))}
      </section>
    </div>
  );
};

export default SubjectSelectPage;
