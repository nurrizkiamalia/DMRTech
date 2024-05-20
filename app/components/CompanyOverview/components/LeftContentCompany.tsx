import Image from "next/image"
import companyoverviewdata from "@/data/companyoverviewdata"
import Link from "next/link"

const LeftContentCompany: React.FC = () => {

    const linkToId = [
        "milestone",
        "team",
        "culture"
    ]

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 font-raleway gap-5">
            {companyoverviewdata.map((item, index) => (
                <div key={index} className="flex flex-col gap-5 bg-dspBlack p-5 rounded-3xl items-start">
                    <h3 className="text-pXXL font-semibold font-dmBricolage ">{item.title}</h3>
                    <p className="line-clamp-3 text-pMd font-light text-dspLightGray">{item.description}</p>
                    <Image 
                        src={`/assets/${item.image}`}
                        alt={item.title}
                        width={1000}
                        height={200}
                        className="h-[200px] object-cover object-center rounded-3xl"
                    />
                    <Link href={`/About/#${linkToId[index]}`} className="-mt-16 rounded-full self-end py-5 px-3 bg-dspBlack">
                        <i className="ri-arrow-right-up-line hover:bg-dspLimeGreen text-black text-heading3 p-5 bg-white rounded-full"></i>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default LeftContentCompany
