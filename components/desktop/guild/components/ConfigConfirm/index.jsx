import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import style from 'css/desktop.module.css';

import Loading from 'components/public/Loading';

const ConfigConfirm = ({ original, virtual, resetData, onClick }) => {
    const isLoading = useSelector(state => state.guild.is_setting_confirm);

    return (
        <>
            {original !== virtual &&
                <div className={style.save_alert}>
                    <p>조심하세요! 저장하지 않은 변경사항이 있어요!</p>
                    <div className={style.btn_wrap}>
                        <button type="button" className={style.btn} onClick={() => resetData()}>재설정</button>
                        <button type="button" className={[style.btn, style.btn_green].join(' ')} onClick={onClick} disabled={isLoading}>
                            {isLoading ?
                                <Loading color="#ffffff" size={20} />
                                :
                                '변경사항 저장'
                            }
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default memo(ConfigConfirm);
