"use client";

import { useAppContext } from "@/context/AppContext";
import { useEffect, useRef, useState } from "react";

export default function MusicToggle() {
    const { isMusicOpen, setIsMusicOpen } = useAppContext();

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = volume;
    }, [volume]);

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
        <div className="fixed right-4 top-4 z-[999] flex items-center gap-3">
            <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

            <div
                onClick={toggleMusic}
                className={`cursor-pointer flex h-9 w-9 items-center justify-center rounded-full bg-pink-500/20 text-[18px] text-pink-300 transition-all duration-300 ${isMusicOpen
                        ? "animate-pulse shadow-[0_0_20px_rgba(255,80,180,0.6)]"
                        : ""
                    }`}
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
                className="hidden h-[6px] w-[100px] cursor-pointer accent-pink-400 transition-all hover:accent-pink-300"
            />
        </div>
    );
}