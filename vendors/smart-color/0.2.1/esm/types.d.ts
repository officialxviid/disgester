import { Color, Palette, ColorModel, ColorSchemeType, CategoricalPalette, DiscreteScalePalette } from '@antv/color-schema';
import { COLOR_BLINDNESS_SIMULATION_TYPES, TENDENCIES, COLOR_DIFFERENCE_MEASURES, COLOR_AESTHETIC_MEASURES, BLEND_MODES, SEPARABLE_BLEND_MODES, NON_SEPARABLE_BLEND_MODES } from './constant';
export declare type ColorBlindnessSimulationType = typeof COLOR_BLINDNESS_SIMULATION_TYPES[number];
export declare type GrayscaleType = 'grayscale';
export declare type SimulationType = ColorBlindnessSimulationType | GrayscaleType;
export declare type ColorSimulation = (color: Color, type?: SimulationType) => Color;
export declare type ColorDifferenceMeasure = typeof COLOR_DIFFERENCE_MEASURES[number];
declare type ColorDifferenceGeneralConfiguration = {
    backgroundColor?: Color;
};
export declare type ColorDifferenceConfiguration = ColorDifferenceGeneralConfiguration & ({
    measure: 'euclidean';
    colorModel?: ColorModel;
} | {
    measure: 'CIEDE2000' | 'contrastRatio';
});
export declare type ColorDifference = (color1: Color, color2: Color, configuration?: ColorDifferenceConfiguration) => number;
export declare type ColorAestheticMeasure = typeof COLOR_AESTHETIC_MEASURES[number];
export declare type ColorAestheticConfiguration = {
    measure: ColorAestheticMeasure;
    backgroundColor?: Color;
};
export declare type ColorAesthetic = (color1: Color, color2: Color, configuration?: ColorAestheticConfiguration) => number;
export declare type OptimizerConfiguration = {
    locked?: boolean[];
    simulationType?: SimulationType;
    threshold?: number;
    colorModel?: ColorModel;
    colorDifferenceMeasure?: ColorDifferenceMeasure;
    backgroundColor?: Color;
};
export declare type PaletteOptimization = (palette: Palette, configuration?: OptimizerConfiguration) => Palette;
declare type Tendency = typeof TENDENCIES[number];
export declare type GeneratorConfiguration = {
    count?: number;
    color?: Color;
    colors?: (Color | undefined)[];
    tendency?: Tendency;
};
export declare type PaletteGeneration = (type?: ColorSchemeType, configuration?: GeneratorConfiguration) => CategoricalPalette | DiscreteScalePalette;
export declare type SeparableBlendMode = typeof SEPARABLE_BLEND_MODES[number];
export declare type NonSeparableBlendMode = typeof NON_SEPARABLE_BLEND_MODES[number];
export declare type BlendMode = typeof BLEND_MODES[number];
export declare type ColorBlend = (colorTop: Color, colorBottom: Color, mode?: BlendMode) => Color;
export declare type ColorDarken = (color: Color, value?: number) => Color;
export declare type ColorBrighten = (color: Color, value?: number) => Color;
export {};
