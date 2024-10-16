import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    value: 6,
};

export const textCardLikesSlice = createSlice({
    name: "textCardLikes",
    initialState,
    reducers: {
        likeComment: (state) => {
            state.value = state.value + 1;
        },
        unlikeComment: (state) => {
            state.value = state.value - 1;
        },
    },
});

export const { likeComment, unlikeComment } = textCardLikesSlice.actions;
export default textCardLikesSlice.reducer;
