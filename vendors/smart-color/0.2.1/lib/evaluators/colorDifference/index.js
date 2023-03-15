"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorDifference = void 0;
const constant_1 = require("../../constant");
const utils_1 = require("../../utils");
const euclideanDistance_1 = require("./euclideanDistance");
const CIEDE2000_1 = require("./CIEDE2000");
const contrastRatio_1 = require("./contrastRatio");
const colorDifference = (color1, color2, configuration = { measure: 'euclidean' }) => {
    const { measure = 'euclidean', backgroundColor = constant_1.WHITE } = configuration;
    // If the color is semi-transparent, the color will be overlapped on a white background by default for comparison
    const overlappedColor1 = utils_1.colorBlend(color1, backgroundColor);
    const overlappedColor2 = utils_1.colorBlend(color2, backgroundColor);
    switch (measure) {
        case 'CIEDE2000':
            return CIEDE2000_1.CIEDE2000(overlappedColor1, overlappedColor2);
        case 'euclidean':
            // @ts-ignore
            return euclideanDistance_1.euclideanDistance(overlappedColor1, overlappedColor2, configuration.colorModel);
        case 'contrastRatio':
            return contrastRatio_1.contrastRatio(overlappedColor1, overlappedColor2);
        default:
            return euclideanDistance_1.euclideanDistance(overlappedColor1, overlappedColor2);
    }
};
exports.colorDifference = colorDifference;
//# sourceMappingURL=index.js.map