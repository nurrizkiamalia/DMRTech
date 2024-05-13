"use client";

import Image from "next/image"
import linkedin from "@/public/assets/icon-linkedin.png"
import twitter from "@/public/assets/icon-twitter.png"
import { useRouter } from "next/navigation"
import Testimonial from "@/types/Testimonial";

interface CardTestimonialProps{
    data: Testimonial[];
    percentage: number;
}

const CardTestimonial: React.FC<CardTestimonialProps> = ({ data, percentage }) => {
    const visibleData = data.slice(0, Math.ceil(data.length * (percentage / 100)));

    const router = useRouter()

    return(
        <>
            {visibleData.map((item) => {
                return(
                    <div className="w-[288px] max-xl:w-full flex flex-col gap-2 my-10 first:mt-0 last:mb-0 border-[3px] border-white bg-dspBlack py-[24px] px-[30px] rounded-3xl" key={item.name}>
                        <div className="w-[100px] h-[100px] bg-dspLightGray rounded-full self-center mb-5 ">
                            <Image 
                                src={`/assets/${item.avatar}`}
                                alt="avatar"
                                width={140}
                                height={140}
                                className=" bg-dspBlack p-5 rounded-full"
                            />    
                        </div>
                            <p className="font-dmBricolage text-pLg font-semibold">—{item.name}</p>
                            <p className="font-dmBricolage text-pSm italic mb-6 ">{item.job}</p>
                            <hr />
                            <p className="font-raleway text-pSm line-clamp-4 mt-6 mb-4 ">{item.testimonial} </p>
                            <div className="flex gap-2">
                                <button onClick={() => router.push(item.linkedin)} className="bg-dspLightGray p-2 rounded-full">
                                    <Image 
                                        src={linkedin}
                                        alt="linkedin"
                                        width={22}
                                        className=" hover:scale-90"
                                    />
                                </button>
                                <button onClick={() => router.push(item.twitter)} className="bg-dspLightGray p-2 rounded-full">
                                    <Image 
                                        src={twitter}
                                        alt="twitter"
                                        width={22}
                                        className="hover:scale-90"
                                    />
                                </button>
                            </div>
                        </div>
                    )
            })}
        </>
    )
}

export default CardTestimonial