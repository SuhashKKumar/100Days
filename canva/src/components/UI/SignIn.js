import React, { useEffect } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { closeModal, openModal } from "@/config/redux/slices/modalSlice";
import SignInForm from "./SignInForm";
import { useGoogleHandler } from "@/hooks/useGoogleHandler";

const SignIn = () => {
    const dispatch = useAppDispatch();
    const modalType = useAppSelector((state) => state.toggleModal.modalType);

    const openModalHandler = () => {
        dispatch(openModal("signin"));
    };
    const closeModalHandler = () => {
        dispatch(closeModal());
    };
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModalHandler();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <>
            <Button
                variant="secondary"
                label="Log in"
                outline={true}
                extraStyles="w-full"
                clickHandler={openModalHandler}
            />
            {modalType === "signin" && (
                <Modal>
                    <SignInForm/>
                </Modal>
            )}
        </>
    );
};

export default SignIn;
