import React from 'react';
import style from 'css/desktop.module.css';

const AttendConfirm = () => {
    return (
        <div className={style.alert}>
            <div className={style.background}/>

            <div className={style.wrapper}>
                <div className={style.cont}>
                    <h2>알림</h2>
                    <div className={style.body}>
                        <p>프로젝트9 길드 가입신청을 진행합니다.</p>
                    </div>
                    <div className={style.bottom}>
                        <button type="button" className={[style.btn, style.btn_gray].join(' ')}>취소</button>
                        <button type="button" className={[style.btn, style.btn_primary].join(' ')}>신청</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AttendConfirm;
