"use client";
import React, {FormEvent, FormEventHandler, useState} from "react";
import styles from "./page.module.css";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Register = () => {
    const [error, setError] = useState<any>(null);

    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (err) {
            setError(err);
            console.error(err);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create an Account</h1>
            <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Username"
                    required
                    className={styles.input}
                    name="name"
                />
                <input
                    type="text"
                    placeholder="Email"
                    required
                    className={styles.input}
                    name="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                    name="password"
                />
                <button className={styles.button}>Register</button>
                {error && "Something went wrong!"}
            </form>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/login">
                Login with an existing account
            </Link>
        </div>
    );
};

export default Register;