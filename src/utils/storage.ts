import { WrongNoteEntry } from "../types";

const KEYS = {
  completedLessons: "mla.completedLessons",
  lastLessonId: "mla.lastLessonId",
  problemResults: "mla.problemResults",
  wrongNote: "mla.wrongNote",
} as const;

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.warn("저장소에서 값을 읽지 못했습니다:", key, err);
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn("저장소에 값을 저장하지 못했습니다:", key, err);
  }
}

export function getCompletedLessons(): number[] {
  return read<number[]>(KEYS.completedLessons, []);
}

export function setLessonCompleted(lessonId: number): void {
  const list = new Set(getCompletedLessons());
  list.add(lessonId);
  write(KEYS.completedLessons, Array.from(list));
}

export function getLastLessonId(): number | null {
  return read<number | null>(KEYS.lastLessonId, null);
}

export function setLastLessonId(lessonId: number): void {
  write(KEYS.lastLessonId, lessonId);
}

type ProblemResults = Record<string, boolean>;

export function getProblemResults(): ProblemResults {
  return read<ProblemResults>(KEYS.problemResults, {});
}

export function setProblemResult(problemId: string, correct: boolean): void {
  const results = getProblemResults();
  results[problemId] = correct;
  write(KEYS.problemResults, results);
}

export function getWrongNotes(): WrongNoteEntry[] {
  return read<WrongNoteEntry[]>(KEYS.wrongNote, []);
}

export function addWrongNote(entry: WrongNoteEntry): void {
  const list = getWrongNotes().filter(
    (item) => item.problemId !== entry.problemId
  );
  list.unshift(entry);
  write(KEYS.wrongNote, list);
}

export function removeWrongNote(problemId: string): void {
  const list = getWrongNotes().filter((item) => item.problemId !== problemId);
  write(KEYS.wrongNote, list);
}
