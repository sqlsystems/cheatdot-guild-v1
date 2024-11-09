import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = ({ color, size }) => {
    return <ClipLoader color={color} size={size} />;
}

export default React.memo(Loading);
