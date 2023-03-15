import { Color, ColorModel } from '@antv/color-schema';
import { ColorDifferenceMeasure, SimulationType } from '../types';
declare type ColorArray = [number] | [number, number, number] | [number, number, number, number];
declare type Colors = ColorArray[];
export declare const calFitness: (colors: Colors, locked: boolean[], simulationType: SimulationType, colorModel: ColorModel, colorDifferenceMeasure: ColorDifferenceMeasure, backgroundColor: Color) => number;
export declare const optimizePaletteByGA: (colors: Colors, locked: boolean[], simulationType: SimulationType, threshold: number, colorModel: ColorModel, colorDifference: ColorDifferenceMeasure, backgroundColor: Color) => any;
export {};
