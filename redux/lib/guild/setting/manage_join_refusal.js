import axios from 'axios';
import { alert } from '@redux/modules/alert';
import { setData } from '@redux/modules/guild/settings/manage_join_refusal';

export const getJoinRefusal = () => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;
    const params = getState().settings.manage_join_refusal.params;

    const res = await axios.post('/v4/guild/setting/member/api.php', {
        cmd: 'get_join_refusal',
        data: {
            channel: channel,
            params: params
        }
    });

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));

    await dispatch(setData(res.data));
}
