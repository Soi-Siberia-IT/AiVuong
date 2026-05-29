export default function LetterHeader() {
    return (
        <div className=" w-full max-w-[720px] px-6 py-5 text-pink-200">
            {/* icon máy bay */}
            <div className="absolute left-2 top-2 text-5xl rotate-[-12deg]">♡</div>
            <div className="absolute left-5 top-4 text-4xl rotate-[-20deg]">✈</div>

            {/* tim nhỏ */}
            <div className="absolute left-20 top-14 text-3xl">♡</div>

            {/* tim phải */}
            <div className="absolute right-3 top-3 text-5xl rotate-[8deg]">♡</div>
            <div className="absolute right-12 top-16 text-sm">✦</div>

            {/* text chính */}
            <h1 className="relative text-center font-[cursive] text-[24px] sm:text-[32px] font-semibold tracking-wide drop-shadow-[0_0_8px_#f9a8d4]">
                Bức thư này của em dành cho chị....
            </h1>

            {/* gạch chân */}
            <div className="relative mx-auto sm:mt-2 sm:h-5 w-[75%] sm:block hidden">
                <div className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rounded-full bg-pink-200 shadow-[0_0_8px_#f9a8d4]" />
                <div className="absolute left-[47%] top-0 text-3xl leading-none">ↄ</div>
            </div>

            {/* dòng phụ */}
            <p className="hidden sm:block mt-2 text-center font-[cursive] text-[15px] sm:text-xl font-semibold tracking-widest drop-shadow-[0_0_6px_#f9a8d4]">
                — — from someone who likes you — — ❤
            </p>
        </div>
    );
}