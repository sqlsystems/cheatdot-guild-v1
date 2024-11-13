import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import CustomAlert from './Alert';

const Alert = () => {
    const alertData = useSelector(state => state.alert);

    return (
        alertData.title && <CustomAlert />
    );
}

export default memo(Alert);
