import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { ICardListProps } from 'types/components/card';
import Card from './card';

const CardList: React.FC<ICardListProps> = ({ cards, platform }) => {
    return (
        <_CardList>
            {cards.map((card) => (
                <Card key={card.title} card={card} platform={platform} />
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
