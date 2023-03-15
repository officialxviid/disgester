"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monochromaticGeneration = void 0;
const discreteScaleGeneration_1 = require("./discreteScaleGeneration");
// generate sequential palette by monochromatic scheme
const monochromaticGeneration = (configuration) => {
    const { count, color, tendency } = configuration;
    const isTint = tendency === 'tint';
    const newColors = discreteScaleGeneration_1.discreteScaleGenerationInLab(color, count);
    const palette = {
        name: 'monochromatic',
        semantic: null,
        type: 'discrete-scale',
        colors: isTint ? newColors : newColors.reverse(),
    };
    return palette;
};
exports.monochromaticGeneration = monochromaticGeneration;
//# sourceMappingURL=monochromaticGeneration.js.map