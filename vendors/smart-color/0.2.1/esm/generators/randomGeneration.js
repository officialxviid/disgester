import { paletteOptimization } from '../optimizers';
import { randomColor } from './random';
// generate categorical palette randomly
export const randomGeneration = (configuration) => {
    const { count, colors } = configuration;
    const locked = [];
    const palette = {
        name: 'random',
        semantic: null,
        type: 'categorical',
        colors: new Array(count).fill(0).map((d, i) => {
            const lockedColor = colors[i];
            if (lockedColor) {
                locked[i] = true;
                return lockedColor;
            }
            return randomColor();
        }),
    };
    return paletteOptimization(palette, { locked });
};
//# sourceMappingURL=randomGeneration.js.map