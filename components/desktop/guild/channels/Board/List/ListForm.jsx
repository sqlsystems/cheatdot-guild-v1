import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import style from 'css/desktop.module.css';

const NoResult = dynamic(() => import('components/public/NoResult'));
const ListItem = dynamic(() => import('./ListItem'));

const ListForm = () => {
    const data = useSelector(state => state.guild_board_list.message.result);

    return (
        <div className={style.table}>
                <table>
                    <caption className={style.sound_only}>게시글 리스트</caption>
                    <colgroup>
                        <col width={100}/>
                        <col/>
                        <col width={175}/>
                        <col width={68}/>
                        <col width={100}/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th></th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.list?.length > 0 ? data.list.map(c => {
                        return <ListItem key={c.num} data={c} />;
                    })
                        :
                        <tr>
                            <td colSpan={6}>
                                <NoResult title="아직 글이 없어요." subTitle="글쓰기 버튼을 눌러서 처음 글을 작성해보세요."/>
                            </td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>
    );
}

export default ListForm;
