import React from 'react';
import withReduxStore from '@redux/lib';
import { Provider } from 'react-redux';
import { createAxiosInstance } from '@utils/axios';
import MobileDetect from 'mobile-detect';
import nookies from 'nookies';
import { setInitData, setDeviceInfo } from '@redux/modules/global';
import { getMyInfo } from '@redux/modules/member';
import { setInitData as setGuildInitData } from '@redux/modules/guild';
import Root from 'components/Root';

import 'css/reset.css';

const MyApp = ({ Component, pageProps, reduxStore }) => {
    return (
        <Provider store={reduxStore}>
            <Root Component={Component} pageProps={pageProps} />
        </Provider>
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

        const res = await axiosServer.post('/v4/api.php', { cmd: 'init' }, {
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

        const requestMyInfo = await axiosServer.post('/v4/member/api.php', {
            cmd: 'get_my_info'
        });
        await ctx.reduxStore.dispatch(getMyInfo({ data: requestMyInfo.data }));

        const md = new MobileDetect(ctx.req?.headers['user-agent']);
        const isMobile = !!md.mobile();

        await dispatch(setDeviceInfo({ is_mobile: isMobile, os: md.os() }));
    }

    if (((ctx.req) && ctx.pathname.includes('/[channel]'))) {
        // await ctx.reduxStore.dispatch(updateQueryString(ctx.query, ctx.asPath));

        const guildInfoChannel = ctx.reduxStore.getState().guild.res_data.guild_info.channel;
        if (guildInfoChannel !== ctx.query.channel) {
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
