import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import userDetailsReducer from "./slices/userDetails";
import modalSliceReducer from "./slices/modalSlice";
import loginMethodReducer from "./slices/loginMethod";
import oldUserReducer from "./slices/oldUserSlice";
export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            userDetails: userDetailsReducer,
            toggleModal: modalSliceReducer,
            loginMethod: loginMethodReducer,
            toggleOldUser: oldUserReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });
};
