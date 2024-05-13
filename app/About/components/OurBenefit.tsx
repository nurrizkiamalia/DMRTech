import SubTitle from "@/components/SubTitle"
import Image from "next/image"

const OurBenefit: React.FC = () => {
    return(
        <>
        <div className="py-14 px-20 max-xl:px-14 max-lg:px-10 max-sm:px-5">
            <div className="flex flex-col gap-5 max-md:gap-2 items-center">    
                <SubTitle># Why choose us</SubTitle>
                <h2 className="text-heading2 max-lg:text-heading3 max-md:text-pXXL font-dmBricolage font-semibold mb-5 max-md:mb-2">Benefit</h2>
            </div>
            <div>
                <div className="benefit-box">
                    <h3></h3>
                    <p></p>
                </div>
            </div>
        </div>
        </>
    )
  }

  export default OurBenefit