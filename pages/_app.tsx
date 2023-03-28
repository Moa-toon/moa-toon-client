import { useRouter } from 'next/router';
import { AppPropsWithLayout } from '../types/pages/app';
import Layout from './_layout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const router = useRouter();

    const getLayout = Component.getLayout ?? ((page: any) => page);
    return getLayout(
        <Layout>
            <Component {...pageProps} pathname={router.pathname}/>
        </Layout>
    );
}
export default MyApp;
