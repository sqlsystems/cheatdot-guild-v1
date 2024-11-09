import React, { memo } from 'react';
import style from 'css/desktop.module.css';

import ConfigTitle from '@guild/components/ConfigTitle';

const Default = () => {
    return (
        <>
            <ConfigTitle title="일반" />

            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.item}>
                    <div className={style.tit_box}>
                        <span className={style.tit}>채널명 변경</span>
                    </div>
                    <div className={style.cont}>
                        <div className={[style.input_box, style.have_count].join(' ')}>
                            <input type="text" placeholder="채널명"/>

                            <span className={style.count}>
                                <span>1</span>/15
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Default);
