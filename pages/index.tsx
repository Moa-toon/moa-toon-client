import Carousel from '@components/banner/carousel';
import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { NextPage } from 'next';

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const BannerWrap = styled.div`
    width: 100%;
    height: ${unit(500)};
`;

//! 삭제 예정
const BANNERS = [
    { idx: 1, image: 'https://dn-img-page.kakao.com/download/resource?kid=gLmnT/hynaDnn1ho/OSHQxIwk4KCkvPrTKjmcoK&filename=th3' },
    { idx: 2, image: 'https://dn-img-page.kakao.com/download/resource?kid=cuGejh/hzMT2PEPDr/owSlrv2VGm1WiBk4kCnWK1&filename=th3' },
    { idx: 3, image: 'https://dn-img-page.kakao.com/download/resource?kid=fopvO/hzab5ibjkX/E3kYy6tldICQZcj3Mjurh1&filename=th3' },
    { idx: 4, image: 'https://dn-img-page.kakao.com/download/resource?kid=FF52S/hzMT9nEKzS/WZ2qmQjNeDNbCkV4Gl7VV0&filename=th3' },
    { idx: 5, image: 'https://dn-img-page.kakao.com/download/resource?kid=gxCpq/hzMT7DmTva/NgBsnCzN0FKfqWN4eWHi3k&filename=th3' },
    { idx: 6, image: 'https://dn-img-page.kakao.com/download/resource?kid=bbAOB1/hynaDtQNK3/H9rFVR9JEj02zZjwLWnkN0&filename=th3' }
];

const Home: NextPage = () => {
    return (
        <Wrap>
            <BannerWrap>
                <Carousel items={BANNERS} />
            </BannerWrap>
        </Wrap>
    );
};

export default Home;
