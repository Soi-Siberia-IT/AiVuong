// "use client"

// import Image from "next/image"
// import { useEffect, useState } from "react"
// import { AnimatePresence, motion } from "framer-motion"

// const slides = [
//     "/images/slide-6.jpg",
//     "/images/slide-5.jpg",
//     "/images/slide-1.jpg",
//     "/images/slide-3.jpg",
//     "/images/slide-4.jpg",
//     "/images/slide-2.jpg",
//     "/images/slide-7.jpg",
// ]

// const animations = [
//     // ZOOM
//     {
//         initial: {
//             opacity: 0,
//             scale: 1.2,
//         },
//         animate: {
//             opacity: 1,
//             scale: 1,
//         },
//         exit: {
//             opacity: 0,
//             scale: 0.9,
//         },
//     },

//     // SLIDE
//     {
//         initial: {
//             opacity: 0,
//             x: 200,
//         },
//         animate: {
//             opacity: 1,
//             x: 0,
//         },
//         exit: {
//             opacity: 0,
//             x: -200,
//         },
//     },

//     // UP DOWN
//     {
//         initial: {
//             opacity: 0,
//             y: 120,
//             scale: 0.9,
//         },
//         animate: {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//         },
//         exit: {
//             opacity: 0,
//             y: -120,
//             scale: 1.1,
//         },
//     },

//     // BLUR
//     {
//         initial: {
//             opacity: 0,
//             filter: "blur(25px)",
//             scale: 1.1,
//         },
//         animate: {
//             opacity: 1,
//             filter: "blur(0px)",
//             scale: 1,
//         },
//         exit: {
//             opacity: 0,
//             filter: "blur(25px)",
//             scale: 0.95,
//         },
//     },

//     // ROTATE
//     {
//         initial: {
//             opacity: 0,
//             rotate: 5,
//             scale: 1.1,
//         },
//         animate: {
//             opacity: 1,
//             rotate: 0,
//             scale: 1,
//         },
//         exit: {
//             opacity: 0,
//             rotate: -5,
//             scale: 0.9,
//         },
//     },
// ]

// export default function RomanticSlider() {
//     const [current, setCurrent] = useState(0)
//     const [effect, setEffect] = useState(0)

//     const randomEffect = () => {
//         return Math.floor(
//             Math.random() * animations.length
//         )
//     }

//     const changeSlide = (next: number) => {
//         setEffect(randomEffect())
//         setCurrent(next)
//     }

//     // AUTO SLIDE
//     useEffect(() => {
//         const interval = setInterval(() => {
//             changeSlide((current + 1) % slides.length)
//         }, 4000)

//         return () => clearInterval(interval)
//     }, [current])

//     const nextSlide = () => {
//         changeSlide((current + 1) % slides.length)
//     }

//     const prevSlide = () => {
//         changeSlide(
//             current === 0
//                 ? slides.length - 1
//                 : current - 1
//         )
//     }

//     return (
//         <div className="relative flex justify-center">
//             {/* Glow BG */}
//             <div className="absolute inset-0 -z-10 rounded-[40px] bg-pink-500/20 blur-3xl" />

//             {/* Main Card */}
//             <div
//                 className="
//                     relative
//                     w-full
//                     sm:max-w-[350px]
//                     w-[100vh]
//                     overflow-hidden
//                     rounded-[34px]
//                     border border-white/20
//                     bg-white/10
//                     backdrop-blur-xl
//                     shadow-[0_0_35px_rgba(255,105,180,0.35)]
//                     p-[2px]
//                 "
//             >
//                 {/* Gradient Border */}
//                 <div
//                     className="
//                         absolute inset-0 rounded-[34px]
//                         bg-gradient-to-br
//                         from-pink-400/80
//                         via-fuchsia-300/40
//                         to-purple-500/80
//                         opacity-80
//                     "
//                 />

//                 {/* INNER */}
//                 <div className="relative overflow-hidden rounded-[32px] bg-transparent">
//                     <div className="relative sm:h-[620px] h-[85vh] overflow-hidden">

