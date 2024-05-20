import SubTitle from "@/components/SubTitle"
import ButtonToService from "../../Hero/components/ButtonToService"

const LeftContentServiceOverview: React.FC = () => {

    return(
        <>
        <div className={`xl:sticky xl:top-28 h-fit z-[1] xl:mb-10 mb-0 relative pt-0 flex flex-col gap-5 items-start`}>
            <SubTitle>#3 our service</SubTitle>
            <h2 className="xl:text-heading2 md:text-heading3 text-pXXL font-dmBricolage font-semibold lg:mb-5 mb-2">Our Service</h2>
            <p className="font-raleway text-pLg">What we can do to help you achieve the best performance for your business website.</p>
            <ButtonToService />
        </div>
        </>
    )
}

export default LeftContentServiceOverview