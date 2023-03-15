"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isColorValue = exports.ColorModelRange = exports.CMYKRange = exports.LCHRange = exports.LABRange = exports.RGBAValueRange = exports.RGBValueRange = exports.HSIValueRange = exports.HSVValueRange = exports.HSLValueRange = void 0;
exports.HSLValueRange = {
    h: [0, 360],
    s: [0, 1],
    l: [0, 1],
};
exports.HSVValueRange = {
    h: [0, 360],
    s: [0, 1],
    v: [0, 1],
};
exports.HSIValueRange = {
    h: [0, 360],
    s: [0, 1],
    i: [0, 1],
};
exports.RGBValueRange = {
    r: [0, 255],
    g: [0, 255],
    b: [0, 255],
};
exports.RGBAValueRange = {
    r: [0, 255],
    g: [0, 255],
    b: [0, 255],
    a: [0, 1],
};
exports.LABRange = {
    l: [0, 100],
    a: [-86.185, 98.254],
    b: [-107.863, 94.482],
};
exports.LCHRange = {
    l: [0, 100],
    c: [0, 100],
    h: [0, 360],
};
exports.CMYKRange = {
    c: [0, 1],
    m: [0, 1],
    y: [0, 1],
    k: [0, 1],
};
exports.ColorModelRange = {
    lab: exports.LABRange,
    lch: exports.LCHRange,
    rgb: exports.RGBValueRange,
    rgba: exports.RGBAValueRange,
    hsl: exports.HSLValueRange,
    hsv: exports.HSVValueRange,
    hsi: exports.HSIValueRange,
    cmyk: exports.CMYKRange,
};
function isColorValue(colorValue) {
    const { model, value } = colorValue;
    const colorModelRange = exports.ColorModelRange[model];
    return (Object.keys(value).sort().join(',') === Object.keys(colorModelRange).sort().join(',') &&
        Object.entries(value).every(([key, v]) => v >= colorModelRange[key][0] && v <= colorModelRange[key][1]));
}
exports.isColorValue = isColorValue;
//# sourceMappingURL=colorValue.js.map