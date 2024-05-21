"use client";
import SubTitle from "@/components/SubTitle"
import teamsdata from "@/data/teamsdata"
import useTeam from "@/hook/useTeam";
import Image from "next/image"
import iconTwitter from "@/public/assets/icon-twitter.png"
import iconLinkedin from "@/public/assets/icon-linkedin.png"
import Link from "next/link";

const Team: React.FC = () =>{
    const seed = "foobar";
    const { teamData } = useTeam(teamsdata.length, seed);

    return(
        <>
            <div className=" grid grid-cols-1 gap-5 xl:grid-cols-3 team pt-[20vh] py-14 px-20 max-xl:px-14 max-lg:px-10 max-sm:px-5 font-raleway relative h-full">
                <div className=" xl:sticky relative xl:top-28 h-fit z-[1] xl:col-span-1 flex flex-col gap-5 max-md:gap-2 items-start">
                    <SubTitle># Full Team Here!</SubTitle>
                    <h2 className="text-heading2 max-lg:text-heading3 max-md:text-pXXL font-dmBricolage font-semibold mb-5 max-md:mb-2">Our Team</h2>
                    <p className="text-pLg md:text-pXL xl:text-pXXL text-gray-300">The people behind our great works.</p>
                </div>
                <div className="xl:col-start-2 xl:col-span-3 flex flex-col gap-5 xl:gap-10">
                    <div className="flex flex-col gap-5">
                        <hr className="w-[50px] border-2 rounded-full " />
                        <p className="text-pSm md:text-pLg xl:text-pXL text-gray-300">At DMRTech, we are proud to have a diverse and talented team of professionals dedicated to delivering top-notch web development services. Our team consists of experts in front end and back end development, UI/UX design, brand and product design, and search engine optimization..</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 team-box">
                    {teamsdata.map((data, index) => (
                        <div key={index} className=" shadow-shadowStripe team-member rounded-3xl pt-10 flex flex-col gap-2 items-start bg-dspBlack text-white   ">
                        {teamData[index] && (
                            <>
                            <Image
                                src={teamData[index].picture.large}
                                alt={`${teamData[index].name.first} ${teamData[index].name.last}'s picture`}
                                width={200}
                                height={200}
                                className="rounded-full self-center "
                            />
                            <div className="p-5 w-full">
                                <div className="bg-dspLimeGreen shadow-lg shadow-gray-800 w-full p-5 text-black rounded-3xl">    
                                    <h3 className="text-pXXL font-bold font-dmBricolage">{teamData[index].name.first}-{teamData[index].name.last}</h3>
                                    <p className="text-pSm">{data.job}</p>
                                    <p className="lg:text-pXL text-pMd font-medium "> {teamData[index].email} </p>
                                    <p className="lg:text-pXL text-pMd font-medium ">{teamData[index].phone}</p>
                                </div>
                            </div>
                            </>
                        )}
                        <div className=" flex flex-col gap-5 pt-0 p-5"> 
                            <p className="w-fit text-pLg ">{data.experience}</p>
                            <div className="flex gap-5">
                                <div className="bg-dspGray rounded-full  p-3 hover:bg-dspLightGray cursor-pointer">    
                                    <Link href="https://linkedin.com">
                                        <Image
                                        src={iconLinkedin}
                                        width={30}
                                        alt="linkedin"
                                        className=""/>
                                    </Link>
                                </div>
                                <div className="bg-dspGray rounded-full  p-3 hover:bg-dspLightGray cursor-pointer">    
                                    <Link href="https://twitter.com">
                                        <Image
                                        width={30}
                                        src={iconTwitter}
                                        alt="twitter"
                                        className=""/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team