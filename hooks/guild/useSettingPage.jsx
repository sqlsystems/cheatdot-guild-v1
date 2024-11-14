import { useEffect } from 'react';

const useSettingPage = (onClose) => {
    useEffect(() => {
        document.body.classList.add('setting');
        document.body.style.overflowY = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && !document.body.classList.contains('alert') && !document.body.classList.contains('popup')) {
                onClose({});
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.classList.remove('setting');
            document.body.style.overflowY = '';

            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
}

export default useSettingPage;
