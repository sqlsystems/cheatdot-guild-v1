import React from 'react';
import Logo from 'components/public/Layouts/Logo';
import style from 'css/desktop.module.css';

const Footer = () => {
    return (
        <footer className={style.guild_footer}>
            <div className={style.wrapper}>
                <div className={style.info}>
                    <span className={style.tit}>길드명</span>
                    <span>https://djdjdjdj.dldld</span>
                </div>
                <div className={style.logo}>
                    <Logo />
                    길드
                </div>
            </div>
        </footer>
    );
}

export default Footer;
