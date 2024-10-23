import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    value: true,
};

export const themeSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value ;
        },
    },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
