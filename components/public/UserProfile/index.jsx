import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUserLayer } from '@redux/modules/global';
import style from 'css/desktop.module.css';

const UserProfile = (props) => {
    const dispatch = useDispatch();
    const btnRef = useRef();

    return (
        <button
            className={style.profile_box}
            onClick={() => {
                dispatch(setUserLayer({}));
                setTimeout(() => {
                    dispatch(setUserLayer({
                        ref: btnRef,
                        rect: btnRef.current.getBoundingClientRect(),
                        mb: {
                            mb_id: props.mb_id,
                            mb_nick: props.mb_nick,
                            mb_level: props.mb_level
                        }
                    }));
                }, 1);
            }}
            ref={btnRef}
        >
            {props.children ?
                props.children
                :
                <>
                    <div className={style.lv_icon}>
                        <img src={`/img/level/v1/${props.mb_level}.svg`} width={18} height={18} alt="회원계급"/>
                    </div>
                    <span className={style.nick}>{props.mb_nick}</span>
                </>
            }
        </button>
    );
}

export default React.memo(UserProfile);
