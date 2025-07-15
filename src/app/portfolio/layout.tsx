import styles from "./page.module.css";
import {ReactNode} from "react";

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <div>
            <h1 className={styles.mainTitle}>Our Works</h1>
            {children}
        </div>
    )
}

export default Layout