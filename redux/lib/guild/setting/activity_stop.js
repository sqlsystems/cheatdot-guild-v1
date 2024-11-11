import axios from 'axios';
import { alert } from '@redux/modules/alert';
import { setData } from '@redux/modules/guild/settings/activity_stop';

export const getActivityStopList = () => async(dispatch, getState) => {
    const channel = getState().query_string.channel;
    const params = getState().settings.activity_stop.params;

    const res = await axios.post('/v4/guild/setting/member/api.php', {
        cmd: 'get_activity_stop_list',
        data: {
            channel: channel,
            params: params
        }
    });

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));

    await dispatch(setData(res.data));
}

export const ReleaseStopMember = (resetCheckedItems) => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;
    const chk = getState().settings.activity_stop.params.chk;

    const chks = Object.keys(chk);
    if (chks.length < 1)
        return dispatch(alert({ content: '선택된 활동정지 멤버가 없습니다.' }));

    dispatch(alert({
        content: `활동이 가능하도록 처리하시겠습니까?`,
        type: 'confirm',
        confirmText: '확인',
        onConfirm: async() => {
            const res = await axios.post('/v4/guild/setting/member/api.php', {
                cmd: 'release_stop_member',
                data: {
                    channel: channel,
                    params: chks
                }
            });

            if (res.data.error.msg)
                return dispatch(alert({ content: res.data.error.msg }));

            dispatch(getActivityStopList());

            resetCheckedItems();

            return true;
        }
    }));
}
