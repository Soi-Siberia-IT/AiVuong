"use client"

import { useEffect, useState } from "react"

type Item = {
    id: number
    left: number
    top: number
    size: number
    delay: number
    duration: number
    opacity: number
    icon: string
    color: string
}

const icons = [
    { icon: "♥", color: "#f9a8d4" },
    { icon: "★", color: "#fde68a" },
    { icon: "✦", color: "#fef08a" },
]

const createItems = (count: number): Item[] =>
    Array.from({ length: count }, (_, i) => {
        const randomIcon = icons[Math.floor(Math.random() * icons.length)]

        return {
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: 10 + Math.random() * 20,
            delay: Math.random() * 5,
            duration: 4 + Math.random() * 6,
            opacity: 0.2 + Math.random() * 0.5,
            icon: randomIcon.icon,
            color: randomIcon.color,
        }
    })

const HeartRandom = () => {
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        setItems(createItems(150))
    }, [])

    return (
        <>
            <div className="floating-bg">
                {items.map((item) => (
                    <span
                        key={item.id}
                        className="floating-item"
                        style={{
                            left: `${item.left}%`,
                            top: `${item.top}%`,
                            fontSize: `${item.size}px`,
                            opacity: item.opacity,
                            animationDelay: `${item.delay}s`,
                            animationDuration: `${item.duration}s`,
                            color: item.color,
                        }}
                    >
                        {item.icon}
                    </span>
                ))}
            </div>

            <style jsx>{`
        .floating-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .floating-item {
          position: absolute;
          user-select: none;
          line-height: 1;
          will-change: transform, opacity;
          animation-name: floatAnim;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.25));
        }

        @keyframes floatAnim {
          0% {
            transform: translate3d(0, 0, 0)
              scale(0.8)
              rotate(0deg);
          }

          25% {
            transform: translate3d(8px, -12px, 0)
              scale(1)
              rotate(6deg);
          }

          50% {
            transform: translate3d(16px, -24px, 0)
              scale(1.15)
              rotate(12deg);
          }

          75% {
            transform: translate3d(4px, -12px, 0)
              scale(1)
              rotate(-6deg);
          }

          100% {
            transform: translate3d(-10px, 0, 0)
              scale(0.9)
              rotate(-12deg);
          }
        }
      `}</style>
        </>
    )
}

export default HeartRandom