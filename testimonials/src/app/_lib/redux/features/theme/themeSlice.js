    import { createSlice } from '@reduxjs/toolkit';

    // Define the initial state using that type
    const initialState = {
    value: true,
    }

    export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme:(state) => { state.value = state.value === true ? false : true}
    },
    })

    export const { toggleTheme } = themeSlice.actions
    export default themeSlice.reducer
