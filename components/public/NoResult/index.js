import React from 'react';
import style from 'css/common.module.css';

const NoResult = ({ title, subTitle }) => {
    return (
        <div className={style.empty}>
            <span className={style.emoji}>🤔</span>
            <h3 dangerouslySetInnerHTML={{ __html: title.replaceAll('\\n', '<br />') }} />
            {subTitle && <p dangerouslySetInnerHTML={{ __html: subTitle }} />}
        </div>
    );
}

export default React.memo(NoResult);
