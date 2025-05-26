'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/">
                        <Image src="/images/logo.svg" alt="Logo" width={140} height={40} />
                    </Link>

                    <nav className="hidden lg:flex space-x-6 text-gray-800 font-medium">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/service">Services</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    <div className="hidden lg:flex space-x-4">
                        <a href="tel:+789859664" className="text-blue-600 font-semibold">
                            <i className="fa-solid fa-phone-volume mr-2"></i>+01 789 859 664
                        </a>
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-gray-700 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
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
