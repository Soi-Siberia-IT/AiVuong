// "use client"

// import { useRouter } from "next/navigation"
// import { useEffect, useState } from "react"
// import PopUp from "./popup"
// import HeartRandom from "./heartRandom"

// export default function BirthdayPage() {
//     const [noPos, setNoPos] = useState({ x: 0, y: 0 })
//     const [noCount, setNoCount] = useState(0)
//     const [isNoLocked, setIsNoLocked] = useState(false)

//     // FIX HYDRATION
//     const [hearts, setHearts] = useState<
//         {
//             left: number
//             top: number
//             size: number
//         }[]
//     >([])

//     const router = useRouter()

//     const createHearts = (count: number) => {
//         return Array.from({ length: count }).map(() => ({
//             left: Math.random() * 100,
//             top: Math.random() * 100,
//             size: 12 + Math.random() * 16,
//         }))
//     }

//     useEffect(() => {

//         // tạo hearts sau khi client mounted
//         setHearts(createHearts(200))

//         const interval = setInterval(() => {
//             setHearts(createHearts(100))
//         }, 6000)

//         return () => clearInterval(interval)

//     }, [])

//     const moveNoButton = () => {

//         if (isNoLocked) return

//         setNoCount((prev) => prev + 1)

//         if (noCount >= 5) {
//             setIsNoLocked(true)
//             console.log("Nút 'Hủy' đã bị khóa sau 5 lần di chuyển.")
//         }

//         const MIN_DISTANCE = 120

//         let x = Math.floor(Math.random() * 220) - 110
//         let y = Math.floor(Math.random() * 120) - 60

//         while (
//             Math.sqrt((x - noPos.x) ** 2 + (y - noPos.y) ** 2) <
//             MIN_DISTANCE
//         ) {
//             x = Math.floor(Math.random() * 220) - 110
//             y = Math.floor(Math.random() * 120) - 60
//         }

//         setNoPos({
//             x,
//             y,
//         })
//     }

//     const handleOpen = () => {
//         router.push("/aivuong")
//     }

//     const [isPopup, setIsPopup] = useState(true)

//     const handleClosePopup = () => {
//         setIsPopup(false)
//     }

//     return (
//         <div className="absolute w-screen h-screen overflow-hidden ">

//             <HeartRandom />

//             {/* content */}
//             <div className="h-full flex items-center justify-end lg:mr-[7%] mr-0">
                
//                 <div className="relative z-10 flex flex-col items-center justify-center h-full lg:px-4 px-0 bottom-[100]">

//                     {/* title */}

//                     {/* <h1 className="text-4xl md:text-6xl font-[cursive] text-white text-center"
//                         style={{
//                             textShadow: '0 0 5px #fff, 0 0 10px #f24b82, 0 0 20px #f24b82, 0 0 40px #f24b82'
//                         }}
//                     >
//                         Có một điều muốn nói với chị... ♡
//                     </h1> */}

//                     {/* envelope */}
//                     <div className="relative mt-10 w-[420] h-[220] bg-gradient-to-br from-pink-200 to-pink-400 rounded-md shadow-2xl">

//                         <div className="absolute inset-0 bg-pink-300 clip-envelope opacity-90" />

//                         <div className="absolute top-8 left-0 right-0 text-center text-[#8b4050]">

//                             <p className="text-sm italic">
//                                 Một lá thư
//                             </p>

//                             <p className="text-2xl font-[cursive]">
//                                 gửi riêng cho chị
//                             </p>

//                         </div>

//                         <div className="absolute left-1/2 top-[95px] -translate-x-1/2 text-6xl drop-shadow-lg">
//                             💗
//                         </div>

//                     </div>

//                     {/* buttons */}
//                     <div className="relative z-15 flex justify-center gap-8 mt-[-12px]">

//                         {/* open */}
//                         <button
//                             style={{
//                                 cursor:
//                                     "url('https://cdn.cursors-4u.net/previews/sexy-pink-heart-25412ebd-32.webp') 32 32, auto",
//                             }}
//                             className="px-12 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg shadow-pink-500/40 hover:bg-pink-600 transition cursor-pointer"
//                             onClick={handleOpen}
//                         >
//                             Mở thư ♥
//                         </button>

