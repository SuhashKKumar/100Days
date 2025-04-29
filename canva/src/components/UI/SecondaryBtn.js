import React from "react";

const SecondaryBtn = ({text, extraStyles=""}) => {
    return (
        <button className={`${extraStyles} text-sm font-semibold border py-3 px-4 rounded-lg border-gray-300 hover:bg-gray-50 text-black`}>
            {text}
        </button>
    );
};

export default SecondaryBtn;
