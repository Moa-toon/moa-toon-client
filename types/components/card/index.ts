export interface ICardListProps {
    cards: ICard[];
    platform: 'naver' | 'kakao' | 'lezhinComics';
}

export interface ICardProps {
    card: ICard;
    platform: string;
}

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
    title: string;
    urlOfMobile: string;
    urlOfPc: string;
}
