
import LeftContentCompany from "./components/LeftContentCompany"
import RightContentCompany from "./components/RightContentCompany"

const CompanyOverview: React.FC = () =>{
    return(
        <>
            <div className="flex flex-col gap-10 py-14 xl:px-20 lg:px-14 md:px-10 px-5 mb-5">
                <RightContentCompany />
                <div>
                    <LeftContentCompany />
                </div>
            </div>
        </>
    )
}

export default CompanyOverview