import axios from 'axios';
import { alert } from '@redux/modules/alert';
// import { sendWebSocketData } from '@redux/modules/socket/socket';

export const attendGuild = () => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;
    const guildName = getState().guild.res_data.guild_info.name;

    dispatch(alert({
        content: `${guildName} 길드에 참가하시겠습니까?`,
        type: 'confirm',
        confirmText: '참가',
        onConfirm: async() => {
            const res = await axios.post('/v4/guild/api.php', {
                cmd: 'attend_guild',
                data: {
                    channel: channel
                }
            });

            if (res.data.error.msg)
                return dispatch(alert({ content: res.data.error.msg }));

            return true;
        }
    }));
}

export const createCategory = (name) => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;

    const res = await axios.post('/v4/guild/api.php', {
        cmd: 'create_category',
        data: {
            channel: channel,
            name: name
        }
    });

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));

    dispatch(sendWebSocketData({
        type: 'guild',
        event: 'create_category',
        data: res.data.message.result
    }));
}

export const createCategoryChannel = (e) => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;

    const res = await axios.post('/v4/guild/api.php', {
        cmd: 'create_category_channel',
        data: {
            channel: channel,
            category_id: e.category_id,
            type: e.type,
            name: e.name,
        }
    });

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));

    dispatch(sendWebSocketData({
        type: 'guild',
        event: 'create_category_channel',
        data: res.data.message.result
    }));
}

export const updateMyInfo = (e) => async(dispatch, getState) => {
    const channel = getState().guild.res_data.guild_info.channel;

    const formData = new FormData();

    formData.append('cmd', 'update_my_info');
    formData.append('channel', channel);
    formData.append('mb_nick', e.mb_nick);
    formData.append('intro', e.intro);

    const mbImg = document.getElementById('mb_img');
    if (mbImg.files[0]) {
        formData.append('mb_img', mbImg.files[0]);
    }

    const res = await axios.post('/v4/guild/api.php', formData);

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));

    dispatch(alert({ content: '수정되었습니다.' }));
}
