'use client';

import { useSelector } from 'react-redux';
import style from '@styles/desktop.module.css';

export default function RenderMenus() {
    // const menus = useSelector(state => state.guild.res_data.menus);
    // const isAdmin = useSelector(state => state.guild.res_data.flags.is_admin);

    const a = useSelector(state => state.guild);

    console.log(a);

    return (
        <div className={style.category_wrap}>
            <div>
                {/*{Object.values(menus).map(c => {*/}
                {/*    if (c.category_id) {*/}
                {/*        return <MenuItem key={c.category_id} c={c} isAdmin={isAdmin} />;*/}
                {/*    } else {*/}
                {/*        // return (*/}
                {/*        //     <ul key={c.id}>*/}
                {/*        //         <ChannelMenuItem s={c} isAdmin={isAdmin}/>*/}
                {/*        //     </ul>*/}
                {/*        // );*/}
                {/*    }*/}
                {/*})}*/}
            </div>
        </div>
    );
}
