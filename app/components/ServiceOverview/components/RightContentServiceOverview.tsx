"use client";
import serviceoverviewdata from "@/data/serviceoverviewdata"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/navigation";
import Image from "next/image";

const RightContentServiceOverview: React.FC = () => {
    const router = useRouter()
    return(
        <>
            <div className="content-service-overview  cursor-sc">
                {serviceoverviewdata.map((item) => {
                    return(            
                        <div key={item.id} className="flex flex-col last:mb-0 mb-10 items-start justify-center font-raleway gap-5 p-10 bg-dspGray rounded-3xl">
                            <Image 
                                src={`/assets/${item.icon}`}
                                alt="icon"
                                width={80}
                                height={80}
                                className=" bg-dspBlack p-5 rounded-full"
                            />
                            <h3 className="text-[40px] font-dmSans font-medium max-sm:text-pXXL">{item.title}</h3>
                            <p className="line-clamp-2">{item.description}</p>
                            <button className="underline max-sm:text-pMd hover:scale-110 transition-all ease flex items-center gap-2 font-bold" onClick={() => router.push(item.urlTo)}>Learn More <FontAwesomeIcon icon={faArrowRightLong} className="icon bg-dspLimeGreen text-dspBlack p-2 text-pXL rounded-full" /></button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RightContentServiceOverview