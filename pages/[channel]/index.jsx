import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import DeskTopGuild from 'components/desktop/guild';
import Main from 'components/desktop/guild/Main';

const Channel = () => {
    const error = useSelector(state => state.guild.res_data.error);
    const title = useSelector(state => state.guild.res_data.guild_info.name);

    const renderContent = () => {
        if (error.msg)
            return <h1>{error.msg}</h1>;

        return (
            <DeskTopGuild>
                <Main />
            </DeskTopGuild>
        );
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            {renderContent()}
        </>
    );
}

export default Channel;
