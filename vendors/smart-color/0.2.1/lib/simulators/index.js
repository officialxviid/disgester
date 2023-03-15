"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invertGrayscale = exports.isColorBlindnessSimulation = exports.colorSimulation = void 0;
const colorBlindness_1 = require("./colorBlindness");
const grayscale_1 = require("./grayscale");
const colorSimulation = (color, type = 'normal') => {
    if (type === 'grayscale') {
        return grayscale_1.grayscale(color);
    }
    return colorBlindness_1.colorBlindnessSimulation(color, type);
};
exports.colorSimulation = colorSimulation;
var colorBlindness_2 = require("./colorBlindness");
Object.defineProperty(exports, "isColorBlindnessSimulation", { enumerable: true, get: function () { return colorBlindness_2.isColorBlindnessSimulation; } });
var grayscale_2 = require("./grayscale");
Object.defineProperty(exports, "invertGrayscale", { enumerable: true, get: function () { return grayscale_2.invertGrayscale; } });
//# sourceMappingURL=index.js.map