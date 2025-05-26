'use client'

import Link from 'next/link'
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-center ">
            <div className="relative z-10 text-white px-4 max-w-2xl mx-auto">
                <h2 className="text-xl uppercase tracking-wider mb-4 text-blue-400 animate-fade-in delay-200">
                    Welcome to Krose
                </h2>
                <h1 className="text-5xl font-extrabold mb-6 animate-fade-in delay-400">
                    The Best Event Planning Agency
                </h1>
                <p className="mb-8 text-lg animate-fade-in delay-600">
                    We make your events memorable with creativity, passion and professionalism.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition animate-fade-in delay-800"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    )
}
