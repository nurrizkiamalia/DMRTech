import Marquee from "react-fast-marquee"
import Image from "next/image";

const PartnerBanner: React.FC = () => {

    const images = [
        '/assets/logo-dribbble.webp',
        '/assets/logo-framer.webp',
        '/assets/logo-upwork.webp',
        '/assets/icon-figma.webp',
        '/assets/icon-googleanalytics.webp',
        '/assets/twitter.webp',
        '/assets/linkedin.webp',
    ];

    return(
        <>
        <div className="bg-dspBlack p-5">
            <p className="text-center text-pXXL text-pretty font-dmBricolage font-semibold">Trusted by our partners</p>
            <Marquee className="w-full " direction="right" pauseOnHover={true} autoFill>
                <div className="tagline-banner flex gap-20 pt-5 px-14 ]ont-bold font-dmBricolage w-full">
                {images.map((src, index) => (
                    <div key={index} className="">
                        <Image
                        src={src}
                        alt={`image ${src}`}
                        width={50}
                        height={50}
                        className=" w-full h-full object-contain " />
                    </div>
                ))}
                </div>
            </Marquee>
        </div>
        </>
    )
}

export default PartnerBanner