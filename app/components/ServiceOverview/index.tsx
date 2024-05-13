import TwoContent from "@/components/TwoContent"
import RightContentServiceOverview from "./components/RightContentServiceOverview"
import LeftContentServiceOverview from "./components/LeftContentServiceOverview"

const ServiceOverview: React.FC = () =>{
    
    return(
        <>
            <TwoContent className="relative">
                <LeftContentServiceOverview />
                <RightContentServiceOverview />
            </TwoContent>
        </>
    )
}

export default ServiceOverview