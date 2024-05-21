"use client";

import React, { useState } from "react";
import Image from "next/image";
import servicedata from "@/data/servicedata";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ServiceDetails: React.FC = () => {

  const idName = [
    "web",
    "design",
    "seo",
    "brandproduct"
  ]

  const [activeService, setActiveService] = useState<number>(0);

  return (
    <div className="relative w-full h-full">
      <Swiper
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        onSlideChange={(swiper) => setActiveService(swiper.activeIndex)}
        initialSlide={activeService}
        className="mySwiper w-full h-full xl:mt-10"
      >
        {servicedata.map((item, index) => (
          <SwiperSlide key={index} className="service" id={idName[index]}>
            <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className=" w-full h-full -z-10 ">
                <Image
                  src={`/assets/${item.image}`}
                  width={500}
                  height={500}
                  alt="service-image"
                  className=" rounded-3xl "
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover"
                  }}
                  priority
                />
              </div>
              <div className="z-10 lg:py-10 relative w-full h-full flex flex-col items-center justify-start">
                <div className="font-raleway text-left px-4 max-w-4xl flex flex-col gap-5">
                  <h3 className="text-white text-pXL md:text-pXXL xl:text-heading3 font-bold lg:mb-4 p-3 rounded-3xl w-full">
                    {item.service}
                  </h3>
                  <p className="text-pMd md:text-pLg text-dspLightGray mb-4">
                    {item.explanation}
                  </p>
                  <h4 className="text-xl text-center font-semibold mb-2">
                    Tools and Technologies:
                  </h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    {item.tools.map((tool, idx) => (
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceDetails;
