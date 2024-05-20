import Link from "next/link"

const SocialMedia: React.FC = () => {
    return(
        <>
        <ul className="flex gap-5 text-pXXL">
            <li><Link href="https://wa.me/6289643168821?text=Halo%20Amalia%2C%0D%0ASaya%20ingin%20tahu%20tentang%20service"><i className="ri-whatsapp-fill"></i></Link></li>
            <li><Link href="https://mailto:rizkiamel9@gmail.com"><i className="ri-mail-fill"></i></Link></li>
            <li><Link href="https://instagram.com"><i className="ri-instagram-fill"></i></Link></li>
            <li><Link href="https://linkedin.com"><i className="ri-linkedin-fill"></i></Link></li>
        </ul>
        </>
    )
}

export default SocialMedia