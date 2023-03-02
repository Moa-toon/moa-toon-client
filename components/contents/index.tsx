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
import { useRouter } from 'next/router';
import { ICard } from 'types/components/card';
import { DAY_OF_TODAY } from '@constants/days/days';

interface IContents {
    visibleBtn?: boolean;
    visibleTitle: boolean;
    contents: ICard[];
    platform: 'naver' | 'kakao' | 'lezhinComics';
}

const Contents: React.FC<IContents> = ({ contents, platform, visibleBtn, visibleTitle }) => {
    //? next
    const router = useRouter();

    //? store
    const { query, SET_QUERY } = queryStore();
    // const { contents, SET_CONTENTS } = contentsStore();

    //? state
    const [dayOfWeek, setDayOfWeek] = useState<string>(DAY_OF_TODAY);

    //! 네이버, 카카오 등 컨텐츠 요일 클릭 시 네이버, 카카오 데이터가 모두 변경되는 이슈
    const handleDayOfWeek = (e: any) => {
        setDayOfWeek(dayOfWeekEnMap[e.target.innerText]);
        // SET_QUERY({ ...query, updateDay: dayOfWeekEnMap[e.target.innerText] });
    };

    return (
        <Wrap>
            <ButtonList buttons={DAY_OF_WEEK.map((day) => dayOfWeekKoMap[day])} shape="round" color="white" bgColor="lightgray" onClick={handleDayOfWeek} activeCondition={dayOfWeekKoMap[dayOfWeek]} />
            <CardList cards={contents} platform={platform} visibleTitle={visibleTitle} />
        </Wrap>
    );
};

export default Contents;

const Wrap = styled.div`
    width: 100%;
    min-height: ${unit(400)};
    display: flex;
    flex-direction: column;
    row-gap: ${unit(6)};
`;
