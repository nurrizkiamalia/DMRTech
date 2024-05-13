import Image from "next/image"
import teaming1 from "@/public/assets/team-img4.webp"
import teaming2 from "@/public/assets/team-img5.webp"


const LeftContentCompany: React.FC = () => {

    const imgStyle = "hover:scale-110 transition-all ease "

    return(
        <>
            <div className="company grid grid-cols-2 gap-5 w-full max-xl:flex max-xl:flex-col ">
                <div className={`img-1 ${imgStyle}`}>
                <Image 
                    src={teaming1}
                    alt="team"
                    className="h-[500px] object-cover rounded-3xl"
                    priority
                />
                </div>
                <div className={`img-2 ${imgStyle}`}>
                <Image 
                    src={teaming2}
                    alt="team"
                    className="h-[500px] object-cover rounded-3xl"
                    priority
                />
                </div>
            </div>
        </>
    )
}

export default LeftContentCompany