"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleSchoolLessons = void 0;
const numbers_1 = require("./numbers");
const algebra_1 = require("./algebra");
const functions_1 = require("./functions");
const statistics_1 = require("./statistics");
const geometry_1 = require("./geometry");
exports.middleSchoolLessons = [
    ...numbers_1.numbersLessons,
    ...algebra_1.algebraLessons,
    ...functions_1.functionsLessons,
    ...statistics_1.statisticsLessons,
    ...geometry_1.geometryLessons,
];
