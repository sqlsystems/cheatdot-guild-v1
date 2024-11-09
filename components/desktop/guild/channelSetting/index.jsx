import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { setChannelSettingData } from '@redux/modules/guild/guild';
import useSettingPage from 'hooks/guild/useSettingPage';

const BoardChannelSetting = dynamic(() => import('./Board'), { ssr: false });
const StoreChannelSetting = dynamic(() => import('./Store'), { ssr: false });

const ChannelSetting = () => {
    const dispatch = useDispatch();
    const channelSettingData = useSelector(state => state.guild.channel_setting_data);

    useSettingPage(e => dispatch(setChannelSettingData(e)));

    const renderSettingPage = () => {
        switch (channelSettingData.type) {
            case 0:
                return <BoardChannelSetting onClose={e => dispatch(setChannelSettingData(e))} />;
            case 4:
                return <StoreChannelSetting onClose={e => dispatch(setChannelSettingData(e))} />;
        }
    }

    return (
        <>
            {renderSettingPage()}
        </>
    );
}

export default ChannelSetting;
