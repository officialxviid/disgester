import { paletteOptimization } from '../optimizers';
import { categoricalGenerationInHsv } from './categoricalGeneration';
// generate categorical palette by split complementary scheme
export const splitComplementaryGeneration = (configuration) => {
    const { count, color, colors } = configuration;
    const dHue = 180;
    const { newColors, locked } = categoricalGenerationInHsv(color, dHue, count, colors);
    const palette = {
        name: 'tetradic',
        semantic: null,
        type: 'categorical',
        colors: newColors,
    };
    return paletteOptimization(palette, { locked });
};
//# sourceMappingURL=splitComplementaryGeneration.js.map