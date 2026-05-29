
import BirthdayPage from "@/components/BirthdayPage";
import BirthdayQuoteCard from "@/components/birthdayQuoteCard";
const TrangChu = () => {
    return (
        <div className="lg:bg-[url('/bg.2.png')] lg:bg-cover lg:bg-center h-screen w-screen bg-[url('/BgMobi.png')] bg-cover bg-center">
            
            <div className="absolute z-20 lg:left-[2%] lg:top-[2%] left-[10%]">
                <BirthdayQuoteCard />
            </div>
            
            <div className="absolute z-9 bg-[url('/content.png')] bg-cover bg-center w-[500] h-[273] border-2 border-pink-300/0 right-[13%] bottom-3 ">
            
            </div>

            <BirthdayPage />

        </div>
    )

}
export default TrangChu;