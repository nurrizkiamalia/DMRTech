import Link from "next/link";

interface classnaming{
    className?: string;
}

const NavList: React.FC<classnaming> = ({className}) =>{
    const styleLink = "hover:scale-105 transition-all ease-in-out hover:text-dspLimeGreen"

    return(
        <>
            <ul className={`${className} font-dmSans text-pLg font-light`}>
                <li className={styleLink}><Link href="/" >Home</Link></li>
                <li className={styleLink}><Link href="/About" >About Us</Link></li>
                <li className={styleLink}><Link href="/ServiceCompany" >Our Services</Link></li>
                <li className={styleLink}><Link href="/Team" >Team</Link></li>
            </ul>
        </>
    )
}

export default NavList