import React, { useEffect, useState } from 'react';
import style from 'css/common.module.css';

const Popup = (props) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = '';
        }
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => props.onClose(), 300);
    }

    const backgroundClass = isClosing ? style.fadeOut : style.fadeIn;
    const alertWindowClass = isClosing ? style.scaleOut : style.scaleIn;

    return (
        <div className={style.popup_wrap}>
            <div className={[style.popup_background, backgroundClass].join(' ')} onClick={handleClose} />

            <div className={style.popup}>
                <div className={[style.inner, alertWindowClass].join(' ')}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default React.memo(Popup);
