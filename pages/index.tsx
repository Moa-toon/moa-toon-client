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
import moment from 'moment-timezone';
import { DAY_OF_TODAY } from '@constants/days/days';

//! 삭제 예정
const BANNERS = [
    {
        idx: 1,
        title: '피아노 천재의 예고생활',
        des: '다시 한번, 피아노를 치고 싶었다.',
        platform: 'kakao',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=gLmnT/hynaDnn1ho/OSHQxIwk4KCkvPrTKjmcoK&filename=th3'
    },
    {
        idx: 2,
        title: '전투종족으로 환생한 나의 공무원 생활기',
        des: '이세계 최강 전투종족으로 환생해 버린 안전 제일주의 공시생.',
        platform: 'naver',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=cuGejh/hzMT2PEPDr/owSlrv2VGm1WiBk4kCnWK1&filename=th3'
    },
    {
        idx: 3,
        title: '무림세가 전생랭커',
        des: '치열한 싸움 끝에 결국 죽음을 맞이했다.',
        platform: 'naver',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=fopvO/hzab5ibjkX/E3kYy6tldICQZcj3Mjurh1&filename=th3'
    },
    {
        idx: 4,
        title: '신과 함께 레벨업',
        platform: 'kakao',
        des: '평범한 사람들은 그저 바라보는 것만으로 목숨을 잃어 버릴 그 존재들이 세상을 휘젓는 지금…',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=FF52S/hzMT9nEKzS/WZ2qmQjNeDNbCkV4Gl7VV0&filename=th3'
    },
    {
        idx: 5,
        title: '회귀로 초월하는 대마도사',
        platform: 'kakao',
        des: '차라리 그 용사, 내가 한다.',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=gxCpq/hzMT7DmTva/NgBsnCzN0FKfqWN4eWHi3k&filename=th3'
    },
    {
        idx: 6,
        title: '킬 더 히어로',
        platform: 'naver',
        des: '어느 날, 세상이 게임처럼 변해버렸다.',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=bbAOB1/hynaDtQNK3/H9rFVR9JEj02zZjwLWnkN0&filename=th3'
    }
];

const Home: NextPage = () => {
    //? state
    const [naver, setNaver] = useState([]);
    const [kakao, setKakao] = useState([]);
    const [dayOfWeek, setDayOfWeek] = useState<string>(DAY_OF_TODAY);

    //! 초반에는 화면에 다 보여질 정도의 웹툰 데이터만 가져오고 Next 클릭 시 이전 데이터 지워지고 페이지네이션 방식으로 다음 데이터가 보여지는 방향으로
    useEffect(() => {
        _axios('GET', `/contents?type=webtoon&platform=naver&updateDay=${dayOfWeek}&page=1&take=8`, {}).then((res: any) => {
            setNaver(res.data.items);
        });
    }, [dayOfWeek]);

    useEffect(() => {
        _axios('GET', `/contents?type=webtoon&platform=kakao&updateDay=${dayOfWeek}&page=1&take=8`, {}).then((res: any) => {
            setKakao(res.data.items);
        });
    }, [dayOfWeek]);

    return (
        <BasicLayout>
            <BannerWrap>
                <Carousel items={BANNERS} />
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
