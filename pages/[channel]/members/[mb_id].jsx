import React, { useCallback } from 'react';
import { createAxiosInstance } from 'utils/axios';
import DeskTopGuild from 'components/desktop/guild';
import DeskTopUserHome from 'components/desktop/guild/members';

const UserHome = ({ pageProps }) => {
    const renderContent = useCallback(() => {
        if (pageProps.error.msg)
            return <h1>{pageProps.error.msg}</h1>;

        return <DeskTopUserHome
            { ...pageProps.message.result }
        />;
    }, [pageProps]);

    return (
        <>
            <DeskTopGuild>
                {renderContent()}
            </DeskTopGuild>
        </>
    );
}

UserHome.getInitialProps = async(ctx) => {
    const axios = createAxiosInstance(ctx.req);

    const res = await axios.post('/v4/guild/api.php', {
        cmd: 'get_user_data',
        data: {
            channel: ctx.query.channel,
            params: {
                type: ctx.query.type || 'write',
                mb_id: ctx.query.mb_id,
                page: Number(ctx.query.page) || 1
            }
        }
    });

    return {
        ...res.data
    };
}

export default UserHome;
