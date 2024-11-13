import React, { useState, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { forceWithdrawal } from '@redux/lib/guild/setting/manage_whole_member';
import Popup from 'components/public/Popup';
import style from 'css/desktop.module.css';

const ForceLeave = ({ mb, setPopupData }) => {
    const dispatch = useDispatch();

    const [reason, setReason] = useState(0);
    const [selfReason, setSelfReason] = useState('');
    const [isReJoin, setReJoin] = useState(true);

    useEffect(() => {
        if (reason !== 3 && selfReason) {
            setSelfReason('');
        }
    }, [reason]);

    return (
        <Popup onClose={() => setPopupData({})}>
            <div className={style.title}>
                <h3>멤버 강제탈퇴</h3>
            </div>

            <div className={[style.form, style.member_out_pop].join(' ')}>
                <div className={style.item}>
                    <span className={style.tit}>강제 탈퇴 사유</span>
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
                        <div className={style.input_box}>
                            <input type="text" value={selfReason} onChange={e => setSelfReason(e.target.value)} placeholder="한글 25자 이내로 작성해 주세요." onClick={() => setReason(3)} maxLength={25} />
                      </div>
                    </div>
                </div>

                <div className={style.radio_wrap}>
                    <div className={style.chk_box}>
                        <input type="checkbox" id="re_join" onChange={e => setReJoin(!e.target.checked)} />
                        <label htmlFor="re_join">우리 서버에 재가입 불가하도록 합니다.</label>
                    </div>
                </div>

                <p>탈퇴사유를 선택하지 않으시면 강퇴가 불가능하며, <br/>선택하신 사유는 강퇴멤버에게 채팅으로 전달됩니다.</p>

                <div className={style.btn_wrap}>
                    <button type="button" className={[style.btn, style.btn_gray_line].join(' ')} onClick={() => setPopupData({})}>취소</button>
                    <button type="button" className={[style.btn, style.btn_black].join(' ')} onClick={() => dispatch(forceWithdrawal({
                        mb_id: mb.mb_id,
                        mb_nick: mb.mb_nick,
                        reason,
                        self_reason: selfReason,
                        is_re_join: isReJoin,
                        setPopupData
                    }))}>강제탈퇴</button>
                </div>
            </div>
        </Popup>
    );
}

export default memo(ForceLeave);
