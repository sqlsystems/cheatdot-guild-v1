import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import Alert from 'components/public/Alert';

const DeskTopApp = dynamic(() => import('components/desktop'));
const MobileApp = dynamic(() => import('components/mobile'));

export default function Root({ Component, pageProps }) {
    const isMobile = useSelector(state => state.global.device_info.is_mobile);

    const mainApp = useMemo(() => {
        return isMobile
            ? <MobileApp Component={Component} pageProps={pageProps} />
            : <DeskTopApp Component={Component} pageProps={pageProps} />;
    }, [isMobile, Component, pageProps]);

    return (
        <>
            {mainApp}

            <Alert />
        </>
    );
}
