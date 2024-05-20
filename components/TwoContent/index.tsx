import { ReactNode } from "react";

interface TwoContents { 
    className?: string;
    children: JSX.Element | ReactNode;
  }

const TwoContent: React.FC<TwoContents> = ({children, className}) => {
    return(
        <>
            <div className={` grid grid-cols-1 xl:gap-20 gap-10 py-14 xl:grid-cols-2 xl:px-20 lg:px-14 md:px-10 px-5 ${className}`}>  {children}
            </div>
        </>
    )
}

export default TwoContent