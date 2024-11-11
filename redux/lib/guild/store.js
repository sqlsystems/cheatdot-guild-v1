import axios from 'axios';
import { alert } from '@redux/modules/alert';

export const buyProduct = (e) => async(dispatch, getState) => {
    const queryString = getState().guild_query_string;

    const channel = queryString.channel;
    const channelId = queryString.channel_id;

    dispatch(alert({
        content: `${e.name} 상품을 구매하시겠습니까?`,
        type: 'confirm',
        confirmText: '구매',
        onConfirm: async() => {
            const res = await axios.post('/v4/guild/channels/store/api.php', {
                cmd: 'buy_product',
                data: {
                    channel: channel,
                    channel_id: channelId,
                    params: {
                        idx: e.idx
                    }
                }
            });

            if (res.data.error.msg)
                return dispatch(alert({ content: res.data.error.msg }));

            return true;
        }
    }));
}

export const reviewUpdate = (e) => async(dispatch, getState) => {
    const queryString = getState().guild_query_string;

    const channel = queryString.channel;
    const channelId = queryString.channel_id;

    const res = await axios.post('/v4/guild/channels/store/api.php', {
        cmd: 'review_update',
        data: {
            channel: channel,
            channel_id: channelId,
            params: e
        }
    });

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));
}
