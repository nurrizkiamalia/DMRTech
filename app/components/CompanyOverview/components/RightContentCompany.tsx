"use client";

import { useState } from "react"
import ButtonLearnMore from "./ButtonLearnMore"
import companyoverviewdata from "@/data/companyoverviewdata";

const RightContentCompany: React.FC = () => {

    return(
        <>
            <div>
                <span className="text-pLg font-bold bg-dspPurple px-[30px] py-1 rounded-full ">#2 about us</span>
                <h2 className="text-heading2 max-lg:text-heading3 font-dmBricolage mb-5">Our Company</h2>
                <p className="font-raleway text-pLg">What we can do to help you achieve the best performance for your business website.</p>
                <div>
                    <div className="font-raleway my-10">
                        <div className="flex items-center justify-between  bg-dspGray py-3 px-[30px] rounded-t-3xl ">
                            <p className="text-pXXL max-md:text-pXL max-sm:text-lg">About Us</p>
                        </div>
                        <div className= {` text-black text-pLg bg-dspLightGray py-[22px] px-[30px] rounded-b-3xl `}>
                            <p className="line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta nulla dolore amet, itaque quasi ad eligendi quas ipsam consectetur earum esse, totam ex impedit! Architecto, consequatur accusantium? Quibusdam recusandae sequi non nobis architecto enim possimus voluptates optio labore quae natus, omnis magnam aspernatur accusantium fugiat cumque error, sapiente qui.</p>
                        </div>
                    </div>
                </div>
                <ButtonLearnMore />
            </div>
        </>
    )
}

export default RightContentCompany