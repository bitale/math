"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffEqLessons = void 0;
const differentialEquations_1 = require("./differentialEquations");
const odeTechniques_1 = require("./odeTechniques");
const fourierTransform_1 = require("./fourierTransform");
const pde_1 = require("./pde");
const pdeAdvanced_1 = require("./pdeAdvanced");
const dispersivePDE_1 = require("./dispersivePDE");
const dispersivePDE2_1 = require("./dispersivePDE2");
const dispersiveResearch_1 = require("./dispersiveResearch");
exports.diffEqLessons = [
    ...differentialEquations_1.differentialEquationsLessons, // 미분방정식 입문
    ...odeTechniques_1.odeTechniquesLessons, // ODE 기법 (변수분리 ~ 연립)
    ...fourierTransform_1.fourierTransformLessons, // 푸리에 급수·변환 (라플라스 → 푸리에)
    ...pde_1.pdeLessons, // PDE 입문, 변수분리, 열·파동
    ...pdeAdvanced_1.pdeAdvancedLessons, // 라플라스, 비제차, 스튜름-리우빌
    ...dispersivePDE_1.dispersivePDELessons, // 조화해석, LP, 진동적분, 스트리하르츠
    ...dispersivePDE2_1.dispersivePDE2Lessons, // 부르갱 X^{s,b}, 집중-콤팩트성, 임계 적정성
    ...dispersiveResearch_1.dispersiveResearchLessons, // 최신 연구 문제
];
