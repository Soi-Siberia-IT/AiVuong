import BanhKemV2 from "@/components/banhkemV2"
import ChucMung from "@/components/TileChucMung"
import HeartRandom from "@/components/heartRandom"
import RomanticSlider from "@/components/slide"
import ChucMungSN from "@/components/chucmung"
import ViewPhotoButton from "@/components/bottom/viewPhotoButton"

const Hello = () =>{
    return (
        <div className="w-screen h-screen bg-cover bg-center lg:bg-cover lg:bg-center bg-[url('/BG2Mobi.png')] lg:bg-[url('/bg.gif')]">
            <div className="">
                <HeartRandom />
            </div>
            <div className="block lg:hidden">
                <ChucMung />
                <div className="h-auto">
                    <ChucMungSN />
                </div>

                <div>
                    <BanhKemV2 />
                </div>

                <div className="mt-[15px] flex justify-center">
                    <ViewPhotoButton />
                </div>
            </div>
            
            {/* desktop */}
            <div className=" hidden lg:grid lg:grid-cols-3 lg:gap-4 ">

                <div className="w-[346] h-[607] ml-[206] mt-[57]">
                    <ChucMungSN />
                </div>

                <div className="">
                    <ChucMung />
                    <BanhKemV2 />
                </div>

                <div className="mt-8 mr-[30]">
                    <RomanticSlider />
                </div>

            </div>
        </div>
    )
}

export default Hello