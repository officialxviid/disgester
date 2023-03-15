"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomColor = void 0;
const utils_1 = require("../utils");
function randomColor() {
    const r = utils_1.randomInt(255);
    const g = utils_1.randomInt(255);
    const b = utils_1.randomInt(255);
    return utils_1.arrayToColor([r, g, b], 'rgb');
}
exports.randomColor = randomColor;
//# sourceMappingURL=random.js.map