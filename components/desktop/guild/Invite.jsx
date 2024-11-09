import React from 'react';
import style from 'css/desktop.module.css';

const Invite = () => {
    return (
            <div className={style.popup_wrap}>
                <div className={[style.popup_background, style.fadeIn].join(' ')}>
                    <div className={style.popup}>
                        <div className={[style.inner, style.scaleIn].join(' ')}>
                            <div className={style.title}>
                                <h3>길드 초대 링크 설정</h3>
                            </div>
                            <div className={style.guild_invite}>
                                <div className={style.form}>
                                    <div className={style.item}>
                                        <div className={style.tit}>
                                            <span>잔여 유효 기간</span>
                                        </div>
                                        <div className={style.select_box}>
                                            <select>
                                                <option>7일</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={style.item}>
                                        <div className={style.tit}>
                                            <span>최대 사용 횟수</span>
                                        </div>
                                        <div className={style.select_box}>
                                            <select>
                                                <option>제한 없음</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={style.btn_wrap}>
                                        <button type="button"
                                                className={[style.btn, style.btn_gray_line].join(' ')}>취소
                                        </button>
                                        <button type="button" className={[style.btn, style.btn_primary].join(' ')}>새 링크
                                            만들기
                                        </button>
                                    </div>
                                </div>

                                <div className={[style.link_copy, style.slideUp].join(' ')}>
                                    <div className={style.link}>
                                        <p>https://cheatdot.com/3dBBLiujJDI18</p>
                                        <button type="button" className={[style.btn, style.btn_primary].join(' ')}>복사</button>
                                    </div>
                                    <p>초대 링크가 7일 후 만료됩니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Invite;
