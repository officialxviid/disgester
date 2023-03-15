"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invertGrayscale = exports.grayscale = void 0;
const utils_1 = require("../utils");
// get color in grayscale
const grayscale = (color) => {
    const gray = utils_1.colorToGray(color);
    const [, , , alpha = 1] = utils_1.colorToArray(color, 'rgba');
    return utils_1.grayToColor(gray, alpha);
};
exports.grayscale = grayscale;
// invert color from the gray scale value
// grayscaleValue: [0, 1]
function invertGrayscale(grayscaleValue, color) {
    const [, a, b] = utils_1.colorToArray(color, 'lab');
    const [, , , alpha = 1] = utils_1.colorToArray(color, 'rgba');
    const target = grayscaleValue * 100;
    let L = Math.round(target);
    let newGray = utils_1.colorToGray(utils_1.arrayToColor([L, a, b], 'lab'));
    let cnt = 25;
    while (Math.round(target) !== Math.round((newGray / 255) * 100) && cnt > 0) {
        if (target > (newGray / 255) * 100) {
            L += 1;
        }
        else {
            L -= 1;
        }
        cnt -= 1;
        newGray = utils_1.colorToGray(utils_1.arrayToColor([L, a, b], 'lab'));
    }
    if (Math.round(target) < Math.round((newGray / 255) * 100))
        L -= 1;
    let newColor;
    if (alpha === 1) {
        newColor = utils_1.arrayToColor([L, a, b], 'lab');
    }
    else {
        const rgb = utils_1.colorToArray(utils_1.arrayToColor([L, a, b], 'lab'), 'rgb');
        newColor = utils_1.arrayToColor([...rgb, alpha], 'rgba');
    }
    return { ...color, ...newColor };
}
exports.invertGrayscale = invertGrayscale;
//# sourceMappingURL=grayscale.js.map