"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoricalGenerationInHsv = void 0;
const utils_1 = require("../utils");
const saturationRange = [0.3, 0.9];
const valueRange = [0.5, 1];
const categoricalGenerationInHsv = (color, dHue, count, colors = []) => {
    const [h] = utils_1.colorToArray(color, 'hsv');
    const locked = new Array(count).fill(false);
    let placeBasicColor = colors.findIndex((c) => c && c.model === color.model && c.value === color.value) === -1;
    const newColors = new Array(count).fill(0).map((d, i) => {
        const lockedColor = colors[i];
        if (lockedColor) {
            locked[i] = true;
            return lockedColor;
        }
        // find the first unlocked position to place the basic color
        if (placeBasicColor) {
            placeBasicColor = false;
            locked[i] = true;
            return color;
        }
        return utils_1.arrayToColor([utils_1.hueOffset(h, dHue * i), utils_1.random(...saturationRange), utils_1.random(...valueRange)], 'hsv');
    });
    return {
        newColors,
        locked,
    };
};
exports.categoricalGenerationInHsv = categoricalGenerationInHsv;
//# sourceMappingURL=categoricalGeneration.js.map