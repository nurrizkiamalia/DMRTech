import Image from "next/image"
import iconmoney from "@/public/assets/icon-money-bag.png"
import iconweb from "@/public/assets/icon-page.png"
import iconuser from "@/public/assets/icon-user.png"

interface statisticProps{
    className?:string
}

const StatisticCompany: React.FC<statisticProps> = ({className}) =>{
    const iconStyle = " p-5 rounded-full w-fit bg-black"
    const iconBoxStyle="flex items-center gap-5 xl:gap-10 justify-center hover:scale-105 transition-all ease duration-800 bg-dspBlack text-white text-black p-5 rounded-3xl  "
    return(
        <div className={` xl:my-20 grid grid-cols-1 px-5 md:px-10 xl:px-20 md:grid-cols-3  gap-5 xl:gap-10 ${className}`}>
            <div className={`${iconBoxStyle}`}>
                <div className={iconStyle}>
                    <Image 
                        src={iconmoney}
                        alt="Icon money bag"
                        width={50}
                    />
                </div>
                <div>
                    <h3 className="font-dmBricolage lg:text-pXXL text-pXL">$180M+</h3>
                    <p className="text-pMd  font-raleway">#Profit</p>
                </div>
            </div>
            <div className={iconBoxStyle}>
                <div className={iconStyle}>
                    <Image 
                        src={iconweb}
                        alt="Icon website page"
                        width={50}
                    />
                </div>
                <div>
                    <h3 className="font-dmBricolage lg:text-pXXL text-pXL ">1500+</h3>
                    <p className="text-pMd font-raleway">#Websites</p>
                </div>
            </div>
            <div className={iconBoxStyle}>
                <div className={iconStyle}>
                    <Image 
                        src={iconuser}
                        alt="Icon user"
                        width={50}
                    />
                </div>
                <div>
                    <h3 className="font-dmBricolage lg:text-pXXL text-pXL">5 Million+</h3>
                    <p className="text-pMd font-raleway">#Users</p>
                </div>
            </div>
        </div>
    )
}

export default StatisticCompany