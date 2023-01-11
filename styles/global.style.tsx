import { css, Global } from '@emotion/react';

export const ResetStyle = () => {
    return (
        <Global
            styles={css`
                html,
                body,
                p,
                ol,
                ul,
                li,
                dl,
                dt,
                dd,
                blockquote,
                figure,
                fieldset,
                legend,
                textarea,
                pre,
                iframe,
                hr,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    margin: 0;
                    padding: 0;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-size: 100%;
                    font-weight: normal;
                }

                ul {
                    list-style: none;
                }

                a {
                    text-decoration: none;
                }

                button,
                input,
                select {
                    margin: 0;
                }

                html {
                    box-sizing: border-box;
                }

                *,
                *::before,
                *::after {
                    box-sizing: inherit;
                }

                img,
                video {
                    height: auto;
                    max-width: 100%;
                }

                iframe {
                    border: 0;
                }

                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                }

                td,
                th {
                    padding: 0;
                }

                html,
                body,
                body > div:first-of-type,
                div#__next,
                div#__next > div:first-of-type {
                    height: 100%;
                }
                #__next {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding-top: env(safe-area-inset-top);
                    padding-bottom: env(safe-area-inset-bottom);
                }
                button {
                    border: none;
                    outline: none;
                    cursor: pointer;
                    background-color: transparent;
                    -webkit-tap-highlight-color: transparent;
                }
                button,
                button:focus,
                button:active {
                    box-shadow: none;
                    outline: none;
                }
                a:hover,
                a:focus,
                a:active {
                    text-decoration: none;
                    /* Just a mild gray, you can change this to whatever you want */
                }
                input {
                    outline: none;
                    border: none;
                }
                * {
                    -webkit-tap-highlight-color: transparent;
                }
                body {
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    user-select: none;
                }
            `}
        />
    );
};
