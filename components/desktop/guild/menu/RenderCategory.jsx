import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import style from 'css/desktop.module.css';

import MenuItem from './MenuItem';

const ChannelMenuItem = dynamic(() => import('./RenderSubMenuList'));

const RenderCategory = () => {
    const menus = useSelector(state => state.guild.res_data.menus);
    const isAdmin = useSelector(state => state.guild.res_data.member.is_admin);

    return (
        <div className={style.category_wrap}>
            <div>
                {Object.values(menus).map(c => {
                    if (c.category_id) {
                        return <MenuItem key={c.category_id} c={c} isAdmin={isAdmin} />;
                    } else {
                        return (
                            <ul key={c.id}>
                                <ChannelMenuItem s={c} isAdmin={isAdmin} />
                            </ul>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default memo(RenderCategory);
