"use client";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../_lib/hooks/ReduxHooks";
import { menuToggler } from "../_lib/redux/features/toggleMenu/toggleMenuSlice";
import ThemeWrapper from "./ThemeWrapper";
import Logo from "./Logo";

const Navbar = () => {
    const toggleMenu = useAppSelector((state) => state.toggleMenu.value);
    const dispatch = useAppDispatch();
    const toggleMenuHandler = () => {
        dispatch(menuToggler());
    };
    return (
        <div className="nav-container lg:flex lg:items-center lg:justify-between md:max-w-3xl md:mx-auto py-5">
            <div className="nav-container flex justify-between items-center px-1 lg:px-0">
                <Link href="/">
                    <Logo />
                </Link>
                <button
                    className={`hamburgerMenu flex flex-col ${
                        toggleMenu ? "gap-0" : "gap-1"
                    } lg:hidden`}
                    onClick={toggleMenuHandler}
                >
                    <div
                        className={`w-6 h-0.5 bg-white rounded-full ${
                            toggleMenu ? "rotate-[50deg]" : "block"
                        }`}
                    ></div>
                    <div
                        className={`w-6 h-0.5 bg-white rounded-full ${
                            toggleMenu
                                ? "-rotate-[50deg] -translate-y-0.5"
                                : "block"
                        }`}
                    ></div>
                    <div
                        className={`w-6 h-0.5 bg-white rounded-full ${
                            toggleMenu ? "hidden" : "block"
                        }`}
                    ></div>
                </button>
            </div>
            <ul
                className={`"nav-links bg-black rounded-md p-4 ${
                    toggleMenu ? "flex flex-col gap-2" : "hidden"
                } lg:flex-row lg:bg-transparent lg:p-0"`}
            >
                <li className="nav-link">
                    <Link href="/customers">Customers</Link>
                </li>
                <li className="nav-link">
                    <Link href="/features">Features</Link>
                </li>
                <li className="nav-link">
                    <Link href="/integrations">Integrations</Link>
                </li>
                <li className="nav-link">
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li className="nav-link lg:hidden">
                    <Link href="/signin">Sign in</Link>
                </li>
                <ThemeWrapper />
            </ul>
            <div className="btn-container hidden lg:flex lg:gap-2">
                <ThemeWrapper />
                <button className="">
                    <Link href="/signin">Sign in</Link>
                </button>
                <button className="">
                    <Link href="/signup">Sign up</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
