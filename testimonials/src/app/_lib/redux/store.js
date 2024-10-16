import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import themeReducer from "./features/theme/themeSlice";
import toggleMenuReducer from "./features/toggleMenu/toggleMenuSlice";
import textCardLikesReducer from "./features/textCardLikes/textCardLikesSlice";
export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            theme: themeReducer,
            toggleMenu: toggleMenuReducer,
            likesCount: textCardLikesReducer,
        },
    });
};
