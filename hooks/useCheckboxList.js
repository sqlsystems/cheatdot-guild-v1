import { useState, useEffect } from 'react';

const useCheckboxList = (items, keyField = 'idx') => {
    const [selectAll, setSelectAll] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});

    useEffect(() => {
        const newCheckedItems = selectAll
            ? items.reduce((acc, item) => ({ ...acc, [item[keyField]]: true }), {})
            : {};

        setCheckedItems(newCheckedItems);
    }, [items, selectAll]); // selectAll을 의존성 배열에 추가

    const handleSelectAllChange = () => {
        setSelectAll(prev => !prev); // 이전 상태 반전
    };

    const handleItemChange = (key) => {
        setCheckedItems(prevState => {
            const newCheckedItems = { ...prevState };

            if (newCheckedItems[key]) {
                // 체크 해제 시 해당 키를 삭제
                delete newCheckedItems[key];
            } else {
                // 체크 시 해당 키를 true로 설정
                newCheckedItems[key] = true;
            }

            return newCheckedItems;
        });
    };

    const resetCheckedItems = () => {
        setCheckedItems({});
        setSelectAll(false);
    };

    return {
        selectAll,
        checkedItems,
        handleSelectAllChange,
        handleItemChange,
        resetCheckedItems,
    };
};

export default useCheckboxList;
