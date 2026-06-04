"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ringsAndFieldsLessons = exports.groupAdvancedLessons = exports.groupsLessons = exports.algebraBasicsLessons = exports.algebraLessons = void 0;
const algebraBasics_1 = require("./algebraBasics");
Object.defineProperty(exports, "algebraBasicsLessons", { enumerable: true, get: function () { return algebraBasics_1.algebraBasicsLessons; } });
const groups_1 = require("./groups");
Object.defineProperty(exports, "groupsLessons", { enumerable: true, get: function () { return groups_1.groupsLessons; } });
const groupAdvanced_1 = require("./groupAdvanced");
Object.defineProperty(exports, "groupAdvancedLessons", { enumerable: true, get: function () { return groupAdvanced_1.groupAdvancedLessons; } });
const ringsAndFields_1 = require("./ringsAndFields");
Object.defineProperty(exports, "ringsAndFieldsLessons", { enumerable: true, get: function () { return ringsAndFields_1.ringsAndFieldsLessons; } });
exports.algebraLessons = [
    ...algebraBasics_1.algebraBasicsLessons,
    ...groups_1.groupsLessons,
    ...groupAdvanced_1.groupAdvancedLessons,
    ...ringsAndFields_1.ringsAndFieldsLessons,
];
