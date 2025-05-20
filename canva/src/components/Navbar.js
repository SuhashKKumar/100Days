"use client";
import { useState, useRef } from "react";
import { navbarData } from "@/lib/navbarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import DesktopNavbar from "./DesktopNavbar";
import SignIn from "./UI/SignIn";
import AuthButtonContainer from "./UI/AuthButtonContainer";

export default function Navbar() {
    const navbarRef = useRef(null);
    const [currentNav, setCurrentNav] = useState("main");
    const [currentCategory, setCurrentCategory] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleCategoryClick = (categoryId) => {
        setCurrentNav(categoryId);
        setCurrentCategory(categoryId);
    };

    const handleBackClick = () => {
        setCurrentNav("main");
    };
    useOutsideClick(navbarRef, () => setIsOpen(false));

    return (
        <div>
            {/* Mobile Menu Button */}
            <div className="mr-2 p-4 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-2 lg:gap-4 ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex flex-col gap-1 items-center justify-center p-2 rounded-md text-gray-400 transition duration-150 ease-in-out md:hidden"
                    >
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="w-6 h-0.5 rounded bg-black"
                            ></div>
                        ))}
                    </button>
                    <h1 className=" tracking-tighter font-serif text-purple-600 text-3xl">Canva</h1>
                    <DesktopNavbar />
                </div>
                <div className="flex items-center justify-end gap-3 md:w-[28%] lg:w-[25%]">
                    <div className="relative group hidden md:block border-black rounded-full px-2 border-[1.5px]">
                        <FontAwesomeIcon
                            icon={faQuestion}
                            size="xs"
                            style={{ color: "#000000" }}
                        />
                        <div
                            className="absolute top-full left-1/2 transform
                       -translate-x-1/2 mt-3 w-max px-2 py-1
                       text-sm text-white bg-gray-700 rounded
                       shadow-lg opacity-0 group-hover:opacity-100"
                        >
                            Help Center
                        </div>
                    </div>
                    <AuthButtonContainer extraStyles="hidden md:inline-block" />
                    <div className="md:hidden" >
                    <SignIn className='md:hidden' type="primary" />
                    </div>
                </div>
            </div>
            <nav
                ref={navbarRef}
                className={`${
                    isOpen ? "block" : "hidden"
                } tracking-wide fixed inset-0 bg-white z-50 max-w-[375px] flex flex-col py-4 px-6 shadow-lg active:outline-transparent overflow-y-auto min-h-screen md:hidden`}
            >
                {/* Header with back button when in submenu */}
                {currentNav !== "main" && (
                    <div className="flex items-center my-1 justify-center">
                        <button
                            onClick={handleBackClick}
                            className="text-black mr-2 hover:bg-gray-100 rounded-full py-3 px-5 cursor-pointer"
                        >
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                size="sm"
                                style={{ color: "#000000" }}
                            />
                        </button>
                        <h2 className="text-md py-3 font-semibold ">
                            {
                                navbarData.main.find(
                                    (item) => item.id === currentCategory
                                )?.label
                            }
                        </h2>
                    </div>
                )}
                {/* Main navigation items */}
                <div className="flex-grow">
                    <h1 className="tracking-tighter font-serif my-3 ml-3 text-3xl text-purple-600">Canva</h1>
                    {(currentNav === "main"
                        ? navbarData.main
                        : navbarData[currentNav]
                    ).map((item) => (
                        <button
                            key={item.id}
                            onClick={() =>
                                currentNav === "main"
                                    ? handleCategoryClick(item.id)
                                    : null
                            }
                            className="w-full flex justify-between items-center text-left"
                        >
                            {item?.type === "headline" ? (
                                <div className="flex flex-col gap-1 py-3 w-full">
                                    <div className="border-t w-full border-gray-200"></div>
                                    <span className="font-semibold px-2 w-full">
                                        {item.label}
                                    </span>
                                    {item.navItems?.map(
                                        ({ id, label, link }) => {
                                            return (
                                                <a
                                                    href={link}
                                                    key={id}
                                                    className="font-light text-sm px-2 py-1 hover:bg-gray-100 w-full cursor-pointer"
                                                >
                                                    {label}
                                                </a>
                                            );
                                        }
                                    )}
                                </div>
                            ) : (
                                <span className="font-light text-sm p-2 my-1 hover:bg-gray-100 w-full cursor-pointer">
                                    {item.label}
                                </span>
                            )}
                            {currentNav === "main" && (
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    size="sm"
                                    style={{ color: "#000000" }}
                                />
                            )}
                        </button>
                    ))}
                </div>
                {/* Bottom buttons */}
                <AuthButtonContainer extraStyles="my-3 space-y-3" />
            </nav>
        </div>
    );
}
