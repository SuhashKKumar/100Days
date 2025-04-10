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
            state.value = !state.value;
        },
        menuClose: (state) => {
            state.value = false;
        },
    },
});

export const { menuToggler, menuClose } = toggleMenu.actions;
export default toggleMenu.reducer;
