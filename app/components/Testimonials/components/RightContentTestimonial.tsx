import CardTestimonial from "./CardTestimonial"
import testimonialdata from "@/data/testimonialdata"

const RightContentTestimonial: React.FC = () => {
    const halfDataLength = Math.ceil(testimonialdata.length / 2);
    const leftData = testimonialdata.slice(0, halfDataLength);
    const rightData = testimonialdata.slice(halfDataLength);

    return(
        <>
            <div>
                <div className="flex max-lg:flex-col max-lg:gap-7 max-xl:h-fit max-xl:justify-start max-xl:items-start justify-center gap-3 items-start h-[726px] relative">
                    <div className="card-testimonial h-[726px] max-xl:h-fit gap-5 overflow-y-scroll max-xl:overflow-y-visible overflow-x-hidden cursor-all-scroll ">
                        <CardTestimonial data={leftData} percentage={100} />
                    </div>
                    <div className="card-testimonial h-[726px] max-xl:h-fit gap-5 overflow-y-scroll overflow-x-hidden cursor-all-scroll ">
                        <CardTestimonial data={rightData} percentage={100} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightContentTestimonial