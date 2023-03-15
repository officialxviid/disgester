export function isCategoricalPalette(palette) {
    if (palette.type === 'categorical')
        return true;
    return false;
}
export function isDiscreteScalePalette(palette) {
    if (palette.type === 'discrete-scale')
        return true;
    return false;
}
export function isContinuousPalette(palette) {
    if (palette.type === 'continuous-scale')
        return true;
    return false;
}
export function isMatrixPalette(palette) {
    if (palette.type === 'matrix')
        return true;
    return false;
}
//# sourceMappingURL=palette.js.map