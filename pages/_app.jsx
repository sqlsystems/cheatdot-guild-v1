import React from 'react';
import Head from 'next/head';
import withReduxStore from '@redux/lib';
import { Provider } from 'react-redux';
import { createAxiosInstance } from '@utils/axios';
import MobileDetect from 'mobile-detect';
import nookies from 'nookies';
import axios from 'axios';
import { setInitData, setDeviceInfo } from '@redux/modules/global';
import { getMyInfo } from '@redux/modules/member';
import { setInitData as setGuildInitData } from '@redux/modules/guild';
import { updateQueryString } from '@redux/modules/guild/query_string';
import Root from 'components/Root';

import 'css/reset.css';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;

const MyApp = ({ Component, pageProps, reduxStore }) => {
    let viewport = '';
    if (!reduxStore.getState().global.device_info.is_mobile)
        viewport = 'width=device-width';
    else
        viewport = 'width=device-width,initial-scale=1,user-scalable=no';

    const opengraph = reduxStore.getState().opengraph;

    return (
        <>
            <Head>
                <meta charSet="utf-8" />

                <meta name="description" content={`${opengraph.description}${opengraph.add_description}`} />
                <meta name="keywords" content={`${opengraph.keywords}${opengraph.add_keywords}`} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={opengraph.og_title}  />
                <meta property="og:description" content={opengraph.og_description} />
                <meta property="og:url" content={`${opengraph.og_url}${opengraph.add_og_url}`} />
                <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
                <meta property="og:image" content={opengraph.og_image} />
                <meta property="og:locale" content="ko_KR" />
                {/*<meta name="naver-site-verification" content="bd5088150450970f0255f3a64700f18b69e91af6" />*/}
                {/*<meta name="google-site-verification" content="fk0HXNGgTc7k_aaiJGWyB6QaMFaNyER7vheSiMlOtI8" />*/}
                <meta name="viewport" content={viewport} />

                <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
                <link rel="canonical" href={`${opengraph.og_url}${opengraph.add_og_url}`}/>
                {/*<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />*/}
                {/*<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />*/}
                {/*<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />*/}
                {/*<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />*/}
                {/*<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />*/}
                {/*<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />*/}
                {/*<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />*/}
                {/*<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />*/}
                {/*<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />*/}
                {/*<link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />*/}
                {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />*/}
                {/*<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />*/}
                {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />*/}
            </Head>

            <Provider store={reduxStore}>
                <Root Component={Component} pageProps={pageProps} />
            </Provider>
        </>
    );
};

MyApp.getInitialProps = async({ Component, ctx }) => {
    const { reduxStore } = ctx;
    const { dispatch, getState } = reduxStore;

    const axiosServer = createAxiosInstance(ctx.req);

    if (ctx.req) {
        const withHeaders = {
            'remote-addr': ctx.req.headers['cf-connecting-ip'],
            'referer': ctx.req.headers.referer || '',
            'user-agent': ctx.req.headers['user-agent']
        };

        const res = await axiosServer.post('/v4/guild/util/api.php', { cmd: 'init' }, {
            headers: {
                ...withHeaders,
            }
        });

        await ctx.reduxStore.dispatch(setInitData(res.data.message.result));

        nookies.set(ctx, 'PHPSESSID', res.data.message.result.session, {
            domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
            path: '/',
            httpOnly: true,
            secure: true
        });

        // const requestMyInfo = await axiosServer.post('/v4/guild/api.php', {
        //     cmd: 'get_my_info'
        // });
        // await ctx.reduxStore.dispatch(getMyInfo({ data: requestMyInfo.data }));

        const md = new MobileDetect(ctx.req?.headers['user-agent']);
        const isMobile = !!md.mobile();

        await dispatch(setDeviceInfo({ is_mobile: isMobile, os: md.os() }));
    }

    if (ctx.pathname.includes('/[channel]')) {
        await ctx.reduxStore.dispatch(updateQueryString(ctx.query, ctx.asPath));

        if (ctx.req) {
            const res = await axiosServer.post('/v4/guild/api.php', {
                cmd: 'get_init_data',
                data: {
                    channel: ctx.query.channel,
                    channel_id: ctx.query.channel_id,
                }
            });

            await ctx.reduxStore.dispatch(setGuildInitData(res.data));
        }
    }

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
}

export default withReduxStore(MyApp);
