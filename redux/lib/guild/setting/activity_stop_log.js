import axios from 'axios';
import { alert } from '@redux/modules/alert';
import { setData } from '@redux/modules/guild/settings/activity_stop_log';

export const getActivityStopLogList = () => async(dispatch, getState) => {
    const channel = getState().query_string.channel;
    const params = getState().settings.activity_stop_log.params;

    const res = await axios.post('/v4/guild/setting/member/api.php', {
        cmd: 'get_activity_stop_log_list',
        data: {
            channel: channel,
            params: params
        }
    });

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));

    await dispatch(setData(res.data));
}
