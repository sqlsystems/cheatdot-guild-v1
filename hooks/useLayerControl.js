import { useEffect } from 'react';

const useLayerControl = (ref, outsideClickCallback, resizeCallback, dependencies) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            outsideClickCallback();
        }
    }

    const handleResize = () => {
        if (ref && ref.current) {
            resizeCallback(ref.current.getBoundingClientRect());
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            document.removeEventListener('click', handleClick);
            window.removeEventListener("resize", handleResize);
        }
    }, dependencies);
}

export default useLayerControl;
