import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { IBasicButtonProps } from 'types/components/button';

const BasicButton: React.FC<IBasicButtonProps> = (props) => {
    const { text, type, color, bgColor } = props;
    return (
        <Button color={color} bgColor={bgColor}>
            {text}
        </Button>
    );
};

export default BasicButton;

const Button = styled.button<{ color: string; bgColor: string }>`
    font-size: ${unit(20)};
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
    width: 100%;
    white-space: nowrap;
    height: ${unit(32)};
    padding: ${unit(24)} ${unit(15)};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
