"use client";
import Modal from "@/components/UI/Modal";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { increment } from "@/redux/slices/counter";
import { useState } from "react";

export default function Home() {
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state) => state.counter.value);
    const counterHandler = () => {
        dispatch(increment());
    };
    return (
        <div>
            <button
                onClick={counterHandler}
                className="bg--color-reddish font-serif"
                >
                Increment - {counter}
            </button>
                </div>
    );
}
