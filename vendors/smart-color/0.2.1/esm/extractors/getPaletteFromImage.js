// @ts-ignore
import quantize from 'quantize';
import { loadImage, arrayToColor } from '../utils';
// sample pixels in image
const imageToPixels = (image, quality) => {
    const { width, height } = image;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context)
        return [];
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0, width, height);
    const imageData = context.getImageData(0, 0, width, height).data;
    const pixels = [];
    const count = width * height;
    for (let i = 0; i < count; i += quality) {
        const offset = i * 4;
        const r = imageData[offset + 0];
        const g = imageData[offset + 1];
        const b = imageData[offset + 2];
        const a = imageData[offset + 3];
        // If pixel is mostly opaque and not white
        if (typeof a === 'undefined' || a >= 125) {
            if (!(r > 250 && g > 250 && b > 250)) {
                pixels.push([r, g, b]);
            }
        }
    }
    return pixels;
};
// Get a list of colors from img url
export async function getPaletteFromImage(imgUrl, count = 6, quality = 10) {
    // int
    let validCount = Math.round(count);
    validCount = Math.max(1, validCount);
    validCount = Math.min(50, validCount);
    let validQuality = Math.round(quality);
    validQuality = Math.max(1, validQuality);
    return new Promise((resolve) => {
        loadImage(imgUrl)
            .then((img) => {
            validQuality = Math.min(Math.floor((img.width * img.height) / validCount), validQuality);
            const pixels = imageToPixels(img, validQuality);
            // Use the median cut algorithm provided by quantize to cluster similar colors
            // the colorCount in quantize must be larger than 1
            // so if the validCount is equal to 1
            // get a palette of two colors and select the base color from the largest cluster
            const colorMap = quantize(pixels, validCount === 1 ? 2 : validCount);
            const arrayRGB = colorMap.palette().slice(0, validCount);
            resolve({
                name: 'image',
                semantic: null,
                type: 'categorical',
                colors: arrayRGB.map((rgb) => arrayToColor(rgb, 'rgb')),
            });
        })
            .finally(() => {
            resolve(undefined);
        });
    });
}
//# sourceMappingURL=getPaletteFromImage.js.map