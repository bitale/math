import { Lesson } from "../../types";
import { foundationsLessons } from "./foundations";
import { functionsLessons } from "./functions";
import { advancedFunctionsLessons } from "./advancedFunctions";
import { trigIdentitiesLessons } from "./trigIdentities";
import { sequencesLessons } from "./sequences";
import { conicsLessons } from "./conics";
import { combinatoricsLessons } from "./combinatorics";

export const precalculusLessons: Lesson[] = [
  ...foundationsLessons,
  ...functionsLessons,
  ...advancedFunctionsLessons,
  ...trigIdentitiesLessons,
  ...sequencesLessons,
  ...conicsLessons,
  ...combinatoricsLessons,
];
