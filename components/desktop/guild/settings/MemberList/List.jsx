import React, { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { setParams } from '@redux/modules/guild/settings/member';
import style from 'css/desktop.module.css';

import ListTable from './ListTable';

const Paging = dynamic(() => import('components/public/DynamicPaging'), { ssr: false });
const ActivityStop = dynamic(() => import('./ActivityStop'), { ssr: false });
const ForceLeave = dynamic(() => import('./ForceLeave'), { ssr: false });

const List = () => {
    const dispatch = useDispatch();

    const totalCount = useSelector(state => state.guild_setting_member.total_count);
    const params = useSelector(state => state.guild_setting_member.params);

    const [popupData, setPopupData] = useState({});

    return (
        <>
            <div className={style.table}>
                <ListTable setPopupData={setPopupData} />

                {totalCount > 20 &&
                    <Paging
                        page={params.page}
                        totalCount={totalCount}
                        rows={20}
                        writePages={10}
                        onClick={e => dispatch(setParams({ page: e }))}
                    />
                }
            </div>

            {popupData?.type === 'activity' && <ActivityStop mb={popupData.data} setPopupData={setPopupData} />}
            {popupData?.type === 'force' && <ForceLeave mb={popupData.data} setPopupData={setPopupData} />}
        </>
    );
}

export default memo(List);
