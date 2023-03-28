import styled from '@emotion/styled';
import dialogStore from '@store/dialog';
import React, { ReactNode, useRef } from 'react';
import ItemDialog from './itemDialog';

const GlobalDialog = () => {
    //? store
    const { dialog, HANDLE_DIALOG } = dialogStore();

    //? state
    const ref = useRef(null);

    const viewType: { [key: string]: ReactNode } = {
        item: <ItemDialog />,
        tag: <></>
    };

    if (dialog.isOpen) {
        window.addEventListener('click', (e: any) => {
            if (ref.current === e.target) HANDLE_DIALOG('', false);
        });
    }

    return (
        <Wrap visible={dialog.isOpen} ref={ref}>
            {viewType[dialog.mode]}
        </Wrap>
    );
};

export default React.memo(GlobalDialog);

const Wrap = styled.div<{ visible: boolean }>`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
    display: ${(props) => !props.visible && 'none'};
`;
