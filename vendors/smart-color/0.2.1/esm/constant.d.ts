import { Color } from '@antv/color-schema';
export declare const COLOR_BLINDNESS_SIMULATION_TYPES: readonly ["normal", "protanomaly", "deuteranomaly", "tritanomaly", "protanopia", "deuteranopia", "tritanopia", "achromatomaly", "achromatopsia"];
export declare const TENDENCIES: readonly ["tint", "shade"];
export declare const COLOR_DIFFERENCE_MEASURES: readonly ["euclidean", "CIEDE2000", "contrastRatio"];
export declare const COLOR_AESTHETIC_MEASURES: readonly ["pairPreference", "harmony"];
export declare const WHITE: Color;
export declare const SEPARABLE_BLEND_MODES: string[];
export declare const NON_SEPARABLE_BLEND_MODES: readonly ["hue", "saturation", "color", "luminosity"];
export declare const BLEND_MODES: readonly [...string[], "hue", "saturation", "color", "luminosity"];
