export interface IDaysStore {
    days: {
        naver: string;
        kakao: string;
    };
    HANDLE_DAYS: (type: 'naver' | 'kakao' | 'lezhinComics', dayOfWeek: string) => void;
}
