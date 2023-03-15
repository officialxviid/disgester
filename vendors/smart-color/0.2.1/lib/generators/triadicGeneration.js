"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triadicGeneration = void 0;
const optimizers_1 = require("../optimizers");
const categoricalGeneration_1 = require("./categoricalGeneration");
// generate categorical palette by triadic scheme
const triadicGeneration = (configuration) => {
    const { count, color, colors } = configuration;
    const dHue = 120;
    const { newColors, locked } = categoricalGeneration_1.categoricalGenerationInHsv(color, dHue, count, colors);
    const palette = {
        name: 'tetradic',
        semantic: null,
        type: 'categorical',
        colors: newColors,
    };
    return optimizers_1.paletteOptimization(palette, { locked });
};
exports.triadicGeneration = triadicGeneration;
//# sourceMappingURL=triadicGeneration.js.map