"use client";

import Link from 'next/link'
import styles from "./navbar.module.css";
import {links} from "@/components/navbar/NavbarHelpers";
import DarkModeToggle from "@/components/DarkModeToggle/DarkModeToggle";
import {signOut, useSession} from "next-auth/react";


function Navbar() {
    const session = useSession();

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
                {session.status === "authenticated" &&
                    <button
                        className={styles.logout}
                        onClick={async () => await signOut()}
                    >
                        logout
                    </button>
                }
            </div>
        </div>
    )
}

export default Navbar