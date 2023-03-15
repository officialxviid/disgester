"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paletteGeneration = void 0;
const monochromaticGeneration_1 = require("./monochromaticGeneration");
const analogousGeneration_1 = require("./analogousGeneration");
const achromaticGeneration_1 = require("./achromaticGeneration");
const complementaryGeneration_1 = require("./complementaryGeneration");
const splitComplementaryGeneration_1 = require("./splitComplementaryGeneration");
const triadicGeneration_1 = require("./triadicGeneration");
const tetradicGeneration_1 = require("./tetradicGeneration");
const polychromaticGeneration_1 = require("./polychromaticGeneration");
const randomGeneration_1 = require("./randomGeneration");
const validateConfiguration_1 = require("./validateConfiguration");
const generator = {
    monochromatic: monochromaticGeneration_1.monochromaticGeneration,
    analogous: analogousGeneration_1.analogousGeneration,
    achromatic: achromaticGeneration_1.achromaticGeneration,
    complementary: complementaryGeneration_1.complementaryGeneration,
    'split-complementary': splitComplementaryGeneration_1.splitComplementaryGeneration,
    triadic: triadicGeneration_1.triadicGeneration,
    tetradic: tetradicGeneration_1.tetradicGeneration,
    polychromatic: polychromaticGeneration_1.polychromaticGeneration,
    customized: randomGeneration_1.randomGeneration,
};
/**
 *
 * @param type
 * @param colors locked colors
 * @param configuration
 * @returns
 */
const paletteGeneration = (type = 'monochromatic', configuration = {}) => {
    // set default value
    const newConfiguration = validateConfiguration_1.validateConfiguration(type, configuration);
    try {
        return generator[type](newConfiguration);
    }
    catch (e) {
        return randomGeneration_1.randomGeneration(newConfiguration);
    }
};
exports.paletteGeneration = paletteGeneration;
//# sourceMappingURL=index.js.map