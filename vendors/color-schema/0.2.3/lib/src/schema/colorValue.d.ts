export declare type ColorModel = 'hsl' | 'hsv' | 'hsi' | 'rgb' | 'rgba' | 'lab' | 'lch' | 'cmyk';
export interface HSLValue {
    /**
     * @minimum 0
     * @maximum 360
     */
    h: number;
    /**
     * @minimum 0
     * @maximum 1
     */
    s: number;
    /**
     * @minimum 0
     * @maximum 1
     */
    l: number;
}
declare type range = [number, number];
export declare const HSLValueRange: Record<keyof HSLValue, range>;
export interface HSLColor {
    model: 'hsl';
    value: HSLValue;
}
export interface HSVValue {
    /**
     * @minimum 0
     * @maximum 360
     */
    h: number;
    /**
     * @minimum 0
     * @maximum 1
     */
    s: number;
    /**
     * @minimum 0
     * @maximum 1
     */
    v: number;
}
export declare const HSVValueRange: Record<keyof HSVValue, range>;
export interface HSVColor {
    model: 'hsv';
    value: HSVValue;
}
export interface HSIValue {
    /**
     * @minimum 0
     * @maximum 360
     */
    h: number;
    /**
     * @minimum 0
     * @maximum 1
     */
    s: number;
    /**
     * @minimum 0
     * @maximum 1
     */
    i: number;
}
export declare const HSIValueRange: Record<keyof HSIValue, range>;
export interface HSIColor {
    model: 'hsi';
    value: HSIValue;
}
export interface RGBValue {
    /**
     * @minimum 0
     * @maximum 255
     */
    r: number;
    /**
     * @minimum 0
     * @maximum 255
     */
    g: number;
    /**
     * @minimum 0
     * @maximum 255
     */
    b: number;
}
export declare const RGBValueRange: Record<keyof RGBValue, range>;
export interface RGBColor {
    model: 'rgb';
    value: RGBValue;
}
export interface RGBAValue {
    /**
     * @minimum 0
     * @maximum 255
     */
    r: number;
    /**
     * @minimum 0
     * @maximum 255
     */
    g: number;
    /**
     * @minimum 0
     * @maximum 255
     */
    b: number;
    /**
     * @minimum 0
     * @maximum 1
     */
    a: number;
}
export declare const RGBAValueRange: Record<keyof RGBAValue, range>;
export interface RGBAColor {
    model: 'rgba';
    value: RGBAValue;
}
export interface LABValue {
    /**
     * @minimum 0
     * @maximum 100
     */
    l: number;
    /**
     * @minimum -86.185
     * @maximum 98.254
     */
    a: number;
    /**
     * @minimum -107.863
     * @maximum 94.482
     */
    b: number;
}
export declare const LABRange: Record<keyof LABValue, range>;
export interface LABColor {
    model: 'lab';
    value: LABValue;
}
export interface LCHValue {
    /**
     * @minimum 0
     * @maximum 100
     */
    l: number;
    /**
     * @minimum 0
     * @maximum 100
     */
    c: number;
    /**
     * @minimum 0
     * @maximum 360
     */
    h: number;
}
export declare const LCHRange: Record<keyof LCHValue, range>;
export interface LCHColor {
    model: 'lch';
    value: LCHValue;
}
export interface CMYKValue {
    /**
     * @minimum 0
     * @maximum 1
     */
    c: number;
    /**
     * @minimum 0
     * @maximum 1
     */
    m: number;
    /**
     * @minimum 0
     * @maximum 1
     */
    y: number;
    /**
     * @minimum 0
     * @maximum 1
     */
    k: number;
}
export declare const CMYKRange: Record<keyof CMYKValue, range>;
export interface CMYKColor {
    model: 'cmyk';
    value: CMYKValue;
}
interface ColorModelInfo {
    [key: string]: range;
}
export declare const ColorModelRange: Record<ColorModel, ColorModelInfo>;
export declare function isColorValue(colorValue: ColorValue): colorValue is ColorValue;
export declare type ColorValue = HSLColor | HSVColor | HSIColor | RGBColor | RGBAColor | LABColor | LCHColor | CMYKColor;
export {};
