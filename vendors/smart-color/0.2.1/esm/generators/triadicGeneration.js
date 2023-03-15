import { paletteOptimization } from '../optimizers';
import { categoricalGenerationInHsv } from './categoricalGeneration';
// generate categorical palette by triadic scheme
export const triadicGeneration = (configuration) => {
    const { count, color, colors } = configuration;
    const dHue = 120;
    const { newColors, locked } = categoricalGenerationInHsv(color, dHue, count, colors);
    const palette = {
        name: 'tetradic',
        semantic: null,
        type: 'categorical',
        colors: newColors,
    };
    return paletteOptimization(palette, { locked });
};
//# sourceMappingURL=triadicGeneration.js.map