export interface IContentsStore {
    contents: IContents[];
    contentById: IContentById;
    SET_CONTENTS: (items: IContents[]) => void;
    SET_CONTENT_BY_ID: (item: IContentById) => void;
}

export interface IContents {
    ageLimit: number;
    avgRating: number;
    idx: number;
    isAdult: boolean;
    isNew: boolean;
    isUpdated: boolean;
    platform: string;
    summary: string;
    thumbnailUrl: string;
    title: string;
    urlOfMobile: string;
    urlOfPc: string;
}

export interface IContentById {
    ageLimitKor: string;
    authors: { type: string; name: string }[];
    description: string;
    episodes: {
        totalCount: number;
        items: {
            createdAt: string;
            isFree: boolean;
            order: number;
            thumbnailUrl: string;
            title: string;
            urlOfMobile: string;
            urlOfPc: string;
        }[];
    };
    genre: { main: string; sub: string[] };
    platform: string;
    idx: number;
    isAdult: boolean;
    isNew: boolean;
    isUpdated: boolean;
    updateDays: string[];
    thumbnailUrl: string;
    title: string;
    urlOfMobile: string;
    urlOfPc: string;
}
