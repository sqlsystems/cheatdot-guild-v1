import React, { memo } from 'react';
import style from 'css/desktop.module.css';

import Logo from 'components/public/Layouts/Logo';
import GuildMenuBox from './GuildMenuBox';
import MainContent from './MainContent';

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

            <footer className={style.guild_footer}>
                <div className={style.wrapper}>
                    <div className={style.info}>
                        <span className={style.tit}>길드명</span>
                        <span>https://djdjdjdj.dldld</span>
                    </div>
                    <div className={style.logo}>
                        <Logo/>
                        길드
                    </div>
                </div>
            </footer>
        </>
    );
}

export default memo(Guild);
