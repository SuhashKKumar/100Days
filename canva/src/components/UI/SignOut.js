import React from "react";
import Button from "./Button";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase/firebase";
import { clearUserDetails } from "@/config/redux/slices/userDetails";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { closeModal } from "@/config/redux/slices/modalSlice";

const SignOut = ({ extraStyles = "", type = "primary" }) => {
    const dispatch = useAppDispatch();
    const signOutHandler = async () => {
        try {
            await signOut(auth);
            sessionStorage.removeItem("userDetails");
            dispatch(clearUserDetails());
            dispatch(closeModal());
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Button
            label="Sign Out"
            extraStyles={extraStyles}
            type={type}
            clickHandler={signOutHandler}
        />
    );
};

export default SignOut;
