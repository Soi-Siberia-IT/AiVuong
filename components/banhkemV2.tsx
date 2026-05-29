"use client";

import { useState } from "react";

const BanhKemV2 = () => {
  const [isFlame, setIsFlame] = useState<boolean>(true);


  return (
    <div className="lg:h-[404] flex flex-col-reverse items-center lg:mt-[20]">
        {/*Tần 1*/}
        <div className="lg:w-[300] w-[128] banhkemall tang-1">
            <img src="/cake/cake_layer_4.webp" className="cake-img layer-1"/>
        </div>
        {/*Tần 2*/}
        <div className="lg:w-[268] lg:h-[86] h-[37] w-[115] z-2 banhkemall tang-2">
            <img src="/cake/cake_layer_3.webp" className="cake-img layer-1" />
        </div>
        {/*Tần 3*/}
        <div className="lg:w-[218] lg:h-[82] w-[96] h-[37] z-3 banhkemall tang-3">
          <img src="/cake/cake_layer_2.webp" className="cake-img layer-1" />
        </div>

        {/* Nến */}
      <div className="flex items-center justify-center lg:h-[15] h-[30] z-10 banhkemall nen">
        {/* số 3 */}
        <div className="flex flex-col items-center">
          <div className={`relative lg:w-[40] w-[20] z-10 ${isFlame ? 'block' : 'hidden'}`}>
            <div className="orange flame"></div>
          </div>
          <span className="font-bold bg-clip-text text-transparent bg-[repeating-linear-gradient(45deg,_#ffffff_0px,_#ffffff_10px,_#ff5d7d_10px,_#ff5d7d_20px)] lg:text-[100px] text-[65px] leading-none">
            3
          </span>
        </div>

        {/* số 1 */}
        <div className="flex flex-col items-center">
          <div className={`relative lg:w-[40] w-[20] z-10 ${isFlame ? 'block' : 'hidden'}`}>
            <div className="orange flame"></div>
          </div>
          <span className="font-bold bg-clip-text text-transparent bg-[repeating-linear-gradient(45deg,_#ffffff_0px,_#ffffff_10px,_#ff5d7d_10px,_#ff5d7d_20px)] lg:text-[100px] text-[65px] leading-none">
            1
          </span>
        </div>
      </div>

      <style jsx global>{`
        
        .flame {
              position: absolute;
              bottom: 0;
              left: 50%;
              transform-origin: center bottom;
              border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
              animation: flicker 1.5s ease-in-out infinite alternate;
              filter: blur(2px);
          }

          /* Lớp lửa cam - Ở giữa */
          .orange {
              rotate: unset;
              width: 30px;
              height: 54px;
              // margin-left: -40px;
              background: linear-gradient(to top, #f57c00, #ffb74d);
              animation-duration: 0.9s;
              opacity: 0.9;
          }

         
          /* Hiệu ứng hoạt ảnh bập bùng */
          @keyframes flicker {
              0% {
                  transform: translateX(-50%) rotate(-2deg) scaleX(0.9) scaleY(0.9);
              }
              50% {
                  transform: translateX(-50%) rotate(3deg) scaleX(1.1) scaleY(1.1);
              }
              100% {
                  transform: translateX(-50%) rotate(-3deg) scaleX(0.95) scaleY(1.05);
              }
          }

          .banhkemall {
            transform: translateY(-650px);
            opacity: 0;
            animation: banhkemFall 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes banhkemFall {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .tang-1{
            animation-delay: 0.5s;
            }
          .tang-2{
            animation-delay: 1.5s;
            }
          .tang-3{
            animation-delay: 2.5s;
            }
          .nen{
            animation-delay: 3.5s;
            }

      `}</style>


    </div>
  )

}

export default BanhKemV2