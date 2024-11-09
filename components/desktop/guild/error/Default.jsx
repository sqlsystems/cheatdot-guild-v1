import React from 'react';
import { useSelector } from 'react-redux';
import style from 'css/desktop.module.css';

const Default = () => {
    const error = useSelector(state => state.guild.res_data.error);

    return (
        <div className={style.layout_box}>
            <h2>{error.msg}</h2>
        </div>
    );
}

export default Default;
