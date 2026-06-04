"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationsLessons = exports.axiomsLessons = exports.cardinalsLessons = exports.infinityLessons = exports.inductionLessons = exports.functionsLessons = exports.relationsLessons = exports.operationsLessons = exports.basicsLessons = exports.setTheoryLessons = void 0;
const basics_1 = require("./basics");
Object.defineProperty(exports, "basicsLessons", { enumerable: true, get: function () { return basics_1.basicsLessons; } });
const operations_1 = require("./operations");
Object.defineProperty(exports, "operationsLessons", { enumerable: true, get: function () { return operations_1.operationsLessons; } });
const relations_1 = require("./relations");
Object.defineProperty(exports, "relationsLessons", { enumerable: true, get: function () { return relations_1.relationsLessons; } });
const functions_1 = require("./functions");
Object.defineProperty(exports, "functionsLessons", { enumerable: true, get: function () { return functions_1.functionsLessons; } });
const induction_1 = require("./induction");
Object.defineProperty(exports, "inductionLessons", { enumerable: true, get: function () { return induction_1.inductionLessons; } });
const infinity_1 = require("./infinity");
Object.defineProperty(exports, "infinityLessons", { enumerable: true, get: function () { return infinity_1.infinityLessons; } });
const cardinals_1 = require("./cardinals");
Object.defineProperty(exports, "cardinalsLessons", { enumerable: true, get: function () { return cardinals_1.cardinalsLessons; } });
const axioms_1 = require("./axioms");
Object.defineProperty(exports, "axiomsLessons", { enumerable: true, get: function () { return axioms_1.axiomsLessons; } });
const applications_1 = require("./applications");
Object.defineProperty(exports, "applicationsLessons", { enumerable: true, get: function () { return applications_1.applicationsLessons; } });
exports.setTheoryLessons = [
    ...basics_1.basicsLessons,
    ...operations_1.operationsLessons,
    ...relations_1.relationsLessons,
    ...functions_1.functionsLessons,
    ...induction_1.inductionLessons,
    ...infinity_1.infinityLessons,
    ...cardinals_1.cardinalsLessons,
    ...axioms_1.axiomsLessons,
    ...applications_1.applicationsLessons,
];
