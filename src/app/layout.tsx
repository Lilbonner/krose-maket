'use client'

import './globals.css'
import { ReactNode, useEffect } from 'react'
import Header from "@/app/components/Header";
import { Poppins } from "next/font/google";
import AOS from 'aos'
import 'aos/dist/aos.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'
})

export default function RootLayout({ children }: { children: ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        })
    }, [])

    return (
        <html lang="en" className={poppins.variable}>
        <body className="font-sans">
        <Header />
        {children}
        </body>
        </html>
    )
}
