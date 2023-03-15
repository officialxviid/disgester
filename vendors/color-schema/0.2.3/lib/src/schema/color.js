"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorToHex = void 0;
const tslib_1 = require("tslib");
const chroma_js_1 = (0, tslib_1.__importDefault)(require("chroma-js"));
const isChromaColor = (color) => {
    if (chroma_js_1.default.valid(color)) {
        return true;
    }
    return false;
};
function colorToHex(color) {
    const { value } = color;
    if (isChromaColor(value)) {
        return (0, chroma_js_1.default)(value).hex();
    }
    return '';
}
exports.colorToHex = colorToHex;
//# sourceMappingURL=color.js.map