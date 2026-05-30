const ChucMung = () => {
  return (
      <div className="relative flex flex-col items-center justify-center text-center">
          {/* Glow background */}
          <div className="absolute w-[420px] h-[220px] rounded-full bg-pink-500/20 blur-3xl" />

          {/* Main text */}
          <h1
              className="
                relative z-10
                sm:text-[58px]
                text-[40px]
                leading-[1.05]
                font-black
                italic
                text-white
                drop-shadow-[0_0_12px_rgba(255,120,200,0.9)]
                "
              style={{
                  fontFamily: "'Pacifico', cursive",
              }}
          >
              Chúc mừng
              Sinh nhật!
          </h1>

          {/* Divider */}
          <div className="relative z-10 mt-5 w-[320px] h-[1px] bg-pink-200/40" />

          {/* Sub text */}
          <div
              className="
                relative z-10
                mt-4
                px-6
                py-2
                rounded-full
                border border-pink-200/20
                bg-white/5
                backdrop-blur-md
                text-white/90
                text-[18px]
                shadow-[0_0_20px_rgba(255,80,180,0.25)]
            "
          >
              Một ngày đặc biệt dành cho người đặc biệt! ❤️
          </div>

          {/* Floating hearts */}
          <span className="absolute top-0 left-[20%] text-pink-300 text-2xl animate-pulse">
              ❤
          </span>
          <span className="absolute top-[30px] right-[18%] text-pink-400 text-xl animate-bounce">
              ❤
          </span>
      </div>
  )
}

export default ChucMung