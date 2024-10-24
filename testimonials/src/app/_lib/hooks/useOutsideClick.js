// hooks/useClickOutside.js
import { useEffect } from "react";

const useClickOutside = (ref, handler) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, handler]);
};

export default useClickOutside;
