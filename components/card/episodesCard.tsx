import styled from '@emotion/styled';
import { Color, unit } from '@styles/variables.style';
import Image from 'next/image';
import moment from 'moment-timezone';
import Link from 'next/link';
import { IEpisodeCard } from 'types/components/card';

export interface IEpisodesCard {
    card: IEpisodeCard;
}

const EpisodesCard: React.FC<IEpisodesCard> = (props) => {
    const { title, thumbnailUrl, createdAt, urlOfPc, urlOfMobile } = props.card;

    return (
        <Link href={urlOfPc}>
            <Wrap>
                <ImageWrap>
                    <Image src={thumbnailUrl} width={200} height={120} alt={title} unoptimized />
                </ImageWrap>
                <TitleWithDateWrap>
                    <h5>{title}</h5>
                    <p>{moment(createdAt).format('YYYY.MM.DD')}</p>
                </TitleWithDateWrap>
            </Wrap>
        </Link>
    );
};

export default EpisodesCard;

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    column-gap: ${unit(20)};
    row-gap: ${unit(10)};
`;

const ImageWrap = styled.div`
    width: ${unit(200)};
    height: ${unit(120)};
    overflow: hidden;
    border-radius: ${unit(10)};
`;

const TitleWithDateWrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${unit(16)};

    h5 {
        color: ${Color.TEXT._TITLE};
        font-weight: bold;
        font-size: ${unit(20)};
    }

    p {
        color: ${Color.TEXT._DES};
        font-size: ${unit(14)};
    }
`;
