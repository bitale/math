import { Lesson } from "../../types";
import { basicsLessons } from "./basics";
import { operationsLessons } from "./operations";
import { relationsLessons } from "./relations";
import { functionsLessons } from "./functions";
import { inductionLessons } from "./induction";
import { infinityLessons } from "./infinity";
import { cardinalsLessons } from "./cardinals";
import { axiomsLessons } from "./axioms";
import { applicationsLessons } from "./applications";

export const setTheoryLessons: Lesson[] = [
  ...basicsLessons,
  ...operationsLessons,
  ...relationsLessons,
  ...functionsLessons,
  ...inductionLessons,
  ...infinityLessons,
  ...cardinalsLessons,
  ...axiomsLessons,
  ...applicationsLessons,
];

export {
  basicsLessons,
  operationsLessons,
  relationsLessons,
  functionsLessons,
  inductionLessons,
  infinityLessons,
  cardinalsLessons,
  axiomsLessons,
  applicationsLessons,
};
