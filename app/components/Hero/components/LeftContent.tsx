
import ButtonToService from "./ButtonToService"
import Link from "next/link"

const LeftContentHero: React.FC = () => {
    return(
        <div className="">
            <div className="flex gap-5 flex-col items-start max-xl:items-center justify-center">
                <span className="text-pLg font-bold bg-dspPurple px-[30px] py-1 rounded-full max-xl:self-center">#1 web development service</span>
                <div>

                    <h1 className="text-heading1 max-lg:text-heading2 max-sm:text-heading3 font-dmBricolage capitalize tracking-tight font-medium leading-snug max-xl:text-center">
                        <span className=" border-[1px] border-white  shadow-lg shadow-gray-600 w-fit mr-3 px-8 rounded-full  cursor-context-menu ">
                            🚀 
                        </span>
                         Let's Build the  
                        <span className="heading-span hover:drop-shadow-xl font-extrabold hover:not-italic italic mx-2 hover:scale-110 tracking-normal cursor-pointer text-[90px] max-lg:text-heading2 max-md:text-heading3">Fastest</span> website 
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