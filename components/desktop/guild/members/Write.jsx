import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import style from 'css/desktop.module.css';

const NoResult = dynamic(() => import('components/public/NoResult'));
const BoardIcon = dynamic(() => import('components/public/Board/BoardIcon'));
const Paging = dynamic(() => import('components/public/Paging'));

const Write = (props) => {
    return (
        <div className={style.layout_box} style={{marginTop:'20px'}}>
            <div className={style.table}>
                <table>
                    <caption className={style.sound_only}>게시글 리스트</caption>
                    <colgroup>
                        {/*<col width={50} />*/}
                        <col width={100}/>
                        <col/>
                        <col/>
                        <col/>
                    </colgroup>
                    <thead>
                    <tr>
                        {/*<th>*/}
                        {/*    <div className={style.chk_box}>*/}
                        {/*        <input type="checkbox" id="chk_01" />*/}
                        {/*        <label htmlFor="chk_01" />*/}
                        {/*    </div>*/}
                        {/*</th>*/}
                        <th>분류</th>
                        <th>제목</th>
                        <th width={60}>작성일</th>
                        <th width={100}>조회</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.list.length > 0 ? props.list.map(c => {
                        return (
                            <tr key={`${c.bo_table}-${c.wr_id}`}>
                                {/*<td>*/}
                                {/*    <div className={style.chk_box}>*/}
                                {/*        <input type="checkbox" id="chk_01" />*/}
                                {/*        <label htmlFor="chk_01" />*/}
                                {/*    </div>*/}
                                {/*</td>*/}
                                <td>
                                    <span>{c.bo_subject}</span>
                                </td>
                                <td className={style.left}>
                                    <div className={style.title}>
                                        <Link href={`/${c.gr_id}/${c.bo_table}/${c.wr_parent}`}
                                              dangerouslySetInnerHTML={{__html: c.wr_subject}}/>

                                        {!c.wr_is_comment &&
                                            <>
                                                <BoardIcon
                                                    isNew={c.is_new}
                                                    isPhoto={c.is_photo}
                                                    // isFile={c.file.count}
                                                    className={style.icon}
                                                />

                                                {c.wr_comment > 0 && <span className={style.comment_count}>+{c.wr_comment}</span>}
                                            </>
                                        }
                                    </div>
                                </td>
                                <td>{c.datetime2}</td>
                                <td>{c.wr_hit}</td>
                            </tr>
                        );
                    })
                        :
                        <tr>
                            <td colSpan={5}>
                                <NoResult title="작성한 게시글이 없습니다."/>
                            </td>
                        </tr>
                    }
                    </tbody>
                </table>

                {props.total_count > 20 &&
                    <Paging
                        page={board.query.page}
                        totalCount={props.total_count}
                        rows={20}
                        writePages={10}
                        url={board.query.asPath}
                    />
                }
            </div>
        </div>
    );
}

export default memo(Write);
