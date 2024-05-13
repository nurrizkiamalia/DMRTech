import bgImg from '@/public/assets/bg-hero.webp'
import heroBgBlue from '@/public/assets/hero-img-bg-blue.webp'
import heroWebImg from '@/public/assets/hero-img-web.webp'
import heroImgChat from '@/public/assets/hero-img-chat.webp'
import heroImgChart from '@/public/assets/hero-img-chart.webp'
import Image from 'next/image'

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
                    />
                    <div className='flex items-center justify-center'>
                    <Image 
                        src={heroBgBlue} 
                        alt="background"
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