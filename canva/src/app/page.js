"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { increment } from "@/config/redux/slices/counter";
import Button from "@/components/UI/Button";
import Modal from "@/components/UI/Modal";
import SignInForm from "@/components/UI/SignInForm";
import { openModal } from "@/config/redux/slices/modalSlice";
import Link from "next/link";

export default function Home() {
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state) => state.counter.value);
    const modalType = useAppSelector((state) => state.toggleModal.modalType);
    const counterHandler = () => {
        dispatch(increment());
    };
    const openModalHandler = () => {
        dispatch(openModal("signin"));
    };
    return (
        <div className="text-center py-16" >
            <Link className="text-white w-[95%] md:size-auto px-6 py-3 rounded-lg bg-purple-600" href='/canva' >Start Designing</Link>
            {/* <Button
                variant="primary"
                label="Start Designing"
                extraStyles=" w-[95%] md:size-auto md:px-6"
                clickHandler={openModalHandler}
            />
            {modalType === "signin" && (
                <Modal>
                    <SignInForm />
                </Modal>
            )} */}
        </div>
    );
}
