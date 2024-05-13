import TwoContent from "@/components/TwoContent"
import LeftContentCompany from "./components/LeftContentCompany"
import RightContentCompany from "./components/RightContentCompany"

const CompanyOverview: React.FC = () =>{
    return(
        <>
            <TwoContent className="gap-10 py-20 max-xl:flex max-xl:flex-col-reverse max-xl:py-10 ">
                <LeftContentCompany />
                <RightContentCompany />
            </TwoContent>
        </>
    )
}

export default CompanyOverview