"use client";
import { createContext } from "react";

const defaultValue = {
    menuShow: false,
    setMenuShow: () => {},
}

interface MenuContextType{
    menuShow: boolean,
    setMenuShow: () => void
}

const MenuContext = createContext<MenuContextType>(defaultValue)

export default MenuContext