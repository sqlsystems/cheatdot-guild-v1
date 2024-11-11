import axios from 'axios';
import { alert } from '@redux/modules/alert';

export const writeUpdate = (e) => async(dispatch, getState) => {
    try {
        const queryString = getState().guild_query_string;

        const filter = await axios.post('/v4/guild/channels/board/api.php', {
            cmd: 'content_filtering',
            data: {
                channel: queryString.channel,
                channel_id: parseInt(queryString.channel_id),
                subject: e.wr_subject,
                content: e.wr_content
            }
        });

        let subject = filter.data.message.result.subject;
        let content = filter.data.message.result.content;

        if (subject) {
            return dispatch(alert({ content: `제목에 금지단어('${subject}')가 포함되어있습니다` }));
        }

        if (content) {
            return dispatch(alert({ content: `내용에 금지단어('${content}')가 포함되어있습니다` }));
        }

        const token = await axios.post('/v4/guild/channels/board/api.php', {
            cmd: 'get_write_token',
            data: {
                channel: queryString.channel,
                channel_id: parseInt(queryString.channel_id),
            }
        });
        if (token.data.error.msg) {
            return dispatch(alert({ content: token.data.error.msg }));
        }

        const formData = new FormData();

        formData.append('cmd', 'write_update');
        formData.append('token', token.data.message.result);
        formData.append('w', queryString.w);
        formData.append('wr_id', queryString.wr_id);
        formData.append('channel', queryString.channel);
        formData.append('channel_id', queryString.channel_id);
        formData.append('notice', e.notice ? '1' : '0');
        formData.append('html', 'html1');
        formData.append('wr_subject', e.wr_subject);
        formData.append('wr_content', e.wr_content);

        // if (!getState().global.device_info.is_mobile) {
        //     const DOMCount = document.getElementsByName('bf_file[]');
        //     for (let i=0; i<2; i++) {
        //         if (DOMCount[i].files) {
        //             if (DOMCount[i].files[0]) {
        //                 formData.append('bf_file[]', DOMCount[i].files[0]);
        //             } else {
        //                 formData.append('bf_file[]', new File([''], ''));
        //             }
        //         }
        //
        //         if (e[`bf_file_del${i}`]) {
        //             formData.append(`bf_file_del[${i}]`, e[`bf_file_del${i}`]);
        //         }
        //
        //         formData.append(`bf_file_ap[${i}]`, e[`bf_file_ap${i}`] ? e[`bf_file_ap${i}`] : 0);
        //     }
        // }

        const res = await axios.post('/v4/guild/channels/board/api.php', formData);

        if (res.data.error.msg)
            return dispatch(alert({ content: res.data.error.msg }));

        // let wr_id;
        // if (boardUrl.wr_id) {
        //     wr_id = boardUrl.wr_id;
        // } else {
        //     if (res.data.message.result.is_point) {
        //         showToastAlert({
        //             title: `${getState().global.init.use_point.write} AP가 지급 되었습니다.`
        //         });
        //     }
        //
        //     wr_id = res.data.message.result.wr_id;
        // }
        //
        // return Router.push(`${boardUrl.middlePath}/${bo_table}/${wr_id}`);
    } finally {
    }
}
