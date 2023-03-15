"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.euclideanDistance = void 0;
const tslib_1 = require("tslib");
const chroma_js_1 = tslib_1.__importDefault(require("chroma-js"));
const utils_1 = require("../../utils");
// Computes the Euclidean distance between two colors in a given color model (default is Lab).
// output range: [0, 255]
const euclideanDistance = (color1, color2, colorModel = 'lab') => {
    return chroma_js_1.default.distance(utils_1.colorToChromaColor(color1), utils_1.colorToChromaColor(color2), colorModel);
};
exports.euclideanDistance = euclideanDistance;
//# sourceMappingURL=euclideanDistance.js.map