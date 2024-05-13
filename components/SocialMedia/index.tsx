"use client";

import { useState } from "react"
import SocialIcon from "./SocialIcon"

const SocialMedia: React.FC = () => {
    const [ show, setShow ] = useState<boolean>(false) 

    const handleToggle = () => {
        setShow(prev => !prev);
      }

    return(
        <>
            <div
                onMouseEnter={handleToggle} 
                onMouseLeave={handleToggle}
                className={`bg-dspBlack px-3 py-3 z-50 rounded-s-full border-[3px] border-white right-0 border-r-0 fixed ${show === false ? "translate-x-[80%] " : "translate-x-0 "} top-[50%] transition-all ease-in-out duration-1000 hover:shadow-xl hover:shadow-dspGray `}
            >
                <SocialIcon />
            </div>
        </>
    )
}

export default SocialMedia