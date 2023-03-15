import { ColorValue } from './colorValue';
export declare type Undertone = 'warm' | 'neutral' | 'cool';
export interface ColorBaseInfo {
    id?: string;
    name?: string;
    undertone?: Undertone;
    usage?: string[];
}
export declare type Color = ColorBaseInfo & ColorValue;
export declare type ContinuousColor = Color & {
    /**
     * @minimum 0
     * @maximum 1
     */
    location?: number;
};
export declare function colorToHex(color: Color): string;
