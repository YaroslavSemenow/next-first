import type {Metadata} from "next";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import React from "react";
import {Roboto} from "next/font/google";
import {ThemeProvider} from "@/context/ThemeContext/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "Learning Next.js",
    description: "Next.js pet project",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider>
            <AuthProvider>
                <div className="container">
                    <Navbar/>
                    {children}
                    <Footer/>
                </div>
            </AuthProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
