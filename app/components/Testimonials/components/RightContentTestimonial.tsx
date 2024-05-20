import Marquee from "react-fast-marquee"
import CardTestimonial from "./CardTestimonial"

const RightContentTestimonial: React.FC = () => {

    return(
        <>
                <div className="overflow-hidden h-full">
                    <Marquee direction="right" pauseOnHover={true}>
                        <CardTestimonial/>
                    </Marquee>
                </div>
        </>
    )
}

export default RightContentTestimonial