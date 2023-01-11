import styled from '@emotion/styled';
import { ChildrenType } from '../types/pages/layout';

const Wrap = styled.div`
    max-width: 100vw;
    width: 100%;
    min-height: 100vh;
    height: 100%;
`;

export const Layout = ({ children }: ChildrenType) => {
    return <Wrap>{children}</Wrap>;
};

export default Layout;
