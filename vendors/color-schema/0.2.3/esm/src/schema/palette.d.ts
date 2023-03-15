import { Color, ContinuousColor } from './color';
export declare type ColorSchemeType = 'monochromatic' | 'complementary' | 'split-complementary' | 'achromatic' | 'analogous' | 'triadic' | 'tetradic' | 'polychromatic' | 'customized';
export interface PaletteBaseInfo {
    id?: string;
    name: string;
    semantic: string | null;
    description?: string;
    colorScheme?: ColorSchemeType;
    usage?: string[];
}
export declare type PaletteType = 'categorical' | 'discrete-scale' | 'continuous-scale' | 'matrix';
export declare type CategoricalPalette = PaletteBaseInfo & {
    type: 'categorical';
    colors: Color[];
};
export declare type DiscreteScalePalette = PaletteBaseInfo & {
    type: 'discrete-scale';
    colors: Color[];
};
export declare type ContinuousScalePalette = PaletteBaseInfo & {
    type: 'continuous-scale';
    colors: ContinuousColor[];
};
export declare type MatrixPalette = PaletteBaseInfo & {
    type: 'matrix';
    colors: Color[][];
    origin: {
        x: Color[];
        y: Color[];
    };
};
export declare function isCategoricalPalette(palette: Palette): palette is CategoricalPalette;
export declare function isDiscreteScalePalette(palette: Palette): palette is DiscreteScalePalette;
export declare function isContinuousPalette(palette: Palette): palette is ContinuousScalePalette;
export declare function isMatrixPalette(palette: Palette): palette is MatrixPalette;
export declare type Palette = CategoricalPalette | DiscreteScalePalette | ContinuousScalePalette | MatrixPalette;
