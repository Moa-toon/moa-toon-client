//? React, Framework
import { GetStaticProps, NextPage } from 'next';

//? UI, Framework
import Carousel from '@components/banner/carousel';
import BasicLayout from '@components/layouts/basicLayout';

//? 사용자 정의(style, image, type 등)
import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import Contents from '@components/contents';
import { useEffect, useState } from 'react';
import { _axios } from '@utils/_axios';
import { DAY_OF_TODAY } from '@constants/days/days';
import { IBanner } from 'types/components/banner';
import { ICard } from 'types/components/card';
import daysStore from '@store/days';

export const getStaticProps: GetStaticProps = async (context) => {
    const { data: banners } = await _axios('GET', '/contents/banner-contents');
    const {
        data: { items: naver }
    } = await _axios('GET', `/contents?type=webtoon&platform=naver&updateDay=${DAY_OF_TODAY}&page=1&take=8`);

    return {
        props: { banners: banners, naver: naver },
        revalidate: 43200
    };
};

interface IHome {
    banners: IBanner[];
    naver: ICard[];
}

const Home: NextPage<IHome> = ({ banners, naver }) => {
    //? state
    const [naverWebToon, setNaverWebToon] = useState<ICard[]>(naver);
    const [kakaoWebToon, setKakaoWebToon] = useState<ICard[]>([]);

    //? store
    const { days } = daysStore();

    //! 초반에는 화면에 다 보여질 정도의 웹툰 데이터만 가져오고 Next 클릭 시 이전 데이터 지워지고 페이지네이션 방식으로 다음 데이터가 보여지는 방향으로
    useEffect(() => {
        _axios('GET', `/contents?type=webtoon&platform=naver&updateDay=${days.naver}&page=1&take=8`, {}).then((res: any) => {
            setNaverWebToon(res.data.items);
        });
    }, [days.naver]);

    useEffect(() => {
        _axios('GET', `/contents?type=webtoon&platform=kakao&updateDay=${days.kakao}&page=1&take=8`, {}).then((res: any) => {
            setKakaoWebToon(res.data.items);
        });
    }, [days.kakao]);

    return (
        <BasicLayout>
            <BannerWrap>
                <Carousel items={banners} />
            </BannerWrap>
            <ContentsWrap>
                <h1>네이버 웹툰</h1>
                <Contents contents={naverWebToon} platform="naver" visibleTitle={false} />
                <h1>카카오 웹툰</h1>
                <Contents contents={kakaoWebToon} platform="kakao" visibleTitle />
            </ContentsWrap>
        </BasicLayout>
    );
};

export default Home;

const BannerWrap = styled.div`
    width: 100%;
    height: ${unit(600)};
`;

const ContentsWrap = styled.div`
    width: 100%;
    padding-left: ${unit(30)};
    height: ${unit(450)};
    display: flex;
    flex-direction: column;
    row-gap: ${unit(20)};

    h1 {
        font-size: ${unit(24)};
        color: black;
        font-weight: 700;
        padding-top: ${unit(30)};
    }
`;
