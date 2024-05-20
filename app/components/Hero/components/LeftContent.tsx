
import SubTitle from "@/components/SubTitle"
import ButtonToService from "./ButtonToService"
import Link from "next/link"

const LeftContentHero: React.FC = () => {
    return(
        <div className="">
            <div className="flex gap-5 flex-col items-start">
                <SubTitle>#1 web development service</SubTitle>
                <div>

                    <h1 className="xl:text-heading1 md:text-heading2 text-heading3 font-dmBricolage capitalize tracking-tight font-semibold leading-snug hover:rotate-3 transition-all ease-linear ">
                            🚀 
                            Crafting <span className=" underline text-dspLimeGreen font-bold">Lightning-Fast</span>  & Stunning Websites 
                    </h1>
                </div>
                <p className="font-raleway mr-0 2xl:mr-[10%] xl:mb-10 mt-5 mb-7 text-pLg">—Like a speed of light, we can make your website faster and fully optimized to be access in every device, everywhere, everytime.</p>
                <div className="flex gap-5 items-center mb-10">
                    <ButtonToService />
                    <Link href={"/"} className="underline text-pLg hover:scale-110 transition-all ease">Our History</Link>
                </div>
            </div>
        </div>
    )
}

export default LeftContentHero