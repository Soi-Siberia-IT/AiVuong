"use client"

import { Sliders } from "lucide-react";
import { useState } from "react";
import RomanticSlider from "../slide";

export default function ViewPhotoButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="
                relative
                flex items-center gap-3
                px-8 py-3
                rounded-full
                bg-gradient-to-b
                from-pink-400
                via-pink-500
                to-pink-600
                border-2 border-pink-300
                shadow-[0_0_20px_rgba(255,20,147,0.8)]
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                overflow-hidden
            "
            >
                {/* ánh sáng phía trên */}
                <div
                    className="
                    absolute
                    top-1 left-4 right-4
                    h-2
                    rounded-full
                    bg-white/50
                    blur-sm
                "
                />

                {/* sparkle */}
                <span className="absolute left-6 top-2 text-white text-xs">✦</span>
                <span className="absolute right-8 bottom-2 text-pink-100 text-xs">
                    ✦
                </span>

                <span className="relative z-10 text-2xl">📷</span>

                <span
                    className="
                    relative z-10
                    text-white
                    font-bold
                    italic
                    text-3xl
                    drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
                "
                    style={{
                        fontFamily: "'Pacifico', cursive",
                    }}
                >
                    Xem ảnh
                </span>
            </button>

            {/* Popup mobile */}
                {open && (
                    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="relative w-full max-w-[420px] h-[90vh] rounded-3xl bg-white/95 p-4 shadow-2xl">
                        <button
                        onClick={() => setOpen(false)}
                        className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-pink-500 text-white font-bold shadow-lg"
                        >
                        ✕
                        </button>
                        <RomanticSlider />

                    </div>
                    
                    </div>
                )}
        </>

    );
}