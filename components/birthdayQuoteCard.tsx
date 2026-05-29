export default function BirthdayQuoteCard() {
    return (
        <div
            className="
                relative
                w-[360]
                rounded-[26px]
                lg:px-10
                lg:py-8
                overflow-hidden

                border border-white/10
                bg-white/5
                backdrop-blur-[10px]

                shadow-[0_8px_40px_rgba(255,0,80,0.18)]
            "
        >
            {/* Quote left */}
            <span
                className="
                    absolute
                    left-5
                    top-0
                    sm:top-3
                    text-[48px]
                    text-pink-200/40
                    font-serif
                    "
            >
                “
            </span>

            {/* Quote right */}
            <span
                className="
          absolute
          right-6
          sm:bottom-2
          bottom-[-30]
          text-[48px]
          text-pink-200/40
          font-serif
        "
            >
                ”
            </span>

            {/* Text */}
            <p
                className="
          relative
          z-10
          text-center
          text-[18px]
          leading-[2]
          font-semibold
          tracking-[0.3px]
            font-[cursive]
          text-white
          drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]
        "
            >
                Hôm nay là ngày gì ấy nhỉ?
                <br />
                có ai nói cho Em biết không? <br />
                Chị có đoán được không? <br />
            </p>
        </div>
    );
}