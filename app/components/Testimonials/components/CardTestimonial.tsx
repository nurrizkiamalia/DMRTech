"use client";

import Image from "next/image"
import linkedin from "@/public/assets/icon-linkedin.png"
import twitter from "@/public/assets/icon-twitter.png"
import { useRouter } from "next/navigation"
import testimonialdata from "@/data/testimonialdata";


const CardTestimonial: React.FC = () => {

    const router = useRouter()

    return(
        <>
        <div className="flex 2xl:gap-10 gap-5 py-5">

            {testimonialdata.map((item) => {
                return(
                    <div className="w-[350px] h-fit 2xl:mr-3 2xl:first:ml-10 mr-1 first:ml-5 border-4 border-dspBlack shadow-lg shadow-gray-800 text-white bg-dspGray py-[24px] px-[30px] rounded-3xl" key={item.name}>
                        <div className="flex items-center gap-5" >
                            <div className="w-[80px] h-[80px] border-black rounded-full  ">
                                <Image 
                                    src={`/assets/${item.avatar}`}
                                    alt="avatar"
                                    width={80}
                                    height={80}
                                    className="object-cover rounded-full"
                                />    
                            </div>
                            <div>    
                                <p className="font-dmBricolage text-pLg font-semibold">—{item.name}</p>
                                <p className="font-dmBricolage text-pSm italic ">{item.job}</p>
                            </div>
                        </div>
                            
                        <p className="font-raleway text-pSm h-fit line-clamp-4 my-4 bg-black p-5 rounded-3xl ">{item.testimonial} </p>
                        <div className="flex mt-4 items-center justify-between">
                            <div>
                                {Array.from({ length: item.star }, (_, index) => (
                                    <i key={index} className="ri-star-fill text-orange-500 text-pXXL "></i>
                                ))}
                            </div>
                            <div className="flex gap-2 items-center justify-between">
                                <button onClick={() => router.push(item.linkedin)} className="bg-dspLightGray hover:bg-dspLimeGreen p-2 rounded-full">
                                    <Image 
                                        src={linkedin}
                                        alt="linkedin"
                                        width={22}
                                        className=" hover:scale-90"
                                    />
                                </button>
                                <button onClick={() => router.push(item.twitter)} className="bg-dspLightGray hover:bg-dspLimeGreen p-2 rounded-full">
                                    <Image 
                                        src={twitter}
                                        alt="twitter"
                                        width={22}
                                        className="hover:scale-90"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    )
            })}
        </div>
        </>
    )
}

export default CardTestimonial