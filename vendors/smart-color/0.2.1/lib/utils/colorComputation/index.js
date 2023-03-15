"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hueOffset = exports.colorDarken = exports.colorBrighten = exports.colorBlend = void 0;
var colorBlend_1 = require("./colorBlend");
Object.defineProperty(exports, "colorBlend", { enumerable: true, get: function () { return colorBlend_1.colorBlend; } });
var colorBrightenDarken_1 = require("./colorBrightenDarken");
Object.defineProperty(exports, "colorBrighten", { enumerable: true, get: function () { return colorBrightenDarken_1.colorBrighten; } });
Object.defineProperty(exports, "colorDarken", { enumerable: true, get: function () { return colorBrightenDarken_1.colorDarken; } });
const hueOffset = (hue, dHue) => {
    let newHue = (hue + dHue) % 360;
    if (newHue < 0) {
        newHue += 360;
    }
    else if (newHue >= 360) {
        newHue -= 360;
    }
    return newHue;
};
exports.hueOffset = hueOffset;
//# sourceMappingURL=index.js.map