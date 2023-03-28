import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { IEpisodeCard } from 'types/components/card';
import EpisodesCard from './episodesCard';

interface IEpisodesCardList {
    cards: IEpisodeCard[];
}

const EpisodesCardList: React.FC<IEpisodesCardList> = ({ cards }) => {
    return (
        <Wrap>
            {cards.map((card) => (
                <EpisodesCard key={card.title} card={card} />
            ))}
        </Wrap>
    );
};

export default EpisodesCardList;

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: ${unit(24)};
`;
