import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CalendarMonth from '@guild/components/CalendarMonth';

import ConfigTitle from '@guild/components/ConfigTitle';

const Sales = () => {
    const channel = useSelector(state => state.guild.res_data.guild_info.channel);
    const channelId = useSelector(state => state.guild.channel_setting_data.id);

    const [date, setDate] = useState(new Date());
    const [data, setData] = useState([]);

    useEffect(() => {
        const data = async() => {
            const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

            const res = await axios.post('/v4/guild/channel_setting/store/api.php', {
                cmd: 'get_sales_data',
                data: {
                    channel: channel,
                    channel_id: channelId,
                    params: {
                        date: formattedDate
                    }
                }
            });

            setData(res.data.message.result);
        }

        data();
    }, [date]);

    const handlePrevMonth = () => {
        setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    }

    const handleNextMonth = () => {
        setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    }

    return (
        <>
            <ConfigTitle title="매출 관리" />

            <CalendarMonth
                date={date}
                data={data}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
            />
        </>
    );
}

export default memo(Sales);
