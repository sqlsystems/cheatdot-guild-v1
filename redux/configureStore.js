import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import penderMiddleware from 'redux-pender';
import modules from './modules';

const middleware = [thunk, penderMiddleware()];

const configureStore = (initialState={}) => {
    return createStore(
        modules,
        initialState,
        applyMiddleware(...middleware)
    );
};

export default configureStore;
