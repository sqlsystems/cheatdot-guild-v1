import { useEffect } from 'react';

const useClickOutside = (ref, isVisible, callback, event='click') => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isVisible && ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener(event, handleClickOutside);

        return () => {
            document.removeEventListener(event, handleClickOutside);
        };
    }, [ref, isVisible, callback]);
}

export default useClickOutside;
