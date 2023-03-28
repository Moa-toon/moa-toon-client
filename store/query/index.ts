import { IQuery, IQueryStore } from './query';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

const initQuery: IQuery = {
    page: 1,
    take: 10,
    type: '',
    platform: '',
    updateDay: 'mon',
    genres: '',
    tags: '',
    keyword: '',
    sortBy: ''
};

const queryStore = create<IQueryStore>()((set) => ({
    query: initQuery,
    SET_QUERY: (queryString: IQuery) => set((state: IQueryStore) => ({ query: queryString })),
    RESET_QUERY: () => set((state: IQueryStore) => ({ query: initQuery }))
}));

export default queryStore;
