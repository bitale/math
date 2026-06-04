import { FC, useMemo } from "react";
import { Lesson, Route } from "../types";
import LessonCard from "./LessonCard";
import ProgressBar from "./ProgressBar";

interface Props {
  lessons: Lesson[];
  completedIds: number[];
  onNavigate: (route: Route) => void;
}

export const CurriculumPage: FC<Props> = ({
  lessons,
  completedIds,
  onNavigate,
}) => {
  const grouped = useMemo(() => {
    const map = new Map<string, Lesson[]>();
    lessons.forEach((l) => {
      const list = map.get(l.category) ?? [];
      list.push(l);
      map.set(l.category, list);
    });
    return Array.from(map.entries());
  }, [lessons]);

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900">
            커리큘럼
          </h1>
          <p className="mt-2 text-sm text-navy-700 leading-7">
            총 32단원을 카테고리별로 정리했어요. 단원 카드를 클릭하면 학습이
            시작됩니다.
          </p>
        </div>
        <div className="w-full md:w-72">
          <ProgressBar
            value={completedIds.length}
            max={lessons.length}
            label="완료한 단원"
          />
        </div>
      </div>

      <div className="mt-8 space-y-10">
        {grouped.map(([category, items]) => (
          <section key={category}>
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-lg font-bold text-navy-900">{category}</h2>
              <span className="text-xs text-navy-600">
                {items.filter((l) => completedIds.includes(l.id)).length} /{" "}
                {items.length} 완료
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map((lesson) => {
                const displayNum = lessons.indexOf(lesson) + 1;
                return (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    displayNum={displayNum}
                    completed={completedIds.includes(lesson.id)}
                    onClick={() =>
                      onNavigate({ name: "lesson", lessonId: lesson.id })
                    }
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CurriculumPage;
