import React from "react";

const Button = ({
    variant = "primary",
    outline = false,
    disabled = false,
    label,
    extraStyles,
    clickHandler,
}) => {
    const baseStyles = "py-3 px-4 text-sm font-semibold rounded-lg";

    const variants = {
        primary: "bg-purple-600 hover:bg-purple-700 text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 text-black",
        success: "bg-green-600 text-white hover:bg-green-700",
        warning: "bg-yellow-500 text-black hover:bg-yellow-600",
        disabled: "bg-gray-300 text-gray-600 cursor-not-allowed",
    };

    const outlineVariants = {
        primary: "border border-purple-600 text-purple-600 hover:bg-purple-50",
        secondary: "border border-gray-300 hover:bg-gray-50 text-black",
        success: "border border-green-600 text-green-600 hover:bg-green-50",
        warning: "border border-yellow-500 text-yellow-600 hover:bg-yellow-50",
    };
    return (
        <button
            onClick={clickHandler}
            className={`${baseStyles} ${
                !outline && !disabled ? variants[variant] : ""
            } ${outline && !disabled ? outlineVariants[variant] : ""} ${
                disabled ? variants.disabled : ""
            } ${extraStyles}`}
        >
            {label}
        </button>
    );
};

export default Button;
