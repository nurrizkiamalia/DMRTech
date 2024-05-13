import Link from "next/link"
import Image from "next/image"
import email from "@/public/assets/icon-email.png"
import twitter from "@/public/assets/icon-twitter.png"
import whatsapp from "@/public/assets/icon-wa.png"
import instagram from "@/public/assets/icon-ig.png"

const SocialIcon: React.FC = () => {
    return(
        <>
            <div className="flex gap-5 max-lg:gap-2 ">
                <Link href={"http://gmail.com"}>
                    <Image 
                        src={email}
                        alt="email"
                        className="max-lg:w-[60%] hover:scale-90"
                    />
                </Link>
                <Link href={"http://twitter.com"}>
                    <Image 
                        src={twitter}
                        alt="twitter"
                        className="max-lg:w-[60%] hover:scale-90"
                    />
                </Link>
                <Link href={"http://whatsapp.com"}>
                    <Image 
                        src={whatsapp}
                        alt="whatsapp"
                        className="max-lg:w-[60%] hover:scale-90"
                    />
                </Link>
                <Link href={"http://instagram.com"}>
                    <Image 
                        src={instagram}
                        alt="instagram"
                        className="max-lg:w-[60%] hover:scale-90"
                    />
                </Link>
            </div>
        </>
    )
}

export default SocialIcon