"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discreteScaleGenerationInLab = void 0;
const utils_1 = require("../utils");
// Fix a, b, vary L
const discreteScaleGenerationInLab = (color, count, lRange = [utils_1.randomInt(5, 10), utils_1.randomInt(90, 95)]) => {
    const [L, a, b] = utils_1.colorToArray(color, 'lab');
    const minL = L <= 15 ? L : lRange[0];
    const maxL = L >= 85 ? L : lRange[1];
    let dLightness = (maxL - minL) / (count - 1);
    // basic color index
    const index = Math.ceil((L - minL) / dLightness);
    dLightness = index === 0 ? dLightness : (L - minL) / index;
    return new Array(count).fill(0).map((d, i) => utils_1.arrayToColor([dLightness * i + minL, a, b], 'lab'));
};
exports.discreteScaleGenerationInLab = discreteScaleGenerationInLab;
//# sourceMappingURL=discreteScaleGeneration.js.map