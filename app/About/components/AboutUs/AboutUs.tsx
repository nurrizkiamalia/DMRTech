import SubTitle from "@/components/SubTitle"
import TwoContent from "@/components/TwoContent"
import AboutUsImg from "./AboutUsImg"
  
  const AboutUs: React.FC = () => {
    return(
        <>
          <TwoContent className="pt-[15vh] xl:pt-[25vh] !flex !flex-col !gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
              <SubTitle className="col-start-1 w-fit"># Our History</SubTitle>
              <h2 className="col-start-1 xl:text-heading2 lg:text-heading3 text-pXXL font-dmBricolage font-semibold md:b-5 mb-2">About Us</h2>
              <p className="col-start-1 font-raleway text-pL">Discover our journey from a small startup to a leading tech innovator. Our dedicated team of professionals is driven by a shared passion for technology and excellence. We specialize in delivering top-tier web development, UI/UX design, SEO, and brand design services that empower businesses to thrive in the digital landscape. </p>
            </div>
            <AboutUsImg />
          </TwoContent>
        </>
    )
  }

  export default AboutUs