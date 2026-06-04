"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculus2Lessons = void 0;
const integration_1 = require("./integration");
const trigIntegration_1 = require("./trigIntegration");
const arcLength_1 = require("./arcLength");
const seriesCalc_1 = require("./seriesCalc");
const series_1 = require("./series");
const parametric_1 = require("./parametric");
exports.calculus2Lessons = [
    ...integration_1.integrationLessons,
    ...trigIntegration_1.trigIntegrationLessons,
    ...arcLength_1.arcLengthLessons,
    ...seriesCalc_1.seriesCalcLessons,
    ...series_1.seriesLessons,
    ...parametric_1.parametricLessons,
];
