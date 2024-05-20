"use client"

import React, { useState } from "react";
import Image from "next/image";
import servicedata from "@/data/servicedata";

const ServiceDetails: React.FC = () => {
    const [activeService, setActiveService] = useState<number>(0);

    return (
        <div className="relative w-full h-full xl:h-screen">
            <div className="absolute w-full h-full xl:h-[600px] overflow-hidden -z-10 rounded-3xl ">
                <Image
                    src={`/assets/${servicedata[activeService].image}`}
                    objectFit="cover"
                    width={1000}
                    height={800}
                    objectPosition="bottom"
                    alt="service-image"
                    className=" h-full w-full xl:h-[600px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-3xl mix-blend-darken bg-black opacity-30"
                />
            </div>
            <div className="z-10 py-10 relative w-full h-full flex flex-col items-center  justify-start">
                <div className="categories grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                    {servicedata.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveService(index)}
                            className={` border-[1px] rounded-3xl whitespace-nowrap px-4 py-2 font-dmBricolage text-pMd lg:text-pLg font-semibold hover:scale-105 transition-all ease-linear ${
                                activeService === index ? 'scale-105 text-dspLimeGreen border-dspLimeGreen' : 'text-white'
                            }`}
                        >
                            {item.service}
                        </button>
                    ))}
                </div>
                <div className=" font-raleway text-left px-4 max-w-4xl">
                    <h3 className="text-white text-pXL md:text-pXXL xl:text-heading3 font-bold mb-4 ">{servicedata[activeService].service}</h3>
                    <p className="text-pMd md:text-pLg text-dspLightGray   mb-4">{servicedata[activeService].explanation}</p>
                    <h4 className="text-xl text-center font-semibold mb-2">Tools and Technologies:</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {servicedata[activeService].tools.map((tool, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <Image
                                    src={`/assets/${tool.icon}`}
                                    alt={tool.name}
                                    width={50}
                                    height={50}
                                    className="mb-2"
                                />
                                <span className="text-dspLightGray">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
