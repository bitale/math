import { Lesson } from "../../types";
import { multivariableCalculusLessons } from "./lessons";
import { tripleIntegralLessons } from "./tripleIntegral";

export const multivariableLessons: Lesson[] = [
  ...multivariableCalculusLessons,
  ...tripleIntegralLessons,
];
