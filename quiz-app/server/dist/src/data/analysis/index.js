"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analysisMeasureTheoryLessons = exports.seriesRigorousLessons = exports.rigorousIntegralLessons = exports.rigorousDiffLessons = exports.topologyLessons = exports.limitsLessons = exports.realNumbersLessons = exports.analysisFoundationsLessons = exports.realAnalysisCourse = void 0;
const foundations_1 = require("./foundations");
Object.defineProperty(exports, "analysisFoundationsLessons", { enumerable: true, get: function () { return foundations_1.analysisFoundationsLessons; } });
const realNumbers_1 = require("./realNumbers");
Object.defineProperty(exports, "realNumbersLessons", { enumerable: true, get: function () { return realNumbers_1.realNumbersLessons; } });
const limits_1 = require("./limits");
Object.defineProperty(exports, "limitsLessons", { enumerable: true, get: function () { return limits_1.limitsLessons; } });
const topology_1 = require("./topology");
Object.defineProperty(exports, "topologyLessons", { enumerable: true, get: function () { return topology_1.topologyLessons; } });
const rigorousDiff_1 = require("./rigorousDiff");
Object.defineProperty(exports, "rigorousDiffLessons", { enumerable: true, get: function () { return rigorousDiff_1.rigorousDiffLessons; } });
const rigorousIntegral_1 = require("./rigorousIntegral");
Object.defineProperty(exports, "rigorousIntegralLessons", { enumerable: true, get: function () { return rigorousIntegral_1.rigorousIntegralLessons; } });
const seriesRigorous_1 = require("./seriesRigorous");
Object.defineProperty(exports, "seriesRigorousLessons", { enumerable: true, get: function () { return seriesRigorous_1.seriesRigorousLessons; } });
const measureTheory_1 = require("./measureTheory");
Object.defineProperty(exports, "analysisMeasureTheoryLessons", { enumerable: true, get: function () { return measureTheory_1.analysisMeasureTheoryLessons; } });
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
exports.realAnalysisCourse = [
    ...foundations_1.analysisFoundationsLessons, // 1, 2, 3
    ...realNumbers_1.realNumbersLessons, // 4, 5
    ...limits_1.limitsLessons, // 6, 7, 8
    ...topology_1.topologyLessons, // 9, 10, 11
    ...rigorousDiff_1.rigorousDiffLessons, // 12, 13, 14
    ...rigorousIntegral_1.rigorousIntegralLessons, // 15, 16
    ...seriesRigorous_1.seriesRigorousLessons, // 17, 18, 19, 20
    ...measureTheory_1.analysisMeasureTheoryLessons, // 21, 22
];
