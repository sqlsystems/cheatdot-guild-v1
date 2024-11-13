import { useState, useEffect } from 'react';

const useCheckboxList = (items, keyField = 'idx') => {
    const [selectAll, setSelectAll] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});

    const generateKey = (item) => {
        if (Array.isArray(keyField)) {
            return keyField.map(field => item[field]).join('-');
        }
        return item[keyField];
    };

    useEffect(() => {
        // selectAll 상태에 따라 checkedItems 초기화
        const newCheckedItems = selectAll
            ? items.reduce((acc, item) => ({ ...acc, [generateKey(item)]: true }), {})
            : {};

        setCheckedItems(newCheckedItems);
    }, [items, selectAll]); // selectAll을 의존성에 추가하여 상태 변화에 반응

    const handleSelectAllChange = () => {
        // selectAll을 반전하고 그에 따라 checkedItems 초기화
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems = newSelectAll
            ? items.reduce((acc, item) => ({ ...acc, [generateKey(item)]: true }), {})
            : {};

        setCheckedItems(newCheckedItems);
    };

    const handleItemChange = (key) => {
        setCheckedItems(prevState => {
            const newCheckedItems = { ...prevState };
            if (newCheckedItems[key]) {
                delete newCheckedItems[key];
            } else {
                newCheckedItems[key] = true;
            }

            setSelectAll(Object.keys(newCheckedItems).length === items.length && Object.values(newCheckedItems).every(Boolean));
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
