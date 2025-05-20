import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { setUserDetails } from "@/config/redux/slices/userDetails";

export const useUserDetails = () => {
    const dispatch = useAppDispatch();
    const userDetails = useAppSelector((state) => state.userDetails.value);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("userDetails"));
        if (user) {
            dispatch(setUserDetails(user));
        }
    }, [dispatch]);

    return { userDetails };
};
