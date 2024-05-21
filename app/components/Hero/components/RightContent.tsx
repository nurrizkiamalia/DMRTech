"use client";

import Image from "next/image";
import image1 from "@/public/assets/website2.webp";
import image2 from "@/public/assets/hero-img.webp";
import image3 from "@/public/assets/website.webp";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const images = [image1, image2, image3];

const RightContentHero: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClickImage = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative hidden xl:flex h-full w-full gap-3 items-stretch justify-between">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => handleClickImage(index)}
            className={` relative ${
              openIndex === index ? "xl:w-full" : "xl:w-[40%]"
            } hover:w-full transition-all duration-300 ease-in-out rounded-3xl`}
          >
            <Image
              src={src}
              alt={`image-${index}`}
              className=" object-cover rounded-3xl"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="xl:hidden w-full flex justify-center items-center">
        <Image
          src={image2}
          alt={`image`}
          className="rounded-3xl hover:scale-110 transition-all ease-linear"
          width={800}
          height={800}
          priority
        />
      </div>
    </div>
  );
};

export default RightContentHero;
