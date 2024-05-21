import { MouseEventHandler, ReactNode } from "react"
import Image from "next/image";
import arrow from "@/public/assets/arrow-right-up-line.svg"

interface BtnProps{
    onCLick?: MouseEventHandler<HTMLButtonElement>;
    className?: string,
    children: JSX.Element | ReactNode
}

const Button: React.FC<BtnProps> = ({ onCLick, className, children}) => {
    return (
        <>
            <button onClick={onCLick} className={` btn w-fit font-dmSans md:text-pLg text-pMd font-bold flex items-center gap-[14px] py-[6px] pl-[30px] pr-2 border-[1px] border-white rounded-full hover:scale-110 transition-all ease-in-out hover:text-dspLimeGreen hover:border-dspLimeGreen ${className}`}> 
                {children}
                <Image
                    src={arrow}
                    alt="arrow"
                    className="bg-dspLimeGreen rounded-full"/>   
            </button>
        </>
    )
}

export default Button