"use client";

import Image from 'next/image'
import image1 from '@/public/assets/website2.webp'
import image2 from '@/public/assets/hero-img.webp'
import image3 from '@/public/assets/website.webp'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const images = [
    image1,
    image2,
    image3,
];

const RightContentHero: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleClickImage = (index: number) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index)
    }

    return (
        <div className='h-full flex items-center justify-center'>
            <div className='relative hidden xl:flex h-full w-full gap-3 items-stretch justify-between'>
                {images.map((src, index) => (
                    <div
                    key={index}
                    onClick={() => handleClickImage(index)}
                    className={` relative ${openIndex === index ? "xl:w-full" : "xl:w-[40%]"} hover:w-full transition-all duration-300 ease-in-out rounded-3xl`}
                    >
                    <Image 
                        src={src} 
                        alt={`image-${index}`}
                        className=' object-cover rounded-3xl'
                        layout='fill'
                    />
                </div>
                ))}
            </div>

            {/* Mobile */}
            <div className='xl:hidden w-full'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className='text-white'>
                            <div
                                onClick={() => handleClickImage(index)}
                                className="relative w-full rounded-3xl overflow-hidden"
                                style={{ height: '300px' }}
                            >
                                <Image 
                                    src={src} 
                                    alt={`image-${index}`}
                                    className='object-cover rounded-3xl hover:scale-110 transition-all ease-linear'
                                    layout='fill'
                                    priority={index === 0}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default RightContentHero;
