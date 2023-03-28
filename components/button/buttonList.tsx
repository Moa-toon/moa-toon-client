import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { IButtonListProps } from 'types/components/button';
import BasicButton from './basicButton';

//! 추후에 flex-direction을 선택할 수 있으며, button을 자유롭게 합성할 수 있는 Composition Component로 보완하고 싶다.
const ButtonList: React.FC<IButtonListProps> = (props) => {
    const { buttons, shape, color, bgColor, activeCondition, onClick } = props;

    return (
        <_ButtonList>
            {buttons.map((button) => (
                <BasicButton key={button} text={button} shape={shape} color={color} bgColor={bgColor} onClick={onClick} isActive={activeCondition === button} />
            ))}
        </_ButtonList>
    );
};

export default ButtonList;

const _ButtonList = styled.div`
    width: 100%;
    display: flex;
    column-gap: ${unit(20)};
`;
