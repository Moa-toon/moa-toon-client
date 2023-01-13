export const replaceSpaceToLineBreak = (string: string, position: 'first' | 'second') => {
    const targetIndex = position == 'first' ? string.indexOf(' ') : string.indexOf(' ', string.indexOf(' ') + 1);
    const chars = string.split('');
    chars[targetIndex] = '\n';
    return chars.join('');
};
