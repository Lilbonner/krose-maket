'use client'

import { LegendToggle, Search, Reorder, PanoramaFishEye, WorkspacePremium } from '@mui/icons-material'

export default function Hero() {
    return (
        <section
            className="bg-fixed relative h-screen bg-[url('/hero-bg.png')] bg-cover bg-center text-white flex items-center px-6 md:px-12 rounded-3xl">
            <div
                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr rounded-3xl from-black/80 to-black-10 z-0 pointer-events-none"/>

            <div className="max-w-7xl mx-auto w-full">
                <p className="text-sm tracking-widest text-green-400" data-aos="fade-up" data-aos-delay="100">
                    // WELCOME TO KROSE.
                </p>
                <h1
                    className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mt-2"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Expert your life & <br/>
                    <span className="text-green-400 font-medium">business coaching</span>
                </h1>

                <div className="mt-6 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="500">
                    <button
                        className="bg-gradient-to-r from-green-400 to-green-600 text-white px-5 py-2 rounded-full font-medium hover:opacity-70 transition cursor-pointer">
                        Get In Touch →
                    </button>
                    <button
                        className="bg-gradient-to-r text-gray-800 from-white to-gray-300 px-6 py-3 rounded-full font-semibold hover:opacity-70 transition cursor-pointer">
                        Explore More →
                    </button>
                </div>

                <div
                    className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-gray-300 pt-10"
                    data-aos="fade-up"
                    data-aos-delay="700"
                >
                    <Feature icon={<LegendToggle/>} text="Tailored Coaching Solutions"/>
                    <Feature icon={<Search/>} text="Proven Coaching Techniques"/>
                    <Feature icon={<Reorder/>} text="Holistic Life Coaching"/>
                    <Feature icon={<PanoramaFishEye/>} text="Flexible Client-Centered"/>
                    <Feature icon={<WorkspacePremium/>} text="Expert Guidance"/>
                </div>

            </div>
        </section>
    )
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="group relative overflow-hidden cursor-pointer transition duration-300">
            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="border-t-2 border-gray-400 pt-3 flex items-center gap-2 group-hover:border-transparent transition">
                <span className="text-green-400">{icon}</span>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition">
          {text}
        </span>
            </div>
        </div>
    )
}
