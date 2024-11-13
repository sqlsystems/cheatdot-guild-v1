import axios from 'axios';
import { alert } from '@redux/modules/alert';
import { setData } from '@redux/modules/guild/settings/manage_whole_member';

export const getMemberList = () => async(dispatch, getState) => {
    const channel = getState().query_string.channel;
    const params = getState().settings.manage_whole_member.params;

    const res = await axios.post('/v4/guild/setting/member/api.php', {
        cmd: 'get_member_list',
        data: {
            channel: channel,
            params: params
        }
    });

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));

    await dispatch(setData(res.data));
}

export const changeMemberLevel = (e) => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;

    dispatch(alert({
        content: `${e.mb_nick}님을 ${e.changed_level}레벨로 변경하시겠습니까?`,
        type: 'confirm',
        confirmText: '변경',
        onConfirm: async() => {
            const res = await axios.post('/v4/guild/setting/member/api.php', {
                cmd: 'change_member_level',
                data: {
                    channel: channel,
                    params: e
                }
            });

            if (res.data.error.msg)
                return dispatch(alert({ content: res.data.error.msg }));

            return true;
        }
    }));
}

export const setMemberAttendStatus = (e) => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;

    dispatch(alert({
        content: `${e.mb_nick}님을 ${e.status_type} 하시겠습니까?`,
        type: 'confirm',
        confirmText: e.status_type,
        onConfirm: async() => {
            const res = await axios.post('/v4/guild/setting/member/api.php', {
                cmd: 'set_member_attend_status',
                data: {
                    channel: channel,
                    params: e
                }
            });

            if (res.data.error.msg)
                return dispatch(alert({ content: res.data.error.msg }));

            return true;
        }
    }));
}

export const memberActivityStop = (e) => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;

    dispatch(alert({
        content: `${e.mb_nick}님을 활동정지 하시겠습니까?`,
        type: 'confirm',
        confirmText: '활동정지',
        onConfirm: async() => {
            const res = await axios.post('/v4/guild/setting/member/api.php', {
                cmd: 'member_activity_stop',
                data: {
                    channel: channel,
                    params: e
                }
            });

            if (res.data.error.msg)
                return dispatch(alert({ content: res.data.error.msg }));

            e.setPopupData({});

            return true;
        }
    }));
}

export const forceWithdrawal = (e) => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;

    dispatch(alert({
        content: `${e.mb_nick}님을 강제탈퇴 시키시겠습니까?`,
        type: 'confirm',
        confirmText: '확인',
        onConfirm: async() => {
            const res = await axios.post('/v4/guild/setting/member/api.php', {
                cmd: 'force_withdrawal',
                data: {
                    channel: channel,
                    params: e
                }
            });

            if (res.data.error.msg)
                return dispatch(alert({ content: res.data.error.msg }));

            e.setPopupData({});

            dispatch(getMemberList());

            return true;
        }
    }));
}
