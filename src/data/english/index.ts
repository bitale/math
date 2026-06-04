import { Lesson } from "../../types";
import { engPreschoolAge5Lessons } from "./preschoolAge5";
import { engPreschoolAge6Lessons } from "./preschoolAge6";
import { engPreschoolAge7Lessons } from "./preschoolAge7";
import { engGrade1Lessons } from "./grade1";
import { engGrade2Lessons } from "./grade2";
import { engGrade3Lessons } from "./grade3";
import { engGrade4Lessons } from "./grade4";
import { engGrade5Lessons } from "./grade5";
import { engGrade6Lessons } from "./grade6";

export const englishLessons: Lesson[] = [
  ...engPreschoolAge5Lessons,
  ...engPreschoolAge6Lessons,
  ...engPreschoolAge7Lessons,
  ...engGrade1Lessons,
  ...engGrade2Lessons,
  ...engGrade3Lessons,
  ...engGrade4Lessons,
  ...engGrade5Lessons,
  ...engGrade6Lessons,
];
