"use client";
import React, { useState } from "react";
import {faCopy} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CodeSnippet = ({ code, language }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };
    const demoHandler=()=> alert('Incomplete functionality')

    return (
        <div className="max-w-3xl bg-code mx-auto p-6 rounded-lg shadow-md flex flex-col gap-4">
<div className='flex flex-col gap-1' >

            <p className="text-xl">Try our sample embed code</p>
            <p className="text-sm">
                Embed the wall of love to your website in 1 minute
            </p>
</div>
            <pre
                className={`language-${language} bg-black overflow-x-scroll ps-4 text-sm rounded-md`}
                data-language={language}
            >
                <code>{code}</code>
            </pre>
<div className='btn-container flex gap-2' >
            <div
                className="bg-blue-200 text-blue-600 py-1.5 px-4 rounded flex items-center gap-1"
                onClick={handleCopy}
                >
                    <FontAwesomeIcon icon={faCopy} />
                <button>{isCopied ? "Copied!" : "Copy The Code"}</button>
            </div>
            <button className="bg-yellow-200 text-yellow-600 py-2 px-4 rounded" onClick={demoHandler}>Live demo</button>
                </div>
        </div>
    );
};

export default CodeSnippet;
