'use client'

import {useEffect} from "react";
import AOS from "aos";


export default function Pricing () {
    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <section className="relative bg-gray-200 py-24 px-6 lg:px-20 rounded-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                <div className="sticky top-32 self-start h-fit" data-aos="fade-up">
                    <p className="text-green-400 text-sm font-semibold">// Pricing</p>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mt-2">
                        Coaching<br/>
                        <span className="text-green-400 font-semibold">packages that fit</span>
                    </h2>
                    <p className="text-gray-600 mt-6">
                        Our coaching services provide personalized strategies for both personal growth and business
                        success.
                        We focus on your unique challenges, offering expert guidance to help you.
                    </p>
                    <button
                        className="bg-gradient-to-r from-green-400 to-green-600 text-white px-5 mt-10 py-2 rounded-full font-medium hover:opacity-70 transition cursor-pointer">
                        Get All Touch →
                    </button>
                </div>


            </div>
        </section>
    )
}