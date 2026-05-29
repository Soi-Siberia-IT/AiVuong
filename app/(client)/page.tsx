import BirthdayPage from "@/components/BirthdayPage";
import BirthdayQuoteCard from "@/components/birthdayQuoteCard";
import HeartRandom from "@/components/heartRandom";
import LetterHeader from "@/components/letteHeader";
import UsePopup from "@/components/popup/usePopup";
import TextNeon from "@/components/text/textNeon";

const TrangChu = () => {
    return (
        <main className="relative min-h-[100dvh] w-full overflow-hidden bg-[url('/mobile.png')] bg-cover bg-center lg:bg-[url('/bg.2.png')]">
            <HeartRandom />

            <div className="absolute z-20 left-1/2 top-6 w-[86%] max-w-[360px] -translate-x-1/2 lg:left-[2%] lg:top-[2%] lg:w-auto lg:max-w-none lg:translate-x-0">
                <BirthdayQuoteCard />
            </div>

            {/* <div className="absolute hidden lg:block z-[9] left-1/2 bottom-[-45px] h-[170px] w-[105%] max-w-[440px] -translate-x-1/2 bg-[url('/content.png')] bg-cover bg-center lg:left-[48%] lg:bottom-3 lg:h-[273px] lg:w-[500px] lg:translate-x-0" /> */}
            <div className="absolute sm:left-[50%] sm:bottom-[8%] bottom-[29%]">
                <LetterHeader />
            </div>

            <UsePopup />

            <div className="absolute z-10 top-[20%] left-1/2 w-full -translate-x-1/2 px-4 lg:top-[5%] lg:left-[35%] lg:w-auto lg:translate-x-0 lg:px-0">
                <TextNeon />
            </div>

            <BirthdayPage />
        </main>
    );
};

export default TrangChu;