"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { increment } from "@/redux/slices/counter";

export default function Home() {
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state) => state.counter.value);
    const counterHandler = () => {
        dispatch(increment());
    };
    return (
        <button onClick={counterHandler} className="bg-blue-500 font-serif">
            Increment - {counter}
        </button>
    );
}
