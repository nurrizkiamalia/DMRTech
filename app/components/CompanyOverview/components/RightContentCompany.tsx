import ButtonLearnMore from "./ButtonLearnMore"
import SubTitle from "@/components/SubTitle";

const RightContentCompany: React.FC = () => {

    return(
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start ">
                <div className="grid grid-cols-1 gap-2 items-start">
                    <SubTitle className="w-fit">#2 about us</SubTitle>
                    <h2 className="xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold lg:mb-5 mb-2">Our Company</h2>
                    <p className="font-raleway text-pLg">Discover our journey from a small startup to a leading tech innovator. We specialize in delivering top-tier web development, UI/UX design, SEO, and brand design services that empower businesses to thrive in the digital landscape.</p>
                </div>
                <div className="flex justify-end items-center">
                    <ButtonLearnMore />
                </div>
            </div>
        </>
    )
}

export default RightContentCompany