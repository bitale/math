import { Lesson } from "../../types";
import { grade1Lessons } from "./grade1";
import { grade2Lessons } from "./grade2";
import { grade3Lessons } from "./grade3";
import { grade4Lessons } from "./grade4";
import { grade5Lessons } from "./grade5";
import { grade6Lessons } from "./grade6";

export const elementaryLessons: Lesson[] = [
  ...grade1Lessons,
  ...grade2Lessons,
  ...grade3Lessons,
  ...grade4Lessons,
  ...grade5Lessons,
  ...grade6Lessons,
];
