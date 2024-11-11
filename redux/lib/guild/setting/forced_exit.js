import axios from 'axios';

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
