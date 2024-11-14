import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAdminPermissions } from '@redux/lib/guild/setting/manage_staff';
import menus from 'dist/guild_admin_menus.json';
import style from 'css/desktop.module.css';

import Popup from 'components/public/Popup';

const AddStaffPopup = (props) => {
    const dispatch = useDispatch();

    const [mbId, setMbId] = useState('');
    const [menuObject, setMenuObject] = useState({});

    const changeMenuObject = (isChecked, code) => {
        setMenuObject((prevState) => {
            const codeStr = String(code); // code를 문자열로 변환

            // 메뉴명 체크박스가 해제되면 하위 권한(보기, 쓰기, 삭제) 모두 해제
            if (!isChecked && !codeStr.includes('-')) {
                return {
                    ...prevState,
                    [codeStr]: false,
                    [`${codeStr}-r`]: false, // 보기 체크 해제
                    [`${codeStr}-w`]: false, // 쓰기 체크 해제
                    [`${codeStr}-d`]: false, // 삭제 체크 해제
                };
            }

            // 메뉴명 체크박스가 체크되면 상위만 활성화
            if (isChecked && !codeStr.includes('-')) {
                return {
                    ...prevState,
                    [codeStr]: true,
                };
            }

            // "보기" 체크박스가 해제되면 "쓰기"와 "삭제"도 함께 해제
            if (!isChecked && codeStr.endsWith('-r')) {
                return {
                    ...prevState,
                    [codeStr]: false,
                    [`${codeStr.slice(0, -2)}-w`]: false, // 쓰기 체크 해제
                    [`${codeStr.slice(0, -2)}-d`]: false, // 삭제 체크 해제
                };
            }

            // 일반적인 체크 상태 업데이트
            return {
                ...prevState,
                [codeStr]: isChecked,
            };
        });
    }

    return (
        <Popup className={style.guild_manager_add} onClose={props.onClose}>
            <div className={style.title}>
                <h3>관리 권한 추가</h3>
            </div>

            <div className={style.form}>
                <div className={style.item}>
                    <div className={style.tit}>
                        <span>회원아이디</span>
                    </div>
                    <div className={style.input_box}>
                        <input type="text" value={mbId} onChange={e => setMbId(e.target.value)} placeholder="아이디" />
                    </div>
                </div>

                <div className={[style.add_list, style.scroll_custom].join(' ')}>
                    <div className={style.box}>
                        <div className={[style.item, style.all].join(' ')}>
                            <div className={style.tit}>
                                <div className={style.chk_box}>
                                    <input type="checkbox" id="auth_all" /> <label htmlFor="auth_all">전체권한</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {menus.auth_menu.map(c => {
                        return (
                            <div key={c.name} className={style.box}>
                                <span className={style.tit}>{c.name}</span>

                                <ul className={style.list}>
                                    {c.submenu.map(_c => {
                                        return (
                                            <li key={_c.code} className={style.item}>
                                                <div className={style.tit}>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id={_c.code} checked={menuObject[_c.code] || false} onChange={e => changeMenuObject(e.target.checked, _c.code)} />
                                                        <label htmlFor={_c.code}>{_c.name}</label>
                                                    </div>
                                                </div>

                                                <div className={style.chk_wrap}>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id={`${_c.code}-r`} disabled={!menuObject[_c.code]} checked={menuObject[`${_c.code}-r`] || false} onChange={(e) => changeMenuObject(e.target.checked, `${_c.code}-r`)} />
                                                        <label htmlFor={`${_c.code}-r`}>보기</label>
                                                    </div>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id={`${_c.code}-w`} disabled={!menuObject[`${_c.code}-r`]} checked={menuObject[`${_c.code}-w`] || false} onChange={(e) => changeMenuObject(e.target.checked, `${_c.code}-w`)} />
                                                        <label htmlFor={`${_c.code}-w`}>쓰기</label>
                                                    </div>
                                                    <div className={style.chk_box}>
                                                        <input type="checkbox" id={`${_c.code}-d`} disabled={!menuObject[`${_c.code}-r`]} checked={menuObject[`${_c.code}-d`] || false} onChange={(e) => changeMenuObject(e.target.checked, `${_c.code}-d`)} />
                                                        <label htmlFor={`${_c.code}-d`}>삭제</label>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })} {menus.etc_auth_menu.map(c => {
                    return (
                        <div key={c.name} className={style.box}>
                            <span className={style.tit}>{c.name}</span>

                            <ul className={style.list}>
                                {c.submenu.map(_c => {
                                    return (
                                        <li key={_c.code} className={style.item}>
                                            <div className={style.tit}>
                                                <div className={style.chk_box}>
                                                    <input type="checkbox" id={_c.code} checked={menuObject[_c.code] || false} onChange={e => changeMenuObject(e.target.checked, _c.code)} />
                                                    <label htmlFor={_c.code}>{_c.name}</label>
                                                </div>
                                            </div>

                                            <div className={style.chk_wrap}>
                                                <div className={style.chk_box}>
                                                    <input type="checkbox" id={`${_c.code}-r`} disabled={!menuObject[_c.code]} checked={menuObject[`${_c.code}-r`] || false} onChange={(e) => changeMenuObject(e.target.checked, `${_c.code}-r`)} />
                                                    <label htmlFor={`${_c.code}-r`}>보기</label>
                                                </div>
                                                <div className={style.chk_box}>
                                                    <input type="checkbox" id={`${_c.code}-w`} disabled={!menuObject[`${_c.code}-r`]} checked={menuObject[`${_c.code}-w`] || false} onChange={(e) => changeMenuObject(e.target.checked, `${_c.code}-w`)} />
                                                    <label htmlFor={`${_c.code}-w`}>쓰기</label>
                                                </div>
                                                <div className={style.chk_box}>
                                                    <input type="checkbox" id={`${_c.code}-d`} disabled={!menuObject[`${_c.code}-r`]} checked={menuObject[`${_c.code}-d`] || false} onChange={(e) => changeMenuObject(e.target.checked, `${_c.code}-d`)} />
                                                    <label htmlFor={`${_c.code}-d`}>삭제</label>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
                </div>

                <div className={style.btn_wrap}>
                    <button type="button" className={[style.btn, style.btn_primary].join(' ')} onClick={() => dispatch(updateAdminPermissions({
                        mb_id: mbId,
                        permissions: menuObject
                    }))}>확인
                    </button>
                </div>
            </div>
        </Popup>
    );
}

export default memo(AddStaffPopup);
