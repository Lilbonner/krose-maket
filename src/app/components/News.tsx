'use client'

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"

export default function News() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    const news = [
        {
            title: "Mental Wellness and Resilience The Power of Coaching",
            news: "Mental wellness and resilience are crucial for navigating life's challenges.",
            highlight: false,
            photo: "/news-post.png"
        },
        {
            title: "How to Maintain Work-Life Balance in a Busy World",
            news: "Maintaining work-life balance in today's fast-paced world can be challenging.",
            highlight: false,
            photo: "/news-post.png"
        },
        {
            title: "The Power of Mindset Transforming Your Life & Business\n",
            news: "A positive mindset fuels growth, success, and resilience in life and business.",
            highlight: false,
            photo: "/news-post.png"
        },
        {
            title: "The Power of Mindset Transforming Your Life & Business\n",
            news: "A positive mindset fuels growth, success, and resilience in life and business.",
            highlight: false,
            photo: "/news-post.png"
        }
    ]

    return (
        <section className="relative bg-[#F7F7F5] py-16 px-4 sm:px-6 lg:px-20 rounded-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                <div className="md:sticky md:top-32 self-start h-fit" data-aos="fade-up" data-aos-delay="600">
                    <p className="text-green-600 font-semibold text-base sm:text-lg">//
                        <span className="text-green-800"> News </span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mt-2">
                        Latest updates <br /> and coaching <br />
                        <span className="text-green-400 font-semibold">industry insights</span>
                    </h2>
                    <button
                        className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 mt-10 py-3 rounded-full font-medium hover:opacity-70 transition cursor-pointer text-sm sm:text-base"
                    >
                        Contact Us →
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-8" data-aos="fade-up" data-aos-delay="700">
                    {news.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-6 rounded-2xl shadow-sm ${
                                plan.highlight
                                    ? "bg-gradient-to-r from-green-600 to-green-400 text-white"
                                    : "bg-white text-[#02221C]"
                            }`}
                        >
                            <Image
                                src={plan.photo}
                                alt="news"
                                width={400}
                                height={400}
                                className="rounded-xl object-cover w-full sm:w-[280px] h-auto"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-lg sm:text-xl font-semibold">{plan.title}</h3>
                                <p className="text-sm sm:text-base mt-2">{plan.news}</p>
                                <button
                                    className={`mt-4 px-4 py-2 rounded-full text-sm font-medium transition w-30 ${
                                        plan.highlight
                                            ? "bg-white text-green-600 hover:opacity-80 cursor-pointer"
                                            : "bg-gradient-to-r from-green-400 to-green-600 text-white hover:opacity-70 cursor-pointer"
                                    }`}
                                >
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
