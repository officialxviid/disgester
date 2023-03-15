import { ColorSchemeType } from '@antv/color-schema';
import { GeneratorConfiguration } from '../types';
export declare const validateConfiguration: (type: ColorSchemeType, configuration: GeneratorConfiguration) => {
    color: import("@antv/color-schema").Color;
    colors: import("@antv/color-schema").Color[];
    count: number;
    tendency: "tint" | "shade";
};
