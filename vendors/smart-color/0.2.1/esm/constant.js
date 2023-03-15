export const COLOR_BLINDNESS_SIMULATION_TYPES = [
    'normal',
    'protanomaly',
    'deuteranomaly',
    'tritanomaly',
    'protanopia',
    'deuteranopia',
    'tritanopia',
    'achromatomaly',
    'achromatopsia',
];
// color optimization configuration
export const TENDENCIES = ['tint', 'shade'];
export const COLOR_DIFFERENCE_MEASURES = ['euclidean', 'CIEDE2000', 'contrastRatio'];
export const COLOR_AESTHETIC_MEASURES = ['pairPreference', 'harmony'];
export const WHITE = {
    model: 'rgb',
    value: {
        r: 255,
        g: 255,
        b: 255,
    },
};
// Separable blend modes https://www.w3.org/TR/compositing/#blendingseparable
export const SEPARABLE_BLEND_MODES = [
    'normal',
    'darken',
    'multiply',
    'colorBurn',
    'linearBurn',
    'lighten',
    'screen',
    'colorDodge',
    'linearDodge',
    'overlay',
    'softLight',
    'hardLight',
    'vividLight',
    'linearLight',
    'pinLight',
    'difference',
    'exclusion',
];
// Non-separable blend modes https://www.w3.org/TR/compositing/#blendingnonseparable
export const NON_SEPARABLE_BLEND_MODES = ['hue', 'saturation', 'color', 'luminosity'];
export const BLEND_MODES = [...SEPARABLE_BLEND_MODES, ...NON_SEPARABLE_BLEND_MODES];
//# sourceMappingURL=constant.js.map