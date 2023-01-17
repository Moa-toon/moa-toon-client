import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { ICardListProps } from 'types/components/card';
import Card from './card';

const CardList: React.FC<ICardListProps> = ({ cards }) => {
    return (
        <_CardList>
            {cards.map((card) => (
                <Card key={card.title} card={card} />
            ))}
        </_CardList>
    );
};

export default CardList;

const _CardList = styled.div`
    display: flex;
    column-gap: ${unit(10)};
`;
