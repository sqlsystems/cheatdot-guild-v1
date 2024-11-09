import React from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

const WindowAlert = dynamic(() => import('./Alert'), { ssr: false });

const Alert = () => {
    const alertData = useSelector(state => state.alert);

    return (
        alertData.title && <WindowAlert />
    );
}

export default Alert;
