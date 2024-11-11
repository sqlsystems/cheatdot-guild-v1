import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { createAxiosInstance } from 'utils/axios';
import { setChannelData, setMetaData } from '@redux/modules/guild';
import { setInitBoardList } from '@redux/modules/guild/channels/board';
import { setInitStoreData } from '@redux/modules/guild/channels/store';
import { updateOpenGraph } from '@redux/modules/opengraph';
import DeskTopGuild from 'components/desktop/guild';

const Board = dynamic(() => import('components/desktop/guild/channels/Board/List'));
const Album = dynamic(() => import('components/desktop/guild/channels/Board/Album'));
const Store = dynamic(() => import('components/desktop/guild/channels/Store/List'));

const ChannelID = ({ pageProps }) => {
    const metadata = useSelector(state => state.guild.metadata);
    const guildName = useSelector(state => state.guild.res_data.guild_info.name);

    const { channelType } = pageProps;

    const renderContent = () => {
        if (pageProps.error?.msg)
            return <h1>{pageProps.error.msg}</h1>;

        switch (channelType) {
            case 0: //게시판
                return <Board />;
            case 1: //앨범
                return <Album />;
            case 4: //스토어
                return <Store />;
        }
    }

    let title = '';
    title = metadata.title;

    if (!title) {
        title = `${guildName} - 오류안내 페이지`;
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <DeskTopGuild>
                {renderContent()}
            </DeskTopGuild>
        </>
    );
}

ChannelID.getInitialProps = async(ctx) => {
    const axios = createAxiosInstance(ctx.req);

    const guildData = ctx.reduxStore.getState().guild;
    const initChannelData = guildData.res_data.current_channel_data;
    await ctx.reduxStore.dispatch(setChannelData(initChannelData));

    let res = {};

    switch (initChannelData?.type) {
        case 0:
            res = await axios.post('/v4/guild/channels/board/api.php', {
                cmd: 'get_list',
                data: {
                    channel: ctx.query.channel,
                    channel_id: parseInt(ctx.query.channel_id),
                    query: {
                        sca: '',
                        sfl: '',
                        stx: '',
                        sst: '',
                        sod: '',
                        sop: '',
                        spt: '',
                        page: '',
                    }
                }
            });

            await ctx.reduxStore.dispatch(setInitBoardData(res.data));
            break;
        case 4:
            res = await axios.post('/v4/guild/channels/store/api.php', {
                cmd: 'get_product_list',
                data: {
                    channel: ctx.query.channel,
                    channel_id: parseInt(ctx.query.channel_id),
                    query: {
                        sca: '',
                        sfl: '',
                        stx: '',
                        sst: '',
                        sod: '',
                        sop: '',
                        spt: '',
                        page: '',
                    }
                }
            });

            await ctx.reduxStore.dispatch(setInitStoreData(res.data));
            break;
        default:
            break;
    }

    if (initChannelData === null) {
        return {
            channelType: null,
            error: {
                msg: '채널이 존재하지 않습니다.'
            }
        };
    }

    if (initChannelData != null) {
        await ctx.reduxStore.dispatch(setMetaData({
            title: res.data.message.result.title,
            og_title: res.data.message.result.og_title
        }));

        const metadata = ctx.reduxStore.getState().guild.metadata;
        await ctx.reduxStore.dispatch(updateOpenGraph({
            add_description: `, ${metadata.title}`,
            add_keywords: `, ${metadata.title}`,
            og_title: metadata.og_title,
            add_og_url: ctx.asPath.split('?')[0]
        }));
    } else {
        await ctx.reduxStore.dispatch(updateOpenGraph({
            add_description: `, ${process.env.NEXT_PUBLIC_SITE_NAME} - 오류안내 페이지`,
            add_keywords: `, ${process.env.NEXT_PUBLIC_SITE_NAME} - 오류안내 페이지`
        }));
    }

    return {
        channelType: initChannelData?.type,
        error: res?.data?.error
    };
}

export default ChannelID;
