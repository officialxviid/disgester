"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfiguration = void 0;
const random_1 = require("./random");
const DISCRETE_SCALE_TYPES = ['monochromatic'];
const validateConfiguration = (type, configuration) => {
    const { count = 8, tendency = 'tint' } = configuration;
    let { colors = [], color } = configuration;
    // If the colour is not configured
    // then select the first of the locked colors or generate a random color
    if (!color) {
        color = colors.find((c) => !!c && !!c.model && !!c.value) || random_1.randomColor();
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
exports.validateConfiguration = validateConfiguration;
//# sourceMappingURL=validateConfiguration.js.map