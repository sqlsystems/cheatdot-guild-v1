import axios from 'axios';
import { setSettingConfirm, setChannelBoardData } from '@redux/modules/guild';
import { alert } from '@redux/modules/alert';

export const updateAuth = (e) => async dispatch => {
    try {
        await dispatch(setSettingConfirm(true));

        const res = await axios.post('/v4/guild/channel_setting/board/api.php', {
            cmd: 'update_auth',
            data: e
        });

        if (res.data.error.msg)
            return dispatch(alert({ content: res.data.error.msg }));

        dispatch(setChannelBoardData({
            channel_id: e.channel_id,
            data: e.params
        }));
    } finally {
        await dispatch(setSettingConfirm(false));
    }
}
