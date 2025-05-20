import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    value: true,
};

export const toggleOldUser = createSlice({
    name: "toggleOldUser",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setOldUser: (state, action) => {
            const { payload } = action;
            state.value = payload;
        },
    },
});

export const { setOldUser } = toggleOldUser.actions;
export default toggleOldUser.reducer;
