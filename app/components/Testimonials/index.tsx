import TwoContent from "@/components/TwoContent"
import LeftContentTestimonial from "./components/LeftContentTestimonial"
import RightContentTestimonial from "./components/RightContentTestimonial"

const Testimonials: React.FC = () => {
    return(
        <>
            <div className="flex flex-col py-14">
                <div className="xl:px-20 lg:px-14 md:px-10 px-5 mb-5">
                    <LeftContentTestimonial />
                </div>
                <RightContentTestimonial />
            </div>
        </>
    )
}

export default Testimonials