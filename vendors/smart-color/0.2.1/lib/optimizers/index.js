"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paletteOptimization = void 0;
const color_schema_1 = require("@antv/color-schema");
const constant_1 = require("../constant");
const simulators_1 = require("../simulators");
const utils_1 = require("../utils");
const optimizePaletteByGA_1 = require("./optimizePaletteByGA");
const COLOR_DIFFERENCE_DEFAULT_VALUE = {
    euclidean: 30,
    // ref: Categorical Colormap Optimization with Visualization Case Studies
    // suggests that [20, 25] might be the borderline zone
    CIEDE2000: 20,
    // WCAG, 1.4.3 Contrast (Minimum)
    contrastRatio: 4.5,
};
const COLOR_DIFFERENCE_MAX_VALUE = {
    euclidean: 291.48,
    CIEDE2000: 100,
    contrastRatio: 21,
};
const paletteOptimization = (palette, configuration = {}) => {
    const { locked = [], simulationType = 'normal', threshold, colorModel = 'hsv', colorDifferenceMeasure = 'euclidean', backgroundColor = constant_1.WHITE, } = configuration;
    let newThreshold = threshold;
    // set default value
    if (!newThreshold) {
        newThreshold = COLOR_DIFFERENCE_DEFAULT_VALUE[colorDifferenceMeasure];
    }
    // In case of grayscale mode, the maximum difference between two can be estimated directly
    // If the set threshold is outside of this range, trim directly to save optimization time
    if (simulationType === 'grayscale') {
        const maxValue = COLOR_DIFFERENCE_MAX_VALUE[colorDifferenceMeasure];
        newThreshold = Math.min(newThreshold, maxValue / palette.colors.length);
    }
    const newPalette = utils_1.cloneDeep(palette);
    if (!color_schema_1.isMatrixPalette(newPalette) && !color_schema_1.isContinuousPalette(newPalette)) {
        if (simulationType === 'grayscale') {
            const colors = newPalette.colors.map((color) => [utils_1.colorToGray(color)]);
            const newColors = optimizePaletteByGA_1.optimizePaletteByGA(colors, locked, simulationType, newThreshold, colorModel, colorDifferenceMeasure, backgroundColor);
            newPalette.colors.forEach((color, index) => Object.assign(color, simulators_1.invertGrayscale(newColors[index][0] / 255, color)));
        }
        else {
            const colors = newPalette.colors.map((color) => utils_1.colorToArray(color, colorModel));
            const newColors = optimizePaletteByGA_1.optimizePaletteByGA(colors, locked, simulationType, newThreshold, colorModel, colorDifferenceMeasure, backgroundColor);
            newPalette.colors.forEach((color, index) => {
                Object.assign(color, utils_1.arrayToColor(newColors[index], colorModel));
            });
        }
    }
    return newPalette;
};
exports.paletteOptimization = paletteOptimization;
//# sourceMappingURL=index.js.map