import Link from "next/link"
import Image from "next/image"
import whatsapp from "@/public/assets/whatsapp-fill.svg"
import instagram from "@/public/assets/instagram-fill.svg"
import linkedin from "@/public/assets/linkedin-box-fill.svg"
import email from "@/public/assets/mail-fill.svg"

const SocialMedia: React.FC = () => {
    return(
        <>
        <ul className="flex gap-5 text-pXXL">
            <li className="bg-dspLimeGreen rounded-full p-3 w-fit hover:bg-white"><Link href="https://wa.me/6289643168821?text=Halo%20Amalia%2C%0D%0ASaya%20ingin%20tahu%20tentang%20service" >
                <Image
                  src={whatsapp}
                  alt="arrow"
                />    
            </Link></li>
            <li className="bg-dspLimeGreen rounded-full p-3 w-fit hover:bg-white"><Link href="https://mailto:rizkiamel9@gmail.com" >
                <Image
                  src={email}
                  alt="arrow"
                />   
            </Link></li>
            <li className="bg-dspLimeGreen rounded-full p-3 w-fit hover:bg-white"><Link href="https://instagram.com" >
                <Image
                  src={instagram}
                  alt="arrow"
                />       
            </Link></li>
            <li className="bg-dspLimeGreen rounded-full p-3 w-fit hover:bg-white"><Link href="https://linkedin.com" >
                <Image
                  src={linkedin}
                  alt="arrow"
                />       
            </Link></li>
        </ul>
        </>
    )
}

export default SocialMedia