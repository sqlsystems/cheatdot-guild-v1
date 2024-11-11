import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Input = ({ type, id, onChange, object, disabled, placeholder, onKeyUp, maxLength }) => {
    const dispatch = useDispatch();

    const selectNestedState = (state, path) => path.split('.').reduce((acc, part) => acc[part], state);
    const value = useSelector(state => selectNestedState(state, object));

    const getLastPartOfPath = (path) => {
        const parts = path.split('.');
        return parts[parts.length - 1];
    };

    const handleChange = (e) => {
        const key = getLastPartOfPath(object);
        dispatch(onChange({ [key]: e.target.value }));
    };

    return <input
        type={type}
        id={id}
        value={value || ''}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
        maxLength={maxLength}
    />;
}

export default React.memo(Input);
