//? Image
import IMG_NaverLogo from '../public/img/logo/naverLogo.svg';
import IMG_KakaoLogo from '../public/img/logo/kakaoLogo.svg';

interface ILogoMap {
    [key: string]: string;
}

export const LOGO_OF_PLATFORM: ILogoMap = {
    naver: IMG_NaverLogo,
    kakao: IMG_KakaoLogo
};

export const NAME_OF_LOGO: ILogoMap = {
    naver: '네이버로고',
    kakao: '카카오로고'
};
