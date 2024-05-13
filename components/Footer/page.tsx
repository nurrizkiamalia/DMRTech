import Image from "next/image"
import logo from "@/public/logo.png"
import NavList from "../Header/NavList"
import Link from "next/link"

const Footer: React.FC = () =>{
    return(
        <>
            <div className=" z-10 border-t-2 border-white flex flex-col gap-5 p-20 pb-5 bg-black max-xl:py-10 max-xl:px-14 max-lg:py-10 max-lg:px-10 max-sm:px-5">
                <div className="footer grid grid-cols-6 max-xl:grid-cols-3 gap-14 max-lg:grid-cols-1 ">
                    <div className="h-fit max-xl:w-screen col-start-1 col-span-2 max-xl:col-start-1 max-xl:col-end-2 max-lg:col-start-1 flex flex-col gap-[35px] max-lg:gap-5 ">
                        <Image src={logo} alt="" />
                        <p className="font-raleway text-pXL mr-10">What we can do to help you achieve the best performance for  your business website.</p>
                    </div>
                    <div className="h-fit flex flex-col gap-[35px] max-lg:gap-5 col-start-3 max-xl:col-start-2 max-xl:col-end-3 max-lg:col-start-1">
                        <span className="text-pXXL font-semibold">Quick Menu</span>
                        <NavList className="flex flex-col gap-5" />
                    </div>
                    <div className="h-fit flex flex-col gap-[35px] max-lg:gap-5 col-start-4 col-span-3 max-xl:col-start-3 max-xl:col-end-4 max-lg:col-start-1">
                        <span className="text-pXXL font-semibold">Information Menu</span>
                        <div className="font-dmSans text-pLg flex flex-col gap-5">
                            <Link href={"http://mailto:rizkiamel9@gmail.com"} className="hover:scale-[1.02] hover:text-dspLimeGreen transition-all ease">Rizkiamel9@gmail.com</Link>
                            <Link href={"http://whatsapp.com"} className="hover:scale-[1.02] hover:text-dspLimeGreen transition-all ease">+628964316**21</Link>
                            <Link href={"https://www.google.com/maps/place/Purwadhika+Digital+Technology+School+-+Batam/@1.1867298,104.1022425,17.33z/data=!4m15!1m8!3m7!1s0x31da297f13b74cb5:0x13028fd2c3ea9993!2sPurwadhika+Digital+Technology+School+-+Batam!8m2!3d1.1860771!4d104.1021698!10e1!16s%2Fg%2F11tf72ggd2!3m5!1s0x31da297f13b74cb5:0x13028fd2c3ea9993!8m2!3d1.1860771!4d104.1021698!16s%2Fg%2F11tf72ggd2?entry=ttu"} className="hover:scale-[1.02] hover:text-dspLimeGreen transition-all ease">Sambau, Nongsa, Batam Riau Indonesia</Link>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="font-raleway text-pLg">&copy; 2024. <strong>DMRTech.</strong>  All right reserved.</p>
            </div>
        </>
    )
}

export default Footer