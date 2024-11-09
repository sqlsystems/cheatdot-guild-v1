import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const StockListContext = createContext();

export const StockListProvider = ({ children }) => {
    const channel = useSelector(state => state.guild.res_data.guild_info.channel);
    const channelId = useSelector(state => state.guild.channel_setting_data.id);

    const [data, setData] = useState(null);
    const [newStock, setNewStock] = useState([]);
    const [params, setParams] = useState({
        product_idx: 0,
        status: -1
    });

    const changeParams = (e) => {
        setParams((prevState) => {
            return {
                ...prevState,
                ...e
            }
        });
    }

    useEffect(() => {
        const requestData = async () => {
            const res = await axios.post('/v4/guild/channel_setting/store/api.php', {
                cmd: 'get_product_stock_list',
                data: {
                    channel: channel,
                    channel_id: channelId,
                    params: params
                }
            });

            setData(res.data.message.result);
            setNewStock(res.data.message.result.list);
        };

        requestData();
    }, [params]);

    const addNewStock = (product_idx) => {
        const newStockItem = { idx: null, product_idx: product_idx ? product_idx : 0, content: '', status: 1 };
        setNewStock((prevStock) => [newStockItem, ...prevStock]);
    };

    const updateStock = (index, updatedFields) => {
        setNewStock((prevStock) =>
            prevStock.map((item, i) => (i === index ? { ...item, ...updatedFields } : item))
        );
    };

    const removeStock = (index) => {
        setNewStock((prevStock) => prevStock.filter((_, i) => i !== index));
    };

    const applyData = async () => {
        const res = await axios.post('/v4/guild/channel_setting/store/api.php', {
            cmd: 'set_product_stock',
            data: {
                channel: channel,
                channel_id: channelId,
                params: newStock
            }
        });
    };

    return (
        <StockListContext.Provider
            value={{
                data,
                newStock,
                addNewStock,
                updateStock,
                removeStock,
                applyData,
                params,
                changeParams,
            }}
        >
            {children}
        </StockListContext.Provider>
    );
};
