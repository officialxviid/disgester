"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitComplementaryGeneration = void 0;
const optimizers_1 = require("../optimizers");
const categoricalGeneration_1 = require("./categoricalGeneration");
// generate categorical palette by split complementary scheme
const splitComplementaryGeneration = (configuration) => {
    const { count, color, colors } = configuration;
    const dHue = 180;
    const { newColors, locked } = categoricalGeneration_1.categoricalGenerationInHsv(color, dHue, count, colors);
    const palette = {
        name: 'tetradic',
        semantic: null,
        type: 'categorical',
        colors: newColors,
    };
    return optimizers_1.paletteOptimization(palette, { locked });
};
exports.splitComplementaryGeneration = splitComplementaryGeneration;
//# sourceMappingURL=splitComplementaryGeneration.js.map