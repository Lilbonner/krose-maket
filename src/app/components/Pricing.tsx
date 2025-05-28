'use client'

import {useEffect} from "react";
import AOS from "aos";


export default function Pricing () {
    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    const plans = [
        {
            title: "basic package",
            price: "$199",
            highlight: false,
        },
        {
            title: "standard package",
            price: "$299",
            highlight: true,
        },
        {
            title: "premium package",
            price: "$399",
            highlight: false,
        },
    ]

    const features = [
        "Initial Consultation",
        "Online Resources",
        "Tracking Sheets",
        "Email Support",
        "Flexible Scheduling",
        "Private Client Portal"
    ]

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
                        className="bg-gradient-to-r from-green-400 to-green-700 text-white px-5 mt-10 py-2 rounded-full font-medium hover:opacity-80 transition cursor-pointer">
                        Get All Touch →
                    </button>
                </div>

                <div className="grid gap-8" data-aos="fade-up" data-aos-delay="200">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl shadow-sm border ${
                                plan.highlight
                                    ? "bg-gradient-to-r from-green-500 to-green-300 text-white"
                                    : "bg-white text-[#02221C]"
                            }`}
                        >
                            <h3 className="text-lg font-semibold">{plan.title}</h3>
                            <div className="text-4xl font-bold mt-4">
                                {plan.price}
                                <span className="text-base font-medium">/month</span>
                            </div>
                            <button
                                className={`mt-6 px-5 py-2 rounded-full text-sm font-medium transition ${
                                    plan.highlight
                                        ? "bg-white text-green-600 hover:opacity-90 transition cursor-pointer"
                                        : "bg-gradient-to-r from-green-400 to-green-700 text-white hover:opacity-80 transition cursor-pointer"
                                }`}
                            >
                                Purchase Now →
                            </button>


                        </div>
                    ))}
                </div>
            </div>
                        </section>
                        )
                    }