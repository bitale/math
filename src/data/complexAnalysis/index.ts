import { Lesson } from "../../types";
import { basicsLessons } from "./basics";
import { analyticityLessons } from "./analyticity";
import { advanced1Lessons } from "./advanced1";
import { integrationLessons } from "./integration";
import { residuesLessons } from "./residues";
import { advanced2Lessons } from "./advanced2";
import { conformalLessons } from "./conformal";

export const complexAnalysisLessons: Lesson[] = [
  ...basicsLessons,
  ...analyticityLessons,
  ...advanced1Lessons,
  ...integrationLessons,
  ...residuesLessons,
  ...advanced2Lessons,
  ...conformalLessons,
];
