"use client";

import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {ThemeContextInterface, ThemeType} from "@/context/ThemeContext/types";


const ThemeContext = createContext<ThemeContextInterface>({});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [mode, setMode] = useState<ThemeType>("dark");


    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "light") setMode("light");
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", mode);
    }, [mode]);


    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{toggle, mode}}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextInterface => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};