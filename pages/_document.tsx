import { ResetStyle } from '@styles/global.style';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                <ResetStyle />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
