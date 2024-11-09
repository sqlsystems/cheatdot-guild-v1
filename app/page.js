import createAxiosInstance from '@utils/axios';
import ServerList from '@desktop/ServerList';
import ErrorPage from '@desktop/ErrorPage';

async function fetchServerList() {
    const axios = createAxiosInstance();

    const res = await axios.post('/v4/guild/utils/api.php', {
        cmd: 'get_guild_list'
    });

    return res.data;
}

export default async function HomePage() {
    const res = await fetchServerList();

    if (res.error.msg) {
        return <ErrorPage msg={res.error.msg} />;
    }

    return (
        <ServerList { ...res.message.result } />
    );
}
