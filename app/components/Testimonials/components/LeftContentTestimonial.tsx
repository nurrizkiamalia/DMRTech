import SubTitle from "@/components/SubTitle"

const LeftContentTestimonial: React.FC = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start ">
            <SubTitle className="col-start-1 w-fit">#4 what they say about us</SubTitle>
            <h2 className="col-start-1 xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold md:b-5 mb-2">Testimonials</h2>
            <p className="col-start-1 font-raleway text-pLg">What we can do to help you achieve the best performance for your business website.</p>
        </div>
    )
}

export default LeftContentTestimonial