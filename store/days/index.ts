import { DAY_OF_TODAY } from '@constants/days/days';
import create from 'zustand';
import { IDaysStore } from './days';

const initDays = {
    naver: DAY_OF_TODAY,
    kakao: DAY_OF_TODAY
};

const daysStore = create<IDaysStore>()((set) => ({
    days: initDays,
    HANDLE_DAYS: (type, dayOfWeek) => set((state: IDaysStore) => ({ days: { ...state.days, [type]: dayOfWeek } }))
}));

export default daysStore;
