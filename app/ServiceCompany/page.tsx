import Pricing from "./components/Pricing"
import ProjectShowcase from "./components/ProjectShowcase"
import ServiceDescription from "./components/ServiceDescription"

const ServiceCompany: React.FC = () => {
    return (
        <>
            <div>
               <ServiceDescription />
               <ProjectShowcase />
               <Pricing />
            </div>
        </>
    )
}

export default ServiceCompany