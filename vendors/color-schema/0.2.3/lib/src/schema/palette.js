"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMatrixPalette = exports.isContinuousPalette = exports.isDiscreteScalePalette = exports.isCategoricalPalette = void 0;
function isCategoricalPalette(palette) {
    if (palette.type === 'categorical')
        return true;
    return false;
}
exports.isCategoricalPalette = isCategoricalPalette;
function isDiscreteScalePalette(palette) {
    if (palette.type === 'discrete-scale')
        return true;
    return false;
}
exports.isDiscreteScalePalette = isDiscreteScalePalette;
function isContinuousPalette(palette) {
    if (palette.type === 'continuous-scale')
        return true;
    return false;
}
exports.isContinuousPalette = isContinuousPalette;
function isMatrixPalette(palette) {
    if (palette.type === 'matrix')
        return true;
    return false;
}
exports.isMatrixPalette = isMatrixPalette;
//# sourceMappingURL=palette.js.map