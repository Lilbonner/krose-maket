'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';

const services = [

    {
        title: 'Spiritual Coaching',
        description: 'Exploration of personal values, beliefs, and mindfulness.',
        icon: '/icons/icon6.svg',
    },
    {
        title: 'Spiritual Coaching',
        description: 'Exploration of personal values, beliefs, and mindfulness.',
        icon: '/icons/icon6.svg',
    },
    {
        title: 'Spiritual Coaching',
        description: 'Exploration of personal values, beliefs, and mindfulness.',
        icon: '/icons/icon6.svg',
    },
    {
        title: 'Spiritual Coaching',
        description: 'Exploration of personal values, beliefs, and mindfulness.',
        icon: '/icons/icon6.svg',
    },
    {
        title: 'Spiritual Coaching',
        description: 'Exploration of personal values, beliefs, and mindfulness.',
        icon: '/icons/icon6.svg',
    },
    {
        title: 'Spiritual Coaching',
        description: 'Exploration of personal values, beliefs, and mindfulness.',
        icon: '/icons/icon6.svg',
    },
    {
        title: 'Spiritual Coaching',
        description: 'Exploration of personal values, beliefs, and mindfulness.',
        icon: '/icons/icon6.svg',
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
        <section className="relative bg-[#02221C] text-white py-24 px-6 lg:px-20 rounded-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                <div className="sticky top-32 self-start h-fit" data-aos="fade-up">
                    <p className="text-green-400 text-sm font-semibold">// Services</p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                        Comprehensive coaching for life and{' '}
                        <span className="text-green-400">business</span>
                    </h2>
                    <p className="text-gray-300 mt-6">
                        Our coaching services provide personalized strategies for both personal growth and business success.
                        We focus on your unique challenges, offering expert guidance to help you.
                    </p>
                    <button
                        className="bg-gradient-to-r from-green-400 to-green-600 text-white px-5 mt-10 py-2 rounded-full font-medium hover:opacity-70 transition cursor-pointer">
                        Get In Touch →
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 " data-aos="fade-left">
                    {services.map((service, i) => (
                        <div key={i} className="flex items-start space-x-4 pt-10 ">
                            <div className="min-w-[56px] h-[56px] rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white hover:opacity-70 transition cursor-pointer">
                                <AccessibilityNewOutlinedIcon   />
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
