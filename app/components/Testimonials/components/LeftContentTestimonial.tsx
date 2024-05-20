import SubTitle from "@/components/SubTitle"

const LeftContentTestimonial: React.FC = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start ">
            <SubTitle className="col-start-1 w-fit">#4 what they say about us</SubTitle>
            <h2 className="col-start-1 xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold md:b-5 mb-2">Testimonials</h2>
            <p className="col-start-1 font-raleway text-pLg">Hear from our satisfied clients about their experiences and successes with our services.</p>
        </div>
    )
}

export default LeftContentTestimonial