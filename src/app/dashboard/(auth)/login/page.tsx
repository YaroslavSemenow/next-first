"use client";

import React, {FormEvent} from "react";
import styles from "./page.module.css";
import {signIn} from "next-auth/react";


function Login() {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const email = formData.get("email");
        const password = formData.get("password");

       await signIn("credentials", {email, password});
    };


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
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
                <button className={styles.button}>Login</button>
                {/*{error && "Something went wrong!"}*/}
            </form>
        </div>
    )
}

export default Login