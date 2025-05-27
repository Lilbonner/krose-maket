'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const services = [
    {
        title: 'Personal Coaching',
        description: 'One-on-one sessions to achieve personal goals and enhance self-awareness.',
        icon: '/icons/icon1.svg',
    },
    {
        title: 'Business Coaching',
        description: 'Strategies for business growth and goal setting.',
        icon: '/icons/icon2.svg',
    },
    {
        title: 'Career Development',
        description: 'Guidance on career transitions, job search strategies, and skill enhancement.',
        icon: '/icons/icon3.svg',
    },
    {
        title: 'Team Coaching',
        description: 'Enhancing teamwork, collaboration, and communication within organizations.',
        icon: '/icons/icon4.svg',
    },
    {
        title: 'Relationship Coaching',
        description: 'Improving interpersonal relationships and emotional intelligence.',
        icon: '/icons/icon5.svg',
    },
    {
        title: 'Spiritual Coaching',
        description: 'Exploration of personal values, beliefs, and mindfulness.',
        icon: '/icons/icon6.svg',
    },
]

export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <section className="relative bg-[#02221C] text-white py-24 px-6 lg:px-20 rounded-t-[40px] overflow-hidden">
            <div
                className="absolute left-[-200px] top-[10%] w-[800px] h-[800px] bg-no-repeat bg-contain pointer-events-none"
                style={{ backgroundImage: "url('/images/arc.svg')" }}
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                <div data-aos="fade-up">
                    <p className="text-green-400 text-sm font-semibold">// Services</p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                        Comprehensive coaching for life and{' '}
                        <span className="text-green-400">business</span>
                    </h2>
                    <p className="text-gray-300 mt-6">
                        Our coaching services provide personalized strategies for both personal growth and business success.
                        We focus on your unique challenges, offering expert guidance to help you.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all">
                        View All Services →
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10" data-aos="fade-left">
                    {services.map((service, i) => (
                        <div key={i} className="flex items-start space-x-4">
                            <div className="min-w-[56px] h-[56px] rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                <img src={service.icon} alt={service.title} className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                                <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
