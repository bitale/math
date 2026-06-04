import { Lesson } from "../../types";
import { differentialEquationsLessons } from "./differentialEquations";
import { odeTechniquesLessons } from "./odeTechniques";
import { fourierTransformLessons } from "./fourierTransform";
import { pdeLessons } from "./pde";
import { pdeAdvancedLessons } from "./pdeAdvanced";
import { dispersivePDELessons } from "./dispersivePDE";
import { dispersivePDE2Lessons } from "./dispersivePDE2";
import { dispersiveResearchLessons } from "./dispersiveResearch";

export const diffEqLessons: Lesson[] = [
  ...differentialEquationsLessons,   // 미분방정식 입문
  ...odeTechniquesLessons,           // ODE 기법 (변수분리 ~ 연립)
  ...fourierTransformLessons,        // 푸리에 급수·변환 (라플라스 → 푸리에)
  ...pdeLessons,                     // PDE 입문, 변수분리, 열·파동
  ...pdeAdvancedLessons,             // 라플라스, 비제차, 스튜름-리우빌
  ...dispersivePDELessons,           // 조화해석, LP, 진동적분, 스트리하르츠
  ...dispersivePDE2Lessons,          // 부르갱 X^{s,b}, 집중-콤팩트성, 임계 적정성
  ...dispersiveResearchLessons,      // 최신 연구 문제
];
