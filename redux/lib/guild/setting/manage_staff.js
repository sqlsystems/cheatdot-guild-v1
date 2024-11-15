import { alert } from '@redux/modules/alert';
import { setData } from '@redux/modules/guild/settings/manage_staff';
import axios from 'axios';

export const getStaffList = () => async(dispatch, getState) => {
    const channel = getState().query_string.channel;
    const params = getState().settings.manage_staff.params;

    const res = await axios.post('/v4/guild/setting/member/api.php', {
        cmd: 'get_staff_list',
        data: {
            channel: channel,
            params: params
        }
    });

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));

    await dispatch(setData(res.data));
}

export const updateAdminPermissions = (e) => async(dispatch, getState) => {
    const channel = getState().query_string.channel;

    const res = await axios.post('/v4/guild/setting/member/api.php', {
        cmd: 'update_admin_permissions',
        data: {
            channel: channel,
            params: {
                mb_id: e.mb_id,
                permissions: e.permissions
            }
        }
    });

    if (res.data.error.msg)
        return dispatch(alert({ content: res.data.error.msg }));

    await dispatch(getStaffList());
}

export const deleteAdminPermissions = (resetCheckedItems) => async(dispatch, getState) => {
    const channel = getState().query_string.channel;
    const chk = getState().settings.manage_staff.params.chk;

    const chks = Object.keys(chk);
    if (chks.length < 1)
        return dispatch(alert({ content: '선택된 멤버가 없습니다.' }));

    dispatch(alert({
        content: `권한을 삭제하시겠습니까?`,
        type: 'confirm',
        confirmText: '확인',
        onConfirm: async() => {
            const res = await axios.post('/v4/guild/setting/member/api.php', {
                cmd: 'delete_admin_permissions',
                data: {
                    channel: channel,
                    params: chks
                }
            });

            if (res.data.error.msg)
                return dispatch(alert({ content: res.data.error.msg }));

            dispatch(getStaffList());

            resetCheckedItems();

            return true;
        }
    }));
}
