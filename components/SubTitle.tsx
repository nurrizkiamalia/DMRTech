interface SubtitleProps{
    className?: string;
    children?: string;
}

const SubTitle: React.FC<SubtitleProps> = ({className, children}) =>{
    return(
        <span className={`capitalize text-pLg font-bold bg-dspPurple px-[30px] py-1 rounded-full max-md:text-pMd ${className}`}>{children} </span>
    )
}

export default SubTitle