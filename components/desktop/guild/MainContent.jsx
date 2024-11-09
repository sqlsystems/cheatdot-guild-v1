import React from 'react';
import style from 'css/desktop.module.css';

import GuildInfo from './GuildInfo';

const MainContent = ({ children }) => {
    return (
        <>
            <div className={style.right_wrap}>
                <GuildInfo />

                <div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainContent;
