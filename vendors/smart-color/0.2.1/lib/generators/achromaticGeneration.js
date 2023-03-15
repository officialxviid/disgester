"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.achromaticGeneration = void 0;
const monochromaticGeneration_1 = require("./monochromaticGeneration");
const BLACK = {
    model: 'rgb',
    value: { r: 0, g: 0, b: 0 },
};
const WHITE = {
    model: 'rgb',
    value: { r: 255, g: 255, b: 255 },
};
// generate sequential palette by achromatic scheme
const achromaticGeneration = (configuration) => {
    const { tendency } = configuration;
    const newConfiguration = {
        ...configuration,
        color: tendency === 'tint' ? BLACK : WHITE,
    };
    const palette = monochromaticGeneration_1.monochromaticGeneration(newConfiguration);
    return {
        ...palette,
        name: 'achromatic',
    };
};
exports.achromaticGeneration = achromaticGeneration;
//# sourceMappingURL=achromaticGeneration.js.map