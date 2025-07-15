import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>
                    Better design for your digital products.
                </h1>
                <p className={styles.desc}>
                    Turning your Idea into Reality. We bring together the teams from the
                    global tech industry.
                </p>
                <button>See Our Works</button>
            </div>
            <div className={styles.item}>
                <Image
                    className={styles.img}
                    src="/hero.png"
                    width={1000}
                    height={1000}
                    alt="NextBase"
                />
            </div>
        </div>
    );
}
