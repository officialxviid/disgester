"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polychromaticGeneration = void 0;
const optimizers_1 = require("../optimizers");
const categoricalGeneration_1 = require("./categoricalGeneration");
// generate categorical palette by polychromatic scheme
const polychromaticGeneration = (configuration) => {
    const { count, color, colors } = configuration;
    const dHue = 360 / count;
    const { newColors, locked } = categoricalGeneration_1.categoricalGenerationInHsv(color, dHue, count, colors);
    const palette = {
        name: 'tetradic',
        semantic: null,
        type: 'categorical',
        colors: newColors,
    };
    return optimizers_1.paletteOptimization(palette, { locked });
};
exports.polychromaticGeneration = polychromaticGeneration;
//# sourceMappingURL=polychromaticGeneration.js.map