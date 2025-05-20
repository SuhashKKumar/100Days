import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    text: "Login or Sign up",
    description:
        "Use your email or another service to continue with Canva (it's free)!",
    method: "",
};

export const loginMethodSlice = createSlice({
    name: "loginMethod",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setLoginMethod: (state, action) => {
            const { payload } = action;
            state.text = payload.text;
            state.description = payload.description;
            state.method = payload.method;
            // state.value += 1;
        },
        resetLoginMethod: (state) => {
            state.text = initialState.text;
            state.description = initialState.description;
            state.method = initialState.method;
        },
    },
});

export const { setLoginMethod, resetLoginMethod } = loginMethodSlice.actions;
export default loginMethodSlice.reducer;
