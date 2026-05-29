"use client";

import { useEffect, useState } from "react";
import { Heart, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MoThu() {
    const [open, setOpen] = useState(false);

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
    
    const handleOpen = () => {
        router.push("/aivuong");
    };

    return (
    <>

                {/* envelope */}
                <div
                    className={`
                        h-full
                        relative overflow-hidden rounded-3xl
                        bg-gradient-to-br from-pink-200 via-pink-300 to-fuchsia-300
                        shadow-[0_25px_80px_rgba(236,72,153,0.35)]
                        border border-white/40
                        transition-all duration-700
                        ${open ? "scale-105" : "scale-100"}
                    `}
                >
                    {/* envelope folds */}
                    <div className="absolute inset-0">
                        <div className="absolute left-0 top-0 h-full w-full bg-pink-200/50 [clip-path:polygon(0_0,50%_48%,100%_0)]" />
                        <div className="absolute bottom-0 left-0 h-full w-full bg-pink-400/25 [clip-path:polygon(0_100%,50%_48%,100%_100%)]" />
                        <div className="absolute left-0 top-0 h-full w-full bg-pink-300/30 [clip-path:polygon(0_0,50%_48%,0_100%)]" />
                        <div className="absolute right-0 top-0 h-full w-full bg-fuchsia-300/25 [clip-path:polygon(100%_0,50%_48%,100%_100%)]" />
                    </div>

                    {/* content */}
                    <div className="relative flex h-full flex-col items-center text-center">
                        {/* <p className="font-serif text-lg italic text-rose-900/70">
                            Một lá thư
                        </p> */}

                        <h1 className="pt-[5%] text-3xl tracking-wide text-rose-900 drop-shadow-sm md:text-4xl font-[cursive]">
                            có một lá thử ở đây
                        </h1>

                        <div
                            // onClick={() => setOpen(true)}
                            className="group mt-8 grid h-20 w-20 place-items-center rounded-full bg-white/25 backdrop-blur-md transition hover:scale-110"
                        >
                            <div className="grid h-16 w-16 place-items-center rounded-full border-4 border-black bg-gradient-to-br from-rose-300 to-pink-500 shadow-xl">
                                <Heart className="h-9 w-9 fill-red-500 text-red-500 transition group-hover:scale-110" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* buttons */}
                <div className="mt-[-28] flex justify-center gap-8">
                    <button
                        onClick={handleOpen}
                        className=" z-40 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-14 py-4 text-lg font-bold text-white shadow-[0_15px_35px_rgba(236,72,153,0.45)] transition hover:-translate-y-1 hover:scale-105"
                        style={{
                            cursor:
                                "url('https://cdn.cursors-4u.net/previews/sexy-pink-heart-25412ebd-32.webp') 32 32, auto",
                        }}
                    >
                        Mở thư ♥
                    </button>

                    <button
                        onMouseEnter={moveNoButton}
                        style={{
                            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                            cursor:
                                "url('https://cdn.cursors-4u.net/previews/sexy-pink-heart-unavailable-cfee306c-32.webp') 16 16, auto",
                        }}
                        className={`not-only-of-type:z-20 flex items-center gap-2 rounded-full bg-white/75 px-12 py-4 text-lg font-bold text-pink-500 shadow-lg backdrop-blur-md transition hover:bg-white hover:scale-105 ${isNoLocked ? "hidden" : ""}`}
                    >
                        Hủy <X className="h-5 w-5" />
                    </button>
                </div>
    </>
    );
}