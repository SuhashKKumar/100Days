import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import themeReducer from'./features/theme/themeSlice';
import toggleMenuReducer from'./features/toggleMenu/toggleMenuSlice';
export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterReducer,
        theme:themeReducer,
        toggleMenu:toggleMenuReducer
    },
  })
}
