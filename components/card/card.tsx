import Badge from '@components/badge';
import { LOGO_OF_PLATFORM, NAME_OF_LOGO } from '@constants/logo';
import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { ICardProps } from 'types/components/card';

const Card: React.FC<ICardProps> = ({ card }) => {
    const { idx, title, thumbnail, platform, new: isNew, up, adult } = card;
    //? next
    const router = useRouter();

    return (
        <Wrap onClick={() => router.push(`/webtoons/${idx}`)}>
            <BadgesWrap>
                <Image src={LOGO_OF_PLATFORM[platform]} width={21} height={21} alt={NAME_OF_LOGO[platform]} />
                {up && <Badge text="UP" color="#FFFFFF" bgColor="#FF1010" type="rectangle" />}
                {isNew && <Badge text="신작" color="#FFFFFF" bgColor="#FFBC02" type="rectangle" />}
                {adult == 19 && (
                    <AdultWrap>
                        <Badge text="19" color="#FFFFFF" bgColor="#FF1010" type="round" />
                    </AdultWrap>
                )}
            </BadgesWrap>
            <Image src={thumbnail} fill alt={`${title} 이미지`} />
            <Title>{title.replaceAll(' ', '\n')}</Title>
        </Wrap>
    );
};

export default Card;

const Wrap = styled.div`
    width: ${unit(180)};
    height: ${unit(300)};
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border-radius: ${unit(6)};
    cursor: pointer;
    transition: all 0.2s linear;

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
    font-weight: 700;
    text-align: center;
    font-size: ${unit(28)};
    position: absolute;
    bottom: ${unit(20)};
    white-space: pre-line;
`;
