const ChucMungSN = () => {
    return (
       <>
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-pink-300/40

                    bg-white/10
                    backdrop-blur-xl
                    mt-2
                    shadow-[0_0_50px_rgba(255,105,180,0.35)]
                "
            >
                {/* nền glow */}
                <div className="
                        absolute
                        -top-20
                        left-1/2
                        h-56
                        w-56
                        -translate-x-1/2
                        rounded-full
                        bg-pink-400/30
                        blur-3xl
                    " />

                {/* content */}
                <div className="relative flex h-full flex-col items-center justify-center px-8 text-center mt-2">

                    <p className="lg:block hidden mt-6 text-pink-200 tracking-[6px] uppercase text-sm">
                        Happy Birthday
                    </p>

                    <div className="lg:mt-8 h-[1px] w-32 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />

                    <p className="lg:mt-6 text-pink-100/80 text-sm leading-7">
                        Hôm nay vừa là sinh nhật, vừa là Quốc tế Thiếu nhi nữa ✨🎂
                        <br />
                        Em không có món quà gì đặc biệt, nên chỉ muốn gửi chị vài lời chúc nhỏ thôi, mong chị sẽ thích nó 🥰💖
                        <br />
                        Chúc chị luôn xinh đẹp, vui vẻ và hạnh phúc. Mong mọi điều tốt đẹp nhất sẽ luôn đến với chị, công việc thuận lợi, cuộc sống lúc nào cũng ngập tràn tiếng cười ✨
                        <br />
                        Tuổi mới rồi nhưng vẫn hãy luôn giữ sự đáng yêu, trẻ trung và năng lượng tích cực của mình nha 🌷
                        <br />
                        Và quan trọng nhất là hôm nay sẽ là một ngày thật ý nghĩa bên gia đình và những người chị yêu thương 🎉💕
                        <br />
                        Happy Birthdayyyy 🎂✨
                    </p>
                    
                    {/* line */}
                    <div className="mt-8 h-[1px] w-32 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />

                    {/* glow dưới */}
                    <div
                        className="
                        absolute
                        bottom-0
                        left-0
                        h-40
                        w-full
                        bg-gradient-to-t
                        from-pink-400/20
                        to-transparent
                    "
                    />
                </div>
            </div>
       </>
    )
}

export default ChucMungSN