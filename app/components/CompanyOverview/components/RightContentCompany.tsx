import ButtonLearnMore from "./ButtonLearnMore"
import SubTitle from "@/components/SubTitle";

const RightContentCompany: React.FC = () => {

    return(
        <>
            <div>
                <SubTitle>#2 about us</SubTitle>
                <h2 className="text-heading2 max-lg:text-heading3 font-dmBricolage mb-5">Our Company</h2>
                <p className="font-raleway text-pLg">What we can do to help you achieve the best performance for your business website.</p>
                <div>
                    <div className="font-raleway my-10 bg-dspGray rounded-3xl">
                        <div className="flex items-center justify-between   py-3 px-[30px] ">
                            <p className="text-pXXL max-md:text-pXL max-sm:text-lg font-semibold">About Us</p>
                        </div>
                        <div className= {` text-pLg py-[22px] px-[30px] `}>
                            <p className="line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta nulla dolore amet, itaque quasi ad eligendi quas ipsam consectetur earum esse, totam ex impedit! Architecto, consequatur accusantium? Quibusdam recusandae sequi non nobis architecto enim possimus voluptates optio labore quae natus, omnis magnam aspernatur accusantium fugiat cumque error, sapiente qui.</p>
                        </div>
                    </div>
                </div>
                <ButtonLearnMore />
            </div>
        </>
    )
}

export default RightContentCompany