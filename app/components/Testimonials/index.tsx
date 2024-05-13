import TwoContent from "@/components/TwoContent"
import LeftContentTestimonial from "./components/LeftContentTestimonial"
import RightContentTestimonial from "./components/RightContentTestimonial"

const Testimonials: React.FC = () => {
    return(
        <>
            <TwoContent className="!py-0 max-xl:!py-10">
                <LeftContentTestimonial />
                <RightContentTestimonial />
            </TwoContent>
        </>
    )
}

export default Testimonials