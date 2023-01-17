export const replaceSpaceToLineBreak = (string: string, position: 'first' | 'second') => {
    const targetIndex = position == 'first' ? string.indexOf(' ') : string.indexOf(' ', string.indexOf(' ') + 1);
    const chars = string.split('');
    chars[targetIndex] = '\n';
    return chars.join('');
};

export const dayOfWeekMap: { [key: string]: string } = {
    mon: '월',
    tue: '화',
    wed: '수',
    thu: '목',
    fri: '금',
    sat: '토',
    sun: '일',
    daily: '매일',
    finished: '완결'
};
