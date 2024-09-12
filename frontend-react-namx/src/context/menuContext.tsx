import React, { useState, createContext } from "react";

type MenuContextProviderProps = {
    children: boolean
}
const ThemeContext = createContext(false);

export default function OpenContext({ children }: MenuContextProviderProps) {
    const [open, setOpen] = useState(false);
    return (
        <ThemeContext.Provider value={open} >
            {children}
        </ThemeContext.Provider>
    )
}