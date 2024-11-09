import React, { useState, memo } from 'react';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { writeUpdate } from '@redux/lib/guild/board';
import style from 'css/desktop.module.css';

const CKEditor = dynamic(() => import('plugin/editor/CKEditor'), { ssr: false });

const Write = () => {
    const dispatch = useDispatch();
    const queryString = useSelector(state => state.guild_query_string);
    const isAdmin = useSelector(state => state.guild.res_data.flags.is_admin);

    const [wr, setWr] = useState({
        w: queryString.w,
        wr_id: queryString.wr_id,
        wr_subject: '',
        wr_content: '',
        bf_file_del0: 0,
        bf_file_del1: 0,
        notice: ''
    });
    const [files, setFiles] = useState({
        bf_file_0: '',
        bf_file_1: ''
    });

    const handleWrChange = (e) => {
        setWr((prevState) => {
            return {
                ...prevState,
                ...e
            }
        });
    }

    return (
        <div className={style.board_write}>
            <div className={[style.layout_box, style.title].join(' ')}>
                {isAdmin &&
                    <div className={style.chk_box}>
                        <input type="checkbox" id="notice" onChange={e => handleWrChange({ notice: e.target.checked })} checked={wr.notice} />
                        <label htmlFor="notice">공지</label>
                    </div>
                }

                <input type="text" value={wr.wr_subject} onChange={e => handleWrChange({ wr_subject: e.target.value })} placeholder="제목을 입력하세요" />

                <button type="button" className={[style.btn, style.btn_primary].join(' ')} onClick={() => dispatch(writeUpdate(wr))}>{wr.w ? '수정' : '작성'}</button>
            </div>

            <CKEditor
                name="description"
                onChange={data => handleWrChange({ wr_content: data })}
                value={wr.wr_content}
                placeholder="게시글 작성시 반드시 게시물규제정책을 확인해주시기 바랍니다."
            />

            <div className={[style.layout_box, style.file_area].join(' ')}>
                {[...Array(2)].map((c, index) => {
                    return (
                        <div key={index}>
                            <div className={style.file_input}>
                                <input type="file" name="bf_file[]" id={`file_0${index}`} onChange={e => setFiles({...files, [`bf_file_${index}`]: e.target.files[0].name})} />
                                {files[`bf_file_${index}`] ?
                                    (
                                        <>
                                            <span className={style.file_name}>{files[`bf_file_${index}`]}</span>
                                            <button type="button" className={style.btn_delete} onClick={() => {
                                                setFiles({...files, [`bf_file_${index}`]: ''});
                                                document.getElementById(`file_0${index}`).value = '';
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 7.002 7.002">
                                                    <path id="x" d="M4.646,4.646a.5.5,0,0,1,.708,0L8,7.293l2.646-2.647a.5.5,0,0,1,.708.708L8.707,8l2.647,2.646a.5.5,0,0,1-.708.708L8,8.707,5.354,11.354a.5.5,0,1,1-.708-.708L7.293,8,4.646,5.354a.5.5,0,0,1,0-.708Z" transform="translate(-4.499 -4.499)" fill="#a6a8ad"/>
                                                </svg>
                                            </button>
                                        </>
                                    )
                                    :
                                    <label htmlFor={`file_0${index}`}>파일첨부</label>
                                }
                                {wr.w === 'u' && props.write.message.result.w.files[index]['file'] &&
                                    <div className={style.chk_box}>
                                        <input type="checkbox" id={`bf_file_del${index}`} checked={wr[`bf_file_del${index}`]} onChange={e => handleWrChange({ [`bf_file_del${index}`]: e.target.checked })} />
                                        <label htmlFor={`bf_file_del${index}`}>{`${props.write.message.result.w.files[index].source}(${props.write.message.result.w.files[index].size}) 파일 삭제`}</label>
                                    </div>
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(Write);
