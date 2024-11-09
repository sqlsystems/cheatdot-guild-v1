import React, { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import style from 'css/desktop.module.css';

import GuildMenu from './GuildMenu';

const GuildSetting = dynamic(() => import('./settings'), { ssr: false });
const CreateCategory = dynamic(() => import('./CreateCategory'), { ssr: false });
const CreateChannel = dynamic(() => import('./CreateChannel'), { ssr: false });

const GuildSettingMenu = () => {
    const [isSetting, setSetting] = useState(false);
    const [isCreateCategory, setCreateCategory] = useState(false);

    return (
        <div className={style.guild_name}>
            <GuildMenu
                setSetting={setSetting}
                setCreateCategory={setCreateCategory}
            />

            {isSetting && <GuildSetting onClose={() => setSetting(false)}/>}
            {isCreateCategory && <CreateCategory onClose={() => setCreateCategory(false)}/>}
            <CreateChannel />
        </div>
    );
}

export default memo(GuildSettingMenu);
