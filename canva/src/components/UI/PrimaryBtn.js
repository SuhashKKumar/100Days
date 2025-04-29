import React from "react";

const PrimaryBtn = ({ text, extraStyles = "" }) => {
    return (
        <button
            className={`${extraStyles} py-3 px-4 text-sm font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 text-white`}
        >
            {text}
        </button>
    );
};

export default PrimaryBtn;
