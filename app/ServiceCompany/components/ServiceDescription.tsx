import SubTitle from "@/components/SubTitle"

const ServiceDescription: React.FC = () => {
    return (
        <>
            <div className="pt-[20vh] py-14 px-20 max-xl:px-14 max-lg:px-10 max-sm:px-5">
                <div className="flex flex-col gap-5 max-md:gap-2 items-start">
                    <SubTitle># Our Service</SubTitle>
                    <h2 className="text-heading2 max-lg:text-heading3 max-md:text-pXXL font-dmBricolage font-semibold mb-5 max-md:mb-2">Service name</h2>
                    <p>Service explanation</p>
                </div>
            </div>
        </>
    )
}

export default ServiceDescription