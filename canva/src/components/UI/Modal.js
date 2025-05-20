import { useEffect, useRef } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { closeModal } from "@/config/redux/slices/modalSlice";
import { resetLoginMethod } from "@/config/redux/slices/loginMethod";

const Modal = ({ children }) => {
    const modalRef = useRef(null);
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.toggleModal.isOpen);

    const closeModalHandler = () => {
        dispatch(closeModal());
        dispatch(resetLoginMethod())
    };

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 backdrop-opacity-50 md:w-full">
            <div
                ref={modalRef}
                className="bg-white relative px-2 py-8 rounded-lg max-w-[400px] md:max-w-[700px] shadow-xl z-10"
            >
                <button
                    onClick={closeModalHandler}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-red-600"
                    aria-label="Close Modal"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
