import React, { memo } from 'react';
import style from 'css/desktop.module.css';

const Menu = ({ menuType, setMenuType }) => {
    return (
        <div className={style.menu_wrap}>
            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div>
                    <span className={style.tit}>채널 설정</span>
                    <ul>
                        <li>
                            <button type="button" className={menuType === 0 ? style.on : null} onClick={() => setMenuType(0)}>일반</button>
                        </li>
                        <li>
                            <button type="button" className={(menuType === 1 || menuType === 10) ? style.on : null} onClick={() => setMenuType(1)}>상품 관리</button>
                        </li>
                        <li>
                            <button type="button" className={menuType === 2 ? style.on : null} onClick={() => setMenuType(2)}>재고 관리</button>
                        </li>
                        <li>
                            <button type="button" className={menuType === 3 ? style.on : null} onClick={() => setMenuType(3)}>매출 관리</button>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>
                            <button type="button">채널삭제</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default memo(Menu);