//                         {/* BG SHOW THROUGH */}
//                         <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

//                         {/* SLIDER */}
//                         <AnimatePresence>
//                             <motion.div
//                                 key={current}
//                                 initial={
//                                     animations[effect].initial
//                                 }
//                                 animate={
//                                     animations[effect].animate
//                                 }
//                                 exit={
//                                     animations[effect].exit
//                                 }
//                                 transition={{
//                                     duration: 1,
//                                     ease: "easeInOut",
//                                 }}
//                                 className="absolute inset-0"
//                                 style={{
//                                     zIndex: 1,
//                                 }}
//                             >
//                                 <Image
//                                     src={slides[current]}
//                                     alt={`slide-${current}`}
//                                     fill
//                                     priority
//                                     className="
//                                         object-cover
//                                         scale-[1.02]
//                                     "
//                                 />

//                                 {/* OVERLAY */}
//                                 <div
//                                     className="
//                                         absolute inset-0
//                                         bg-gradient-to-t
//                                         from-black/5
//                                         via-transparent
//                                         to-white/10
//                                     "
//                                 />

//                                 {/* GLASS LIGHT */}
//                                 <div
//                                     className="
//                                         absolute inset-0
//                                         bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.15)_50%,transparent_80%)]
//                                     "
//                                 />
//                             </motion.div>
//                         </AnimatePresence>

//                         {/* LEFT BUTTON */}
//                         <button
//                             onClick={prevSlide}
//                             className="
//                                 absolute left-4 top-1/2 z-20
//                                 flex h-12 w-12 -translate-y-1/2
//                                 items-center justify-center
//                                 rounded-full
//                                 border border-white/20
//                                 bg-white/10
//                                 backdrop-blur-xl
//                                 shadow-lg
//                                 transition-all duration-300
//                                 hover:scale-110
//                                 hover:bg-pink-400/20
//                                 active:scale-95
//                             "
//                         >
//                             <span className="text-3xl text-white">
//                                 ‹
//                             </span>
//                         </button>

//                         {/* RIGHT BUTTON */}
//                         <button
//                             onClick={nextSlide}
//                             className="
//                                 absolute right-4 top-1/2 z-20
//                                 flex h-12 w-12 -translate-y-1/2
//                                 items-center justify-center
//                                 rounded-full
//                                 border border-white/20
//                                 bg-white/10
//                                 backdrop-blur-xl
//                                 shadow-lg
//                                 transition-all duration-300
//                                 hover:scale-110
//                                 hover:bg-pink-400/20
//                                 active:scale-95
//                             "
//                         >
//                             <span className="text-3xl text-white">
//                                 ›
//                             </span>
//                         </button>

//                         {/* BOTTOM FADE */}
//                         <div
//                             className="
//                                 pointer-events-none
//                                 absolute bottom-0 left-0 z-10
//                                 h-28 w-full
//                                 bg-gradient-to-t
//                                 from-black/10
//                                 to-transparent
//                             "
//                         />

//                         {/* DOTS */}
//                         <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
//                             {slides.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() =>
//                                         changeSlide(index)
//                                     }
//                                     className={`
//                                         h-3 rounded-full
//                                         transition-all duration-300

//                                         ${current === index
//                                             ? "w-8 bg-white shadow-[0_0_14px_white]"
//                                             : "w-3 bg-white/40"
//                                         }
//                                     `}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const slides = [
    "/images/slide-6.jpg",
    "/images/slide-5.jpg",
    "/images/slide-1.jpg",
    "/images/slide-3.jpg",
    "/images/slide-4.jpg",
    "/images/slide-2.jpg",
    "/images/slide-7.jpg",
]

