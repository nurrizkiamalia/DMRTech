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
          Explore the key milestones that have shaped our journey. From our founding and first major project to international expansion and industry recognition, these achievements highlight our commitment to innovation and excellence. Each milestone represents a step forward in our mission to deliver cutting-edge solutions and drive client success.
          </p>
        </div>
        <div className="grid bg-dspGray rounded-3xl grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <div className="relative w-full h-full">
            <iframe
              className="lg:absolute relative top-0 left-0 w-full h-[350px] lg:h-full"
              src="https://www.youtube.com/embed/sJGVcb5fn2c"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-full">
            {milestonedata.map((item, index) => (
              <SwiperSlide key={index} className="p-10 h-full">
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
