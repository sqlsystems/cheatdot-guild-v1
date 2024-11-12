import axios from 'axios';
import { alert } from '@redux/modules/alert';

export const getForcedExitList = () => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;

    const res = await axios.post('/v4/guild/setting/member/api.php', {
        cmd: 'get_forced_exit_list',
        data: {
            channel: channel,
            params: {}
        }
    });

    if (!res.data.error.msg) {
        return res.data.message.result;
    }
}

export const JoinRefusalClear = (resetCheckedItems) => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;
    const chk = getState().settings.activity_stop.params.chk;

    const chks = Object.keys(chk);
    if (chks.length < 1)
        return dispatch(alert({ content: '선택된 강제탈퇴 멤버가 없습니다.' }));

    dispatch(alert({
        content: `재가입이 가능하도록 처리하시겠습니까?`,
        type: 'confirm',
        confirmText: '확인',
        onConfirm: async() => {
            const res = await axios.post('/v4/guild/setting/member/api.php', {
                cmd: 'join_refusal_clear',
                data: {
                    channel: channel,
                    params: chks
                }
            });

            if (res.data.error.msg)
                return dispatch(alert({ content: res.data.error.msg }));

            dispatch(getForcedExitList());

            resetCheckedItems();

            return true;
        }
    }));
}
