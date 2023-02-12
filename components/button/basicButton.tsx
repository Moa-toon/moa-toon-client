import styled from '@emotion/styled';
import { Color, unit } from '@styles/variables.style';
import { IBasicButtonProps } from 'types/components/button';

const BasicButton: React.FC<IBasicButtonProps> = (props) => {
    const { text, shape, color, bgColor, isActive, onClick } = props;

    return (
        <Button shape={shape} color={color} bgColor={bgColor} onClick={onClick} isActive={isActive}>
            {text}
        </Button>
    );
};

export default BasicButton;

const Button = styled.button<{ color: string; bgColor: string; shape: string; isActive: boolean }>`
    font-size: ${unit(20)};
    color: ${(props) => props.color};
    background-color: ${(props) => (props.isActive ? Color.Purple._500 : 'lightgray')};
    /* background-color: lightgray; */
    /* background-color: ${Color.Purple._500}; */
    width: 100%;
    white-space: nowrap;
    width: ${(props) => (props.shape === 'round' ? unit(45) : '100%')};
    height: ${unit(45)};
    border-radius: ${(props) => (props.shape === 'round' ? '50%' : unit(6))};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
