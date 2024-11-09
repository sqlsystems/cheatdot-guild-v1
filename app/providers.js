'use client';

import { Provider } from 'react-redux';
import configureStore from '@redux/configureStore';

export function Providers({ children }) {
    const store = configureStore();
    return <Provider store={store}>{children}</Provider>;
}
