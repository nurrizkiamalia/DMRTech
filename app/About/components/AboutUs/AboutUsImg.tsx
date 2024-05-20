"use client";

import { useState } from "react"
import Image from 'next/image'
import image1 from '@/public/assets/team-img5.webp'
import image2 from '@/public/assets/team-img3.webp'

const images = [
    image1,
    image2,
]


const AboutUsImg: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleClickImage = (index: number) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index)
    }

    return(
        <>
        <div className="h-full flex items-center justify-center">
            <div className='relative flex h-full w-full gap-3 items-stretch justify-between'>
                {images.map((src, index) => (
                    <div
                    key={index}
                    onClick={() => handleClickImage(index)}
                    className={` relative ${openIndex === index ? "w-full" : "w-[50%]"} hover:w-full transition-all duration-300 ease-in-out rounded-3xl`}
                    >
                    <Image 
                        src={src} 
                        alt={`image-${index}`}
                        className=' object-cover rounded-3xl h-[300px] lg:h-[400px] xl:h-[500px] '
                    />
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default AboutUsImg