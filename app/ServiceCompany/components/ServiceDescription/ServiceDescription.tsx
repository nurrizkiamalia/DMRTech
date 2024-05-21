import SubTitle from "@/components/SubTitle"
import TwoContent from "@/components/TwoContent"
import ServiceDetails from "./ServiceDetails"

const ServiceDescription: React.FC = () => {
    return (
        <>
            <TwoContent className="pt-[15vh] xl:pt-[25vh] !flex !flex-col !gap-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
                    <SubTitle className="col-start-1 w-fit"># Our Service</SubTitle>
                    <h2 className="col-start-1 xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold md:b-5 mb-2">What we do</h2>
                    <p className="col-start-1 font-raleway text-pL">Discover the range of services we offer to help your business thrive in the digital world. </p>
                </div>
                <ServiceDetails />
          </TwoContent>  
        </>
    )
}

export default ServiceDescription