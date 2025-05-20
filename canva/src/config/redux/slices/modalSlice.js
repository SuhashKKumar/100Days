import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    isOpen: false,
    modalType:null
};

export const modalSlice = createSlice({
    name: "modalSlice",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        openModal: (state,action) => {
            state.isOpen = true;
            state.modalType = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.modalType = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
