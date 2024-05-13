import { MouseEventHandler, ReactNode } from "react"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

interface BtnProps{
    onCLick?: MouseEventHandler<HTMLButtonElement>;
    className?: string,
    children: JSX.Element | ReactNode
}

const Button: React.FC<BtnProps> = ({ onCLick, className, children}) => {
    return (
        <>
            <button onClick={onCLick} className={` btn w-fit font-dmSans text-pLg max-sm:text-pMd font-bold flex items-center gap-[14px] py-[6px] pl-[30px] pr-2 border-[1px] border-white rounded-full hover:bg-white hover:text-dspBlack hover:border-dspLimeGreen ${className}`}> 
                {children}
                <FontAwesomeIcon icon={faArrowRightLong} className="icon bg-dspLimeGreen text-dspBlack p-2 text-pXL rounded-full  " />
            </button>
        </>
    )
}

export default Button