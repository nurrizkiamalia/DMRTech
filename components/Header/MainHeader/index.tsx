import { Logo } from "../Logo"
import NavList from "../NavList"
import ResponsiveHeader from "../ResponsiveHeader"

const MainHeader: React.FC = () =>{
    return(
        <div className=" w-full ">
            <div className=" z-50  fixed bg-black bg-opacity-80 w-full ">
                <div className=" grid grid-cols-3 max-xl:w-full max-xl:items-center max-xl:justify-between py-[22px] px-[30px] ">
                    <div className="max-xl:col-span-3 w-fit">
                        <Logo />
                    </div>
                    <NavList className=" max-xl:hidden flex justify-self-center gap-[35px] items-center justify-center " />
                    <button className=" max-xl:hidden justify-self-end py-[11px] px-12 border-white border-[1px] rounded-3xl shadow-lg shadow-dspGray hover:scale-105 transition-all ease ">Get Started</button>
                    <ResponsiveHeader className="hidden max-xl:block  " />
                </div>
            </div>
        </div>
        
    )
}

export default MainHeader