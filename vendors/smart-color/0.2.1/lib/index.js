"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TENDENCIES = exports.COLOR_BLINDNESS_SIMULATION_TYPES = exports.colorAesthetic = exports.colorDifference = exports.getPaletteFromString = exports.getPaletteFromImage = exports.paletteOptimization = exports.paletteGeneration = exports.invertGrayscale = exports.colorSimulation = exports.colorDarken = exports.colorBrighten = exports.colorBlend = exports.nameToColor = exports.hexToColor = exports.colorToHex = exports.colorToGray = exports.arrayToColor = exports.colorToArray = void 0;
var utils_1 = require("./utils");
Object.defineProperty(exports, "colorToArray", { enumerable: true, get: function () { return utils_1.colorToArray; } });
Object.defineProperty(exports, "arrayToColor", { enumerable: true, get: function () { return utils_1.arrayToColor; } });
Object.defineProperty(exports, "colorToGray", { enumerable: true, get: function () { return utils_1.colorToGray; } });
Object.defineProperty(exports, "colorToHex", { enumerable: true, get: function () { return utils_1.colorToHex; } });
Object.defineProperty(exports, "hexToColor", { enumerable: true, get: function () { return utils_1.hexToColor; } });
Object.defineProperty(exports, "nameToColor", { enumerable: true, get: function () { return utils_1.nameToColor; } });
Object.defineProperty(exports, "colorBlend", { enumerable: true, get: function () { return utils_1.colorBlend; } });
Object.defineProperty(exports, "colorBrighten", { enumerable: true, get: function () { return utils_1.colorBrighten; } });
Object.defineProperty(exports, "colorDarken", { enumerable: true, get: function () { return utils_1.colorDarken; } });
// color simulation
var simulators_1 = require("./simulators");
Object.defineProperty(exports, "colorSimulation", { enumerable: true, get: function () { return simulators_1.colorSimulation; } });
Object.defineProperty(exports, "invertGrayscale", { enumerable: true, get: function () { return simulators_1.invertGrayscale; } });
// palette generation
var generators_1 = require("./generators");
Object.defineProperty(exports, "paletteGeneration", { enumerable: true, get: function () { return generators_1.paletteGeneration; } });
// palette optimization
var optimizers_1 = require("./optimizers");
Object.defineProperty(exports, "paletteOptimization", { enumerable: true, get: function () { return optimizers_1.paletteOptimization; } });
// get palette
var extractors_1 = require("./extractors");
Object.defineProperty(exports, "getPaletteFromImage", { enumerable: true, get: function () { return extractors_1.getPaletteFromImage; } });
Object.defineProperty(exports, "getPaletteFromString", { enumerable: true, get: function () { return extractors_1.getPaletteFromString; } });
// professional test
var evaluators_1 = require("./evaluators");
Object.defineProperty(exports, "colorDifference", { enumerable: true, get: function () { return evaluators_1.colorDifference; } });
Object.defineProperty(exports, "colorAesthetic", { enumerable: true, get: function () { return evaluators_1.colorAesthetic; } });
var constant_1 = require("./constant");
Object.defineProperty(exports, "COLOR_BLINDNESS_SIMULATION_TYPES", { enumerable: true, get: function () { return constant_1.COLOR_BLINDNESS_SIMULATION_TYPES; } });
Object.defineProperty(exports, "TENDENCIES", { enumerable: true, get: function () { return constant_1.TENDENCIES; } });
//# sourceMappingURL=index.js.map