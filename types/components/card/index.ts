export interface ICardListProps {
    cards: ICard[];
}

export interface ICardProps {
    card: ICard;
}

export interface ICard {
    idx: number;
    title: string;
    thumbnail: string;
    platform: string;
    new: boolean;
    up: boolean;
    adult: number;
    rest: boolean;
}
