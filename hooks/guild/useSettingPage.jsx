import { useEffect } from 'react';

const useSettingPage = (onClose) => {
    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose({});
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflowY = '';

            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
}

export default useSettingPage;
