"use client";
import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { openModal } from "@/config/redux/slices/modalSlice";
import SignInForm from "./SignInForm";

const SignUp = ({ extraStyles, type }) => {
    const dispatch = useAppDispatch();
    const modalType = useAppSelector((state) => state.toggleModal.modalType);

    const signUpHandler = () => {};
    const openModalHandler = () => {
        dispatch(openModal("signup"));
    };
    return (
        <>
            <button
                className={`py-3 px-4 text-sm font-semibold bg-purple-600 border border-purple-600 rounded-lg text-white ${extraStyles}`}
                onClick={openModalHandler}
            >
                Sign Up
            </button>
            {modalType === "signup" && (
                <Modal>
                    <SignInForm />
                </Modal>
            )}
        </>
    );
};

export default SignUp;
