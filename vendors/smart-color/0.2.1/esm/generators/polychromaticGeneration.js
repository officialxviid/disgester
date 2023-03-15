import { paletteOptimization } from '../optimizers';
import { categoricalGenerationInHsv } from './categoricalGeneration';
// generate categorical palette by polychromatic scheme
export const polychromaticGeneration = (configuration) => {
    const { count, color, colors } = configuration;
    const dHue = 360 / count;
    const { newColors, locked } = categoricalGenerationInHsv(color, dHue, count, colors);
    const palette = {
        name: 'tetradic',
        semantic: null,
        type: 'categorical',
        colors: newColors,
    };
    return paletteOptimization(palette, { locked });
};
//# sourceMappingURL=polychromaticGeneration.js.map