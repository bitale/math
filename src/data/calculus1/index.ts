import { Lesson } from "../../types";
import { limitsLessons } from "./limits";
import { limitCalcLessons } from "./limitCalc";
import { differentiationLessons } from "./differentiation";
import { differentiationAppsLessons } from "./differentiationApps";
import { inverseTrigLessons } from "./inverseTrig";
import { lhopitalLessons } from "./lhopital";

export const calculus1Lessons: Lesson[] = [
  ...limitsLessons,
  ...limitCalcLessons,
  ...differentiationLessons,
  ...differentiationAppsLessons,
  ...inverseTrigLessons,
  ...lhopitalLessons,
];
