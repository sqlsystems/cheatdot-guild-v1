import React from 'react';
import style from 'css/desktop.module.css';

import GuildSettingMenu from './GuildSettingMenu';
import GuildMenuList from './menu';

const GuildMenuBox = () => {
    return (
        <div className={[style.left_menu, style.layout_box].join(' ')}>
            <GuildSettingMenu />

            <GuildMenuList />
        </div>
    );
}

export default GuildMenuBox;
