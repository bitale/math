import { Lesson } from "../../types";
import { foundationsLessons } from "./foundations";
import { rateOfChangeLessons } from "./rateOfChange";
import { realAnalysisLessons } from "./realAnalysis";
import { differentiationLessons } from "./differentiation";
import { differentiationAppsLessons } from "./differentiationApps";
import { integrationLessons } from "./integration";
import { seriesLessons } from "./series";
import { linearAlgebraLessons } from "./linearAlgebra";
import { multivariableLessons } from "./multivariable";
import { differentialEquationsLessons } from "./differentialEquations";
import { measureTheoryLessons } from "./measureTheory";

export const analysisLessons: Lesson[] = [
  ...foundationsLessons,
  ...rateOfChangeLessons,
  ...realAnalysisLessons,
  ...differentiationLessons,
  ...differentiationAppsLessons,
  ...integrationLessons,
  ...seriesLessons,
  ...linearAlgebraLessons,
  ...multivariableLessons,
  ...differentialEquationsLessons,
  ...measureTheoryLessons,
];

export {
  foundationsLessons,
  rateOfChangeLessons,
  realAnalysisLessons,
  differentiationLessons,
  differentiationAppsLessons,
  integrationLessons,
  seriesLessons,
  linearAlgebraLessons,
  multivariableLessons,
  differentialEquationsLessons,
  measureTheoryLessons,
};
