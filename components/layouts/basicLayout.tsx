import DeskTopHeader from '@components/header/DeskTopHeader';
import styled from '@emotion/styled';
import { IBasicLayout } from 'types/components/layouts';

const BasicLayout: React.FC<IBasicLayout> = ({ children }) => {
    return (
        <Wrap>
            <DeskTopHeader />
            <Content>{children}</Content>
        </Wrap>
    );
};

export default BasicLayout;

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;
