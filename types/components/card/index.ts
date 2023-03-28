export interface ICard {
    ageLimit: number;
    avgRating: number;
    idx: number;
    isAdult: boolean;
    isNew: boolean;
    isUpdated: boolean;
    platform: string;
    summary: string;
    thumbnailUrl: string;
    thumbnailBackgroundUrl: string;
    title: string;
    urlOfMobile: string;
    urlOfPc: string;
}

export interface IEpisodeCard {
    createdAt: string;
    isFree: boolean;
    order: number;
    thumbnailUrl: string;
    title: string;
    urlOfMobile: string;
    urlOfPc: string;
}
