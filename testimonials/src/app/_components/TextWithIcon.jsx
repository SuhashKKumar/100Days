import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TextWithIcon = ({icon, point, color, textStyle="", size=""}) => {
    return (
        <>
            <FontAwesomeIcon icon={icon} style={{ color, size }} />
            <p className={`text-sm text-gray-300 ${textStyle}`}>{point}</p>
        </>
    );
};

export default TextWithIcon;
