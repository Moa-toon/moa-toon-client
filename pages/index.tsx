import Carousel from '@components/banner/carousel';
import BasicLayout from '@components/layouts/basicLayout';
import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { NextPage } from 'next';

//! 삭제 예정
const BANNERS = [
    {
        idx: 1,
        title: '피아노 천재의 예고생활',
        des: '다시 한번, 피아노를 치고 싶었다.',
        platForm: 'kakao',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=gLmnT/hynaDnn1ho/OSHQxIwk4KCkvPrTKjmcoK&filename=th3'
    },
    {
        idx: 2,
        title: '전투종족으로 환생한 나의 공무원 생활기',
        des: '이세계 최강 전투종족으로 환생해 버린 안전 제일주의 공시생.',
        platForm: 'naver',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=cuGejh/hzMT2PEPDr/owSlrv2VGm1WiBk4kCnWK1&filename=th3'
    },
    {
        idx: 3,
        title: '무림세가 전생랭커',
        des: '치열한 싸움 끝에 결국 죽음을 맞이했다.',
        platForm: 'naver',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=fopvO/hzab5ibjkX/E3kYy6tldICQZcj3Mjurh1&filename=th3'
    },
    {
        idx: 4,
        title: '신과 함께 레벨업',
        platForm: 'kakao',
        des: '평범한 사람들은 그저 바라보는 것만으로 목숨을 잃어 버릴 그 존재들이 세상을 휘젓는 지금…',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=FF52S/hzMT9nEKzS/WZ2qmQjNeDNbCkV4Gl7VV0&filename=th3'
    },
    {
        idx: 5,
        title: '회귀로 초월하는 대마도사',
        platForm: 'kakao',
        des: '차라리 그 용사, 내가 한다.',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=gxCpq/hzMT7DmTva/NgBsnCzN0FKfqWN4eWHi3k&filename=th3'
    },
    {
        idx: 6,
        title: '킬 더 히어로',
        platForm: 'naver',
        des: '어느 날, 세상이 게임처럼 변해버렸다.',
        image: 'https://dn-img-page.kakao.com/download/resource?kid=bbAOB1/hynaDtQNK3/H9rFVR9JEj02zZjwLWnkN0&filename=th3'
    }
];

const Home: NextPage = () => {
    return (
        <BasicLayout>
            <BannerWrap>
                <Carousel items={BANNERS} />
            </BannerWrap>
        </BasicLayout>
    );
};

export default Home;

const BannerWrap = styled.div`
    width: 100%;
    height: ${unit(500)};
`;
