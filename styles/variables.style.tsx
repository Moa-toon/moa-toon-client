import { css } from '@emotion/react';

export const unit = (px: number): string => {
    const unit = 0.625;
    return `${unit * (px / 10)}rem`;
};

export const Font = {
    Weight: {
        Regular: css`
            font-weight: 400;
        `,
        Bold: css`
            font-weight: 700;
        `,
        SemiBold: css`
            font-weight: 600;
        `
    }
};

export const Color = {
    TEXT: {
        _TITLE: '#121212',
        _DES: '#8A8A8A'
    },
    CARD: {
        _BACKGROUND: '#2b2e2e;'
    },
    Purple: {
        _500: 'rgb(129, 107, 255)'
    }
};
