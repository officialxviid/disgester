"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complementaryGeneration = void 0;
const utils_1 = require("../utils");
const discreteScaleGeneration_1 = require("./discreteScaleGeneration");
// generate diverging palette by complementary scheme
const complementaryGeneration = (configuration) => {
    const { count, color } = configuration;
    const [hue, saturation, value] = utils_1.colorToArray(color, 'hsv');
    const complementaryColor = utils_1.arrayToColor([utils_1.hueOffset(hue, 180), saturation, value], 'hsv');
    const maxL = utils_1.randomInt(80, 90);
    const minL = utils_1.randomInt(15, 25);
    const halfCount = Math.floor(count / 2);
    const left = discreteScaleGeneration_1.discreteScaleGenerationInLab(color, halfCount, [minL, maxL]);
    const right = discreteScaleGeneration_1.discreteScaleGenerationInLab(complementaryColor, halfCount, [minL, maxL]).reverse();
    let newColors;
    if (count % 2 === 1) {
        const midColor = utils_1.arrayToColor([(utils_1.hueOffset(hue, 180) + hue) / 2, utils_1.random(0.05, 0.1), utils_1.random(0.9, 0.95)], 'hsv');
        newColors = [...left, midColor, ...right];
    }
    else {
        newColors = [...left, ...right];
    }
    const palette = {
        name: 'complementary',
        semantic: null,
        type: 'discrete-scale',
        colors: newColors,
    };
    return palette;
};
exports.complementaryGeneration = complementaryGeneration;
//# sourceMappingURL=complementaryGeneration.js.map