import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    value: null,
};

export const userDetails = createSlice({
    name: "userDetails",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserDetails: (state,{payload}) => {
            state.value = payload;
        },
        clearUserDetails: (state) => {
            state.value = null;
        },

    },
});

export const { setUserDetails, clearUserDetails } = userDetails.actions;
export default userDetails.reducer;
