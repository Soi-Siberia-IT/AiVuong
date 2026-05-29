"use client";

import { useAppContext } from "@/context/AppContext"
interface PopUpProps {
    onClose: () => void;
}
const PopUp = ({ onClose }: PopUpProps) => {
    const {
        isMusicOpen,
        setIsMusicOpen,
    } = useAppContext()

    const handlePlayMusic = () => {
        setIsMusicOpen(true)
        onClose()
    }

    const hichichichic = () => {
        const oke = confirm("Vẫn không bật nhạc à ??? lì quá nhỉ :))");

        if (oke) {
            onClose()
        }
    }
    
    return (
        <div
            // onClick={handlePlayMusic}
            className="fixed inset-0 z-[22] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[600] h-[400] rounded-3xl bg-[url('/bgpopup.png')] bg-cover bg-center flex flex-col-reverse"
            >
                {/* content */}
                <div className="flex items-center justify-center gap-4 mb-[20]">
                    <button
                        onClick={handlePlayMusic}
                        className="cursor-pointer relative w-[180px] h-[46px] rounded-full border border-pink-400/50 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700 text-white font-semibold shadow-[0_0_25px_rgba(255,45,130,0.6)] hover:scale-105 transition"
                    >
                        <span className="absolute left-3 top-1 text-white text-xl">✦</span>
                        <span className="absolute right-2 top-1 text-white text-lg">✦</span>
                        <span className="flex items-center justify-center gap-2">
                            🎵 Bật nhạc ngay
                        </span>
                    </button>

                    <button
                        onClick={hichichichic}
                        className="cursor-pointer w-[180px] h-[46px] rounded-full border border-pink-500/50 bg-black/35 text-white font-semibold shadow-[inset_0_0_20px_rgba(255,45,130,0.15)] hover:bg-pink-500/20 hover:scale-105 transition"
                    >
                        Để sau
                    </button>
                </div>
                <h1 className="text-white text-center text-lg font-semibold mb-2">
                    Đeo tai nghe nhớ chỉnh nhỏ âm lượng nhé!
                </h1>
            </div>
        </div>
    );
};

export default PopUp;