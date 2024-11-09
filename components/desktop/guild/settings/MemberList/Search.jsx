import React, { useState, memo } from 'react';
import style from 'css/desktop.module.css';

const Search = (props) => {
    const [params, setParams] = useState({
        sfl: 'mb_id',
        stx: ''
    });

    const changeParams = (e) => {
        setParams((prevState) => {
            return {
                ...prevState,
                ...e
            }
        });
    }

    const handleKeyUp = (e) => {
        if (e.code === 'Enter') {
            props.setParams(params);
        }
    }

    return (
        <div className={style.search_wrap}>
            <div className={style.select_box}>
                <select>
                    <option value="mb_id">아이디</option>
                    <option value="mb_nick">닉네임</option>
                </select>
            </div>

            <div className={style.search_box}>
                <input type="text" value={params.stx} onChange={e => changeParams({ stx: e.target.value })} onKeyUp={handleKeyUp} placeholder="검색어를 입력해주세요." />
                <button type="button" onClick={() => props.setParams(params)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.002" height="15.984"
                         viewBox="0 0 16.002 15.984">
                        <g id="search-svgrepo-com_1_" data-name="search-svgrepo-com (1)"
                           transform="translate(0.002 -0.066)">
                            <path id="패스_2" data-name="패스 2"
                                  d="M6.553,13.166a6.526,6.526,0,0,0,3.637-1.107l3.764,3.769a.783.783,0,0,0,1.092,0l.732-.733a.785.785,0,0,0,0-1.093L12,10.247a6.55,6.55,0,1,0-5.448,2.919Zm0-10.545A3.986,3.986,0,1,1,2.57,6.608,3.986,3.986,0,0,1,6.553,2.621Z"
                                  fill="#a6a8ad"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default memo(Search);
