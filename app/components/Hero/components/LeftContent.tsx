
import SubTitle from "@/components/SubTitle"
import ButtonToService from "./ButtonToService"
import Link from "next/link"

const LeftContentHero: React.FC = () => {
    return(
        <div className="">
            <div className="flex gap-5 flex-col items-start max-xl:items-center justify-center">
                <SubTitle className="max-xl:self-center">#1 web development service</SubTitle>
                <div>

                    <h1 className="text-heading1 max-lg:text-heading2 max-sm:text-heading3 font-dmBricolage capitalize tracking-tight font-semibold leading-snug max-xl:text-center">
                            🚀 
                         Let's Build the Fastest website 
                    </h1>
                </div>
                <p className="font-raleway max-xl:mr-0 mr-[10%]  mb-10 max-lg:mt-5 max-lg:mb-7 max-xl:text-center text-pLg">—Like a speed of light, we can make your website faster and fully optimized to be access in every device, everywhere, everytime.</p>
                <div className="flex gap-5 items-center mb-10">
                    <ButtonToService />
                    <Link href={"/"} className="underline text-pLg hover:scale-110 transition-all ease">Our History</Link>
                </div>
            </div>
        </div>
    )
}

export default LeftContentHero