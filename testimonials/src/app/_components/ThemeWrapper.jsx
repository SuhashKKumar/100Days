"use client";
import { useAppDispatch, useAppSelector } from "../_lib/hooks/ReduxHooks";
import { toggleTheme } from "../_lib/redux/features/theme/themeSlice";

const ThemeWrapper = ({ children }) => {
    const theme = useAppSelector((state) => state.theme.value);
    const dispatch = useAppDispatch();
    const themeToggler = () => {
        dispatch(toggleTheme());
        console.log(theme, "theme");
    };
    return (
        <div>
            <button onClick={themeToggler}>Toggle Theme</button>
        </div>
    );
};

export default ThemeWrapper;
