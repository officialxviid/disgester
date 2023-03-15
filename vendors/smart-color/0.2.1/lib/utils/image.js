"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadImage = void 0;
// Load a image in a promise
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load', () => {
            resolve(img);
        });
        img.addEventListener('error', () => {
            reject(new Error(`Failed to load image URL: ${url}`));
        });
        img.crossOrigin = 'anonymous';
        img.src = url;
    });
}
exports.loadImage = loadImage;
//# sourceMappingURL=image.js.map