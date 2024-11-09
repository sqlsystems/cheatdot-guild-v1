import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '@redux/lib/guild';
import style from 'css/desktop.module.css';

import Popup from 'components/public/Popup';

const CreateCategory = ({ onClose }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    return (
        <Popup onClose={onClose}>
            <div className={style.popup_wrap}>
                <div className={style.popup_background}/>
                <div className={style.popup}>
                    <div className={style.inner}>
                        <div className={style.title}>
                            <h3>카테고리 만들기</h3>
                        </div>

                        <div className={style.form}>
                            <div className={style.item}>
                                <div className={style.tit}>
                                    <span>카테고리명</span>
                                    <p>최대 10글자</p>
                                </div>

                                <div className={style.input_box}>
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} maxLength={10} />
                                </div>
                            </div>

                            <div className={style.btn_wrap}>
                                <button type="button" className={[style.btn, style.btn_primary].join(' ')} onClick={() => dispatch(createCategory(name))}>만들기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    );
}

export default memo(CreateCategory);
