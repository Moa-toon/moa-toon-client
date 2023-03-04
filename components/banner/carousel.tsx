import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { Color, unit } from '@styles/variables.style';
import Image from 'next/image';
import { ICarousel } from 'types/components/banner';
import Badge from '@components/badge';
import { LOGO_OF_PLATFORM, NAME_OF_LOGO } from '@constants/logo';
import { replaceSpaceToLineBreak } from 'lib/common';

//? Image
import IMG_ArrowLeft from '../../public/img/arrowLeft.svg';
import IMG_ArrowRight from '../../public/img/arrowRight.svg';
import { _axios } from '@utils/_axios';
import { useRouter } from 'next/router';
import dialogStore from '@store/dialog';
import BasicButton from '@components/button/basicButton';

const SlickBtnWrap = ({ currentSlide, slideCount, ...props }: any) => (
    <span style={{ display: 'none' }} {...props}>
        {props.children}
    </span>
);

//? React-Slick-Option
const SETTINGS = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    nextArrow: (
        <SlickBtnWrap>
            <Image src={IMG_ArrowRight} width={25} height={25} alt="화살표이미지" />
        </SlickBtnWrap>
    ),
    prevArrow: (
        <SlickBtnWrap>
            <Image src={IMG_ArrowLeft} width={25} height={25} alt="화살표이미지" />
        </SlickBtnWrap>
    )
};

const Carousel: React.FC<ICarousel> = ({ items }) => {
    //? next
    const router = useRouter();

    //? store
    const { HANDLE_DIALOG } = dialogStore();

    const onClick = (queryString: string) => {
        router.push(`/${queryString.replaceAll(' ', '-')}`);
        HANDLE_DIALOG('item', true);
    };

    return (
        <Wrap>
            <Slider {...SETTINGS}>
                {items.map((banner) => (
                    <SliderBox bgImage={banner.platform === 'kakao' ? banner.thumbnailBackgroundUrl : ''}>
                        <InfoBox>
                            <h1>{replaceSpaceToLineBreak(banner.title, 'second')}</h1>
                            <Des>{banner.summary}</Des>
                            <hr />
                            <GenreWithBadgesWrap>
                                <Image src={LOGO_OF_PLATFORM[banner.platform]} width={21} height={21} alt={NAME_OF_LOGO[banner.platform]} />
                                <Badge text="신작" color="#FFFFFF" bgColor="#FFBC02" type="rectangle" />
                                <Badge text="UP" color="#FFFFFF" bgColor="#FF1010" type="rectangle" />
                                <Genre>웹툰 &#183; 드라마</Genre>
                            </GenreWithBadgesWrap>
                            <ButtonWrap>
                                <BasicButton text="보러가기" shape="rectangle" color="white" bgColor="" isActive onClick={() => onClick(`?id=${banner.idx}&title=${banner.title}`)} />
                            </ButtonWrap>
                        </InfoBox>
                        <Image src={banner.thumbnailUrl} fill alt={banner.title} unoptimized key={banner.idx} />
                    </SliderBox>
                ))}
            </Slider>
        </Wrap>
    );
};

export default Carousel;

//? style
const Wrap = styled.div`
    width: 100%;
    height: 100%;

    .slick-dots {
        bottom: ${unit(30)};

        button:before {
            font-size: ${unit(20)};
            color: white;
        }

        li.slick-active button:before {
            opacity: 1;
            color: rgb(247, 247, 247);
        }
    }
    .slick-slider {
        span:before {
            display: none;
        }
    }
    .slick-next {
        position: absolute;
        width: ${unit(25)};
        height: ${unit(25)};
        right: ${unit(20)};
        z-index: 999;
    }
    .slick-prev {
        position: absolute;
        width: ${unit(25)};
        height: ${unit(25)};
        left: ${unit(20)};
        z-index: 999;
    }
`;

const SliderBox = styled.div<{ bgImage: string }>`
    width: 100%;
    height: ${unit(600)};
    position: relative;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-color: ${Color.CARD._BACKGROUND};
    img {
        object-fit: contain;
    }
`;

const InfoBox = styled.div`
    position: absolute;
    left: ${unit(80)};
    bottom: ${unit(42)};
    max-width: ${unit(300)};
    height: ${unit(300)};
    z-index: 999;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    row-gap: ${unit(8)};
    h1 {
        font-weight: 700;
        font-size: ${unit(40)};
        white-space: pre-line;
    }
    hr {
        margin: ${unit(8)} 0;
        border: 1px solid #e5e7eb;
        opacity: 0.2;
    }
`;

const Des = styled.p`
    color: rgb(255, 255, 255);
    font-size: ${unit(18)};
    opacity: 0.6;
`;

const GenreWithBadgesWrap = styled.div`
    display: flex;
    align-items: center;
    column-gap: ${unit(6)};
`;

const Genre = styled.p`
    font-weight: 500;
    font-size: ${unit(14)};
    display: flex;
    align-items: center;
    opacity: 0.8;
`;

const ButtonWrap = styled.div`
    height: 100%;
    min-width: ${unit(300)};
    max-width: ${unit(300)};
    padding-top: ${unit(16)};
`;
