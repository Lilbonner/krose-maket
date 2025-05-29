'use client'

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image";

export default function News() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    const news = [
        {
            title: "Basic Package",
            news: "Ideal for individuals starting out.",
            highlight: false,
            photo: "/news-post.png"
        },
        {
            title: "Standard Package",
            news: "Perfect for small teams with growing goals.",
            highlight: true,
            photo: "/news-post.png"
        },
        {
            title: "Premium Package",
            news: "Advanced tools for enterprise success.",
            highlight: false,
            photo: "/news-post.png"
        }
    ]

    return (
        <section className="relative bg-[#F7F7F5] py-24 px-6 lg:px-20 rounded-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                <div className="sticky top-32 self-start h-fit" data-aos="fade-up" data-aos-delay="600">
                    <p className="text-green-600 font-semibold text-lg">//
                        <span className="text-green-800"> News </span>
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mt-2">
                        Latest updates <br /> and coaching <br />
                        <span className="text-green-400 font-semibold">industry insights</span>
                    </h2>
                    <button
                        className="bg-gradient-to-r from-green-400 to-green-600 text-white px-5 mt-10 py-2 rounded-full font-medium hover:opacity-70 transition cursor-pointer"
                    >
                        Contact Us →
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8" data-aos="fade-up" data-aos-delay="700">
                    {news.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex gap-6 items-center p-6 rounded-2xl shadow-sm ${
                                plan.highlight
                                    }`}
                        >
                            <Image
                                src={plan.photo}
                                alt="news"
                                width={300}
                                height={300}
                                className="rounded-xl object-cover flex-shrink-0 cursor-pointer"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold">{plan.title}</h3>
                                <p className="text-base mt-2">{plan.news}</p>
                                <button
                                    className={`mt-4 px-4 py-2 rounded-full text-sm font-medium transition ${
                                        plan.highlight
                                            ? "bg-gradient-to-r from-green-400 to-green-600 text-white hover:opacity-80 cursor-pointer"
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

            <div
                className="flex flex-wrap justify-center gap-8 text-sm text-gray-700 mt-16"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Get 30 day free trial
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> No any hidden fees pay
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> You can cancel anytime
                </div>
            </div>
        </section>
    )
}
