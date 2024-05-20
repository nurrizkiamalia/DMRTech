import SubTitle from "@/components/SubTitle"
import TwoContent from "@/components/TwoContent"
import AboutUsImg from "./AboutUsImg"
  
  const AboutUs: React.FC = () => {
    return(
        <>
          <TwoContent className="pt-[15vh] xl:pt-[25vh] !flex !flex-col !gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
              <SubTitle className="col-start-1 w-fit"># Our History</SubTitle>
              <h2 className="col-start-1 xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold md:b-5 mb-2">Start from 2017</h2>
              <p className="col-start-1 font-raleway text-pL">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi magnam eaque quasi rerum, saepe aliquam praesentium vel. Consequatur consectetur ipsa dolorem sunt a aliquid praesentium commodi accusantium quibusdam quo soluta, earum sed quos ipsum! </p>
            </div>
            <AboutUsImg />
          </TwoContent>
        </>
    )
  }

  export default AboutUs