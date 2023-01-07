import { AppPropsWithLayout } from '../types/pages/app';
import Layout from './_layout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page: any) => page);
    return getLayout(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
export default MyApp;
