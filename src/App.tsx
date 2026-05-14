import { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CurriculumPage from "./components/CurriculumPage";
import LessonPage from "./components/LessonPage";
import WrongNotePage from "./components/WrongNotePage";
import { lessons } from "./data/lessons";
import { Route, WrongNoteEntry } from "./types";
import {
  getCompletedLessons,
  getLastLessonId,
  getWrongNotes,
  removeWrongNote,
  setLessonCompleted,
} from "./utils/storage";

export default function App() {
  const [route, setRoute] = useState<Route>({ name: "home" });
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [lastLessonId, setLastLesson] = useState<number | null>(null);
  const [wrongNotes, setWrongNotes] = useState<WrongNoteEntry[]>([]);

  useEffect(() => {
    setCompletedIds(getCompletedLessons());
    setLastLesson(getLastLessonId());
    setWrongNotes(getWrongNotes());
  }, []);

  const refreshWrongNotes = () => setWrongNotes(getWrongNotes());

  const navigate = (next: Route) => {
    setRoute(next);
    refreshWrongNotes();
    setCompletedIds(getCompletedLessons());
    setLastLesson(getLastLessonId());
  };

  const markCompleted = (lessonId: number) => {
    setLessonCompleted(lessonId);
    setCompletedIds(getCompletedLessons());
  };

  let content: JSX.Element;
  if (route.name === "home") {
    content = (
      <HomePage
        lessons={lessons}
        completedIds={completedIds}
        lastLessonId={lastLessonId}
        onNavigate={navigate}
      />
    );
  } else if (route.name === "curriculum") {
    content = (
      <CurriculumPage
        lessons={lessons}
        completedIds={completedIds}
        onNavigate={navigate}
      />
    );
  } else if (route.name === "wrong-note") {
    content = (
      <WrongNotePage
        entries={wrongNotes}
        onNavigate={navigate}
        onRemove={(pid) => {
          removeWrongNote(pid);
          refreshWrongNotes();
        }}
      />
    );
  } else {
    const lesson = lessons.find((l) => l.id === route.lessonId);
    if (!lesson) {
      content = (
        <div className="max-w-3xl mx-auto p-8 text-center">
          <h1 className="text-xl font-bold text-rose-700">
            존재하지 않는 단원입니다.
          </h1>
          <button
            type="button"
            className="btn-primary mt-4"
            onClick={() => navigate({ name: "curriculum" })}
          >
            커리큘럼으로 돌아가기
          </button>
        </div>
      );
    } else {
      content = (
        <LessonPage
          lesson={lesson}
          lessons={lessons}
          completedIds={completedIds}
          onNavigate={navigate}
          onMarkCompleted={markCompleted}
        />
      );
    }
  }

  return (
    <div className="min-h-screen">
      <Header
        route={route}
        onNavigate={navigate}
        wrongCount={wrongNotes.length}
      />
      <main>{content}</main>
      <footer className="border-t border-navy-100 mt-16 py-8 text-center text-xs text-navy-500">
        © 변화율에서 편미분방정식까지 — 학습용 데모 앱
      </footer>
    </div>
  );
}
