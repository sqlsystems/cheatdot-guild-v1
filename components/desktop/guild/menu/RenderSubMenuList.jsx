import React, { memo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setChannelData, setChannelSettingData } from '@redux/modules/guild/guild';
import style from 'css/desktop.module.css';

import MenuIcon from './MenuIcon';

const RenderSubMenuList = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [menu, setMenu] = useState(null);

    const s = props.s;

    return (
        <li className={parseInt(router.query.channel_id) === s.id ? style.on : null} onMouseEnter={() => props.isAdmin && setMenu(s.id)} onMouseLeave={() => props.isAdmin && setMenu(null)}>
            <Link href={`/${router.query.channel}/${s.id}`} onClick={() => dispatch(setChannelData(s))}>
                <MenuIcon type={s.type}/>
                {s.name}
            </Link>

            {props.isAdmin && menu === s.id &&
                <button type="button" onClick={() => dispatch(setChannelSettingData(s))}>
                    <svg id="그룹_1055" data-name="그룹 1055" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                         viewBox="0 0 20 20">
                        <rect id="사각형_8810" data-name="사각형 8810" width="20" height="20" rx="3" fill="rgba(68,68,68,0)"/>
                        <path id="gear-fill"
                              d="M9.4,1.05a1.465,1.465,0,0,0-2.81,0l-.1.34a1.464,1.464,0,0,1-2.105.872l-.31-.17A1.465,1.465,0,0,0,2.093,4.079l.169.311A1.464,1.464,0,0,1,1.39,6.495l-.34.1a1.465,1.465,0,0,0,0,2.81l.34.1a1.464,1.464,0,0,1,.872,2.1l-.17.31a1.465,1.465,0,0,0,1.987,1.987l.311-.169a1.464,1.464,0,0,1,2.1.872l.1.34a1.465,1.465,0,0,0,2.81,0l.1-.34a1.464,1.464,0,0,1,2.1-.872l.31.17a1.465,1.465,0,0,0,1.987-1.987l-.169-.311a1.464,1.464,0,0,1,.872-2.105l.34-.1a1.465,1.465,0,0,0,0-2.81l-.34-.1a1.464,1.464,0,0,1-.872-2.1l.17-.31a1.465,1.465,0,0,0-1.987-1.987l-.311.169A1.464,1.464,0,0,1,9.5,1.39l-.1-.34ZM8,10.93A2.93,2.93,0,1,1,10.929,8,2.93,2.93,0,0,1,8,10.93Z"
                              transform="translate(2.06 2)" fill="#000"/>
                    </svg>
                </button>
            }
        </li>
    );
}

export default memo(RenderSubMenuList);
