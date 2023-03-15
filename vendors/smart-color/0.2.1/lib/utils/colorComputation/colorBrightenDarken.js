"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorBrighten = exports.colorDarken = void 0;
const helper_1 = require("../helper");
const colorConversion_1 = require("../colorConversion");
// get darken/brighten color
// ref: https://zhuanlan.zhihu.com/p/32422584
const hueStep = 2;
const saturationStep = 0.16;
const saturationStep2 = 0.05;
const brightnessStep1 = 0.05;
const brightnessStep2 = 0.15;
const lightColorCount = 5;
const darkColorCount = 4;
const getHue = (h, i, isLight) => {
    let hue;
    if (h >= 60 && h <= 240) {
        hue = isLight ? h - hueStep * i : h + hueStep * i;
    }
    else {
        hue = isLight ? h + hueStep * i : h - hueStep * i;
    }
    if (hue < 0) {
        hue += 360;
    }
    else if (hue >= 360) {
        hue -= 360;
    }
    return Math.round(hue);
};
const getSaturation = (s, i, isLight) => {
    let saturation;
    if (isLight) {
        saturation = s - saturationStep * i;
    }
    else if (i === darkColorCount) {
        saturation = s + saturationStep;
    }
    else {
        saturation = s + saturationStep2 * i;
    }
    if (isLight && i === lightColorCount && saturation > 0.1) {
        saturation = 0.1;
    }
    saturation = helper_1.clamp(saturation, 0.06, 1);
    return Number(saturation.toFixed(2));
};
const getValue = (v, i, isLight) => {
    let value;
    if (isLight) {
        value = v + brightnessStep1 * i;
    }
    else {
        value = v - brightnessStep2 * i;
    }
    value = helper_1.clamp(value, 0, 1);
    return Number(value.toFixed(2));
};
const colorDarken = (color, value = 1) => {
    const [h, s, v] = colorConversion_1.colorToArray(color, 'hsv');
    return {
        model: 'hsv',
        value: {
            h: getHue(h, value, false),
            s: getSaturation(s, value, false),
            v: getValue(v, value, false),
        },
    };
};
exports.colorDarken = colorDarken;
const colorBrighten = (color, value = 1) => {
    const [h, s, v] = colorConversion_1.colorToArray(color, 'hsv');
    return {
        model: 'hsv',
        value: {
            h: getHue(h, value, true),
            s: getSaturation(s, value, true),
            v: getValue(v, value, true),
        },
    };
};
exports.colorBrighten = colorBrighten;
//# sourceMappingURL=colorBrightenDarken.js.map