//                         {/* cancel */}
//                         <button
//                             onMouseEnter={moveNoButton}
//                             style={{
//                                 transform: `translate(${noPos.x}px, ${noPos.y}px)`,
//                                 cursor:
//                                     "url('https://cdn.cursors-4u.net/previews/sexy-pink-heart-unavailable-cfee306c-32.webp') 16 16, auto",
//                             }}
//                             className={`
//                                 px-12
//                                 py-3
//                                 rounded-full
//                                 bg-white/80
//                                 text-pink-500
//                                 font-semibold
//                                 shadow-lg
//                                 transition-all
//                                 duration-300
//                                 ${isNoLocked ? "hidden" : ""}
//                             `}
//                         >
//                             Hủy ×
//                         </button>

//                     </div>

//                 </div>

//             </div>

//             <style jsx>{`
//                 .clip-envelope {
//                     clip-path: polygon(
//                         0 0,
//                         50% 55%,
//                         100% 0,
//                         100% 100%,
//                         0 100%
//                     );
//                 }
//             `}</style>

//             {/** Popup */}

//             {
//                 isPopup && <PopUp onClose={handleClosePopup} />
//             }

//         </div>
//     )
// }

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import PopUp from "./popup";
import HeartRandom from "./heartRandom";

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

    const [isPopup, setIsPopup] = useState(true);

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

    const handleClosePopup = () => {
        setIsPopup(false);
    };

    return (
        <div className="absolute inset-0 overflow-hidden">

            {/* main content */}
            <div className="relative z-10 flex items-center justify-end h-full w-full lg:pr-[7%] px-4">
                <div className="flex flex-col items-center justify-center -translate-y-[60px] lg:-translate-y-[100px]">

                    {/* envelope */}
                    <div className="relative mt-10 w-[320px] h-[180px] lg:w-[420px] lg:h-[220px] bg-gradient-to-br from-pink-200 to-pink-400 rounded-md shadow-2xl">
                        {/* envelope top */}
                        <div className="absolute inset-0 bg-pink-300 clip-envelope opacity-90" />

                        {/* text */}
                        <div className="absolute top-8 left-0 right-0 text-center text-[#8b4050]">
                            <p className="text-sm italic">Một lá thư</p>

                            <p className="text-xl lg:text-2xl font-[cursive]">
                                gửi riêng cho chị
                            </p>
                        </div>

                        {/* heart */}
                        <div className="absolute left-1/2 top-[85px] lg:top-[95px] -translate-x-1/2 text-5xl lg:text-6xl drop-shadow-lg">
                            💗
                        </div>
                    </div>

                    {/* buttons */}
                    <div className="relative z-20 flex justify-center gap-4 lg:gap-8 mt-[-12px]">
                        {/* open button */}
                        <button
                            onClick={handleOpen}
                            style={{
                                cursor:
                                    "url('https://cdn.cursors-4u.net/previews/sexy-pink-heart-25412ebd-32.webp') 32 32, auto",
                            }}
                            className="px-8 lg:px-12 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg shadow-pink-500/40 hover:bg-pink-600 transition-all duration-300 hover:scale-105"
                        >
                            Mở thư ♥
                        </button>

                        {/* cancel button */}
                        <button
                            onMouseEnter={moveNoButton}
                            style={{
                                transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                                cursor:
                                    "url('https://cdn.cursors-4u.net/previews/sexy-pink-heart-unavailable-cfee306c-32.webp') 16 16, auto",
                            }}
                            className={`
                px-8
                lg:px-12
                py-3
                rounded-full
                bg-white/80
                text-pink-500
                font-semibold
                shadow-lg
                transition-all
                duration-300
                hover:bg-white
                ${isNoLocked ? "hidden" : ""}
              `}
                        >
                            Hủy ×
                        </button>
                    </div>
                </div>
            </div>

            {/* popup */}
            {/* {isPopup && <PopUp onClose={handleClosePopup} />} */}

            {/* custom css */}
            <style jsx>{`
        .clip-envelope {
          clip-path: polygon(
            0 0,
            50% 55%,
            100% 0,
            100% 100%,
            0 100%
          );
        }
      `}</style>
        </div>
    );
}