import chroma from 'chroma-js';
import { getHexByName } from './getHexByName';
const isChromaColor = (color) => {
    if (chroma.valid(color)) {
        return true;
    }
    return false;
};
// Convert color to chroma color
export const colorToChromaColor = (color) => {
    const { value } = color;
    if (isChromaColor(value)) {
        return chroma(value);
    }
    return chroma('#000');
};
// Convert color to an array in a specific color model
export const colorToArray = (color, colorModel = color.model) => {
    const chromaColor = colorToChromaColor(color);
    if (chromaColor) {
        return chromaColor[colorModel]();
    }
    return [0, 0, 0];
};
// Convert an array in a specific color model to color
export const arrayToColor = (array, colorModel = array.length === 4 ? 'rgba' : 'rgb') => {
    const value = {};
    if (array.length === 1) {
        const [v] = array;
        for (let i = 0; i < colorModel.length; i += 1) {
            value[colorModel[i]] = v;
        }
    }
    else {
        for (let i = 0; i < colorModel.length; i += 1) {
            value[colorModel[i]] = array[i];
        }
    }
    return {
        model: colorModel,
        value,
    };
};
// Convert color to gray value
export function colorToGray(color) {
    const [r, g, b] = colorToArray(color, 'rgb'); // [red, green, blue]
    // Ref:https://tannerhelland.com/2011/10/01/grayscale-image-algorithm-vb6.html
    const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    // gray value: [0, 255]
    return gray;
}
// Convert gray value to color
export function grayToColor(gray, alpha = 1) {
    if (alpha === 1) {
        return {
            model: 'rgb',
            value: {
                r: gray,
                g: gray,
                b: gray,
            },
        };
    }
    return {
        model: 'rgba',
        value: {
            r: gray,
            g: gray,
            b: gray,
            a: alpha,
        },
    };
}
export { colorToHex } from '@antv/color-schema';
export function hexToColor(hexValue) {
    if (/^(#|0x)?[0-9a-fA-F]{3}$/.test(hexValue) || /^(#|0x)?[0-9a-fA-F]{6}$/.test(hexValue)) {
        const rgb = chroma(hexValue).rgb();
        return arrayToColor(rgb, 'rgb');
    }
    if (/^(#|0x)?[0-9a-fA-F]{4}$/.test(hexValue) || /^(#|0x)?[0-9a-fA-F]{8}$/.test(hexValue)) {
        const rgba = chroma(hexValue).rgba();
        return arrayToColor(rgba, 'rgba');
    }
    return {
        model: 'rgb',
        value: { r: 0, g: 0, b: 0 },
    };
}
export function nameToColor(name) {
    const hex = getHexByName(name);
    return hexToColor(hex);
}
//# sourceMappingURL=colorConversion.js.map