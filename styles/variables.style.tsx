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
