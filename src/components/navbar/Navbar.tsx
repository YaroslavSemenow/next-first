"use client";

import Link from 'next/link'
import styles from "./navbar.module.css";
import {links} from "@/components/navbar/NavbarHelpers";
import DarkModeToggle from "@/components/DarkModeToggle/DarkModeToggle";


function Navbar() {
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href="/">Next.js Base</Link>
            <div className={styles.links}>
               <DarkModeToggle/>

                {links.map((link, i) =>
                    <Link
                        key={i}
                        href={link.url}
                    >
                        {link.title}
                    </Link>
                )}

                <button
                    className={styles.logout}
                    onClick={() => {
                        console.log("logout")
                    }}
                >
                    logout
                </button>
            </div>
        </div>
    )
}

export default Navbar