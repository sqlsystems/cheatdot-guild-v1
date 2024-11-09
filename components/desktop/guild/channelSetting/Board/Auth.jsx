import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAuth } from '@redux/lib/guild/channelSetting/board';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import LoopSelect from 'components/public/LoopSelect';
import Confirm from '@guild/components/ConfigConfirm';

const Auth = () => {
    const dispatch = useDispatch();

    const selMenuId = useSelector(state => state.guild.channel_setting_data?.id);
    const boardData = useSelector(state => state.guild.res_data.board_data[selMenuId]);

    const defaultData = {
        bo_list_level: boardData.bo_list_level,
        bo_read_level: boardData.bo_read_level,
        bo_write_level: boardData.bo_write_level,
        bo_comment_level: boardData.bo_comment_level,
        bo_upload_level: boardData.bo_upload_level,
        bo_download_level: boardData.bo_download_level,
    };

    const [data, setData] = useState(defaultData);

    const original = JSON.stringify(defaultData);
    const virtual = JSON.stringify(data);

    return (
        <>
            <ConfigTitle title="권한" />

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.item}>
                    <div className={style.cont}>
                        <ul className={style.auth_list}>
                            <li>
                                <span className={style.tit}>목록보기 권한</span>
                                <div className={style.select_box}>
                                    <LoopSelect
                                        count={10}
                                        index_start_from_one={true}
                                        onChange={e => setData({ ...data, bo_list_level: parseInt(e.target.value) })}
                                        defaultValue={data.bo_list_level}
                                    />
                                </div>
                            </li>
                            <li>
                                <span className={style.tit}>글읽기 권한</span>
                                <div className={style.select_box}>
                                    <LoopSelect
                                        count={10}
                                        index_start_from_one={true}
                                        onChange={e => setData({ ...data, bo_read_level: parseInt(e.target.value) })}
                                        defaultValue={data.bo_read_level}
                                    />
                                </div>
                            </li>
                            <li>
                                <span className={style.tit}>글쓰기 권한</span>
                                <div className={style.select_box}>
                                    <LoopSelect
                                        count={10}
                                        index_start_from_one={true}
                                        onChange={e => setData({ ...data, bo_write_level: parseInt(e.target.value) })}
                                        defaultValue={data.bo_write_level}
                                    />
                                </div>
                            </li>
                            <li>
                                <span className={style.tit}>댓글쓰기 권한</span>
                                <div className={style.select_box}>
                                    <LoopSelect
                                        count={10}
                                        index_start_from_one={true}
                                        onChange={e => setData({ ...data, bo_comment_level: parseInt(e.target.value) })}
                                        defaultValue={data.bo_comment_level}
                                    />
                                </div>
                            </li>
                            <li>
                                <span className={style.tit}>업로드 권한</span>
                                <div className={style.select_box}>
                                    <LoopSelect
                                        count={10}
                                        index_start_from_one={true}
                                        onChange={e => setData({ ...data, bo_upload_level: parseInt(e.target.value) })}
                                        defaultValue={data.bo_upload_level}
                                    />
                                </div>
                            </li>
                            <li>
                                <span className={style.tit}>다운로드 권한</span>
                                <div className={style.select_box}>
                                    <LoopSelect
                                        count={10}
                                        index_start_from_one={true}
                                        onChange={e => setData({ ...data, bo_download_level: parseInt(e.target.value) })}
                                        defaultValue={data.bo_download_level}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Confirm
                original={original}
                virtual={virtual}
                resetData={() => setData(defaultData)}
                onClick={() => dispatch(updateAuth({
                    channel: boardData.channel,
                    channel_id: boardData.channel_id,
                    params: data
                }))}
            />
        </>
    );
}

export default memo(Auth);
