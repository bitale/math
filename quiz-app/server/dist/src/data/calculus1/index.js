"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculus1Lessons = void 0;
const limits_1 = require("./limits");
const limitCalc_1 = require("./limitCalc");
const differentiation_1 = require("./differentiation");
const differentiationApps_1 = require("./differentiationApps");
const inverseTrig_1 = require("./inverseTrig");
const lhopital_1 = require("./lhopital");
exports.calculus1Lessons = [
    ...limits_1.limitsLessons,
    ...limitCalc_1.limitCalcLessons,
    ...differentiation_1.differentiationLessons,
    ...differentiationApps_1.differentiationAppsLessons,
    ...inverseTrig_1.inverseTrigLessons,
    ...lhopital_1.lhopitalLessons,
];
