import axios from 'axios';
import { setSettingConfirm } from '@redux/modules/guild';
import { alert } from '@redux/modules/alert';

export const updateDefault = (e) => async(dispatch, getState) => {
    try {
        const channel = getState().guild.res_data.guild_info.channel;
        const channelId = getState().guild.channel_setting_data.id;

        await dispatch(setSettingConfirm(true));

        const formData = new FormData();

        formData.append('cmd', 'set_product');
        formData.append('channel', channel);
        formData.append('channel_id', channelId);
        formData.append('idx', e.idx || '');
        formData.append('name', e.name);
        formData.append('content', e.content);
        formData.append('price', e.price);
        formData.append('discount_rate', e.discount_rate);
        formData.append('is_star_point', JSON.stringify(e.is_star_point));
        formData.append('is_review', JSON.stringify(e.is_review));
        formData.append('is_stock_visible', JSON.stringify(e.is_stock_visible));
        formData.append('status', e.status);

        const thumbnail = document.getElementById('product_thumbnail');
        if (thumbnail.files[0]) {
            formData.append('product_thumbnail', thumbnail.files[0]);
        }

        const res = await axios.post('/v4/guild/channel_setting/store/api.php', formData);

        if (res.data.error.msg)
            return dispatch(alert({ content: res.data.error.msg }));

        e.setMenuType(1);
    } finally {
        await dispatch(setSettingConfirm(false));
    }
}
