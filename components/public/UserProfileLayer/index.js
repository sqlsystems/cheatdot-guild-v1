import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setUserLayer } from '@redux/modules/global';
import useLayerControl from 'hooks/useLayerControl';
import style from 'css/common.module.css';

const UserProfileLayer = ({ userLayer, isAdmin }) => {
    const dispatch = useDispatch();

    const [rect, setRect] = useState(userLayer.rect);

    useLayerControl(
        userLayer.ref,
        () => {
            dispatch(setUserLayer({}));
        },
        (rect) => {
            setRect(rect);
        },
        [userLayer]
    );

    return (
        <div className={style.pop_layer} style={{ left: (rect.left + window.pageXOffset), top: (rect.top + window.pageYOffset) + 30 }}>
            <ul>
                <li>
                    <Link href={`/user/${encodeURIComponent(userLayer.mb.mb_id)}/board/write`}>게시글보기</Link>
                </li>
            </ul>
        </div>
    );
}

export default React.memo(UserProfileLayer);
