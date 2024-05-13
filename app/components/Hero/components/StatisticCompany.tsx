import Image from "next/image"
import iconmoney from "@/public/assets/icon-money-bag.png"
import iconweb from "@/public/assets/icon-page.png"
import iconuser from "@/public/assets/icon-user.png"

interface statisticProps{
    className?:string
}

const StatisticCompany: React.FC<statisticProps> = ({className}) =>{
    const iconStyle = "bg-dspGray p-5 rounded-full w-fit"
    const iconBoxStyle="flex flex-col items-center justify-center hover:scale-110 transition-all ease duration-800"
    return(
        <div className={` flex items-center justify-center gap-20 max-md:gap-10 ${className}`}>
            <div className={iconBoxStyle}>
                <div className={iconStyle}>
                    <Image 
                        src={iconmoney}
                        alt="Icon money bag"
                        width={20}
                    />
                </div>
                <h3 className="font-dmBricolage max-md:text-pXXL max-sm:text-pXL text-heading3">$180M</h3>
                <p className="text-pMd  font-raleway">#Profit</p>
            </div>
            <div className={iconBoxStyle}>
                <div className={iconStyle}>
                    <Image 
                        src={iconweb}
                        alt="Icon website page"
                        width={20}
                    />
                </div>
                <h3 className="font-dmBricolage max-md:text-pXXL max-sm:text-pXL text-heading3">1000</h3>
                <p className="text-pMd font-raleway">#Websites</p>
            </div>
            <div className={iconBoxStyle}>
                <div className={iconStyle}>
                    <Image 
                        src={iconuser}
                        alt="Icon user"
                        width={20}
                    />
                </div>
                <h3 className="font-dmBricolage max-md:text-pXXL max-sm:text-pXL text-heading3">5 Million</h3>
                <p className="text-pMd font-raleway">#Users</p>
            </div>
        </div>
    )
}

export default StatisticCompany