"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLEND_MODES = exports.NON_SEPARABLE_BLEND_MODES = exports.SEPARABLE_BLEND_MODES = exports.WHITE = exports.COLOR_AESTHETIC_MEASURES = exports.COLOR_DIFFERENCE_MEASURES = exports.TENDENCIES = exports.COLOR_BLINDNESS_SIMULATION_TYPES = void 0;
exports.COLOR_BLINDNESS_SIMULATION_TYPES = [
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
exports.TENDENCIES = ['tint', 'shade'];
exports.COLOR_DIFFERENCE_MEASURES = ['euclidean', 'CIEDE2000', 'contrastRatio'];
exports.COLOR_AESTHETIC_MEASURES = ['pairPreference', 'harmony'];
exports.WHITE = {
    model: 'rgb',
    value: {
        r: 255,
        g: 255,
        b: 255,
    },
};
// Separable blend modes https://www.w3.org/TR/compositing/#blendingseparable
exports.SEPARABLE_BLEND_MODES = [
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
exports.NON_SEPARABLE_BLEND_MODES = ['hue', 'saturation', 'color', 'luminosity'];
exports.BLEND_MODES = [...exports.SEPARABLE_BLEND_MODES, ...exports.NON_SEPARABLE_BLEND_MODES];
//# sourceMappingURL=constant.js.map