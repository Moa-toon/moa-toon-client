import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import { IBadgeProps } from 'types/components/badge';

const Badge: React.FC<IBadgeProps> = (props) => {
    const { text, color, bgColor, type } = props;

    return (
        <_Badge color={color} bgColor={bgColor} type={type}>
            {text}
        </_Badge>
    );
};

export default Badge;

const _Badge = styled.span<{ color: string; bgColor: string; type: 'rectangle' | 'round' }>`
    font-weight: 700;
    font-size: ${unit(14)};
    text-align: center;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
    border-radius: ${(props) => (props.type == 'round' ? '50%' : unit(4))};
    padding: ${unit(2)} ${unit(4)};
    text-align: center;
`;
