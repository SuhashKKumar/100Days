import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
    });
};
