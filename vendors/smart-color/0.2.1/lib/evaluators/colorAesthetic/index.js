"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorAesthetic = void 0;
const constant_1 = require("../../constant");
const utils_1 = require("../../utils");
const pairPreference_1 = require("./pairPreference");
const colorHarmony_1 = require("./colorHarmony");
const colorAesthetic = (color1, color2, configuration = { measure: 'pairPreference' }) => {
    const { measure = 'pairPreference', backgroundColor = constant_1.WHITE } = configuration;
    // If the color is semi-transparent, the color will be overlapped on a white background by default for comparison
    const overlappedColor1 = utils_1.colorBlend(color1, backgroundColor);
    const overlappedColor2 = utils_1.colorBlend(color2, backgroundColor);
    switch (measure) {
        case 'pairPreference':
            return pairPreference_1.pairPreference(overlappedColor1, overlappedColor2);
        case 'harmony':
            return colorHarmony_1.colorHarmony(overlappedColor1, overlappedColor2);
        default:
            return pairPreference_1.pairPreference(overlappedColor1, overlappedColor2);
    }
};
exports.colorAesthetic = colorAesthetic;
//# sourceMappingURL=index.js.map