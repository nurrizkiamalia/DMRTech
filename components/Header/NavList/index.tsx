import Link from "next/link";

interface classnaming{
    className?: string;
}

const NavList: React.FC<classnaming> = ({className}) =>{
    const styleLink = "hover:scale-105 transition-all ease-in-out hover:text-dspLimeGreen"

    return(
        <>
            <ul className={`${className} font-dmSans text-pLg font-light`}>
                <Link href="/" className={styleLink}><li>Home</li></Link>
                <Link href="/About" className={styleLink}><li>About Us</li></Link>
                <Link href="/ServiceCompany" className={styleLink}><li>Our Services</li></Link>
                <Link href="/Team" className={styleLink}><li>Team</li></Link>
            </ul>
        </>
    )
}

export default NavList