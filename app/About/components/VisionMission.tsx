"use client";

import SubTitle from "@/components/SubTitle"
import visiondata from "@/data/visiondata"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const VisionMission: React.FC = () => {
    
    return (
      <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper h-fit "
      >
        {visiondata.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex h-fit flex-col justify-center xl:py-14 xl:px-20 lg:px-14 md:px-10 py-10 px-5"
          >
            <div className="h-fit ">
                <div className="  grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2 items-start">
                <SubTitle className="col-start-1 w-fit">
                    # {item.subtitle}{" "}
                </SubTitle>
                <h2 className="col-start-1 xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold lg:mb-5 mb-2">
                    {item.title}{" "}
                </h2>
                </div>
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {item.content.map((data, indexNum) => (
                    <div
                    key={indexNum}
                    className=" hover:scale-105 transition-all ease-in-out shadow-liteShadow shadow-dspLightGray hover:shadow-bottomShadow hover:shadow-white bg-dspBlack p-5 rounded-3xl flex flex-col items-start justify-start gap-2">
                    <p className="text-dspLightGray">0{indexNum+1}</p>
                    <h3 className="text-dspLimeGreen font-bold font-dmBricolage text-pXL xl:text-[22px] ">{data.title} </h3>
                    <p className="text-pMd font-light text-dspLightGray">{data.explanation} </p>
                    </div>
                ))}
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </>
    );
  }

  export default VisionMission