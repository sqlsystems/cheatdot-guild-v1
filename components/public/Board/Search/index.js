import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Search = ({ boardUrl, style }) => {
    const router = useRouter();

    const [boardField, setBoardField] = useState({
        sfl: boardUrl.sfl ? boardUrl.sfl : 'wr_subject',
        stx: boardUrl.stx,
        ...boardUrl
    });

    return (
        <div className={style.search_wrap}>
            <div className={style.select_box}>
                <select value={boardField.sfl} onChange={e => setBoardField({...boardField, sfl: e.target.value})}>
                    <option value="wr_subject">제목</option>
                    <option value="wr_content">내용</option>
                    <option value="wr_subject||wr_content">제목+내용</option>
                    <option value="mb_id,1">회원아이디</option>
                    <option value="mb_id,0">회원아이디(코)</option>
                    <option value="wr_name,1">글쓴이</option>
                    <option value="wr_name,0">글쓴이(코)</option>
                </select>
            </div>

            <div className={style.search_box}>
                <input
                    type="text"
                    value={boardField.stx}
                    onChange={e => setBoardField({...boardField, stx: e.target.value})}
                    placeholder="검색어를 입력해주세요."
                    maxLength={20}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            return router.push(`${boardUrl.middlePath}/${boardUrl.bo_table}?sop=and&sfl=${boardField.sfl}&stx=${boardField.stx}`);
                        }
                    }}
                />
                <button type="button" onClick={() => router.push(`${boardUrl.middlePath}/${boardUrl.bo_table}?sop=and&sfl=${boardField.sfl}&stx=${boardField.stx}`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.002" height="15.984" viewBox="0 0 16.002 15.984">
                        <g id="search-svgrepo-com_1_" data-name="search-svgrepo-com (1)" transform="translate(0.002 -0.066)">
                            <path id="패스_2" data-name="패스 2" d="M6.553,13.166a6.526,6.526,0,0,0,3.637-1.107l3.764,3.769a.783.783,0,0,0,1.092,0l.732-.733a.785.785,0,0,0,0-1.093L12,10.247a6.55,6.55,0,1,0-5.448,2.919Zm0-10.545A3.986,3.986,0,1,1,2.57,6.608,3.986,3.986,0,0,1,6.553,2.621Z" fill="#a6a8ad"/>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Search;