const animations = [
    {
        initial: { opacity: 0, scale: 1.2 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
    },
    {
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -200 },
    },
    {
        initial: { opacity: 0, y: 120, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -120, scale: 1.1 },
    },
    {
        initial: { opacity: 0, filter: "blur(25px)", scale: 1.1 },
        animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
        exit: { opacity: 0, filter: "blur(25px)", scale: 0.95 },
    },
    {
        initial: { opacity: 0, rotate: 5, scale: 1.1 },
        animate: { opacity: 1, rotate: 0, scale: 1 },
        exit: { opacity: 0, rotate: -5, scale: 0.9 },
    },
]

export default function RomanticSlider() {
    const [current, setCurrent] = useState(0)
    const [effect, setEffect] = useState(0)

    const randomEffect = () => {
        return Math.floor(Math.random() * animations.length)
    }

    const changeSlide = (next: number) => {
        setEffect(randomEffect())
        setCurrent(next)
    }

    const nextSlide = () => {
        changeSlide((current + 1) % slides.length)
    }

    const prevSlide = () => {
        changeSlide(current === 0 ? slides.length - 1 : current - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000)

        return () => clearInterval(interval)
    }, [current])

    return (
        <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-pink-500/20 blur-3xl" />

            <div
                className="
                    relative
                    w-[92vw]
                    sm:max-w-[350px]
                    overflow-hidden
                    rounded-[34px]
                    border border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    shadow-[0_0_35px_rgba(255,105,180,0.35)]
                    p-[2px]
                "
            >
                <div
                    className="
                        absolute inset-0 rounded-[34px]
                        bg-gradient-to-br
                        from-pink-400/80
                        via-fuchsia-300/40
                        to-purple-500/80
                        opacity-80
                    "
                />

                <div className="relative overflow-hidden rounded-[32px] bg-transparent">
                    <div className="relative h-[85vh] sm:h-[620px] overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={animations[effect].initial}
                                animate={animations[effect].animate}
                                exit={animations[effect].exit}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(_, info) => {
                                    if (info.offset.x < -80) {
                                        nextSlide()
                                    }

                                    if (info.offset.x > 80) {
                                        prevSlide()
                                    }
                                }}
                                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                                style={{ zIndex: 1 }}
                            >
                                <Image
                                    src={slides[current]}
                                    alt={`slide-${current}`}
                                    fill
                                    priority
                                    className="object-cover scale-[1.02]"
                                />

                                <div
                                    className="
                                        absolute inset-0
                                        bg-gradient-to-t
                                        from-black/5
                                        via-transparent
                                        to-white/10
                                    "
                                />

                                <div
                                    className="
                                        absolute inset-0
                                        bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.15)_50%,transparent_80%)]
                                    "
                                />
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={prevSlide}
                            className="
                                absolute left-4 top-1/2 z-20
                                flex h-12 w-12 -translate-y-1/2
                                items-center justify-center
                                rounded-full
                                border border-white/20
                                bg-white/10
                                backdrop-blur-xl
                                shadow-lg
                                transition-all duration-300
                                hover:scale-110
                                hover:bg-pink-400/20
                                active:scale-95
                            "
                        >
                            <span className="text-3xl text-white">‹</span>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="
                                absolute right-4 top-1/2 z-20
                                flex h-12 w-12 -translate-y-1/2
                                items-center justify-center
                                rounded-full
                                border border-white/20
                                bg-white/10
                                backdrop-blur-xl
                                shadow-lg
                                transition-all duration-300
                                hover:scale-110
                                hover:bg-pink-400/20
                                active:scale-95
                            "
                        >
                            <span className="text-3xl text-white">›</span>
                        </button>

                        <div
                            className="
                                pointer-events-none
                                absolute bottom-0 left-0 z-10
                                h-28 w-full
                                bg-gradient-to-t
                                from-black/10
                                to-transparent
                            "
                        />

                        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => changeSlide(index)}
                                    className={`
                                        h-3 rounded-full
                                        transition-all duration-300
                                        ${current === index
                                            ? "w-8 bg-white shadow-[0_0_14px_white]"
                                            : "w-3 bg-white/40"
                                        }
                                    `}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}