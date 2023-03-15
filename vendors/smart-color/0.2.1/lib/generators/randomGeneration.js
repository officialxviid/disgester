"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomGeneration = void 0;
const optimizers_1 = require("../optimizers");
const random_1 = require("./random");
// generate categorical palette randomly
const randomGeneration = (configuration) => {
    const { count, colors } = configuration;
    const locked = [];
    const palette = {
        name: 'random',
        semantic: null,
        type: 'categorical',
        colors: new Array(count).fill(0).map((d, i) => {
            const lockedColor = colors[i];
            if (lockedColor) {
                locked[i] = true;
                return lockedColor;
            }
            return random_1.randomColor();
        }),
    };
    return optimizers_1.paletteOptimization(palette, { locked });
};
exports.randomGeneration = randomGeneration;
//# sourceMappingURL=randomGeneration.js.map