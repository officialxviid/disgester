export const HSLValueRange = {
    h: [0, 360],
    s: [0, 1],
    l: [0, 1],
};
export const HSVValueRange = {
    h: [0, 360],
    s: [0, 1],
    v: [0, 1],
};
export const HSIValueRange = {
    h: [0, 360],
    s: [0, 1],
    i: [0, 1],
};
export const RGBValueRange = {
    r: [0, 255],
    g: [0, 255],
    b: [0, 255],
};
export const RGBAValueRange = {
    r: [0, 255],
    g: [0, 255],
    b: [0, 255],
    a: [0, 1],
};
export const LABRange = {
    l: [0, 100],
    a: [-86.185, 98.254],
    b: [-107.863, 94.482],
};
export const LCHRange = {
    l: [0, 100],
    c: [0, 100],
    h: [0, 360],
};
export const CMYKRange = {
    c: [0, 1],
    m: [0, 1],
    y: [0, 1],
    k: [0, 1],
};
export const ColorModelRange = {
    lab: LABRange,
    lch: LCHRange,
    rgb: RGBValueRange,
    rgba: RGBAValueRange,
    hsl: HSLValueRange,
    hsv: HSVValueRange,
    hsi: HSIValueRange,
    cmyk: CMYKRange,
};
export function isColorValue(colorValue) {
    const { model, value } = colorValue;
    const colorModelRange = ColorModelRange[model];
    return (Object.keys(value).sort().join(',') === Object.keys(colorModelRange).sort().join(',') &&
        Object.entries(value).every(([key, v]) => v >= colorModelRange[key][0] && v <= colorModelRange[key][1]));
}
//# sourceMappingURL=colorValue.js.map