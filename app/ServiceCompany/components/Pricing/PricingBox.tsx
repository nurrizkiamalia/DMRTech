import pricingdata from "@/data/pricingdata";
import Image from "next/image";
import spark from "@/public/assets/sparkling-2-fill.svg";

const PricingBox: React.FC = () => {
  const pricingBoxStyle =
    "bg-dspGray hover:bg-dspBlack hover:text-white hover:shadow-2xl border-[1px] border-dspLightGray hover:border-white hover:shadow-gray-700 hover:scale-105 transition-all ease-in-out shadow-lg shadow-gray-800 p-5 rounded-3xl flex flex-col gap-2 lg:gap-5 even:bg-dspBlack relative justify-between";

  return (
    <>
      <div className="grid grid-cols-1  lg:grid-cols-3 font-raleway gap-5">
        {pricingdata.map((item, index) => (
          <div key={index} className={`pricing-box ${pricingBoxStyle} `}>
            <div
              className={` ${
                item.popular === true ? "block" : "hidden"
              } bg-dspPurple w-fit p-2 absolute top-10 -right-2`}
            >
              <p className="uppercase font-bold text-pXL text-white">
                Best Offer
              </p>
            </div>
            <div className="">
                <div className="bg-dspLimeGreen rounded-full p-3 w-fit">
                    <Image
                        src={spark}
                        alt="arrow"
                        width={40}
                        height={40}
                        className=" "
                    />
                </div>
              <h2 className="text-pXL mt-5 lg:text-pXXL xl:text-heading3 font-dmBricolage font-bold">
                {item.title}
              </h2>
              <p className="text-pXL font-light">{item.bestFor}</p>
              <p className="text-pXXL xl:text-heading3 font-bold ">
                ${item.price}{" "}
                <span className="text-pSm md:text-pMd font-normal text-gray-300 ">
                  / Per {item.page}{" "}
                </span>
              </p>
            </div>
            <hr className="border-gray-600" />
            <div className="flex flex-col gap-3 justify-between">
              <p className=" text-pXXL font-semibold">Feature</p>
              <ul className="flex flex-col gap-3 mb-5">
                {item.features.map((feature, indexFeature) => (
                  <li
                    key={indexFeature}
                    className="font-raleway text-pSm md:text-pMd flex text-gray-300 gap-2"
                  >
                    <i className="ri-focus-fill text-dspPurple"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="border-2 bg-dspLimeGreen border-black hover:border-dspLimeGreen py-3 rounded-3xl text-black font-bold hover:bg-dspBlack hover:text-white ">
              Start with {item.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingBox;
