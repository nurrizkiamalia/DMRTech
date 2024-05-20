import TwoContent from "@/components/TwoContent"
import LeftContentHero from "./components/LeftContent"
import RightContentHero from "./components/RightContent"

const Hero: React.FC = () => {
    return(
        <>
            <TwoContent className="w-screen grid-cols-1 pt-[20vh] xl:gap-10 gap-0">
                <LeftContentHero />
                <RightContentHero />
            </TwoContent>
            {/* <div className="bg-imgDivider1 bg-fixed bg-cover bg-center bg-no-repeat bg-blend-darken flex flex-col w-full justify-center items-center ">    
                <StatisticCompany className="w-full bg-black py-10  bg-opacity-80" />
            </div> */}
            
        </>
    )
}

export default Hero