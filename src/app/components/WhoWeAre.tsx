'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function WhoWeAre() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <section className="bg-[#F7F7F5] py-24 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Левая колонка */}
                <div data-aos="fade-right">
                    <p className="text-green-500 text-sm font-semibold uppercase">// Who We Are</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#02221C] mt-4 leading-snug">
                        Unlock your potential <br />
                        <span className="text-green-500">with our expertise</span>
                    </h2>
                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                        Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential. We offer personalized strategies, proven methods, and unwavering support to help you navigate challenges.
                    </p>

                </div>

                <div className="relative w-full h-[450px] lg:h-[500px] rounded-[30px] overflow-hidden shadow-md" data-aos="fade-left">
                    <img
                        src="/who-we-are.png"
                        alt="Team coaching"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
