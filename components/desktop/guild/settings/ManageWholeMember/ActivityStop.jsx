import React, { useState, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { memberActivityStop } from '@redux/lib/guild/setting/manage_whole_member';
import Popup from 'components/public/Popup';
import style from 'css/desktop.module.css';

const ActivityStop = ({ mb, setPopupData }) => {
    const dispatch = useDispatch();

    const [reason, setReason] = useState(0);
    const [selfReason, setSelfReason] = useState('');
    const [date, setDate] = useState(1);

    useEffect(() => {
        if (reason !== 3 && selfReason) {
            setSelfReason('');
        }
    }, [reason]);

    return (
        <Popup onClose={() => setPopupData({})}>
            <div className={style.title}>
                <h3>멤버 활동정지</h3>
            </div>

            <div className={[style.form, style.member_out_pop].join(' ')}>
                <div className={style.item}>
                    <span className={style.tit}>활동 정지 사유</span>
                    <div className={style.radio_wrap}>
                        <div className={style.radio_box2}>
                            <input type="radio" id="reason_01" name="reason" checked={reason === 0} onChange={() => setReason(0)} />
                            <label htmlFor="reason_01">성인/도박 등 불법광고 및 스팸 활동</label>
                        </div>
                        <div className={style.radio_box2}>
                            <input type="radio" id="reason_02" name="reason" checked={reason === 1} onChange={() => setReason(1)} />
                            <label htmlFor="reason_02">바람직하지 않은 활동 (광고, 도배, 욕설, 비방 등)</label>
                        </div>
                        <div className={style.radio_box2}>
                            <input type="radio" id="reason_03" name="reason" checked={reason === 2} onChange={() => setReason(2)} />
                            <label htmlFor="reason_03">길드 운영 원칙에 위배되는 활동</label>
                        </div>
                        <div className={style.radio_box2}>
                            <input type="radio" id="reason_04" name="reason" checked={reason === 3} onChange={() => setReason(3)} />
                            <label htmlFor="reason_04">기타</label>
                        </div>
                        <div className={style.input_box} >
                            <input type="text" value={selfReason} onChange={e => setSelfReason(e.target.value)} placeholder="한글 25자 이내로 작성해 주세요." onClick={() => setReason(3)} maxLength={25} />
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <span className={style.tit}>활동 정지 기간</span>
                    <div className={style.select_box}>
                        <select onChange={e => setDate(e.target.value)}>
                            {[...Array(30)].map((_, index) => {
                                return <option key={index} value={index+1}>{index+1}일</option>
                            })}
                            <option value={0}>무기한</option>
                        </select>
                    </div>
                </div>

                <div className={style.btn_wrap}>
                    <button type="button" className={[style.btn, style.btn_gray_line].join(' ')} onClick={() => setPopupData({})}>취소</button>
                    <button type="button" className={[style.btn, style.btn_black].join(' ')} onClick={() => dispatch(memberActivityStop({
                        mb_id: mb.mb_id,
                        mb_nick: mb.mb_nick,
                        reason,
                        self_reason: selfReason,
                        date,
                        setPopupData
                    }))}>활동정지</button>
                </div>
            </div>
        </Popup>
    );
}

export default memo(ActivityStop);
