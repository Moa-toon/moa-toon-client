import Carousel from '@components/banner/carousel';
import ButtonList from '@components/button/buttonList';
import CardList from '@components/card/cardList';
import BasicLayout from '@components/layouts/basicLayout';
import { DAY_OF_WEEK } from '@constants/common';
import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { NextPage } from 'next';

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

const NAVER_CARDS = [
    {
        idx: 1,
        title: '마신은 평화롭게 살고싶다',
        thumbnail: 'https://dn-img-page.kakao.com/download/resource?kid=2GBrs/hynaAdiJE6/vfYPqPEJpuzvumWvC1tNe1&filename=th3',
        platform: 'naver',
        new: true,
        up: false,
        adult: 0,
        rest: false
    },
    {
        idx: 2,
        title: '에스티오',
        thumbnail: 'https://dn-img-page.kakao.com/download/resource?kid=bV5qtB/hyRyPE91Rn/Sc84ysyH5O4AqXo1uFF2lK&filename=th3',
        platform: 'naver',
        new: false,
        up: true,
        adult: 0,
        rest: false
    },
    {
        idx: 3,
        title: '테러맨',
        thumbnail: 'https://comic-superstring.naver.com/img/pc/thumbnail_terror_man.jpg',
        platform: 'naver',
        new: false,
        up: false,
        adult: 0,
        rest: false
    },
    {
        idx: 4,
        title: '트레이스 천둥의 귀인들',
        thumbnail: 'https://dn-img-page.kakao.com/download/resource?kid=c9qCzG/hynaCV5teQ/F7LghsfvNCnSHIQI8lVKS0&filename=th3',
        platform: 'naver',
        new: true,
        up: true,
        adult: 19,
        rest: false
    },
    {
        idx: 5,
        title: '검은머리 전술천재',
        thumbnail: 'https://dn-img-page.kakao.com/download/resource?kid=OHeQ6/hzMT6qseXk/Jp89Yduxhy2iNkiP8Secsk&filename=th3',
        platform: 'naver',
        new: false,
        up: true,
        adult: 0,
        rest: true
    },
    {
        idx: 6,
        title: '배우로서 살겠다',
        thumbnail: 'https://dn-img-page.kakao.com/download/resource?kid=lNdNu/hzKkTgmFno/Wj65kvwkkjKPnAtvmDKHV1&filename=th3',
        platform: 'naver',
        new: false,
        up: false,
        adult: 0,
        rest: false
    },
    {
        idx: 7,
        title: '스프린터',
        thumbnail: 'https://dn-img-page.kakao.com/download/resource?kid=IraKO/hzN2lzYyB6/9oAfserIfKPxmMpHz2XUU1&filename=th3',
        platform: 'naver',
        new: false,
        up: true,
        adult: 0,
        rest: false
    }
];

const Home: NextPage = () => {
    return (
        <BasicLayout>
            <BannerWrap>
                <Carousel items={BANNERS} />
            </BannerWrap>
            <WebToonWrap>
                <h1>네이버 웹툰</h1>
                <ButtonsWrap>
                    <ButtonList buttons={DAY_OF_WEEK} type="round" color="white" bgColor="lightgray" />
                </ButtonsWrap>
                <CardList cards={NAVER_CARDS} />
            </WebToonWrap>
        </BasicLayout>
    );
};

export default Home;

const BannerWrap = styled.div`
    width: 100%;
    height: ${unit(655)};
`;

const WebToonWrap = styled.div`
    width: 100%;
    height: ${unit(400)};
    display: flex;
    flex-direction: column;
    padding: 0 ${unit(30)};
    padding-top: ${unit(40)};
    row-gap: ${unit(16)};

    h1 {
        font-size: ${unit(24)};
        color: black;
        font-weight: 700;
    }
`;

const ButtonsWrap = styled.div`
    width: ${unit(180)};
    height: ${unit(40)};
    margin-bottom: ${unit(10)};
`;
