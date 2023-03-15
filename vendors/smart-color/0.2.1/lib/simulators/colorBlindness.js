"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorBlindnessSimulation = exports.isColorBlindnessSimulation = void 0;
const tslib_1 = require("tslib");
// @ts-ignore
const color_blind_1 = tslib_1.__importDefault(require("color-blind"));
const constant_1 = require("../constant");
const utils_1 = require("../utils");
function isColorBlindnessSimulation(type) {
    return type !== 'normal' && constant_1.COLOR_BLINDNESS_SIMULATION_TYPES.indexOf(type) > -1;
}
exports.isColorBlindnessSimulation = isColorBlindnessSimulation;
// get color in color blindness simulation
const colorBlindnessSimulation = (color, type = 'normal') => {
    if (type === 'normal') {
        return { ...color };
    }
    const hexColor = utils_1.colorToHex(color);
    const blindColor = color_blind_1.default[type](hexColor);
    return utils_1.hexToColor(blindColor);
};
exports.colorBlindnessSimulation = colorBlindnessSimulation;
//# sourceMappingURL=colorBlindness.js.map