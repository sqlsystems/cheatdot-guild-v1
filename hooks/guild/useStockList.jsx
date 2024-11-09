import { useContext } from 'react';
import { StockListContext } from 'context/StockListContext';

export const useStockList = () => {
    return useContext(StockListContext);
};
