import ButtonLearnMore from "./ButtonLearnMore"
import SubTitle from "@/components/SubTitle";

const RightContentCompany: React.FC = () => {

    return(
        <>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
                <div className="flex flex-col gap-5 items-start">
                    <SubTitle>#2 about us</SubTitle>
                    <h2 className="xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold lg:mb-5 mb-2">Our Company</h2>
                    <p className="font-raleway text-pLg">What we can do to help you achieve the best performance for your business website.</p>
                </div>
                <ButtonLearnMore />
            </div>
        </>
    )
}

export default RightContentCompany