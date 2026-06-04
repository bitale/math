import { Lesson } from "../../types";
import { integrationLessons } from "./integration";
import { trigIntegrationLessons } from "./trigIntegration";
import { arcLengthLessons } from "./arcLength";
import { seriesCalcLessons } from "./seriesCalc";
import { seriesLessons } from "./series";
import { parametricLessons } from "./parametric";

export const calculus2Lessons: Lesson[] = [
  ...integrationLessons,
  ...trigIntegrationLessons,
  ...arcLengthLessons,
  ...seriesCalcLessons,
  ...seriesLessons,
  ...parametricLessons,
];
