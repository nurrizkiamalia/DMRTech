import SubTitle from "@/components/SubTitle"
import ButtonToService from "../../Hero/components/ButtonToService"

const LeftContentServiceOverview: React.FC = () => {
    return(
        <>
        <div className="sticky top-0 h-fit z-[1] pt-[15vh] max-xl:mb-10 max-md:mb-0 max-sm:mb-0 max-xl:relative max-xl:pt-0 flex flex-col gap-5 items-start ">
            <SubTitle>#3 our service</SubTitle>
            <h2 className="text-heading2 max-lg:text-heading3 font-dmBricolage">Our Service</h2>
            <p className="font-raleway  text-pLg">What we can do to help you achieve the best performance for your business website.</p>
            <ButtonToService />
        </div>
        </>
    )
}

export default LeftContentServiceOverview