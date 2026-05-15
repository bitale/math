import { useEffect, useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CurriculumPage from "./components/CurriculumPage";
import LessonPage from "./components/LessonPage";
import WrongNotePage from "./components/WrongNotePage";
import SubjectSelectPage from "./components/SubjectSelectPage";
import { subjects, subjectList } from "./data/subjects";
import { Route, SubjectConfig, SubjectId, WrongNoteEntry } from "./types";
import {
  getCompletedLessons,
  getLastLessonId,
  getLastSubject,
  getWrongNotes,
  removeWrongNote,
  setLastSubject,
  setLessonCompleted,
  setStorageSubject,
} from "./utils/storage";

export default function App() {
  const [subjectId, setSubjectId] = useState<SubjectId | null>(
    getLastSubject
  );
  const [route, setRoute] = useState<Route>({ name: "select-subject" });
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [lastLessonId, setLastLesson] = useState<number | null>(null);
  const [wrongNotes, setWrongNotes] = useState<WrongNoteEntry[]>([]);

  const subject: SubjectConfig | null = subjectId
    ? subjects[subjectId]
    : null;

  const syncState = () => {
    setCompletedIds(getCompletedLessons());
    setLastLesson(getLastLessonId());
    setWrongNotes(getWrongNotes());
  };

  useEffect(() => {
    if (subjectId) {
      setStorageSubject(subjectId);
      syncState();
    }
  }, [subjectId]);

  const selectSubject = (id: string) => {
    const sid = id as SubjectId;
    setSubjectId(sid);
    setLastSubject(sid);
    setStorageSubject(sid);
    setRoute({ name: "home" });
    setTimeout(syncState, 0);
  };

  const navigate = (next: Route) => {
    setRoute(next);
    syncState();
  };

  const goToSubjectSelect = () => {
    setRoute({ name: "select-subject" });
  };

  const markCompleted = (lessonId: number) => {
    setLessonCompleted(lessonId);
    setCompletedIds(getCompletedLessons());
  };

  // 주제 선택 화면
  if (route.name === "select-subject" || !subject) {
    return (
      <div className="min-h-screen">
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-navy-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6 h-14 flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-navy-700 to-purple-600 grid place-items-center text-white font-bold text-sm">
                M
              </div>
              <span className="font-bold text-navy-900">수학 학습</span>
            </div>
          </div>
        </header>
        <main>
          <SubjectSelectPage
            subjects={subjectList}
            onSelect={selectSubject}
          />
        </main>
        <footer className="border-t border-navy-100 mt-16 py-8 text-center text-xs text-navy-500">
          © 수학 학습용 데모 앱
        </footer>
      </div>
    );
  }

  const lessons = subject.lessons;

  let content: JSX.Element;
  if (route.name === "home") {
    content = (
      <HomePage
        subject={subject}
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
          setWrongNotes(getWrongNotes());
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
        subject={subject}
        onNavigate={navigate}
        onSubjectSelect={goToSubjectSelect}
        wrongCount={wrongNotes.length}
      />
      <main>{content}</main>
      <footer className="border-t border-navy-100 mt-16 py-8 text-center text-xs text-navy-500">
        © {subject.title} — 학습용 데모 앱
      </footer>
    </div>
  );
}
