import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
    title: 'My App',
    description: 'Next.js + Tailwind App',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
