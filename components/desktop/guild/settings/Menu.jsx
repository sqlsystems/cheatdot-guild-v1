import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import style from 'css/desktop.module.css';

const Menu = ({ menuType, setMenuType }) => {
    const attendWaitingCount = useSelector(state => state.guild.res_data.guild_info.attend_waiting_count);

    return (
        <div className={style.menu_wrap}>
            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div>
                    <span className={style.tit}>길드 설정</span>
                    <ul>
                        <li>
                            <button type="button" className={menuType === 0 ? style.on : null} onClick={() => setMenuType(0)}>기본설정</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className={style.tit}>길드원 설정</span>
                    <ul>
                        <li>
                            <button type="button" className={menuType === 1 ? style.on : null} onClick={() => setMenuType(1)}>
                                멤버 목록
                                {attendWaitingCount > 0 && <span className={style.num}>{attendWaitingCount}</span>}
                            </button>
                        </li>
                        <li>
                            <button type="button" className={menuType === 2 ? style.on : null} onClick={() => setMenuType(2)}>관리자 설정</button>
                        </li>
                        <li>
                            <button type="button" className={menuType === 6 ? style.on : null} onClick={() => setMenuType(6)}>활동정지 멤버 관리</button>
                        </li>
                        <li>
                            <button type="button" className={menuType === 60 ? style.on : null} onClick={() => setMenuType(60)}>활동정지 멤버 기록</button>
                        </li>
                        <li>
                            <button type="button" className={menuType === 7 ? style.on : null} onClick={() => setMenuType(7)}>강제탈퇴 멤버 관리</button>
                        </li>
                        <li>
                            <button type="button" className={menuType === 70 ? style.on : null} onClick={() => setMenuType(70)}>가입 불가 관리</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className={style.tit}>스토어 관리</span>
                    <ul>
                        <li>
                            <button type="button" className={menuType === 3 ? style.on : null} onClick={() => setMenuType(3)}>정산 정보</button>
                        </li>
                        <li>
                            <button type="button" className={menuType === 4 ? style.on : null} onClick={() => setMenuType(4)}>정산 내역</button>
                        </li>
                        <li>
                            <button type="button" className={menuType === 8 ? style.on : null} onClick={() => setMenuType(8)}>상품 구매 기록</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className={style.tit}>관리</span>
                    <ul>
                        <li>
                            <button type="button" className={menuType === 5 ? style.on : null} onClick={() => setMenuType(5)}>감사 로그</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <button type="button">길드삭제</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default memo(Menu);
