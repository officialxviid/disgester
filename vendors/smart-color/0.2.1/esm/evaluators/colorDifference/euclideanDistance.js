import chroma from 'chroma-js';
import { colorToChromaColor } from '../../utils';
// Computes the Euclidean distance between two colors in a given color model (default is Lab).
// output range: [0, 255]
export const euclideanDistance = (color1, color2, colorModel = 'lab') => {
    return chroma.distance(colorToChromaColor(color1), colorToChromaColor(color2), colorModel);
};
//# sourceMappingURL=euclideanDistance.js.map