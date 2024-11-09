import React, { memo } from 'react';

const LoopSelect = ({ count, name, index_start_from_one, onChange, defaultValue }) => {
    return (
        <select onChange={onChange} value={defaultValue}>
            {[...Array(count)].map((_, index) => {
                const display_value = name ? name : index_start_from_one ? index + 1 : index;
                return <option key={index} value={display_value}>{display_value}</option>;
            })}
        </select>
    );
}

export default memo(LoopSelect);
