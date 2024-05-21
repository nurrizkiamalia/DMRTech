"use client";

import SubTitle from "@/components/SubTitle";
import TwoContent from "@/components/TwoContent";
import milestonedata from "@/data/milestonedata";
import React from "react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Milestone: React.FC = () => {
  return (
    <>
      <TwoContent className="!flex !flex-col !gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start font-raleway" id="milestone">
          <SubTitle className="col-start-1 w-fit"># How far we come</SubTitle>
          <h2 className="col-start-1 xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold md:b-5 mb-2">
            Our Milestone
          </h2>
          <p className="col-start-1 font-raleway text-pL">
          Explore the key milestones that have shaped our journey. Each milestone represents a step forward in our mission to deliver cutting-edge solutions and drive client success.
          </p>
        </div>
        <div className="grid bg-dspGray rounded-3xl grid-cols-1 lg:gap-10">
          <Swiper 
          navigation={true} 
          modules={[Navigation]} 
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }}
          className="mySwiper w-full h-full">
            {milestonedata.map((item, index) => (
              <SwiperSlide key={index} className="p-10 h-full ">
                <div className="flex flex-col items-start justify-start gap-0 bg-dspBlack p-5 rounded-3xl">
                  <h2 className="font-dmBricolage font-bold text-heading3">{item.yearachievement}</h2>
                  <h3 className="text-dspLimeGreen font-bold font-dmBricolage text-pXL xl:text-[22px] mb-5">{item.title}</h3>
                  <p className="text-pSm md:text-pMd">{item.explanation}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </TwoContent>
    </>
  );
};

export default Milestone;
