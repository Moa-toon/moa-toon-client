import BasicButton from '@components/button/basicButton';
import EpisodesCardList from '@components/card/episodesCardList';
import { LOGO_OF_PLATFORM, NAME_OF_LOGO } from '@constants/logo';
import styled from '@emotion/styled';
import contentsStore from '@store/contents';
import { unit } from '@styles/variables.style';
import { _axios } from '@utils/_axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import IMG_Star from '../../public/img/star.svg';

const ItemDialog = () => {
    //? next
    const router = useRouter();
    //? store
    const { contentById, SET_CONTENT_BY_ID } = contentsStore();

    useEffect(() => {
        if (router.query.id) {
            _axios('GET', `http://ec2-3-36-247-191.ap-northeast-2.compute.amazonaws.com:8080/contents/${router.query.id}`, {}).then((res: any) => {
                SET_CONTENT_BY_ID(res.data);
            });
        }
    }, [router.query.id]);

    return (
        <Wrap>
            <InfoWithThumbnailWrap>
                <InfoWrap>
                    <BadgeWrap>
                        <Badge>
                            <Image src={IMG_Star} width={12} height={12} alt="평점" />
                            <p>{contentById.avgRating}</p>
                        </Badge>
                        <Image src={LOGO_OF_PLATFORM[contentById.platform]} width={21} height={21} alt={NAME_OF_LOGO[contentById.platform]} />
                    </BadgeWrap>
                    <Title>{contentById.title}</Title>
                    <Genre>
                        {contentById.genre[0]} | {contentById.updateDays && contentById.updateDays.join(',')} | {contentById.ageLimitKor}
                    </Genre>
                    <Authors>{contentById.authors.map((author) => `${author.name} `)}</Authors>
                    <BasicButton text="1화 보러가기" color="black" bgColor="white" shape="rectangle" isActive={false} />
                    <Description>{contentById.description}</Description>
                    <ButtonListWrap>{contentById.genre.length && contentById.genre.map((tag) => <Tag key={tag}>#{tag}</Tag>)}</ButtonListWrap>
                </InfoWrap>
                <ThumbnailWrap bgImage={contentById.platform === 'kakao' ? contentById.thumbnailBackgroundUrl : ''}>
                    <Image src={contentById.thumbnailUrl} width={500} height={600} alt="썸네일 이미지" unoptimized={true} />
                </ThumbnailWrap>
            </InfoWithThumbnailWrap>
            <EpisodeWrap>{contentById.episodes.items.length && <EpisodesCardList cards={contentById.episodes.items} />}</EpisodeWrap>
        </Wrap>
    );
};

export default ItemDialog;

const Wrap = styled.div`
    max-width: calc(100vw - 2rem);
    width: ${unit(1080)};
    height: calc(100vh - 4rem);
    background: rgb(255, 255, 255);
    border-radius: ${unit(6)};
    overflow: auto scroll;
`;

const InfoWithThumbnailWrap = styled.div`
    width: 100%;
    background-color: rgb(25, 27, 42);
    position: relative;
    display: flex;
    padding: 0 ${unit(60)} 0 ${unit(60)};
    height: ${unit(700)};
    color: white;
`;

const InfoWrap = styled.div`
    width: ${unit(400)};
    height: ${unit(680)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: ${unit(16)};
    position: relative;
`;

const ThumbnailWrap = styled.div<{ bgImage: string }>`
    position: absolute;
    inset: ${unit(80)} ${unit(60)} auto auto;
    max-width: 100%;
    width: ${unit(500)};
    height: ${unit(560)};
    overflow: hidden;
    border-radius: ${unit(10)};
    z-index: 99;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
`;

const BadgeWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: ${unit(6)};
    padding-top: ${unit(20)};
`;

const Badge = styled.div`
    font-weight: 500;
    color: white;
    background-color: rgb(50, 51, 74);
    border-radius: ${unit(4)};
    padding: ${unit(3)} ${unit(8)};
    font-size: ${unit(14)};
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    column-gap: ${unit(6)};
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: ${unit(40)};
    white-space: pre-line;
`;

const Genre = styled.p`
    font-size: ${unit(14)};
    display: flex;
    align-items: center;
    opacity: 0.8;
    color: lightgray;
    letter-spacing: ${unit(1.5)};
`;

const Authors = styled(Genre)``;

const Description = styled(Genre)`
    opacity: 0.9;
    min-height: ${unit(100)};
    display: flex;
    align-items: flex-start;
`;

const ButtonListWrap = styled.div`
    display: flex;
    gap: ${unit(6)};
    align-items: center;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    color: rgb(167, 151, 255);
    background-color: rgb(50, 51, 74);
    font-size: ${unit(14)};
    white-space: nowrap;
    height: ${unit(24)};
    padding: ${unit(6)} ${unit(10)};
    border-radius: ${unit(4)};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const EpisodeWrap = styled.div`
    width: 100%;
    background-color: white;
    padding: ${unit(40)} ${unit(60)};
`;
