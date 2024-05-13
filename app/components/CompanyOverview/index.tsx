import TwoContent from "@/components/TwoContent"
import LeftContentCompany from "./components/LeftContentCompany"
import RightContentCompany from "./components/RightContentCompany"

const CompanyOverview: React.FC = () =>{
    return(
        <>
            <TwoContent className="gap-10 my-20 max-xl:flex max-xl:flex-col-reverse">
                <LeftContentCompany />
                <RightContentCompany />
            </TwoContent>
        </>
    )
}

export default CompanyOverview