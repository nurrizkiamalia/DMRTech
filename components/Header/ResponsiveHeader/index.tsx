"use client";

import SocialMedia from "@/components/SocialMedia";
import NavList from "../NavList"
import { useState } from "react"

interface ResponsiveProps{
    className?: string
}

const ResponsiveHeader: React.FC<ResponsiveProps> = ({className}) =>{
    const [ menuShow, setMenuShow ] = useState<boolean>(false)

    const handleMenuOpen = () => {
        setMenuShow(prev => !prev)
    }

    return(
        <>
            <div className={` responsive-nav z-50 right-0 top-0 ${className} `}>
                <div className="menu-toggle top-0 pr-5 right-0 fixed">
                    <button className="  bg-dspPurple border-[3px] border-white hover:bg-dspLimeGreen hover:text-black text-head3 py-5 rounded-full cursor-pointer px-7 hover:shadow-lg hover:shadow-gray" onClick={handleMenuOpen}>
                    =
                    </button>
                </div>

            {menuShow && (
                <div className="menu-open px-5 xl:px-[60px] xl:pl-[97px] z-99 h-screen right-0 top-0 md:w-[50vw] w-screen bg-dspBlack hover:bg-dspPurple border-l-[3px] border-white hover:text-white flex flex-col items-start gap-20 fixed justify-start ">
                    <button className=" hover:bg-dspLimeGreen hover:text-black self-end border-2 border-offwhite px-8 py-5 rounded-full cursor-pointer hover:bg-offwhite hover:shadow-lg hover:shadow-gray " onClick={handleMenuOpen}>x</button>
                    <div className="menu-nav">
                        <NavList onClick={handleMenuOpen} className=" flex flex-col -mt-10 text-pXXL md:text-[30px] lg:text-heading3 " />
                    </div>
                    <div className="menu-contact">
                        <SocialMedia />
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default ResponsiveHeader