import projectdata from "@/data/projectdata"
import Image from "next/image"

const Projects: React.FC = () => {
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projectdata.map((item, index) => (
                <div key={index} className="">
                    <div className="overflow-hidden rounded-3xl w-full h-[300px] xl:h-[500px] relative ">
                        <Image 
                        src={`/assets/${item.image}`}
                        width={500}
                        height={500}
                        alt="image"
                        className=" absolute hover:scale-110 rounded-3xl transition-all ease-linear "
                        priority/>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center pt-2 px-5">
                        <h2 className=" cursor-alias hover:scale-105 transition-all ease-in-out hover:text-dspLimeGreen font-dmBricolage font-bold text-pXL xl:text-pXXL">{item.title}</h2>
                        <p className="font-raleway text-pSm xl:text-pMd text-dspLightGray border-[1px] border-dspLightGray rounded-xl py-1 px-3 ">{item.category}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Projects