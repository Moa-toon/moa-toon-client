export interface ICardListProps {
    cards: ICard[];
    platform: 'naver' | 'kakao';
}

export interface ICardProps {
    card: ICard;
    platform: string;
}

export interface ICard {
    ageLimit: number;
    idx: number;
    isAdult: boolean;
    isNew: boolean;
    isUpdated: boolean;
    pageUrl: string;
    summary: string;
    thumbnailUrl: string;
    title: string;
}
