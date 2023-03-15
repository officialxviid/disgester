import { colorBlindnessSimulation } from './colorBlindness';
import { grayscale } from './grayscale';
export const colorSimulation = (color, type = 'normal') => {
    if (type === 'grayscale') {
        return grayscale(color);
    }
    return colorBlindnessSimulation(color, type);
};
export { isColorBlindnessSimulation } from './colorBlindness';
export { invertGrayscale } from './grayscale';
//# sourceMappingURL=index.js.map