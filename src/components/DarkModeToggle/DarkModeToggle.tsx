"use client"

import React, {useContext} from "react";
import styles from "./darkModeToggle.module.css";
import {useTheme} from "@/context/ThemeContext/ThemeContext";

const DarkModeToggle = () => {
    const {toggle, mode} = useTheme();

    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div
                className={styles.ball}
                style={mode === "light" ? {left: "2px"} : {right: "2px"}}
            />
        </div>
    );
};

export default DarkModeToggle;