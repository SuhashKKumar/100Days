/* components/Modal.jsx */
import React, { useRef } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef();
    useOutsideClick(modalRef, onClose);
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 backdrop-opacity-50">
            <div
                className="bg-white p-8 rounded-lg max-w-[400px] shadow-xl"
                ref={modalRef}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
