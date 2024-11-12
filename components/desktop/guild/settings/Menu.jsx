import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import menus from 'dist/guild_admin_menus.json';
import style from 'css/desktop.module.css';

const Menu = ({ menuType, setMenuType }) => {
    const attendWaitingCount = useSelector(state => state.guild.res_data.guild_info.attend_waiting_count);

    return (
        <div className={style.menu_wrap}>
            <div className={[style.inner, style.scroll_custom].join(' ')}>
                {menus.auth_menu.map(menu => {
                    return (
                        <div key={menu.name}>
                            <span className={style.tit}>{menu.name}</span>
                            <ul>
                                {menu.submenu.map(submenu => {
                                    return (
                                        <li key={submenu.code}>
                                            <button type="button" className={menuType === submenu.code ? style.on : null} onClick={() => setMenuType(submenu.code)}>{submenu.name}</button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
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
