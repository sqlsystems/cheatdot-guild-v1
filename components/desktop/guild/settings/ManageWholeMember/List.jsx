import React, { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { setParams } from '@redux/modules/guild/settings/manage_whole_member';
import style from 'css/desktop.module.css';

import ListTable from './ListTable';

const Paging = dynamic(() => import('components/public/DynamicPaging'), { ssr: false });
const ActivityStop = dynamic(() => import('./ActivityStop'), { ssr: false });
const ForceLeave = dynamic(() => import('./ForceLeave'), { ssr: false });

const List = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.settings.manage_whole_member);

    const [popupData, setPopupData] = useState({});

    return (
        <>
            <div className={style.table}>
                <ListTable setPopupData={setPopupData} />

                {state.total_count > 20 &&
                    <Paging
                        page={state.params.page}
                        totalCount={state.total_count}
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
