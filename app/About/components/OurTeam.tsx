import SubTitle from "@/components/SubTitle"
import Image from "next/image"

const OurTeam: React.FC = () => {
    return(
        <>
        <div className="py-14 px-20 max-xl:px-14 max-lg:px-10 max-sm:px-5">
            <div className="flex flex-col gap-5 max-md:gap-2 items-center">
                <SubTitle>We make it true</SubTitle>
                <h2 className="text-heading2 max-lg:text-heading3 max-md:text-pXXL font-dmBricolage font-semibold mb-5 max-md:mb-2">The Teams</h2>
            </div>
            <div>
                <div>
                    {/* Image */}
                    <h3>Name</h3> 
                    <p>Job</p>
                    <p>Brief desc of experience</p>
                </div>
            </div>
        </div>
        </>
    )
  }

  export default OurTeam