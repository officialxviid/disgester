import { discreteScaleGenerationInLab } from './discreteScaleGeneration';
// generate sequential palette by monochromatic scheme
export const monochromaticGeneration = (configuration) => {
    const { count, color, tendency } = configuration;
    const isTint = tendency === 'tint';
    const newColors = discreteScaleGenerationInLab(color, count);
    const palette = {
        name: 'monochromatic',
        semantic: null,
        type: 'discrete-scale',
        colors: isTint ? newColors : newColors.reverse(),
    };
    return palette;
};
//# sourceMappingURL=monochromaticGeneration.js.map