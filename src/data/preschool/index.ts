import { Lesson } from "../../types";
import { age5Lessons } from "./age5";
import { age6Lessons } from "./age6";
import { age7Lessons } from "./age7";

export const preschoolLessons: Lesson[] = [
  ...age5Lessons,
  ...age6Lessons,
  ...age7Lessons,
];
