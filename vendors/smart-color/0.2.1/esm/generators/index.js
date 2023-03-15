import { monochromaticGeneration } from './monochromaticGeneration';
import { analogousGeneration } from './analogousGeneration';
import { achromaticGeneration } from './achromaticGeneration';
import { complementaryGeneration } from './complementaryGeneration';
import { splitComplementaryGeneration } from './splitComplementaryGeneration';
import { triadicGeneration } from './triadicGeneration';
import { tetradicGeneration } from './tetradicGeneration';
import { polychromaticGeneration } from './polychromaticGeneration';
import { randomGeneration } from './randomGeneration';
import { validateConfiguration } from './validateConfiguration';
const generator = {
    monochromatic: monochromaticGeneration,
    analogous: analogousGeneration,
    achromatic: achromaticGeneration,
    complementary: complementaryGeneration,
    'split-complementary': splitComplementaryGeneration,
    triadic: triadicGeneration,
    tetradic: tetradicGeneration,
    polychromatic: polychromaticGeneration,
    customized: randomGeneration,
};
/**
 *
 * @param type
 * @param colors locked colors
 * @param configuration
 * @returns
 */
export const paletteGeneration = (type = 'monochromatic', configuration = {}) => {
    // set default value
    const newConfiguration = validateConfiguration(type, configuration);
    try {
        return generator[type](newConfiguration);
    }
    catch (e) {
        return randomGeneration(newConfiguration);
    }
};
//# sourceMappingURL=index.js.map