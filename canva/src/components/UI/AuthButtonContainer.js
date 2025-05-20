'use client';
import { useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import { setUserDetails } from "@/config/redux/slices/userDetails";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { auth } from "@/config/firebase/firebase";

const AuthButtonContainer = ({ extraStyles }) => {
    const dispatch = useAppDispatch();
    const userDetails = useAppSelector((state) => state.userDetails.value);
    console.log(auth,'auth')

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("userDetails"));
        if (user) {
            dispatch(setUserDetails(user));
        }
    }, [dispatch]);

    return (
        <>
            {userDetails?.id || userDetails?.uid ? (
                <SignOut extraStyles="w-full" />
            ) : (
                <div
                    className={`w-full md:inline-flex gap-3 items-center ${extraStyles}`}
                >
                    <SignIn extraStyles="w-full" type="secondary" />
                    <SignUp extraStyles="w-full" type="primary" />
                </div>
            )}
        </>
    );
};

export default AuthButtonContainer;
