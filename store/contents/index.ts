import create from 'zustand';
import { IContentById, IContents, IContentsStore } from './contents';

const initContentById = {
    ageLimitKor: '',
    avgRating: 0,
    authors: [{ type: '', name: '' }],
    description: '',
    episodes: {
        totalCount: 0,
        items: [
            {
                createdAt: '',
                isFree: false,
                order: 0,
                thumbnailUrl: '',
                title: '',
                urlOfMobile: '',
                urlOfPc: ''
            }
        ]
    },
    genre: [],
    platform: '',
    idx: 0,
    isAdult: false,
    isNew: false,
    isUpdated: false,
    updateDays: [],
    thumbnailUrl: '',
    thumbnailBackgroundUrl: '',
    title: '',
    urlOfMobile: '',
    urlOfPc: ''
};

const contentsStore = create<IContentsStore>()((set) => ({
    contents: [],
    contentById: initContentById,
    SET_CONTENTS: (data: IContents[]) => set((state: IContentsStore) => ({ contents: data })),
    SET_CONTENT_BY_ID: (data: IContentById) => set((state: IContentsStore) => ({ contentById: data }))
}));

export default contentsStore;
