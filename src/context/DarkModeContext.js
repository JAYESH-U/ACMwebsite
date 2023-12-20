import { createContext, useContext, useEffect, useState } from "react";

export const DarkModeContext = createContext({
    darkMode: false,
    toggle: ()=>{},
});

export const DarkModeContextProvider = DarkModeContext.Provider;

export default function useTheme(){
    return useContext(DarkModeContext);
};