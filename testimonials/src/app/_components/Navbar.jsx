"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useRef } from "react";
import ToggleTheme from "./ToggleTheme";
import CustomersDropdown from "./CustomersDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import useOutsideClick from "../_lib/hooks/useOutsideClick";
import { useAppDispatch, useAppSelector } from "../_lib/hooks/ReduxHooks";
import {
    toggleDropdown,
    closeDropdown,
} from "../_lib/redux/features/toggleCustomerMenu/toggleCustomerMenuSlice";
import { menuToggler, menuClose } from "../_lib/redux/features/toggleMenu/toggleMenuSlice";

const Navbar = () => {
    const dispatch = useAppDispatch();
    const customerMenuRef = useRef(null);
    const navbarRef = useRef(null);
    const toggleMenu = useAppSelector((state) => state.toggleMenu.value);

    const toggleCustomerMenu = useAppSelector(
        (state) => state.customerMenuToggler.value
    );
    const handleCustomerToggle = () => {
        dispatch(toggleDropdown());
    };
    const handleCustomerClose = () => {
        dispatch(closeDropdown());
    };
    const handleMenuToggle = () => {
        dispatch(menuToggler());
    };
    const handleMenuClose = () => {
        dispatch(menuClose());
    };
    useOutsideClick(customerMenuRef, handleCustomerClose);
    useOutsideClick(navbarRef, handleMenuClose);
    return (
        <div className="nav-container lg:flex lg:items-center lg:justify-between md:max-w-3xl md:mx-auto lg:max-w-4xl py-5 relative">
            <div className="nav-container flex justify-between items-center px-1 lg:px-0">
                <Link href="/">
                    <Logo />
                </Link>
                <button
                    className={`hamburgerMenu flex flex-col ${
                        toggleMenu ? "gap-0" : "gap-1"
                    } lg:hidden`}
                    onClick={handleMenuToggle}
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
                ref={navbarRef}
                className={`nav-links bg-black rounded-md p-4 ${
                    toggleMenu ? "flex flex-col gap-2" : "hidden"
                } lg:flex lg:flex-row lg:justify-between lg:bg-transparent lg:p-0 lg:w-[45%]`}
            >
                <li className="nav-link lg:hidden">
                    <Link href="/customers">Customers</Link>
                </li>
                <li
                    onClick={handleCustomerToggle}
                    className="nav-link hidden lg:inline-flex items-center gap-1 cursor-pointer"
                >
                    <p>Customers</p>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        style={{ color: "#ffffff" }}
                    />
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
                <li className="nav-link lg:hidden">
                    <ToggleTheme />
                </li>
            </ul>
            <div className="hidden lg:flex items-center lg:gap-1">
                <ToggleTheme />
                <button className="py-2 px-4">
                    <Link href="/signin">Sign in</Link>
                </button>
                <button className="py-2 px-4 bg-primary-300 hover:bg-primary-400">
                    <Link href="/signup">Sign up</Link>
                </button>
            </div>
            <div
                ref={customerMenuRef}
                className="absolute top-[5rem] left-[7rem] hidden lg:block"
            >
                {toggleCustomerMenu && <CustomersDropdown />}
            </div>
        </div>
    );
};

export default Navbar;
