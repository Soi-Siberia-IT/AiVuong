"use client";

import { useState, useEffect } from "react";

export default function TextNeon() {
    const fullText = "Có một điều muốn nói với chị... ♡";

    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        // đang gõ chữ
        if (currentIndex < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 100);
        }

        // gõ xong -> chờ 3s rồi reset
        else {
            timeout = setTimeout(() => {
                setDisplayedText("");
                setCurrentIndex(0);
            }, 3000);
        }

        return () => clearTimeout(timeout);
    }, [currentIndex]);

    return (
        // <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-20 w-full px-4">
            <h1
                className="text-3xl md:text-6xl font-[cursive] text-white text-center select-none"
                style={{
                    textShadow:
                        "0 0 5px #fff, 0 0 10px #f24b82, 0 0 20px #f24b82, 0 0 40px #f24b82",
                }}
            >
                {displayedText}

                {currentIndex < fullText.length && (
                    <span className="animate-pulse">|</span>
                )}
            </h1>
        // </div>
    );
}