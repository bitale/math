"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculusLessons = void 0;
const functions_1 = require("./functions");
const sequences_1 = require("./sequences");
const limits_1 = require("./limits");
const limitCalc_1 = require("./limitCalc");
const differentiation_1 = require("./differentiation");
const differentiationApps_1 = require("./differentiationApps");
const integration_1 = require("./integration");
const seriesCalc_1 = require("./seriesCalc");
const series_1 = require("./series");
const linearAlgebra_1 = require("./linearAlgebra");
const multivariable_1 = require("./multivariable");
const differentialEquations_1 = require("./differentialEquations");
exports.calculusLessons = [
    ...functions_1.functionsLessons,
    ...sequences_1.sequencesLessons,
    ...limits_1.limitsLessons,
    ...limitCalc_1.limitCalcLessons,
    ...differentiation_1.differentiationLessons,
    ...differentiationApps_1.differentiationAppsLessons,
    ...integration_1.integrationLessons,
    ...seriesCalc_1.seriesCalcLessons,
    ...series_1.seriesLessons,
    ...linearAlgebra_1.linearAlgebraLessons,
    ...multivariable_1.multivariableLessons,
    ...differentialEquations_1.differentialEquationsLessons,
];
