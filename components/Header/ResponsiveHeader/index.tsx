"use client";

import NavList from "../NavList"
import { useState } from "react"
import SocialIcon from "@/components/SocialMedia/SocialIcon";

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
                <div className="menu-open p-[60px] pl-[97px] z-99 h-svh right-0 top-0 w-[50vw] max-md:w-[100%] bg-dspBlack hover:bg-dspPurple border-l-[3px] border-white hover:text-white flex flex-col items-start fixed justify-between ">
                    <button className=" hover:bg-dspLimeGreen hover:text-black self-end border-2 border-offwhite px-8 py-5 rounded-full cursor-pointer hover:bg-offwhite hover:shadow-lg hover:shadow-gray " onClick={handleMenuOpen}>x</button>
                    <div className="menu-nav">
                        <NavList className=" flex flex-col -mt-10 !text-heading3 max-md:!text-pXXL" />
                    </div>
                    <div className="menu-contact">
                        <SocialIcon />
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default ResponsiveHeader