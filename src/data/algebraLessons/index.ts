import { Lesson } from "../../types";
import { algebraBasicsLessons } from "./algebraBasics";
import { groupsLessons } from "./groups";
import { groupAdvancedLessons } from "./groupAdvanced";
import { ringsAndFieldsLessons } from "./ringsAndFields";

export const algebraLessons: Lesson[] = [
  ...algebraBasicsLessons,
  ...groupsLessons,
  ...groupAdvancedLessons,
  ...ringsAndFieldsLessons,
];

export {
  algebraBasicsLessons,
  groupsLessons,
  groupAdvancedLessons,
  ringsAndFieldsLessons,
};
