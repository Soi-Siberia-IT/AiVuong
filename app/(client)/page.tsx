
// import BirthdayPage from "@/components/BirthdayPage";
// import BirthdayQuoteCard from "@/components/birthdayQuoteCard";
// import HeartRandom from "@/components/heartRandom";
// import UsePopup from "@/components/popup/usePopup";
// import TextNeon from "@/components/text/textNeon";
// import MoThu from "@/components/thungo/thungo";

// const TrangChu = () => {
//     return (
//         <div className="relative h-dvh w-full overflow-hidden bg-[url('/BgMobi.png')] bg-cover bg-center lg:bg-[url('/bg.2.png')] lg:bg-cover lg:bg-center">
//             <HeartRandom />
//             <div className="absolute z-20 left-[10%] lg:left-[2%] lg:top-[2%] ">
//                 <BirthdayQuoteCard />
//             </div>

//             <div className="absolute z-9 left-[-12] bottom-[-60] lg:left-[48%] lg:bottom-0 h-[200px] w-[440px] lg:bottom-3  lg:w-[500] lg:h-[273] bg-[url('/content.png')] bg-cover bg-center border-2 border-pink-300/0" />
            
//             <UsePopup />
//             <div className="absolute lg:top-[5%] lg:left-[35%] top-[20%] left-0">
//                 <TextNeon />
//             </div>
//             <div>
//                 <BirthdayPage />
//             </div>
//         </div>
//     );
// };

// export default TrangChu;

import BirthdayPage from "@/components/BirthdayPage";
import BirthdayQuoteCard from "@/components/birthdayQuoteCard";
import HeartRandom from "@/components/heartRandom";
import UsePopup from "@/components/popup/usePopup";
import TextNeon from "@/components/text/textNeon";

const TrangChu = () => {
    return (
        <main className="relative min-h-[100dvh] w-full overflow-y-auto bg-[url('/mobile.png')] bg-cover bg-center lg:bg-[url('/bg.2.png')]">
            <HeartRandom />

            <div className="absolute z-20 left-1/2 top-6 w-[86%] max-w-[360px] -translate-x-1/2 lg:left-[2%] lg:top-[2%] lg:w-auto lg:max-w-none lg:translate-x-0">
                <BirthdayQuoteCard />
            </div>

            <div className="absolute z-[9] left-1/2 bottom-[-45px] h-[170px] w-[105%] max-w-[440px] -translate-x-1/2 bg-[url('/content.png')] bg-cover bg-center lg:left-[48%] lg:bottom-3 lg:h-[273px] lg:w-[500px] lg:translate-x-0" />

            <UsePopup />

            <div className="absolute z-10 top-[30%] left-1/2 w-full -translate-x-1/2 px-4 lg:top-[5%] lg:left-[35%] lg:w-auto lg:translate-x-0 lg:px-0">
                <TextNeon />
            </div>

            <BirthdayPage />
        </main>
    );
};

export default TrangChu;