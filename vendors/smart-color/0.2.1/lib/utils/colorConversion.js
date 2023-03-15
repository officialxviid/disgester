"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameToColor = exports.hexToColor = exports.colorToHex = exports.grayToColor = exports.colorToGray = exports.arrayToColor = exports.colorToArray = exports.colorToChromaColor = void 0;
const tslib_1 = require("tslib");
const chroma_js_1 = tslib_1.__importDefault(require("chroma-js"));
const getHexByName_1 = require("./getHexByName");
const isChromaColor = (color) => {
    if (chroma_js_1.default.valid(color)) {
        return true;
    }
    return false;
};
// Convert color to chroma color
const colorToChromaColor = (color) => {
    const { value } = color;
    if (isChromaColor(value)) {
        return chroma_js_1.default(value);
    }
    return chroma_js_1.default('#000');
};
exports.colorToChromaColor = colorToChromaColor;
// Convert color to an array in a specific color model
const colorToArray = (color, colorModel = color.model) => {
    const chromaColor = exports.colorToChromaColor(color);
    if (chromaColor) {
        return chromaColor[colorModel]();
    }
    return [0, 0, 0];
};
exports.colorToArray = colorToArray;
// Convert an array in a specific color model to color
const arrayToColor = (array, colorModel = array.length === 4 ? 'rgba' : 'rgb') => {
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
exports.arrayToColor = arrayToColor;
// Convert color to gray value
function colorToGray(color) {
    const [r, g, b] = exports.colorToArray(color, 'rgb'); // [red, green, blue]
    // Ref:https://tannerhelland.com/2011/10/01/grayscale-image-algorithm-vb6.html
    const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    // gray value: [0, 255]
    return gray;
}
exports.colorToGray = colorToGray;
// Convert gray value to color
function grayToColor(gray, alpha = 1) {
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
exports.grayToColor = grayToColor;
var color_schema_1 = require("@antv/color-schema");
Object.defineProperty(exports, "colorToHex", { enumerable: true, get: function () { return color_schema_1.colorToHex; } });
function hexToColor(hexValue) {
    if (/^(#|0x)?[0-9a-fA-F]{3}$/.test(hexValue) || /^(#|0x)?[0-9a-fA-F]{6}$/.test(hexValue)) {
        const rgb = chroma_js_1.default(hexValue).rgb();
        return exports.arrayToColor(rgb, 'rgb');
    }
    if (/^(#|0x)?[0-9a-fA-F]{4}$/.test(hexValue) || /^(#|0x)?[0-9a-fA-F]{8}$/.test(hexValue)) {
        const rgba = chroma_js_1.default(hexValue).rgba();
        return exports.arrayToColor(rgba, 'rgba');
    }
    return {
        model: 'rgb',
        value: { r: 0, g: 0, b: 0 },
    };
}
exports.hexToColor = hexToColor;
function nameToColor(name) {
    const hex = getHexByName_1.getHexByName(name);
    return hexToColor(hex);
}
exports.nameToColor = nameToColor;
//# sourceMappingURL=colorConversion.js.map