'use client'

import Image from "next/image";

const services = [
    {
        data: "9,857",
        title: 'Certified Coaching',
        description: 'Work with certified coaches committed to your success.'
    },
    {
        data: "90%",
        title: 'Strategy Development',
        description: 'Tailored plans to help you achieve your personal or business goals.'
    },
    {
        data: "60%",
        title: 'Team Empowerment',
        description: 'Strengthen team performance and collaboration.'
    },
    {
        data: "30+",
        title: 'Holistic Growth',
        description: 'Focus on personal, emotional, and career aspects for total development.'
    }
];

export default function WhatWeDo() {
    return (
        <section className="py-28 bg-[#f7f7f5] px-6 md:px-12" id="what-we-do">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div
                    className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-[30px] overflow-hidden shadow-md"
                    data-aos="fade-right"
                >
                    <Image
                        src="/company-growth.png"
                        alt="About Image"
                        fill
                        className="object-cover rounded-[30px]"
                    />
                </div>

                <div data-aos="fade-left">
                    <p className="text-green-400 uppercase tracking-widest text-sm font-semibold">//
                        <span className="text-green-800"> What We Do </span>
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-semibold mt-3 mb-4 leading-tight">
                        Discover our <span className="text-green-600">areas of expertise</span>
                    </h2>
                    <p className="text-gray-500 mb-10">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been
                        the industry's standard dummy text ever since
                    </p>
                    <button
                        className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 mt-10 rounded-full text-lg font-medium shadow-md hover:opacity-80 transition cursor-pointer">
                        Get Started
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 lg:col-span-2" data-aos="fade-up">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            <div className="flex flex-col">
                                <h3 className="text-3xl text-green-600 font-bold">{service.data}</h3>
                                <h3 className="text-md font-semibold mb-1">{service.title}</h3>
                                <p className="text-sm text-gray-500">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>

    );
}
