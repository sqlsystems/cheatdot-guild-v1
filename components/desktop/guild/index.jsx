import React, { memo } from 'react';
import style from 'css/desktop.module.css';

import GuildMenuBox from './GuildMenuBox';
import MainContent from './MainContent';
import Footer from './Footer';

const Guild = ({ children }) => {
    return (
        <>
            <div className={style.guild_container}>
                <div className={style.wrapper}>
                    <div className={style.guild_wrap}>
                        <GuildMenuBox />

                        <MainContent children={children} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default memo(Guild);
