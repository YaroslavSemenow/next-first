import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
    return (
        <div className={styles.container}>
            <div>©2025 NextBase. All rights reserved.</div>
            <div className={styles.social}>
                <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Next.js Base" />
                <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Next.js Base" />
                <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Next.js Base" />
                <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Next.js Base" />
            </div>
        </div>
    )
}

export default Footer