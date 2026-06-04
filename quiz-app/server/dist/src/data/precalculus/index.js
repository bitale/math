"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.precalculusLessons = void 0;
const foundations_1 = require("./foundations");
const functions_1 = require("./functions");
const advancedFunctions_1 = require("./advancedFunctions");
const trigIdentities_1 = require("./trigIdentities");
const sequences_1 = require("./sequences");
const conics_1 = require("./conics");
const combinatorics_1 = require("./combinatorics");
exports.precalculusLessons = [
    ...foundations_1.foundationsLessons,
    ...functions_1.functionsLessons,
    ...advancedFunctions_1.advancedFunctionsLessons,
    ...trigIdentities_1.trigIdentitiesLessons,
    ...sequences_1.sequencesLessons,
    ...conics_1.conicsLessons,
    ...combinatorics_1.combinatoricsLessons,
];
