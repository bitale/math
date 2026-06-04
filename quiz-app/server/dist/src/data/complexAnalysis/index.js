"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complexAnalysisLessons = void 0;
const basics_1 = require("./basics");
const analyticity_1 = require("./analyticity");
const advanced1_1 = require("./advanced1");
const integration_1 = require("./integration");
const residues_1 = require("./residues");
const advanced2_1 = require("./advanced2");
const conformal_1 = require("./conformal");
exports.complexAnalysisLessons = [
    ...basics_1.basicsLessons,
    ...analyticity_1.analyticityLessons,
    ...advanced1_1.advanced1Lessons,
    ...integration_1.integrationLessons,
    ...residues_1.residuesLessons,
    ...advanced2_1.advanced2Lessons,
    ...conformal_1.conformalLessons,
];
