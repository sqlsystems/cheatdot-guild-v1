import { alert } from '@redux/modules/alert';
import { setData } from '@redux/modules/guild/settings/activity_stop';
import axios from 'axios';

export const updateAuth = (e) => async(dispatch, getState) => {
    const channel = getState().query_string.channel;

    const res = await axios.post('/v4/guild/setting/member/api.php', {
        cmd: 'auth_update',
        data: {
            channel: channel,
            params: e
        }
    });

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));

    await dispatch(setData(res.data));
}
