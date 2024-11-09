import React, { memo } from 'react';
import style from 'css/desktop.module.css';

import Logo from 'components/public/Layouts/Logo';
import GuildMenuBox from './GuildMenuBox';
import GuildInfo from '@guild/GuildInfo';

const Guild = ({ Component, pageProps }) => {
    return (
        <>
            <div className={style.guild_container}>
                <div className={style.wrapper}>
                    <div className={style.guild_wrap}>
                        <GuildMenuBox />

                        <div className={style.right_wrap}>
                            <GuildInfo />

                            <div>
                                <Component pageProps={pageProps} />
                            </div>
                        </div>
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
