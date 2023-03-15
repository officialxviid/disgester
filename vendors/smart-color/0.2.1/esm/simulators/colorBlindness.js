// @ts-ignore
import blinder from 'color-blind';
import { COLOR_BLINDNESS_SIMULATION_TYPES } from '../constant';
import { hexToColor, colorToHex } from '../utils';
export function isColorBlindnessSimulation(type) {
    return type !== 'normal' && COLOR_BLINDNESS_SIMULATION_TYPES.indexOf(type) > -1;
}
// get color in color blindness simulation
export const colorBlindnessSimulation = (color, type = 'normal') => {
    if (type === 'normal') {
        return { ...color };
    }
    const hexColor = colorToHex(color);
    const blindColor = blinder[type](hexColor);
    return hexToColor(blindColor);
};
//# sourceMappingURL=colorBlindness.js.map