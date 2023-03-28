export const replaceSpaceToLineBreak = (string: string, position: 'first' | 'second') => {
    const targetIndex = position == 'first' ? string.indexOf(' ') : string.indexOf(' ', string.indexOf(' ') + 1);
    const chars = string.split('');
    chars[targetIndex] = '\n';
    return chars.join('');
};

export const dayOfWeekKoMap: { [key: string]: string } = {
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

export const dayOfWeekEnMap: { [key: string]: string } = {
    월: 'mon',
    화: 'tue',
    수: 'wed',
    목: 'thu',
    금: 'fri',
    토: 'sat',
    일: 'sun',
    매일: 'daily',
    완결: 'finished'
};
