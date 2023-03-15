"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaletteFromString = void 0;
const utils_1 = require("../utils");
// Get a list of colors from string
function getPaletteFromString(string) {
    return {
        name: 'code',
        semantic: null,
        type: 'categorical',
        colors: string
            .replace(/[^#,0-9a-fA-F]/g, '')
            .split(',')
            .filter((color) => color.length > 0)
            .map((color) => {
            return utils_1.hexToColor(color);
        }),
    };
}
exports.getPaletteFromString = getPaletteFromString;
//# sourceMappingURL=getPaletteFromString.js.map