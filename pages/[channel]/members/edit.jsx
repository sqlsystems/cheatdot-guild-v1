import React, { memo, useState, useRef } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { updateMyInfo } from 'redux/lib/guild';
import useClickOutside from 'hooks/useClickOutside';

import EditComponent from 'components/desktop/guild/members/Edit';

const Edit = () => {
    const dispatch = useDispatch();

    const guildName = useSelector(state => state.guild.res_data.guild_info.name);
    const member = useSelector(state => state.guild.res_data.member);

    const btnRef = useRef();

    const [isProfile, setIsProfile] = useState(false);

    useClickOutside(btnRef, isProfile, () => setIsProfile(false));

    const title = `${guildName} - 내정보`;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <EditComponent
                ref={btnRef}
                member={member}
                isProfile={isProfile}
                setIsProfile={setIsProfile}
                updateMyInfo={e => dispatch(updateMyInfo(e))}
            />
        </>
    );
}

export default memo(Edit);
