import { Lesson } from "../../types";
import { functionsLessons } from "./functions";
import { sequencesLessons } from "./sequences";
import { limitsLessons } from "./limits";
import { limitCalcLessons } from "./limitCalc";
import { differentiationLessons } from "./differentiation";
import { differentiationAppsLessons } from "./differentiationApps";
import { integrationLessons } from "./integration";
import { seriesCalcLessons } from "./seriesCalc";
import { seriesLessons } from "./series";
import { linearAlgebraLessons } from "./linearAlgebra";
import { multivariableLessons } from "./multivariable";
import { differentialEquationsLessons } from "./differentialEquations";

export const calculusLessons: Lesson[] = [
  ...functionsLessons,
  ...sequencesLessons,
  ...limitsLessons,
  ...limitCalcLessons,
  ...differentiationLessons,
  ...differentiationAppsLessons,
  ...integrationLessons,
  ...seriesCalcLessons,
  ...seriesLessons,
  ...linearAlgebraLessons,
  ...multivariableLessons,
  ...differentialEquationsLessons,
];
