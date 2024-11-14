import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const UserProfileLayer = dynamic(() => import('components/public/UserProfileLayer'), { ssr: false });

const UserLayerController = () => {
    const userLayer = useSelector(state => state.global.user_layer);
    const isAdmin = useSelector(state => state.member.info.is_admin);

    return (
        <>
            {userLayer.ref && <UserProfileLayer userLayer={userLayer} isAdmin={isAdmin} />}
        </>
    );
}

export default React.memo(UserLayerController);
