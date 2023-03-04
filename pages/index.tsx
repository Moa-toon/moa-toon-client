//? React, Framework
import { NextPage } from 'next';

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

const Home: NextPage = () => {
    //? state
    const [banner, setBanner] = useState<IBanner[]>([]);
    const [naver, setNaver] = useState([]);
    const [kakao, setKakao] = useState([]);
    const [dayOfWeek, setDayOfWeek] = useState<string>(DAY_OF_TODAY);

    useEffect(() => {
        _axios('GET', `/contents/banner-contents`).then((res: any) => {
            setBanner(res.data);
        });
    }, []);

    //! 초반에는 화면에 다 보여질 정도의 웹툰 데이터만 가져오고 Next 클릭 시 이전 데이터 지워지고 페이지네이션 방식으로 다음 데이터가 보여지는 방향으로
    useEffect(() => {
        _axios('GET', `/contents?type=webtoon&platform=naver&updateDay=${dayOfWeek}&page=1&take=20`, {}).then((res: any) => {
            setNaver(res.data.items);
        });
    }, [dayOfWeek]);

    useEffect(() => {
        _axios('GET', `/contents?type=webtoon&platform=kakao&updateDay=${dayOfWeek}&page=1&take=20`, {}).then((res: any) => {
            setKakao(res.data.items);
        });
    }, [dayOfWeek]);

    console.log(kakao);

    return (
        <BasicLayout>
            <BannerWrap>
                <Carousel items={banner} />
            </BannerWrap>
            <ContentsWrap>
                <h1>네이버 웹툰</h1>
                <Contents contents={naver} platform="naver" visibleTitle={false} />
                <h1>카카오 웹툰</h1>
                <Contents contents={kakao} platform="kakao" visibleTitle />
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
    max-width: ${unit(1480)};
    padding: 0 ${unit(30)};
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
