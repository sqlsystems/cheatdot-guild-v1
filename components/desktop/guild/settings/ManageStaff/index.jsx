import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getStaffList } from '@redux/lib/guild/setting/manage_staff';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';
import SearchForm from '@guild/components/SearchForm';
import List from './List';
import AddAuth from './AddAuth';

const StaffManage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const res = async() => {
            await dispatch(getStaffList());
        }

        res();
    }, []);

    return (
        <>
            <ConfigTitle title="관리자 설정">
                <p>관리자로 지정된 멤버는 관리자 설정, 길드 삭제를 제외한 모든 메뉴를 관리할 수 있습니다.</p>
            </ConfigTitle>

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.layout_box}>
                    <div className={style.top_box}>
                        <div className={style.btn_wrap}>
                            <button type="button" className={[style.btn, style.btn_gray_line].join(' ')}>선택 삭제</button>
                        </div>

                        <SearchForm />
                    </div>

                    <List />
                </div>

                <AddAuth />
            </div>
            <div className={style.popup_wrap}>
                <div className={[style.popup_background, style.fadeIn].join(' ')}>
                    <div className={style.popup}>
                        <div className={[style.inner, style.guild_manager_add, style.scaleIn].join(' ')}>
                            <div className={style.title}>
                                <h3>관리 권한 추가</h3>
                            </div>
                            <div className={style.form}>
                                <div className={style.item}>
                                    <div className={style.tit}>
                                        <span>회원아이디</span>
                                    </div>
                                    <div className={style.input_box}>
                                        <input type="text" placeholder="아이디" />
                                    </div>
                                </div>

                                <div className={[style.add_list, style.scroll_custom].join(' ')}>
                                    <div className={style.box}>
                                        <div className={[style.item, style.all].join(' ')}> {/* 전체 선택에는 all 클래스 붙여줘여 색 다르게 주게 */}
                                            <div className={style.tit}>
                                                <div className={style.chk_box}>
                                                    <input type="checkbox" id="auth_all" />
                                                    <label htmlFor="auth_all">전체권한</label>
                                                </div>
                                            </div>
                                            <div className={style.chk_wrap}>
                                                <div className={style.chk_box}>
                                                    <input type="checkbox" id="auth_all_01" disabled={true} />
                                                    <label htmlFor="auth_all_01">읽기</label>
                                                </div>
                                                <div className={style.chk_box}>
                                                    <input type="checkbox" id="auth_all_02" disabled={true} />
                                                    <label htmlFor="auth_all_02">쓰기</label>
                                                </div>
                                                <div className={style.chk_box}>
                                                    <input type="checkbox" id="auth_all_03" disabled={true} />
                                                    <label htmlFor="auth_all_03">삭제</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.box}>
                                        <span className={style.tit}>서버설정</span>

                                        <ul className={style.list}>
                                            <li className={style.item}>
                                                <div className={style.tit}>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_01_chk" checked={true} />
                                                        <label htmlFor="auth_01_chk">기본설정</label>
                                                    </div>
                                                </div>
                                                <div className={style.chk_wrap}>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_01_01" />
                                                        <label htmlFor="auth_01_01">읽기</label>
                                                    </div>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_01_02" />
                                                        <label htmlFor="auth_01_02">쓰기</label>
                                                    </div>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_01_03" />
                                                        <label htmlFor="auth_01_03">삭제</label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={style.item}>
                                                <div className={style.tit}>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_02_chk" />
                                                        <label htmlFor="auth_02_chk">멤버목록</label>
                                                    </div>
                                                </div>
                                                <div className={style.chk_wrap}>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_02_01" disabled={true} />
                                                        <label htmlFor="auth_02_01">읽기</label>
                                                    </div>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_02_02" disabled={true} />
                                                        <label htmlFor="auth_02_02">쓰기</label>
                                                    </div>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_02_03" disabled={true} />
                                                        <label htmlFor="auth_02_03">삭제</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={style.box}>
                                        <span className={style.tit}>서버설정</span>

                                        <ul className={style.list}>
                                            <li className={style.item}>
                                                <div className={style.tit}>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_01_chk" checked={true} />
                                                        <label htmlFor="auth_01_chk">기본설정</label>
                                                    </div>
                                                </div>
                                                <div className={style.chk_wrap}>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_01_01" />
                                                        <label htmlFor="auth_01_01">읽기</label>
                                                    </div>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_01_02" />
                                                        <label htmlFor="auth_01_02">쓰기</label>
                                                    </div>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_01_03" />
                                                        <label htmlFor="auth_01_03">삭제</label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={style.item}>
                                                <div className={style.tit}>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_02_chk" />
                                                        <label htmlFor="auth_02_chk">멤버목록</label>
                                                    </div>
                                                </div>
                                                <div className={style.chk_wrap}>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_02_01" disabled={true} />
                                                        <label htmlFor="auth_02_01">읽기</label>
                                                    </div>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_02_02" disabled={true} />
                                                        <label htmlFor="auth_02_02">쓰기</label>
                                                    </div>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id="auth_02_03" disabled={true} />
                                                        <label htmlFor="auth_02_03">삭제</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={style.btn_wrap}>
                                    <button type="button" className={[style.btn, style.btn_primary].join(' ')}>확인</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(StaffManage);
