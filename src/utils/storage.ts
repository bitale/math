import { SubjectId, WrongNoteEntry } from "../types";

let _prefix = "mla";

export function setStorageSubject(subject: SubjectId): void {
  _prefix = subject === "analysis" ? "mla" : "stla";
}

function key(name: string): string {
  return `${_prefix}.${name}`;
}

function read<T>(k: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(k);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.warn("저장소에서 값을 읽지 못했습니다:", k, err);
    return fallback;
  }
}

function write<T>(k: string, value: T): void {
  try {
    localStorage.setItem(k, JSON.stringify(value));
  } catch (err) {
    console.warn("저장소에 값을 저장하지 못했습니다:", k, err);
  }
}

export function getCompletedLessons(): number[] {
  return read<number[]>(key("completedLessons"), []);
}

export function setLessonCompleted(lessonId: number): void {
  const list = new Set(getCompletedLessons());
  list.add(lessonId);
  write(key("completedLessons"), Array.from(list));
}

export function getLastLessonId(): number | null {
  return read<number | null>(key("lastLessonId"), null);
}

export function setLastLessonId(lessonId: number): void {
  write(key("lastLessonId"), lessonId);
}

type ProblemResults = Record<string, boolean>;

export function getProblemResults(): ProblemResults {
  return read<ProblemResults>(key("problemResults"), {});
}

export function setProblemResult(problemId: string, correct: boolean): void {
  const results = getProblemResults();
  results[problemId] = correct;
  write(key("problemResults"), results);
}

export function getWrongNotes(): WrongNoteEntry[] {
  return read<WrongNoteEntry[]>(key("wrongNote"), []);
}

export function addWrongNote(entry: WrongNoteEntry): void {
  const list = getWrongNotes().filter(
    (item) => item.problemId !== entry.problemId
  );
  list.unshift(entry);
  write(key("wrongNote"), list);
}

export function removeWrongNote(problemId: string): void {
  const list = getWrongNotes().filter((item) => item.problemId !== problemId);
  write(key("wrongNote"), list);
}

// 마지막 선택한 주제 저장/복원
export function getLastSubject(): SubjectId | null {
  return read<SubjectId | null>("app.lastSubject", null);
}

export function setLastSubject(subject: SubjectId): void {
  write("app.lastSubject", subject);
}
