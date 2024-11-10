import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { createAxiosInstance } from 'utils/axios';
import { setViewData } from 'redux/modules/guild/store';
import DeskTopGuild from 'components/desktop/guild';

const BoardView = dynamic(() => import('components/desktop/guild/channels/Board/View'));
const StoreView = dynamic(() => import('components/desktop/guild/channels/Store/View'));

const WrId = () => {
    const { type } = useSelector(state => state.guild.res_data.current_channel_data);

    const renderContent = () => {
        switch (type) {
            case 0:
                return <BoardView />;
            case 4:
                return <StoreView />;
        }
    }

    return (
        <>
            <DeskTopGuild>
                {renderContent()}
            </DeskTopGuild>
        </>
    );
}

WrId.getInitialProps = async(ctx) => {
    const axios = createAxiosInstance(ctx.req);

    const guildData = ctx.reduxStore.getState().guild;
    const initChannelData = guildData.res_data.current_channel_data;

    let res = {};

    switch (initChannelData?.type) {
        case 0:
            res = await axios.post('/v4/guild/channels/board/api.php', {
                cmd: 'get_view',
                data: {

                }
            });
            break;
        case 4:
            res = await axios.post('/v4/guild/channels/store/api.php', {
                cmd: 'get_product_data',
                data: {
                    channel: ctx.query.channel,
                    channel_id: Number(ctx.query.channel_id),
                    params: {
                        idx: Number(ctx.query.wr_id)
                    }
                }
            });

            await ctx.reduxStore.dispatch(setViewData(res.data));
            break;
    }

    return {
        channelType: initChannelData?.type,
        error: res?.data?.error
    };
}

export default WrId;
