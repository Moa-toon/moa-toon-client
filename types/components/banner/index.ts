export interface ICarousel {
    items: IBanner[];
}

export interface IBanner {
    ageLimit: number;
    genres: string[];
    idx: number;
    isAdult: boolean;
    isNew: boolean;
    platform: string;
    summary: string;
    thumbnailUrl: string;
    title: string;
    type: string;
}
