import { Color, ColorModel } from '@antv/color-schema';
import { Color as ChromaColor } from 'chroma-js';
export declare const colorToChromaColor: (color: Color) => ChromaColor;
export declare const colorToArray: (color: Color, colorModel?: ColorModel) => [number, number, number] | [number, number, number, number];
export declare const arrayToColor: (array: [number] | [number, number, number] | [number, number, number, number], colorModel?: ColorModel) => Color;
export declare function colorToGray(color: Color): number;
export declare function grayToColor(gray: number, alpha?: number): Color;
export { colorToHex } from '@antv/color-schema';
export declare function hexToColor(hexValue: string): Color;
export declare function nameToColor(name: string): Color;