import moment from 'moment-timezone';

export const DAY_OF_WEEK = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
export const DAY_OF_TODAY = moment().format('ddd').toLocaleLowerCase();
