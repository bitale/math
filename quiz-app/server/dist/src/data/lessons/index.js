"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measureTheoryLessons = exports.differentialEquationsLessons = exports.multivariableLessons = exports.linearAlgebraLessons = exports.seriesLessons = exports.integrationLessons = exports.differentiationAppsLessons = exports.differentiationLessons = exports.realAnalysisLessons = exports.rateOfChangeLessons = exports.foundationsLessons = exports.analysisLessons = void 0;
const foundations_1 = require("./foundations");
Object.defineProperty(exports, "foundationsLessons", { enumerable: true, get: function () { return foundations_1.foundationsLessons; } });
const rateOfChange_1 = require("./rateOfChange");
Object.defineProperty(exports, "rateOfChangeLessons", { enumerable: true, get: function () { return rateOfChange_1.rateOfChangeLessons; } });
const realAnalysis_1 = require("./realAnalysis");
Object.defineProperty(exports, "realAnalysisLessons", { enumerable: true, get: function () { return realAnalysis_1.realAnalysisLessons; } });
const differentiation_1 = require("./differentiation");
Object.defineProperty(exports, "differentiationLessons", { enumerable: true, get: function () { return differentiation_1.differentiationLessons; } });
const differentiationApps_1 = require("./differentiationApps");
Object.defineProperty(exports, "differentiationAppsLessons", { enumerable: true, get: function () { return differentiationApps_1.differentiationAppsLessons; } });
const integration_1 = require("./integration");
Object.defineProperty(exports, "integrationLessons", { enumerable: true, get: function () { return integration_1.integrationLessons; } });
const series_1 = require("./series");
Object.defineProperty(exports, "seriesLessons", { enumerable: true, get: function () { return series_1.seriesLessons; } });
const linearAlgebra_1 = require("./linearAlgebra");
Object.defineProperty(exports, "linearAlgebraLessons", { enumerable: true, get: function () { return linearAlgebra_1.linearAlgebraLessons; } });
const multivariable_1 = require("./multivariable");
Object.defineProperty(exports, "multivariableLessons", { enumerable: true, get: function () { return multivariable_1.multivariableLessons; } });
const differentialEquations_1 = require("./differentialEquations");
Object.defineProperty(exports, "differentialEquationsLessons", { enumerable: true, get: function () { return differentialEquations_1.differentialEquationsLessons; } });
const measureTheory_1 = require("./measureTheory");
Object.defineProperty(exports, "measureTheoryLessons", { enumerable: true, get: function () { return measureTheory_1.measureTheoryLessons; } });
exports.analysisLessons = [
    ...foundations_1.foundationsLessons,
    ...rateOfChange_1.rateOfChangeLessons,
    ...realAnalysis_1.realAnalysisLessons,
    ...differentiation_1.differentiationLessons,
    ...differentiationApps_1.differentiationAppsLessons,
    ...integration_1.integrationLessons,
    ...series_1.seriesLessons,
    ...linearAlgebra_1.linearAlgebraLessons,
    ...multivariable_1.multivariableLessons,
    ...differentialEquations_1.differentialEquationsLessons,
    ...measureTheory_1.measureTheoryLessons,
];
