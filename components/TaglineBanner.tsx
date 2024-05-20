import Marquee from "react-fast-marquee"

const TaglineBanner: React.FC = () => {
    return(
        <>
        <Marquee className="" pauseOnHover={true} autoFill>
            <div className="tagline-banner py-5 bg-dspBlack font-bold font-dmBricolage w-full">
                <h1 className="text-pXL font-light text-dspLimeGreen ">  Speed Meets Style: Modern Web Development with Optimized Performance ✨ <span className="text-dspPurple">  Speed Meets Style: Modern Web Development with Optimized Performance </span> ✨ </h1>
            </div>
        </Marquee>
        </>
    )
}

export default TaglineBanner