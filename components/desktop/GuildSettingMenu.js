import GuildMenu from '@desktop/GuildMenu';
import style from '@styles/desktop.module.css';

export default function GuildSettingMenu() {
    return (
        <div className={style.guild_name}>
            <GuildMenu />
        </div>
    );
}
