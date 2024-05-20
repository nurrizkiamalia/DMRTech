import SubTitle from "@/components/SubTitle"
import TwoContent from "@/components/TwoContent"
import PricingBox from "./PricingBox"

const Pricing: React.FC = () => {
    return (
        <>
         <TwoContent className="!flex !flex-col !gap-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start" id="pricing">
                    <SubTitle className="col-start-1 w-fit"># Pricing Plans</SubTitle>
                    <h2 className="col-start-1 xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold md:b-5 mb-2">Perfect price for high-quality design</h2>
                    <p className="col-start-1 font-raleway text-pL">Explore our flexible pricing plans designed to suit businesses of all sizes. Choose the plan that fits your needs and let us help you achieve your digital goals.  </p>
                </div>
                <PricingBox />
          </TwoContent>
        </>
    )
}

export default Pricing