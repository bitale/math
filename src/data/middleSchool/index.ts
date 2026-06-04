import { Lesson } from "../../types";
import { numbersLessons } from "./numbers";
import { algebraLessons } from "./algebra";
import { functionsLessons } from "./functions";
import { statisticsLessons } from "./statistics";
import { geometryLessons } from "./geometry";

export const middleSchoolLessons: Lesson[] = [
  ...numbersLessons,
  ...algebraLessons,
  ...functionsLessons,
  ...statisticsLessons,
  ...geometryLessons,
];
