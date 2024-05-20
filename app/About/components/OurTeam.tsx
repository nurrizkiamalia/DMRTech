"use client";

import SubTitle from "@/components/SubTitle";
import teamsdata from "@/data/teamsdata";
import useTeam from "@/hook/useTeam";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OurTeam: React.FC = () => {
  const seed = "foobar";
  const { teamData } = useTeam(teamsdata.length, seed);

  return (
    <>
      <div className="xl:py-14 xl:px-20 lg:px-14 md:px-10 py-10 px-5 h-full">
        <div className="flex flex-col xl:mb-10 items-start">
          <SubTitle># We make it true!</SubTitle>
          <h2 className="xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold lg:mb-5 mb-2">
            The Teams
          </h2>
          <p className="font-raleway text-pL">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi magnam eaque quasi rerum, saepe aliquam praesentium vel.  </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }} 
          modules={[Pagination]}
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
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          className="mySwiper w-full team h-fit my-10"
        >
          {teamsdata.map((data, index) => (
            <SwiperSlide
              key={index}
              className={` ${
                index <= 5 ? "block" : "!hidden"
              } team-member px-5 py-3 h-full  `}
            >
              <div className="rounded-3xl bg-dspGray shadow-md flex  flex-col gap-5 items-center shadow-gray-800 pb-5">

              
              {teamData[index] && (
                <>
                  <Image
                    src={teamData[index].picture.large}
                    alt={`${teamData[index].name.first} ${teamData[index].name.last}'s picture`}
                    width={400}
                    height={200}
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-3xl self-center"
                  />
                  <div className="p-5 w-full">
                    <div className=" w-full flex flex-col bg-dspBlack p-3 mb-5 rounded-3xl ">
                      <h3 className="text-pLg xl:text-pXXL font-bold font-dmBricolage">
                        {teamData[index].name.first}-{teamData[index].name.last}
                      </h3>
                      <p className="text-pSm ">{data.job}</p>
                    </div>
                    <p className="w-fit text-pmd line-clamp-5">{data.experience}</p>
                  </div>
                </>
              )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div></div>
    </>
  );
};

export default OurTeam;
