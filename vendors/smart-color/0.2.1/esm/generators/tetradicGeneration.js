import { paletteOptimization } from '../optimizers';
import { categoricalGenerationInHsv } from './categoricalGeneration';
// generate categorical palette by tetradic scheme
export const tetradicGeneration = (configuration) => {
    const { count, color, colors } = configuration;
    const dHue = 90;
    const { newColors, locked } = categoricalGenerationInHsv(color, dHue, count, colors);
    const palette = {
        name: 'tetradic',
        semantic: null,
        type: 'categorical',
        colors: newColors,
    };
    return paletteOptimization(palette, { locked });
};
//# sourceMappingURL=tetradicGeneration.js.map