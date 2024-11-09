import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateDefault } from '@redux/lib/guild/channelSetting/board';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import Confirm from "@guild/components/ConfigConfirm";

const Default = () => {
    const dispatch = useDispatch();

    const selMenuId = useSelector(state => state.guild.channel_setting_data?.id);
    const boardData = useSelector(state => state.guild.res_data.board_data[selMenuId]);

    const defaultData = {
        bo_count_modify: boardData.bo_count_modify,
        bo_count_delete: boardData.bo_count_delete,
        bo_category_list: boardData.bo_category_list,
        bo_use_category: boardData.bo_use_category,
        bo_use_good: boardData.bo_use_good,
        bo_use_nogood: boardData.bo_use_nogood,
        bo_insert_content: boardData.bo_insert_content,
        bo_filter: boardData.bo_filter,
    };

    const [data, setData] = useState(defaultData);

    const handleChangeData = (e) => {
        setData((prevState) => {
            return {
                ...prevState,
                ...e
            }
        });
    }

    const original = JSON.stringify(defaultData);
    const virtual = JSON.stringify(data);

    return (
        <>
            <ConfigTitle title="일반" />

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>채널명 변경</span>
                    </div>

                    <div className={style.cont}>
                        <div className={[style.input_box, style.have_count].join(' ')}>
                            <input type="text" placeholder="채널명" />

                            <span className={style.count}>
                                <span>1</span>/15
                            </span>
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>분류</span>
                    </div>

                    <div className={style.cont}>
                        <p className={style.explain}>분류와 분류 사이는 | 로 구분.(예 : 질문|답변) 첫자로 #은 입력 불가.(예 : #질문|#답변)<br/>분류명에 일부 특수문자()/는 사용할 수 없습니다.</p>
                        <div className={style.flex}>
                            <div className={[style.input_box, style.w600].join(' ')}>
                                <input type="text" value={data.bo_category_list} onChange={e => handleChangeData({ bo_category_list: e.target.value })} placeholder="채널명" />
                            </div>
                            <div className={style.chk_box}>
                                <input type="checkbox" onChange={e => handleChangeData({ bo_use_category: e.target.checked })} checked={data.bo_use_category} id="bo_use_category" />
                                <label htmlFor="bo_use_category">사용</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>원글 수정 불가</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.flex}>
                            댓글
                            <div className={[style.input_box, style.w60].join(' ')}>
                                <input
                                    type="text"
                                    value={String(data.bo_count_modify || '').replace(/[^0-9]/g, '')}
                                    onChange={e => handleChangeData({ bo_count_modify: e.target.value })}
                                    placeholder="1"
                                />
                            </div>
                            개 이상 달리면 수정 불가
                        </div>
                        <p className={style.explain}>댓글의 수가 설정 수 이상이면 원글을 수정할 수 없습니다. <br/>0으로 설정하시면, 댓글 수에 관계없이 수정할 수 있습니다.</p>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>원글 삭제 불가</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.flex}>
                            댓글
                            <div className={[style.input_box, style.w60].join(' ')}>
                                <input
                                    type="text"
                                    value={String(data.bo_count_delete || '').replace(/[^0-9]/g, '')}
                                    onChange={e => handleChangeData({ bo_count_delete: e.target.value })}
                                    placeholder="1"
                                />
                            </div>
                            개 이상 달리면 삭제 불가
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>추천 사용</span>
                    </div>

                    <div className={style.cont}>
                    <div className={style.radio_wrap}>
                        <div className={style.radio_box1}>
                            <input type="checkbox" id="recommend" onChange={e => handleChangeData({ bo_use_good: e.target.checked })} checked={data.bo_use_good} />
                            <label htmlFor="recommend">추천 사용</label>
                        </div>
                        <div className={style.radio_box1}>
                            <input type="checkbox" id="no_recommend" onChange={e => handleChangeData({ bo_use_nogood: e.target.checked })} checked={data.bo_use_nogood} />
                            <label htmlFor="no_recommend">비추천 사용</label>
                        </div>
                    </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>글쓰기 기본내용</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.txtarea_box}>
                            <textarea value={data.bo_insert_content} onChange={e => handleChangeData({ bo_insert_content: e.target.value })} placeholder="글 작성시 기본 내용" />
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>단어 필터링</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.txtarea_box}>
                            <textarea value={data.bo_filter} onChange={e => handleChangeData({ bo_filter: e.target.value })} placeholder="씨발,시발,병신 ..." />
                        </div>
                        <p className={style.explain}>입력된 단어가 포함된 내용은 게시할 수 없습니다. 단어와 단어 사이는 ,로 구분합니다.</p>
                    </div>
                </div>
            </div>

            <Confirm
                original={original}
                virtual={virtual}
                resetData={() => handleChangeData(defaultData)}
                onClick={() => dispatch(updateDefault({
                    channel: boardData.channel,
                    channel_id: boardData.channel_id,
                    params: data
                }))}
            />
        </>
    );
}

export default memo(Default);
