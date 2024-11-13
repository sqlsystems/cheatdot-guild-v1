import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert, updateObject } from '@redux/modules/alert';
import Loading from '../Loading';
import style from 'css/common.module.css';

const Alert = () => {
    const dispatch = useDispatch();
    const alertData = useSelector(state => state.alert);

    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const detectKeyPress = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };
        document.addEventListener('keydown', detectKeyPress);
        return () => document.removeEventListener('keydown', detectKeyPress);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            dispatch(closeAlert());
            setIsClosing(false);
        }, 300);
    };

    const onConfirm = async () => {
        try {
            await dispatch(updateObject({ loading: true }));
            const result = await alertData.onConfirm();
            if (result === true) {
                if (alertData.onConfirmEnd) {
                    alertData.onConfirmEnd();
                } else {
                    dispatch(updateObject({ loading: false }));
                    handleClose();
                }
            }
        } catch (error) {
            console.error('Error in onConfirm:', error);
            dispatch(updateObject({ loading: false }));
        }
    };

    const backgroundClass = isClosing ? style.fadeOut : style.fadeIn;
    const alertWindowClass = isClosing ? style.scaleOut : style.scaleIn;

    return (
        alertData.title && alertData.content && (
            <div className={style.alert}>
                <div className={`${style.background} ${backgroundClass}`} />
                <div className={style.wrapper}>
                    <div className={`${style.cont} ${alertWindowClass}`} style={{ width: 440 }}>
                        <h2>{alertData.title}</h2>
                        <div className={style.body} dangerouslySetInnerHTML={{ __html: alertData.content.replaceAll('\n', '<br />') }} />
                        <div className={style.bottom}>
                            {alertData.type === 'alert' ? (
                                <button type="button" className={[style.btn, style.btn_primary].join(' ')} onClick={handleClose}>확인</button>
                            ) : (
                                <button type="button" onClick={handleClose}>취소</button>
                            )}
                            {alertData.type === 'confirm' && (
                                <button
                                    type="button"
                                    className={[style.btn, style.btn_primary].join(' ')}
                                    onClick={onConfirm}
                                    disabled={alertData.loading}
                                >
                                    {alertData.loading ? <Loading color="#ffffff" size={20} /> : alertData.confirmText}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default memo(Alert);
