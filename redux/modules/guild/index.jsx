import guild from './guild';
import GuildSettings from './settings';
import board_list from './board';
import query_string from './query_string';
import store from './store';

export default {
    ...GuildSettings,
    guild,
    guild_board_list: board_list,
    guild_query_string: query_string,
    guild_store: store
};
