'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="absolute top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between text-white pt-4 m-10 border-b-1 ">
            <div className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Logo" width={140} height={80} />
            </div>

            <nav className="hidden lg:flex  gap-6 text-sm font-xl pt-8">
                <Link href="/" className="hover:text-green-400 transition">Home</Link>
                <Link href="/about" className="hover:text-green-400 transition">About Us</Link>
                <Link href="/service" className="hover:text-green-400 transition">Services</Link>
                <Link href="/pages" className="hover:text-green-400 transition">Pages</Link>
                <Link href="/contact" className="hover:text-green-400 transition">Contact Us</Link>
            </nav>

            <div className="hidden lg:flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-xl">📞</span>
                    <span>+01 789 859 664</span>
                </div>

                {menuOpen && (
                    <div className="lg:hidden flex flex-col space-y-4 pb-4 text-gray-700">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/service">Services</Link>
                        <Link href="/contact">Contact</Link>
                        <a href="tel:+789859664" className="font-semibold">
                            +01 789 859 664
                        </a>
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Get in Touch
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}
