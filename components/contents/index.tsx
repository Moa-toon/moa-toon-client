//? React, Framework
import { ReactNode, useEffect, useState } from 'react';

//? Store
import contentsStore from '@store/contents';
import queryStore from '@store/query';

//? UI, Framework
import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import ButtonList from '@components/button/buttonList';
import CardList from '@components/card/cardList';

//? 사용자 정의(style, image, type 등)
import { _axios } from '@utils/_axios';
import { DAY_OF_WEEK } from '@constants/common';
import { dayOfWeekEnMap, dayOfWeekKoMap } from 'lib/common';

interface IContents {
    visibleBtn?: boolean;
    platform: 'naver' | 'kakao' | 'lezhinComics';
}

const Contents: React.FC<IContents> = ({ visibleBtn, platform }) => {
    //? store
    const { query, SET_QUERY } = queryStore();
    const { contents, SET_CONTENTS } = contentsStore();

    const [dayOfWeek, setDayOfWeek] = useState<string>('mon');

    //! 네이버, 카카오 등 컨텐츠 요일 클릭 시 네이버, 카카오 데이터가 모두 변경되는 이슈
    const handleDayOfWeek = (e: any) => {
        setDayOfWeek(dayOfWeekEnMap[e.target.innerText]);
        // SET_QUERY({ ...query, updateDay: dayOfWeekEnMap[e.target.innerText] });
    };

    useEffect(() => {
        _axios('GET', `http://ec2-3-36-247-191.ap-northeast-2.compute.amazonaws.com:8080/contents?type=webtoon&platform=naver&updateDay=${dayOfWeek}&page=1&take=100`, {}).then((res: any) => {
            SET_CONTENTS(res.data.items);
        });
    }, [dayOfWeek]);

    return (
        <Wrap>
            <ButtonList buttons={DAY_OF_WEEK.map((day) => dayOfWeekKoMap[day])} shape="round" color="white" bgColor="lightgray" onClick={handleDayOfWeek} activeCondition={dayOfWeekKoMap[dayOfWeek]} />
            <CardList cards={contents} platform={platform} />
        </Wrap>
    );
};

export default Contents;

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: ${unit(6)};
`;
