import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAuth } from '@redux/lib/guild/setting/staff_manage';
import menus from 'dist/guild_admin_menus.json';
import style from 'css/desktop.module.css';

const AddAuth = () => {
    const dispatch = useDispatch();

    const [params, setParams] = useState({
        mb_id: '',
        au_menu: 0,
        r: '',
        w: '',
        d: '',
    });

    const handleChange = (e) => {
        setParams((prevState) => {
            return {
                ...prevState,
                ...e
            }
        });
    }

    return (
        <div className={style.admin_add}>
            <div className={style.head}>
                <h3>관리권한 추가</h3>
                <div className={style.btn_wrap}>
                    <button type="button" className={[style.btn, style.btn_primary].join(' ')} onClick={() => dispatch(updateAuth(params))}>권한 추가</button>
                </div>
            </div>

            <div className={style.col3}>
                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>회원 아이디</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.input_box}>
                            <input type="text" value={params.mb_id} onChange={e => handleChange({ mb_id: e.target.value })} />
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>접근 가능 메뉴</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.select_box}>
                            <select onChange={e => handleChange({ au_menu: e.target.value })}>
                                {menus.map(menu => {
                                    return (
                                        <optgroup key={menu.name} label={menu.name}>
                                            {menu.submenu.map(submenu => {
                                                return <option key={submenu.code} value={submenu.code}>{submenu.name}</option>;
                                            })}
                                        </optgroup>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>권한 지정</span>
                    </div>

                    <div className={style.cont}>
                        <div className={style.chk_wrap}>
                            <div className={style.chk_box}>
                                <input type="checkbox" id="admin_auth_01" onChange={e => handleChange({ r: e.target.checked ? 'r' : '' })} />
                                <label htmlFor="admin_auth_01">읽기</label>
                            </div>

                            <div className={style.chk_box}>
                                <input type="checkbox" id="admin_auth_02" onChange={e => handleChange({ w: e.target.checked ? 'w' : '' })} />
                                <label htmlFor="admin_auth_02">쓰기</label>
                            </div>

                            <div className={style.chk_box}>
                                <input type="checkbox" id="admin_auth_03" onChange={e => handleChange({ d: e.target.checked ? 'd' : '' })} />
                                <label htmlFor="admin_auth_03">삭제</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(AddAuth);
