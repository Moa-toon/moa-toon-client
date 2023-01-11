import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { unit } from '@styles/variables.style';
import Image from 'next/image';
import { ICarousel } from 'types/components/banner';

//? Image
import IMG_ArrowLeft from '../../public/img/arrowLeft.svg';
import IMG_ArrowRight from '../../public/img/arrowRight.svg';

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

    .slick-next {
        position: absolute;
        width: ${unit(25)};
        height: ${unit(25)};
        right: 20px;
        z-index: 999;
    }
    .slick-prev {
        position: absolute;
        width: ${unit(25)};
        height: ${unit(25)};
        left: 20px;
        z-index: 999;
    }
`;

const SliderBox = styled.div`
    width: 100%;
    height: ${unit(650)};
    position: relative;
`;

const SETTINGS = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    nextArrow: <Image src={IMG_ArrowRight} width={25} height={25} alt="화살표이미지" />,
    prevArrow: <Image src={IMG_ArrowLeft} width={25} height={25} alt="화살표이미지" />
};

const Carousel: React.FC<ICarousel> = (props) => {
    const { items } = props;
    return (
        <Wrap>
            <Slider {...SETTINGS}>
                {items.map((item) => (
                    <SliderBox key={item.idx}>
                        <Image src={item.image} fill objectFit="cover" alt="배너 이미지" />
                    </SliderBox>
                ))}
            </Slider>
        </Wrap>
    );
};

export default Carousel;
