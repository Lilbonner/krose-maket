'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function WhoWeAre() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <section className="bg-[#F7F7F5] py-24 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-right">
                    <p className="text-green-500 text-sm font-semibold uppercase">// Who We Are</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#02221C] mt-4 leading-snug">
                        Unlock your potential <br />
                        <span className="text-green-500">with our expertise</span>
                    </h2>
                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                        Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.
                        We offer personalized strategies, proven methods, and unwavering support to help you navigate challenges.
                    </p>

                    <div ref={ref} className="flex items-center gap-10 mt-10">
                        <div className="text-center">
                            <div className="w-24 h-24 rounded-full border-2 border-green-400 flex items-center justify-center text-2xl font-bold text-[#02221C]">
                                <p>{inView ? <CountUp end={98} duration={2} /> : '0'}%</p>
                            </div>
                            <p className="mt-2 text-sm text-[#02221C]">Satisfied Customers</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 rounded-full border-2 border-green-400 flex items-center justify-center text-2xl font-bold text-[#02221C]">
                                <p>{inView ? <CountUp end={20} duration={2} /> : '0'}k</p>
                            </div>
                            <p className="mt-2 text-sm text-[#02221C]">Projects Completed</p>
                        </div>
                    </div>

                    <div className="mt-10 border-t pt-6 border-gray-300">
                        <h3 className="text-lg font-semibold text-[#02221C]">
                            Certified And Experienced Coaching Professionals
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Our team consists of highly trained and certified coaches who stay up-to-date with the latest coaching practices.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span> Continuous Support And Accountability
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span> Results-Driven Methods That Deliver Lasting Change
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="relative w-full h-[450px] lg:h-[500px] rounded-[30px] overflow-hidden shadow-md"
                    data-aos="fade-left"
                >
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
