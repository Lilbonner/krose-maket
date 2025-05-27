'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="absolute top-0 left-0 w-full pt-10 z-50 px-6 lg:px-16 py-4 flex items-center justify-between text-white border-b border-white/20 bg-transparent">
            <div className="flex items-center space-x-2 pl-10">
                <Image src="/logo.svg" alt="Logo" width={140} height={80} />
            </div>

            <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
                {['Home', 'About Us', 'Services', 'Pages', 'Contact Us'].map((text, i) => (
                    <Link
                        key={i}
                        href={`/${text.toLowerCase().replace(/\s/g, '')}`}
                        className="hover:text-green-400 transition duration-300"
                    >
                        {text}
                    </Link>
                ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                    <span className="text-lg">📞</span>
                    <span>+01 789 859 664</span>
                </div>
                <Link
                    href="/contact"
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-5 py-2 rounded-full font-medium hover:opacity-70 transition"
                >
                    Get In Touch →
                </Link>
            </div>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white text-2xl"
                aria-label="Toggle menu"
            >
                ☰
            </button>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white text-gray-800 px-6 py-6 flex flex-col space-y-4 lg:hidden shadow-lg">
                    {['Home', 'About Us', 'Services', 'Pages', 'Contact Us'].map((text, i) => (
                        <Link
                            key={i}
                            href={`/${text.toLowerCase().replace(/\s/g, '')}`}
                            onClick={() => setMenuOpen(false)}
                            className="font-semibold hover:text-green-600 transition"
                        >
                            {text}
                        </Link>
                    ))}
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
