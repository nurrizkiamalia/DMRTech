import Link from "next/link";

interface classnaming{
    className?: string;
}

const NavList: React.FC<classnaming> = ({className}) =>{
    const styleLink = "hover:scale-105 transition-all ease-in-out hover:text-dspLimeGreen"

    return(
        <>
            <ul className={`${className} font-dmSans text-pLg font-light`}>
                <li><Link href="/" className={styleLink}>Home</Link></li>
                <li><Link href="/About" className={styleLink}>About Us</Link></li>
                <li><Link href="/ServiceCompany" className={styleLink}>Our Services</Link></li>
                <li><Link href="/Team" className={styleLink}>Team</Link></li>
            </ul>
        </>
    )
}

export default NavList