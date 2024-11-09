import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const Main = dynamic(() => import('./guild'));

export default function Desktop({ Component, pageProps }) {
    const router = useRouter();

    const mainApp = useMemo(() => {
        return router.pathname.includes('/[channel]')
            ? <Main Component={Component} pageProps={pageProps} />
            : <Component pageProps={pageProps} />;
    }, [router.pathname, Component, pageProps]);

    return (
        mainApp
    );
}
