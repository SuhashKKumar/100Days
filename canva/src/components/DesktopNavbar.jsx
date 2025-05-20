"use client";
import React, { useRef, useState } from "react";
import { navbarData } from "@/lib/navbarData";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const DesignSpotlightNav = () => {
    const navItemRef = useRef(null);
    const [navItem, setNavItem] = useState("");
    const [showNavItems, setShowNavItems] = useState(false);
    const desktopNavItemsHandler = (id) => {
        setShowNavItems(true);
        setNavItem(id);
    };
    useOutsideClick(navItemRef, () => setShowNavItems(false));
    const navItemClickHandler = () => {
        setShowNavItems(false)
    };
    return (
        <div className="hidden md:inline-block ">
            <div className="flex relative items-center justify-between lg:gap-5">
                {navbarData.main.map(({ id, label }) => {
                    return (
                        <div
                            onMouseEnter={() => desktopNavItemsHandler(id)}
                            key={id}
                            className="flex items-center justify-center gap-2 hover:bg-gray-200 p-2 rounded"
                        >
                            <p className="text-sm" >{label}</p>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    );
                })}
            </div>
            <div
                ref={navItemRef}
                className={`${
                    showNavItems
                        ? " absolute bg-white shadow-xl px-10 py-8 rounded-xl flex items-start justify-between gap-10"
                        : "hidden"
                }`}
            >
                {navbarData[navItem]?.map(({ id, type, label, navItems }) => {
                    return (
                        <div className="flex flex-col" key={id}>
                            {type === "headline" && (
                                <>
                                    <p className="font-semibold px-2">
                                        {label}
                                    </p>
                                    <div className="flex flex-col gap-1">
                                        {navItems?.map(
                                            ({ id, label, link }) => {
                                                return (
                                                    <a
                                                        href={link}
                                                        key={id}
                                                        onClick={
                                                            navItemClickHandler
                                                        }
                                                        className="font-light text-sm px-2 py-1 rounded hover:bg-gray-100"
                                                    >
                                                        {label}
                                                    </a>
                                                );
                                            }
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DesignSpotlightNav;
