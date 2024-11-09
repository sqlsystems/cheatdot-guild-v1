import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import style from 'css/desktop.module.css';

import Loading from 'components/public/Loading';

const ConfigTitle = ({ title, children, isConfirm, onClick, text }) => {
    const isLoading = useSelector(state => state.guild.is_setting_confirm);

    return (
        <div className={style.head_tit}>
            <div>
                <h2>{title}</h2>
                {children}
            </div>

            {isConfirm &&
                <div className={style.btn_wrap}>
                    <button type="button" className={[style.btn, style.btn_primary].join(' ')} onClick={onClick} disabled={isLoading}>
                        {isLoading ?
                            <Loading color="#ffffff" size={20} />
                            :
                            text
                        }
                    </button>
                </div>
            }
        </div>
    );
}

export default memo(ConfigTitle);
