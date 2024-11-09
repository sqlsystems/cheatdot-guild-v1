import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import style from 'css/desktop.module.css';

import DefaultPage from './Default';
const AuthPage = dynamic(() => import('./Auth'), { ssr: false });

const BoardChannelSetting = ({ onClose }) => {
    const [menuType, setMenuType] = useState(0);

    const renderSettingPage = () => {
        switch (menuType) {
            case 0:
                return <DefaultPage />;
            case 1:
                return <AuthPage />;
        }
    }

    return (
        <div className={style.setting_pop}>
            <div className={style.wrapper}>
                <div className={style.menu_wrap}>
                    <div className={[style.inner, style.scroll_custom].join(' ')}>
                        <div>
                            <span className={style.tit}>채널 설정</span>
                            <ul>
                                <li>
                                    <button type="button" className={menuType === 0 ? style.on : null} onClick={() => setMenuType(0)}>일반</button>
                                </li>
                                <li>
                                    <button type="button" className={menuType === 1 ? style.on : null} onClick={() => setMenuType(1)}>권한</button>
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

                <div className={style.content}>
                    {renderSettingPage()}

                    <button type="button" className={style.btn_close} onClick={() => onClose({})}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.121" height="12.121"
                             viewBox="0 0 12.121 12.121">
                            <g id="그룹_252" data-name="그룹 252" transform="translate(0.587 11.534) rotate(-90)"
                               opacity="0.5">
                                <line id="선_9" data-name="선 9" y1="10" x2="10" transform="translate(0.474 0.474)"
                                      fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1.5"/>
                                <line id="선_10" data-name="선 10" x1="10" y1="10" transform="translate(0.474 0.474)"
                                      fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1.5"/>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BoardChannelSetting;
