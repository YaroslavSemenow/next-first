import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import {Post} from "@/types/post";

async function getData(): Promise<Post[]> {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}

export const metadata = {
    title: "Blog Information",
    description: "This is Blog Page",
};

const Blog = async () => {
    const data = await getData();

    return (
        <div className={styles.mainContainer}>
            {data?.map(item => (
                <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.img}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>Desc</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Blog;