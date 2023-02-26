import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { ICard } from 'types/components/card';
import Card from './card';

export interface ICardList {
    cards: ICard[];
    visibleTitle: boolean;
    platform: 'naver' | 'kakao' | 'lezhinComics';
}

const CardList: React.FC<ICardList> = ({ cards, platform, visibleTitle }) => {
    return (
        <_CardList>
            {cards.map((card) => (
                <Card key={card.title} card={card} platform={platform} visibleTitle={visibleTitle} />
            ))}
        </_CardList>
    );
};

export default CardList;

const _CardList = styled.div`
    width: 100%;
    padding: ${unit(14)} 0;
    display: flex;
    column-gap: ${unit(10)};
    overflow-x: scroll;
    overflow-y: hidden;
`;
