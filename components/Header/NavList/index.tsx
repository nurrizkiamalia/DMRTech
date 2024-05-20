import Link from "next/link";
import { MouseEventHandler } from "react";

interface classnaming{
    className?: string;
    onClick?: MouseEventHandler<HTMLUListElement>
}

const NavList: React.FC<classnaming> = ({className, onClick}) =>{
    const styleLink = "hover:scale-105 transition-all ease-in-out hover:text-dspLimeGreen"

    return(
        <>
            <ul onClick={onClick} className={`${className} font-dmSans text-pLg font-light`}>
                <li className={styleLink}><Link href="/" >Home</Link></li>
                <li className={styleLink}><Link href="/About" >About Us</Link></li>
                <li className={styleLink}><Link href="/ServiceCompany" >Our Services</Link></li>
                <li className={styleLink}><Link href="/Team" >Team</Link></li>
            </ul>
        </>
    )
}

export default NavList