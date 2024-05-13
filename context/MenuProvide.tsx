"use client"

import { ReactNode, useState } from "react"
import MenuContext from "./MenuContext"

interface MenuProviderProps{
    children: JSX.Element | ReactNode
}

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) =>{
    const [ menuShow, setMenuShow ] = useState<boolean>(false)

    const handleToggleMenu = () => {
        setMenuShow(prevState => !prevState)
    }

    return(
        <MenuContext.Provider value={{menuShow: menuShow, setMenuShow() {
            handleToggleMenu
        },}}>
            {children}    
        </MenuContext.Provider>
    )
}

export default MenuProvider