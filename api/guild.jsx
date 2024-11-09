import axios from 'axios';

export const getMemberList = (e) => axios.post('/v4/guild/setting/member/api.php', {
    cmd: 'get_member_list',
    data: e
});
