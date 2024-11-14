import React from 'react';
import Head from 'next/head';
import { createAxiosInstance } from 'utils/axios';
import { updateOpenGraph } from '@redux/modules/opengraph';
import DeskTopGuild from 'components/desktop/guild';
import DeskTopBoardWrite from 'components/desktop/guild/channels/Board/Write';

const Write = ({ pageProps }) => {
    const { error, message } = pageProps;

    const contentLoaded = () => {
        if (error.msg)
            return <h1>{error.msg}</h1>;

        return <DeskTopBoardWrite />;
    }

    let title = '';
    title = message.result.title;

    if (!title) {
        title = `${process.env.NEXT_PUBLIC_SITE_NAME} - 오류안내 페이지`;
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <DeskTopGuild>
                {contentLoaded()}
            </DeskTopGuild>
        </>
    );
}

Write.getInitialProps = async(ctx) => {
    const axios = createAxiosInstance(ctx.req);

    const res = await axios.post('/v4/guild/channels/board/api.php', {
        cmd: 'write',
        data: {
            channel: ctx.query.channel,
            channel_id: parseInt(ctx.query.channel_id)
        }
    });

    if (!res.data.error.msg) {
        await ctx.reduxStore.dispatch(updateOpenGraph({
            add_description: `, ${res.data.message.result.title}`,
            add_keywords: `, ${res.data.message.result.title}`,
            og_title: res.data.message.result.og_title,
            add_og_url: ctx.asPath.split('?')[0]
        }));
    } else {
        await ctx.reduxStore.dispatch(updateOpenGraph({
            add_description: `, ${process.env.NEXT_PUBLIC_SITE_NAME} - 오류안내 페이지`,
            add_keywords: `, ${process.env.NEXT_PUBLIC_SITE_NAME} - 오류안내 페이지`
        }));
    }

    return {
        ...res.data
    };
}

export default Write;
