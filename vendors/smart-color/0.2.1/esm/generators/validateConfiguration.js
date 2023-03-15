import { randomColor } from './random';
const DISCRETE_SCALE_TYPES = ['monochromatic'];
export const validateConfiguration = (type, configuration) => {
    const { count = 8, tendency = 'tint' } = configuration;
    let { colors = [], color } = configuration;
    // If the colour is not configured
    // then select the first of the locked colors or generate a random color
    if (!color) {
        color = colors.find((c) => !!c && !!c.model && !!c.value) || randomColor();
    }
    // Discrete scale palette cannot be generated when colors are locked.
    if (DISCRETE_SCALE_TYPES.includes(type)) {
        colors = [];
    }
    return {
        color,
        colors,
        count,
        tendency,
    };
};
//# sourceMappingURL=validateConfiguration.js.map