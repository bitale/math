import { FC } from "react";
import { Lesson } from "../types";
import MathText from "./MathText";

interface Props {
  lesson: Lesson;
  completed: boolean;
  onClick: () => void;
}

const levelColor: Record<string, string> = {
  입문: "bg-emerald-100 text-emerald-800",
  기초: "bg-sky-100 text-sky-800",
  중급: "bg-amber-100 text-amber-800",
  고급: "bg-rose-100 text-rose-800",
  심화: "bg-purple-100 text-purple-800",
};

export const LessonCard: FC<Props> = ({ lesson, completed, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="card p-5 text-left hover:-translate-y-0.5 hover:shadow-md transition w-full h-full flex flex-col"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-navy-500">
          #{String(lesson.id).padStart(2, "0")} · {lesson.category}
        </span>
        <span
          className={`chip ${
            completed
              ? "bg-emerald-100 text-emerald-800"
              : "bg-navy-50 text-navy-600"
          }`}
        >
          {completed ? "완료" : "미완료"}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-navy-900">{lesson.title}</h3>
      <div className="mt-2 text-sm text-navy-700 line-clamp-3 leading-6">
        <MathText>{lesson.question}</MathText>
      </div>
      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-navy-50">
        <span
          className={`chip ${
            levelColor[lesson.level] ?? "bg-navy-50 text-navy-700"
          }`}
        >
          {lesson.level}
        </span>
        <span className="chip bg-purple-50 text-purple-700">
          문제 {lesson.problems.length}개
        </span>
        <span className="chip bg-navy-50 text-navy-700">
          예제 {lesson.examples.length}개
        </span>
      </div>
    </button>
  );
};

export default LessonCard;
