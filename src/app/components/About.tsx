'use client'

import Image from 'next/image'

export default function About() {
    return (
        <section
            className="py-24 px-6 md:px-16 bg-white text-gray-800 relative overflow-hidden"
            id="about"
            data-aos="fade-up"
        >
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -z-10" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group" data-aos="zoom-in-right">
                    <div className="absolute -top-6 -left-6 w-full h-full border-4 border-green-400 rounded-lg z-0 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                    <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl">
                        <Image
                            src="/about.png"
                            alt="About Image"
                            width={600}
                            height={400}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                <div data-aos="zoom-in-left">
                    <p className="text-green-500 text-sm tracking-widest uppercase mb-2">// About Us</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
                        We help you grow <br />
                        your business
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We are passionate about empowering individuals and organizations through strategic life and business coaching.
                        Our tailored programs foster growth, resilience, and performance in every aspect of life.
                    </p>

                    <ul className="space-y-3 mb-6 text-sm text-gray-700">
                        <li className="flex items-center gap-2">✅ Certified professional coaches</li>
                        <li className="flex items-center gap-2">✅ Customized client solutions</li>
                        <li className="flex items-center gap-2">✅ Proven success record</li>
                        <li className="flex items-center gap-2">✅ Transparent support & results</li>
                    </ul>

                    <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
                        Learn More →
                    </button>
                </div>
            </div>
        </section>
    )
}
