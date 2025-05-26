import './globals.css'
import { ReactNode } from 'react'
import Header from "@/app/components/Header";
import { Poppins } from "next/dist/compiled/@next/font/dist/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'
})

export const metadata = {
    title: 'My App',
    description: 'Next.js + Tailwind App',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={poppins.variable}>
        <body>
        <Header />
        {children}
        </body>
        </html>
    )
}
