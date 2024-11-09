import createAxiosInstance from '@utils/axios';
import GuildMenuBox from '@desktop/GuildMenuBox';
import style from '@styles/desktop.module.css';

async function fetchGuildData(channel) {
    const axios = createAxiosInstance();
    const res = await axios.post('/v4/guild/api.php', {
        cmd: 'get_init_data',
        data: { channel: channel, channel_id: '' }
    });
    return res.data;
}

export default async function GuildCommonLayout({ children, params }) {
    const { channel } = await params;
    const data = await fetchGuildData(channel);

    return (
        <div className={style.guild_container}>
            <div className={style.wrapper}>
                <div className={style.guild_wrap}>
                    <GuildMenuBox />

                    {children}
                </div>
            </div>
        </div>
    );
}
