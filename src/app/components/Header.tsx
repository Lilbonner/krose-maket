'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="absolute top-10 left-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between text-white border-b border-gray-200">
            <div className="flex items-center space-x-2 pl-12">
                <Image src="/logo.svg" alt="Logo" width={140} height={80} />
            </div>

            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
                <Link href="/" className="hover:text-green-400 transition">Home</Link>
                <Link href="/about" className="hover:text-green-400 transition">About Us</Link>
                <Link href="/service" className="hover:text-green-400 transition">Services</Link>
                <Link href="/pages" className="hover:text-green-400 transition">Pages</Link>
                <Link href="/contact" className="hover:text-green-400 transition">Contact Us</Link>
            </nav>

            <div className="hidden lg:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                    <span className="text-lg">📞</span>
                    <span>+01 789 859 664</span>
                </div>
                <Link
                    href="/contact"
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
                >
                    Get In Touch →
                </Link>
            </div>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white focus:outline-none w-24"
            >
                ☰
            </button>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white text-gray-800 px-6 py-4 flex flex-col space-y-4 lg:hidden">
                    <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link href="/pages" onClick={() => setMenuOpen(false)}>Pages</Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                    <a href="tel:+789859664" className="font-semibold">
                        +01 789 859 664
                    </a>
                    <Link
                        href="/contact"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                        Get in Touch →
                    </Link>
                </div>
            )}
        </header>
    )
}
