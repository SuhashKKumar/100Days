import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    value: false,
};

export const toggleMenu = createSlice({
    name: "toggleMenu",
    initialState,
    reducers: {
        menuToggler: (state) => {
            state.value = !state.value ;
        },
    },
});

export const { menuToggler } = toggleMenu.actions;
export default toggleMenu.reducer;
