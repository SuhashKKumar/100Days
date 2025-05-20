"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./config/redux/store";
import Navbar from "./components/Navbar";

export default function StoreProvider({ children }) {
    const storeRef = useRef(undefined);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }

    return (
        <Provider store={storeRef.current}>
            <Navbar />
            {children}
        </Provider>
    );
}
