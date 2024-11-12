import React, { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { alert } from '@redux/modules/alert';
import style from 'css/desktop.module.css';

const HashTag = ({ hashTag, setData }) => {
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const [tag, setTag] = useState(hashTag || []);

    useEffect(() => {
        setTag(hashTag || []);
    }, [hashTag]);

    useEffect(() => {
        if (tag.length > 0) {
            setData(tag);
        }
    }, [tag]);

    const addTag = () => {
        if (tag.length >= 10)
            return dispatch(alert({ content: '태그는 최대 10개만 등록하실 수 있습니다.' }));

        const sanitizedText = text.trim().replace(/[#,\s]/g, ''); // #, , 및 공백 제거

        if (sanitizedText && !tag.includes(sanitizedText)) {
            setTag([...tag, sanitizedText]);
        }

        setText('');
    }

    const removeTag = (removeTag) => {
        setTag(tag.filter(t => t !== removeTag));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTag();
        }
    };

    return (
        <div className={style.item}>
            <div className={style.tit_box}>
                <span className={style.tit}>해시 태그</span>
            </div>
            <div className={style.cont}>
                <div className={style.tag_wrap}>
                    <div className={style.input_box}>
                        <input
                            type="text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="태그를 입력하세요."
                        />
                    </div>

                    {tag && tag.length > 0 &&
                        <>
                            {tag.map(c => (
                                <div key={c} className={style.tag}>
                                    <span>{c}</span>
                                    <button
                                        type="button"
                                        className={style.btn_delete}
                                        onClick={() => removeTag(c)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                            <path id="패스_47993" data-name="패스 47993"
                                                  d="M43.9,106.88l-5.98-5.98-1.02,1.02,5.98,5.98-5.98,5.98,1.02,1.02,5.98-5.98,5.98,5.98,1.02-1.02-5.98-5.98,5.98-5.98-1.02-1.02Z"
                                                  transform="translate(-36.9 -100.9)" opacity="0.8"/>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default memo(HashTag);
