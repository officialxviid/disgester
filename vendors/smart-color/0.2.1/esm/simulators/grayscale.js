import { arrayToColor, colorToArray, colorToGray, grayToColor } from '../utils';
// get color in grayscale
export const grayscale = (color) => {
    const gray = colorToGray(color);
    const [, , , alpha = 1] = colorToArray(color, 'rgba');
    return grayToColor(gray, alpha);
};
// invert color from the gray scale value
// grayscaleValue: [0, 1]
export function invertGrayscale(grayscaleValue, color) {
    const [, a, b] = colorToArray(color, 'lab');
    const [, , , alpha = 1] = colorToArray(color, 'rgba');
    const target = grayscaleValue * 100;
    let L = Math.round(target);
    let newGray = colorToGray(arrayToColor([L, a, b], 'lab'));
    let cnt = 25;
    while (Math.round(target) !== Math.round((newGray / 255) * 100) && cnt > 0) {
        if (target > (newGray / 255) * 100) {
            L += 1;
        }
        else {
            L -= 1;
        }
        cnt -= 1;
        newGray = colorToGray(arrayToColor([L, a, b], 'lab'));
    }
    if (Math.round(target) < Math.round((newGray / 255) * 100))
        L -= 1;
    let newColor;
    if (alpha === 1) {
        newColor = arrayToColor([L, a, b], 'lab');
    }
    else {
        const rgb = colorToArray(arrayToColor([L, a, b], 'lab'), 'rgb');
        newColor = arrayToColor([...rgb, alpha], 'rgba');
    }
    return { ...color, ...newColor };
}
//# sourceMappingURL=grayscale.js.map