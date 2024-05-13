import Image from "next/image"
import teaming1 from "@/public/assets/team-img4.webp"
import teaming2 from "@/public/assets/team-img5.webp"

const LeftContentCompany: React.FC = () => {

    const imgStyle = " transition-all ease h-[500px] object-cover rounded-3xl hover:scale-105"

    return(
        <>
            <div className="company grid grid-cols-2 gap-5 w-full h-fit max-xl:flex max-xl:flex-col ">
                <div className={`img-1 overflow-hidden rounded-3xl`}>
                <Image 
                    src={teaming1}
                    alt="team"
                    className={imgStyle}
                    priority
                />
                </div>
                <div className={`img-2 overflow-hidden rounded-3xl`}>
                <Image 
                    src={teaming2}
                    alt="team"
                    className={imgStyle}
                    priority
                />
                </div>
            </div>
        </>
    )
}

export default LeftContentCompany