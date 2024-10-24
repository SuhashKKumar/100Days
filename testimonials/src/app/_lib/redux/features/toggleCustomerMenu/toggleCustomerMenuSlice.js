import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    value: false,
};

export const toggleCustomerMenu = createSlice({
    name: "toggleCustomerMenu",
    initialState,
    reducers: {
        toggleDropdown: (state) => {
            state.value = !state.value;
        },
        closeDropdown: (state) => {
            state.value = false;
        },
    },
});

export const { toggleDropdown, closeDropdown } = toggleCustomerMenu.actions;
export default toggleCustomerMenu.reducer;
