import styles from "./button.module.css";
import Link from "next/link";
import {ButtonProps} from "@/components/Button/types";

const Button = ({text, url}: ButtonProps) => {
    return (
        <Link href={url}>
            <button className={styles.container}>{text}</button>
        </Link>
    );
};

export default Button;