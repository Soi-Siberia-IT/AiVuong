"use client";

import { useAppContext } from "@/context/AppContext";
import { useEffect, useRef, useState } from "react";

export default function MusicToggle() {
    const { isMusicOpen, setIsMusicOpen } = useAppContext()
    console.log("isMusicOpen", isMusicOpen)
    const audioRef = useRef(null);
    // const [isMusicOpen, setIsMusicOpen] = useState(false);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isMusicOpen) {
            audio.play().catch(() => { });
        } else {
            audio.pause();
        }

        localStorage.setItem("music-on", String(isMusicOpen));
    }, [isMusicOpen]);

    const toggleMusic = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isMusicOpen) {
            audio.pause();
            setIsMusicOpen(false);
        } else {
            try {
                await audio.play();
                setIsMusicOpen(true);
            } catch (err) {
                console.log("Audio play bị chặn:", err);
            }
        }
    };

    return (
        <div className="fixed right-4 top-4 z-[999] flex items-center gap-3 ">
            <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

            <div 
                className={`cursor-pointer flex h-9 w-9 items-center justify-center rounded-full bg-pink-500/20 text-[18px] text-pink-300 transition-all duration-300 ${isMusicOpen ? "animate-pulse shadow-[0_0_20px_rgba(255,80,180,0.6)]" : ""}`}
                onClick={toggleMusic}
                >
                {volume <= 0 ? "🔇" : volume < 0.5 ? "🔉" : "🔊"}
            </div>

            <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="h-[6px] w-[100px] cursor-pointer accent-pink-400 transition-all hover:accent-pink-300 hidden"
            />

            {/* <button
                onClick={toggleMusic}
                className={`relative h-[26px] w-[46px] cursor-pointer rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${isMusicOpen ? "bg-pink-500" : "bg-white/25"}`}
            >
                <span className={`absolute top-1/2 h-[20px] w-[20px] -translate-y-1/2 rounded-full bg-white shadow-lg transition-all duration-300 ${isMusicOpen ? "left-[23px]" : "left-[3px]"}`} />
            </button> */}
        </div>
    );
}