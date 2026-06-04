import { Lesson } from "../../types";
import { analysisFoundationsLessons } from "./foundations";
import { realNumbersLessons } from "./realNumbers";
import { limitsLessons } from "./limits";
import { topologyLessons } from "./topology";
import { rigorousDiffLessons } from "./rigorousDiff";
import { rigorousIntegralLessons } from "./rigorousIntegral";
import { seriesRigorousLessons } from "./seriesRigorous";
import { analysisMeasureTheoryLessons } from "./measureTheory";

// 실해석학 (Real Analysis) - 전체 22개 레슨
// ID 1-3:   해석학의 기초 (집합, 논리, 증명)
// ID 4-5:   실수의 완비성 (데데킨트 절단, 코시 수열)
// ID 6-8:   극한과 연속 (ε-δ 정의, 극한 법칙, 연속함수 성질)
// ID 9-11:  위상적 성질 (볼차노-바이어슈트라스, 하이네-보렐, 균일연속)
// ID 12-14: 미분의 엄밀한 기초 (미분 정의, 롤·MVT, FTC) — NEW
// ID 15-16: 엄밀한 적분 (리만 적분 정의, 적분가능성)
// ID 17:    급수 수렴의 엄밀한 기초 — NEW
// ID 18-20: 급수의 엄밀한 이론 (함수열 수렴, 균등수렴 성질, M-판정법)
// ID 21-22: 측도론 (측도론 입문, 르베그 적분)

export const realAnalysisCourse: Lesson[] = [
  ...analysisFoundationsLessons,   // 1, 2, 3
  ...realNumbersLessons,           // 4, 5
  ...limitsLessons,                // 6, 7, 8
  ...topologyLessons,              // 9, 10, 11
  ...rigorousDiffLessons,          // 12, 13, 14
  ...rigorousIntegralLessons,      // 15, 16
  ...seriesRigorousLessons,        // 17, 18, 19, 20
  ...analysisMeasureTheoryLessons, // 21, 22
];

export {
  analysisFoundationsLessons,
  realNumbersLessons,
  limitsLessons,
  topologyLessons,
  rigorousDiffLessons,
  rigorousIntegralLessons,
  seriesRigorousLessons,
  analysisMeasureTheoryLessons,
};
