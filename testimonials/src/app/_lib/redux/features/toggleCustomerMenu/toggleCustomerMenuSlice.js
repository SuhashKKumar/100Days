import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    value: false,
};

export const toggleCustomerMenu = createSlice({
    name: "toggleCustomerMenu",
    initialState,
    reducers: {
        dropdownToggler: (state) => {
            state.value = !state.value;
        },
    },
});

export const { dropdownToggler } = toggleCustomerMenu.actions;
export default toggleCustomerMenu.reducer;
