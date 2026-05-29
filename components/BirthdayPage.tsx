"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MoThu from "./thungo/thungo";

export default function BirthdayPage() {
    const router = useRouter();

    const [noPos, setNoPos] = useState({ x: 0, y: 0 });
    const [noCount, setNoCount] = useState(0);
    const [isNoLocked, setIsNoLocked] = useState(false);

    const [hearts, setHearts] = useState<
        {
            left: number;
            top: number;
            size: number;
        }[]
    >([]);

    // create random hearts
    const createHearts = (count: number) => {
        return Array.from({ length: count }).map(() => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: 12 + Math.random() * 16,
        }));
    };

    useEffect(() => {
        setHearts(createHearts(200));

        const interval = setInterval(() => {
            setHearts(createHearts(100));
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const moveNoButton = () => {
        if (isNoLocked) return;

        setNoCount((prev) => prev + 1);

        if (noCount >= 5) {
            setIsNoLocked(true);
            return;
        }

        const MIN_DISTANCE = 120;

        let x = Math.floor(Math.random() * 220) - 110;
        let y = Math.floor(Math.random() * 120) - 60;

        while (
            Math.sqrt((x - noPos.x) ** 2 + (y - noPos.y) ** 2) < MIN_DISTANCE
        ) {
            x = Math.floor(Math.random() * 220) - 110;
            y = Math.floor(Math.random() * 120) - 60;
        }

        setNoPos({
            x,
            y,
        });
    };
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* main content */}
            <div className="absolute z-10 lg:left-[45%] lg:top-[21%] top-[62%] left-[6%]">
                <div className="lg:w-[550] lg:h-[315] h-[215]">
                    <MoThu />
                </div>
            </div>
        </div>
    );
}