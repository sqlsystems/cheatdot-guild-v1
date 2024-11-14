import React, { useEffect, useState } from 'react';
import style from 'css/common.module.css';

const Popup = (props) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        document.body.classList.add('popup');
        document.body.style.overflowY = 'hidden';

        const detectKeyPress = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        }

        document.addEventListener('keydown', detectKeyPress);

        return () => {
            document.body.classList.remove('popup');

            if (!document.body.classList.contains('setting')) {
                document.body.style.overflowY = '';
            }

            document.removeEventListener('keydown', detectKeyPress);
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
                <div className={[style.inner, alertWindowClass, props.className].join(' ')}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default React.memo(Popup);
