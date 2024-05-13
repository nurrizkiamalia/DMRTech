import SubTitle from "@/components/SubTitle"
import TwoContent from "@/components/TwoContent"
import Image from "next/image"  
import teamimg from "@/public/assets/team-img4.webp"
  
  const AboutUs: React.FC = () => {
    return(
        <>
          <TwoContent className="pt-[25vh] max-xl:flex max-xl:flex-col-reverse">
            <div className="flex flex-col gap-5 max-md:gap-2 items-start">
              <SubTitle># About Us</SubTitle>
              <h2 className="text-heading2 max-lg:text-heading3 max-md:text-pXXL font-dmBricolage font-semibold mb-5 max-md:mb-2">History</h2>
              <p className="font-raleway text-pLg bg-dspGray p-[30px] max-md:p-5 mr-5 rounded-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi magnam eaque quasi rerum, saepe aliquam praesentium vel. Consequatur consectetur ipsa dolorem sunt a aliquid praesentium commodi accusantium quibusdam quo soluta, earum sed quos ipsum! <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus nisi sed libero voluptatibus omnis vero ipsum velit beatae aperiam eos, facilis magnam aut error voluptas maiores architecto nemo fuga, ratione fugiat! Perspiciatis expedita assumenda quis, cum officiis dolores fugit?</p>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <Image src={teamimg} alt="image" className="rounded-3xl w-full h-[600px] max-xl:h-[500px] max-lg:h-[400px] max-md:h-[300px] object-cover  hover:scale-110 transition-all ease" />
            </div>
          </TwoContent>
        </>
    )
  }

  export default AboutUs