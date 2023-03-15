"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDeep = exports.clamp = exports.randomInt = exports.random = void 0;
const random = (a = 1, b = 0) => {
    const lower = Math.min(a, b);
    const upper = Math.max(a, b);
    return lower + Math.random() * (upper - lower);
};
exports.random = random;
const randomInt = (a = 1, b = 0) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
};
exports.randomInt = randomInt;
const clamp = (num, boundOne, boundTwo) => {
    if (!boundTwo) {
        return Math.max(num, boundOne) === boundOne ? num : boundOne;
    }
    if (Math.min(num, boundOne) === num) {
        return boundOne;
    }
    if (Math.max(num, boundTwo) === num) {
        return boundTwo;
    }
    return num;
};
exports.clamp = clamp;
// poor version, but enough
const cloneDeep = (target) => {
    if (target && typeof target === 'object') {
        const isArray = Array.isArray(target);
        if (isArray) {
            const cloneTarget = target.map((d) => exports.cloneDeep(d));
            return cloneTarget;
        }
        // isObject
        const cloneTarget = {};
        const keys = Object.keys(target);
        keys.forEach((key) => {
            // @ts-ignore
            cloneTarget[key] = exports.cloneDeep(target[key]);
        });
        return cloneTarget;
    }
    return target;
};
exports.cloneDeep = cloneDeep;
//# sourceMappingURL=helper.js.map