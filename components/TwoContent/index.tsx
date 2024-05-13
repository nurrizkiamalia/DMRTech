import { ReactNode } from "react";

interface TwoContents { 
    className?: string;
    children: JSX.Element | ReactNode;
  }

const TwoContent: React.FC<TwoContents> = ({children, className}) => {
    return(
        <>
            <div className={` grid grid-cols-2 py-14 px-20 max-xl:grid-cols-1 max-lg:gap-20 max-xl:px-14 max-lg:px-10 max-sm:px-5 ${className}`}>{children}</div>
        </>
    )
}

export default TwoContent