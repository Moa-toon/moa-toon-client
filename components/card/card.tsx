import Badge from '@components/badge';
import { LOGO_OF_PLATFORM, NAME_OF_LOGO } from '@constants/logo';
import styled from '@emotion/styled';
import dialogStore from '@store/dialog';
import { Color, unit } from '@styles/variables.style';
import { url } from 'inspector';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { ICard } from 'types/components/card';

export interface _ICard {
    card: ICard;
    platform: string;
    visibleTitle: boolean;
}

const Card: React.FC<_ICard> = ({ card, platform, visibleTitle }) => {
    const { idx, title, thumbnailUrl, thumbnailBackgroundUrl, urlOfPc, urlOfMobile, summary, isNew, isUpdated, isAdult } = card;
    //? next
    const router = useRouter();

    //? store
    const { HANDLE_DIALOG } = dialogStore();

    const onClick = (queryString: string) => {
        router.push(`/${queryString.replaceAll(' ', '-')}`);
        HANDLE_DIALOG('item', true);
    };

    return (
        <Wrap onClick={() => onClick(`?id=${idx}&title=${title}`)} bgImage={platform === 'kakao' ? thumbnailBackgroundUrl : ''}>
            <BadgesWrap>
                <Image src={LOGO_OF_PLATFORM[platform]} width={21} height={21} alt={NAME_OF_LOGO[platform]} />
                {isUpdated && <Badge text="UP" color="#FFFFFF" bgColor="#FF1010" type="rectangle" />}
                {isNew && <Badge text="신작" color="#FFFFFF" bgColor="#FFBC02" type="rectangle" />}
                {isAdult && (
                    <AdultWrap>
                        <Badge text="19" color="#FFFFFF" bgColor="#FF1010" type="round" />
                    </AdultWrap>
                )}
            </BadgesWrap>
            <Image src={thumbnailUrl} fill alt={`${title} 이미지`} unoptimized={true} />
            {visibleTitle && <Title>{title.replaceAll(' ', '\n')}</Title>}
        </Wrap>
    );
};

export default Card;

const Wrap = styled.div<{ bgImage: string }>`
    min-width: ${unit(180)};
    min-height: ${unit(300)};
    max-width: ${unit(180)};
    max-height: ${unit(300)};
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border-radius: ${unit(6)};
    cursor: pointer;
    transition: all 0.2s linear;
    background-image: url(${(props) => props.bgImage});

    :hover {
        transform: scale(1.1);
    }

    img {
        object-fit: cover;
    }
`;

const BadgesWrap = styled.div`
    width: 100%;
    display: flex;
    column-gap: ${unit(6)};
    position: absolute;
    top: ${unit(4)};
    left: ${unit(4)};
    z-index: 999;
`;

const AdultWrap = styled.div`
    display: flex;
    position: absolute;
    top: ${unit(0)};
    right: ${unit(8)};
    z-index: 999;
`;

const Title = styled.h2`
    width: 100%;
    color: white;
    font-weight: 600;
    text-align: center;
    font-size: ${unit(28)};
    position: absolute;
    bottom: ${unit(20)};
    white-space: pre-line;
`;
