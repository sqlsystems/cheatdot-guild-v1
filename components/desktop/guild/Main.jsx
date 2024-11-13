import React, { memo } from 'react';
import style from 'css/desktop.module.css';

const Main = () => {
    return (
        <>
            <div className={style.profile_box}>
                <div className={style.num_lv}>
                    <img src="/img/level/type1/1.svg" alt="레벨 아이콘" />
                </div>
                <span className={style.nick}>회원닉네임</span>
            </div>
        </>
    );
}

export default memo(Main);
