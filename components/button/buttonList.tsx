import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { dayOfWeekMap } from 'lib/common';
import { IButtonListProps } from 'types/components/button';
import BasicButton from './basicButton';

const ButtonList: React.FC<IButtonListProps> = (props) => {
    const { buttons, type, color, bgColor } = props;
    return (
        <_ButtonList>
            {buttons.map((button) => (
                <BasicButton text={dayOfWeekMap[button]} type={type} color={color} bgColor={bgColor} />
            ))}
        </_ButtonList>
    );
};

export default ButtonList;

const _ButtonList = styled.div`
    display: flex;
    column-gap: ${unit(20)};
`;
