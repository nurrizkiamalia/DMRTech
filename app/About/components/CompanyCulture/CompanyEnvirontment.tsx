"use client";

import Image from "next/image"
import office1 from "@/public/assets/team-img8.webp"
import office3 from "@/public/assets/team-img5.webp"
import office2 from "@/public/assets/office3.webp"
import office4 from "@/public/assets/team-img1.webp"
import { useState } from "react"

const imagesRow1 = [
    office1,
    office2,
];

const imagesRow2 = [
    office3,
    office4,
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
                  height={500}
                  width={500}
                  className=" object-cover rounded-3xl"
                  style={{
                    height: "350px"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="relative flex h-[60%] w-full gap-3 items-stretch justify-between">
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
                  height={500}
                  width={500}
                  className=" object-cover rounded-3xl"
                  style={{
                    height: "350px"
                  }}
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
