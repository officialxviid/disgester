import { monochromaticGeneration } from './monochromaticGeneration';
const BLACK = {
    model: 'rgb',
    value: { r: 0, g: 0, b: 0 },
};
const WHITE = {
    model: 'rgb',
    value: { r: 255, g: 255, b: 255 },
};
// generate sequential palette by achromatic scheme
export const achromaticGeneration = (configuration) => {
    const { tendency } = configuration;
    const newConfiguration = {
        ...configuration,
        color: tendency === 'tint' ? BLACK : WHITE,
    };
    const palette = monochromaticGeneration(newConfiguration);
    return {
        ...palette,
        name: 'achromatic',
    };
};
//# sourceMappingURL=achromaticGeneration.js.map