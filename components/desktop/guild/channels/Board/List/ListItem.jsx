import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import style from 'css/desktop.module.css';

import UserProfile from 'components/public/UserProfile';

const ListItem = ({ data }) => {
    const queryString = useSelector(state => state.query_string);

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
                <UserProfile mb_nick={data.mb_nick} mb_level={1} />
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
