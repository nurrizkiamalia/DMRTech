const LeftContentCompany: React.FC = () => {

    const imgStyle = "overflow-hidden h-[100vh] bg-white rounded-3xl max-xl:bg-cover max-xl:bg-no-repeat max-md:h-[50vh]"

    return(
        <>
            <div className="company grid grid-cols-2 max-xl:flex max-xl:flex-col gap-5 w-full">
                <div className={`img-1 ${imgStyle}`}>
                    <p></p>
                </div>
                <div className={`img-2 ${imgStyle}`}>
                    <p></p>
                </div>
            </div>
        </>
    )
}

export default LeftContentCompany