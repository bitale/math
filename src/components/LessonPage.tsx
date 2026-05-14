import { FC, useEffect, useState } from "react";
import { Lesson, Route } from "../types";
import ConceptTab from "./ConceptTab";
import ExampleTab from "./ExampleTab";
import ProblemTab from "./ProblemTab";
import SummaryTab from "./SummaryTab";
import MathText from "./MathText";
import {
  setLastLessonId,
  setLessonCompleted,
} from "../utils/storage";

type TabKey = "concept" | "example" | "problem" | "summary";

const TABS: { key: TabKey; label: string }[] = [
  { key: "concept", label: "개념" },
  { key: "example", label: "예제" },
  { key: "problem", label: "문제" },
  { key: "summary", label: "요약" },
];

interface Props {
  lesson: Lesson;
  lessons: Lesson[];
  completedIds: number[];
  onNavigate: (route: Route) => void;
  onMarkCompleted: (lessonId: number) => void;
}

export const LessonPage: FC<Props> = ({
  lesson,
  lessons,
  completedIds,
  onNavigate,
  onMarkCompleted,
}) => {
  const [tab, setTab] = useState<TabKey>("concept");

  useEffect(() => {
    setLastLessonId(lesson.id);
    setTab("concept");
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [lesson.id]);

  const nextLesson = lessons.find((l) => l.id === lesson.id + 1);
  const prevLesson = lessons.find((l) => l.id === lesson.id - 1);
  const completed = completedIds.includes(lesson.id);

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-6">
      <button
        type="button"
        onClick={() => onNavigate({ name: "curriculum" })}
        className="text-sm text-navy-600 hover:text-navy-900"
      >
        ← 커리큘럼으로
      </button>

      <header className="mt-3">
        <div className="text-xs font-bold text-navy-500">
          #{String(lesson.id).padStart(2, "0")} · {lesson.category} ·{" "}
          {lesson.level}
        </div>
        <h1 className="mt-1 text-2xl md:text-3xl font-bold text-navy-900">
          {lesson.title}
        </h1>
        <div className="mt-2 text-sm text-navy-700 leading-7">
          <MathText>{lesson.question}</MathText>
        </div>
      </header>

      <nav className="mt-5 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
              tab === t.key ? "tab-active" : "tab-inactive"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <section className="mt-6">
        {tab === "concept" && <ConceptTab lesson={lesson} />}
        {tab === "example" && <ExampleTab lesson={lesson} />}
        {tab === "problem" && (
          <ProblemTab
            lesson={lesson}
            onAllSolved={() => onMarkCompleted(lesson.id)}
          />
        )}
        {tab === "summary" && (
          <SummaryTab
            lesson={lesson}
            nextLesson={nextLesson}
            onNavigate={onNavigate}
            onMarkCompleted={() => {
              setLessonCompleted(lesson.id);
              onMarkCompleted(lesson.id);
            }}
            completed={completed}
          />
        )}
      </section>

      <footer className="mt-10 flex justify-between text-sm">
        {prevLesson ? (
          <button
            type="button"
            className="btn-ghost"
            onClick={() =>
              onNavigate({ name: "lesson", lessonId: prevLesson.id })
            }
          >
            ← {prevLesson.title}
          </button>
        ) : (
          <span />
        )}
        {nextLesson ? (
          <button
            type="button"
            className="btn-ghost"
            onClick={() =>
              onNavigate({ name: "lesson", lessonId: nextLesson.id })
            }
          >
            {nextLesson.title} →
          </button>
        ) : (
          <span />
        )}
      </footer>
    </div>
  );
};

export default LessonPage;
