"use client"

import { useState } from "react";
import { RxCheck, RxCopy } from "react-icons/rx";
import { highlight } from "sugar-high";

interface CodeProps {
    children: string;
}

export function Code({ children }: CodeProps) {
    const highlightedCode = highlight(children);
    const [isCopied, setIsCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(children);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
    };
    
    return (
        <div className="relative">
            {!isCopied ? (
                <button
                    onClick={copyCode}
                    className="absolute -top-4 -right-1 text-lg opacity-50 text-[#808080]
                               hover:text-neutral-200 transition-colors duration-200 cursor-pointer"
                >
                    <RxCopy />
                </button>
            ) : (
                <div className="absolute -top-4 -right-1 text-lg opacity-50 text-green-500">
                    <RxCheck />
                </div>
            )}
            <pre>
                <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre>
        </div>
    );
}