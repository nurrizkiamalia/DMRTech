import bgImg from '@/public/assets/bg-hero.png'
import heroBgBlue from '@/public/assets/hero-img-bg-blue.png'
import heroWebImg from '@/public/assets/hero-img-web.png'
import heroImgChat from '@/public/assets/hero-img-chat.png'
import heroImgChart from '@/public/assets/hero-img-chart.png'
import Image from 'next/image'
import imgHeading from "@/public/assets/heading-img.png"

const RightContentHero: React.FC = () => {

    const imgStyle = "absolute hover:scale-110 transition-all ease"

    return(
        <div className=' flex justify-center items-start'>
            <div className='w-fit'>
                
                <div className='relative w-fit'>
                    <Image 
                    src={bgImg} 
                    alt="background"
                    className='relative'
                    priority={false}
                    />

                    {/* <span className="absolute mb-5 top-0 left-0 flex gap-5 max-md:gap-0 w-fit items-center ">
                            <span className="">
                                <Image 
                                src={imgHeading}
                                alt="Image"
                                className="rounded-full"
                                />
                                <span className="bg-dspBlack w-fit absolute top-0 right-0 mt-1 mr-1 px-8 rounded-full text-heading3 cursor-context-menu ">
                                    <p className="">🚀</p>
                                </span>
                            </span>
                        </span> */}
                    <div className='flex items-center justify-center'>
                    <Image 
                        src={heroBgBlue} 
                        alt="background"
                        priority={false}
                        className={` bottom-10 ${imgStyle} max-md:w-[80%]`} 
                    />
                    <Image 
                        src={heroWebImg} 
                        alt="web"
                        className={` bottom-14 ${imgStyle} max-md:w-[70%]`} 
                    />
                    <Image 
                        src={heroImgChart} 
                        alt="chart"
                        className={`bottom-20 -right-10 ${imgStyle} max-md:w-[30%]`} 
                    />
                    <Image 
                        src={heroImgChat} 
                        alt="chat"
                        className={`bottom-5 left-0 ${imgStyle} max-md:w-[30%]`} 
                    />
                </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default RightContentHero