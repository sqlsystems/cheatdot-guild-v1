import React from 'react';
import Link from 'next/link';
import style from 'css/desktop.module.css';

import {useSelector} from "react-redux";

const ListItem = ({ data }) => {
    const queryString = useSelector(state => state.guild_query_string);

    return (
        <tr>
            <td>
                <span>{data.num}</span>
            </td>
            <td className={style.left}>
                <div className={style.title}>
                    <Link href={`/guild/${queryString.channel}/${queryString.channel_id}/${data.wr_id}`}>{data.subject}</Link>
                </div>
            </td>
            <td className={style.left}>
                {data.mb_nick}
            </td>
            <td>
                <span>{data.date}</span>
            </td>
            <td>
                <span>{data.hit}</span>
            </td>
        </tr>
    );
}

export default ListItem;
