import { hexToColor } from '../utils';
// Get a list of colors from string
export function getPaletteFromString(string) {
    return {
        name: 'code',
        semantic: null,
        type: 'categorical',
        colors: string
            .replace(/[^#,0-9a-fA-F]/g, '')
            .split(',')
            .filter((color) => color.length > 0)
            .map((color) => {
            return hexToColor(color);
        }),
    };
}
//# sourceMappingURL=getPaletteFromString.js.map