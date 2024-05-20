import Testimonials from "../components/Testimonials"
import Pricing from "./components/Pricing/Pricing"
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase"
import ServiceDescription from "./components/ServiceDescription/ServiceDescription"

const ServiceCompany: React.FC = () => {
    return (
        <>
            <div className="service">
               <ServiceDescription />
               <ProjectShowcase />
               <Pricing />
               <Testimonials />
            </div>
        </>
    )
}

export default ServiceCompany