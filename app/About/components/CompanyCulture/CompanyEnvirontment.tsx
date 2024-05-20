"use client";

import Image from "next/image"
import team1 from "@/public/assets/team-img4.webp"
import team2 from "@/public/assets/team-img5.webp"
import { useState } from "react"

const imagesRow1 = [
    team1,
    team2,
];

const imagesRow2 = [
    team2,
    team1,
];

const CompanyEnvirontment: React.FC = () => {
    const [openIndexRow1, setOpenIndexRow1] = useState<number | null>(null);
    const [openIndexRow2, setOpenIndexRow2] = useState<number | null>(null);

    const handleClickImageRow1 = (index: number) => {
        setOpenIndexRow1(prevIndex => prevIndex === index ? null : index);
    }

    const handleClickImageRow2 = (index: number) => {
        setOpenIndexRow2(prevIndex => prevIndex === index ? null : index);
    }

    return (
      <>
      <div className="flex flex-col gap-5">
        <div className="h-full flex items-center justify-center">
          <div className="relative flex h-[60%] w-full gap-3 items-stretch justify-between">
            {imagesRow1.map((src, index) => (
              <div
                key={index}
                onClick={() => handleClickImageRow1(index)}
                className={` col-start-1 col-span-2 relative ${
                  openIndexRow1 === index ? "w-full" : "w-[50%]"
                } hover:w-full transition-all duration-300 ease-in-out rounded-3xl`}
              >
                <Image
                  src={src}
                  alt={`image-row1-${index}`}
                  className=" object-cover rounded-3xl h-[300px] lg:h-[400px] "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="relative flex h-full w-full gap-3 items-stretch justify-between">
            {imagesRow2.map((src, index) => (
              <div
                key={index}
                onClick={() => handleClickImageRow2(index)}
                className={` relative ${
                  openIndexRow2 === index ? "w-full" : "w-[50%]"
                } hover:w-full transition-all duration-300 ease-in-out rounded-3xl`}
              >
                <Image
                  src={src}
                  alt={`image-row2-${index}`}
                  className=" object-cover rounded-3xl h-[300px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    );
}

export default CompanyEnvirontment;
