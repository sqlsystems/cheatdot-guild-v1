import React, { memo } from 'react';
import { StockListProvider } from 'context/StockListContext';
import Main from './Main';

const Index = () => {
    return (
        <StockListProvider>
            <Main />
        </StockListProvider>
    );
}

export default memo(Index);
