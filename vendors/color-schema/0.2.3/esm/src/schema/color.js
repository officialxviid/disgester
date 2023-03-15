import chroma from 'chroma-js';
const isChromaColor = (color) => {
    if (chroma.valid(color)) {
        return true;
    }
    return false;
};
export function colorToHex(color) {
    const { value } = color;
    if (isChromaColor(value)) {
        return chroma(value).hex();
    }
    return '';
}
//# sourceMappingURL=color.js.map