import SubTitle from "@/components/SubTitle";
import companyculture from "@/data/companyculture";
import CompanyEnvirontment from "./CompanyEnvirontment";

const CompanyCulture: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center xl:py-14 xl:px-20 lg:px-14 md:px-10 py-10 px-5" id="culture">
        <div className=" h-full ">
          <div className="  grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2 items-start">
            <SubTitle className="col-start-1 w-fit">
              # Company Culture
            </SubTitle>
            <h2 className="col-start-1 xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold lg:mb-5 mb-2">
              How we work
            </h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-10 ">
            <div>
              <CompanyEnvirontment />
            </div>
            <div className=" self-start justify-self-start grid grid-cols-1 md:grid-cols-2 gap-5">
              {companyculture.map((item, index) => (
                <div key={index} className=" hover:scale-105 transition-all ease-in-out shadow-liteShadow shadow-dspLightGray hover:shadow-bottomShadow hover:shadow-white h-full bg-dspBlack p-5 rounded-3xl flex flex-col items-start justify-start gap-2">
                  <p className="text-dspLightGray">0{index+1} </p>
                  <h3 className="text-dspLimeGreen font-bold font-dmBricolage text-pXL xl:text-[22px] ">
                    {item.title}, {item.culture}
                  </h3>
                  <p className="text-pMd font-light text-dspLightGray">{item.explanation} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyCulture;