//? React, Framework

//? Store
import daysStore from '@store/days';

//? UI, Framework
import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import ButtonList from '@components/button/buttonList';
import CardList from '@components/card/cardList';

//? 사용자 정의(style, image, type 등)
import { _axios } from '@utils/_axios';
import { DAY_OF_WEEK } from '@constants/common';
import { dayOfWeekEnMap, dayOfWeekKoMap } from 'lib/common';
import { ICard } from 'types/components/card';

interface IContents {
    visibleBtn?: boolean;
    visibleTitle: boolean;
    contents: ICard[];
    platform: 'naver' | 'kakao';
}

const Contents: React.FC<IContents> = ({ contents, platform, visibleBtn, visibleTitle }) => {
    //? store
    const { days, HANDLE_DAYS } = daysStore();

    const handleDayOfWeek = (e: any) => {
        HANDLE_DAYS(platform, dayOfWeekEnMap[e.target.innerText]);
    };

    return (
        <Wrap>
            <ButtonList
                buttons={DAY_OF_WEEK.map((day) => dayOfWeekKoMap[day])}
                shape="round"
                color="white"
                bgColor="lightgray"
                onClick={handleDayOfWeek}
                activeCondition={dayOfWeekKoMap[days[platform]]}
            />
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
