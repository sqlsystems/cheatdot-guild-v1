import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

import RenderCategory from './RenderCategory';

const ChannelSetting = dynamic(() => import('../channelSetting'), { ssr: false });

const GuildMenuList = () => {
    const channelSettingData = useSelector(state => state.guild.channel_setting_data);

    return (
        <>
            <RenderCategory />

            {channelSettingData.type >= 0 &&
                <ChannelSetting />
            }
        </>
    );
}

export default memo(GuildMenuList);
