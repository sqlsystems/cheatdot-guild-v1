import React from 'react';
import withReduxStore from '@redux/lib';
import { Provider } from 'react-redux';

import '@styles/reset.css';

const MyApp = ({ Component, pageProps, reduxStore }) => {
    return (
        <Provider store={reduxStore}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default withReduxStore(MyApp);
