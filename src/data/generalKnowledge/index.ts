import { Lesson } from "../../types";
import { gkAge5Lessons } from "./age5";
import { gkAge6Lessons } from "./age6";
import { gkAge7Lessons } from "./age7";
import { gkAge8Lessons } from "./age8";
import { gkAge9Lessons } from "./age9";
import { gkAge10Lessons } from "./age10";
import { gkAge11Lessons } from "./age11";
import { gkAge12Lessons } from "./age12";

export const generalKnowledgeLessons: Lesson[] = [
  ...gkAge5Lessons,
  ...gkAge6Lessons,
  ...gkAge7Lessons,
  ...gkAge8Lessons,
  ...gkAge9Lessons,
  ...gkAge10Lessons,
  ...gkAge11Lessons,
  ...gkAge12Lessons,
];
