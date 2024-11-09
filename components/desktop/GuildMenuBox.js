import GuildSettingMenu from '@desktop/GuildSettingMenu';
import GuildMenuList from '@desktop/GuildMenuList';
import style from '@styles/desktop.module.css';

export default function GuildMenuBox() {
    return (
        <div className={[style.left_menu, style.layout_box].join(' ')}>
            <GuildSettingMenu />

            <GuildMenuList />
        </div>
    );
}
