'use client'

import DoneIcon from '@mui/icons-material/Done';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function VideoComp() {
    return (
        <section
            className="bg-fixed relative h-screen bg-[url('/about-video.png')]  bg-center text-white flex items-center px-6 md:px-12 rounded-3xl">
            <div
                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr rounded-3xl from-black/80 to-black-10"/>

            <div className="max-w-7xl mx-auto h-200px ">
                <h1
                    className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mt-2"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Watch our coaching videos for <br/>
                    <span className="text-green-400 font-medium">practical tools</span>
                </h1>
                <button
                    className="bg-gradient-to-r text-gray-800 bg-green-500 from-green-600 to-violet-300 px-6 py-3 rounded-full font-semibold hover:opacity-80 transition cursor-pointer">
                    <Feature icon={<PlayArrowIcon/>} text=""/>
                </button>
                <div className="mt-6 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="500">

                </div>

                <div
                    className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-gray-300 pt-10"
                    data-aos="fade-up"
                    data-aos-delay="700"
                >
                    <Feature icon={<DoneIcon/>} text="Tailored Coaching Solutions"/>
                    <Feature icon={<DoneIcon/>} text="Proven Coaching Techniques"/>
                    <Feature icon={<DoneIcon/>} text="Holistic Life Coaching"/>
                    <Feature icon={<DoneIcon/>} text="Flexible Client-Centered"/>
                    <Feature icon={<DoneIcon/>} text="Expert Guidance"/>
                </div>

            </div>
        </section>
    )
}

function Feature({icon, text}: { icon: React.ReactNode; text: string }) {
    return (
        <div className="group relative overflow-hidden cursor-pointer transition duration-300">
            <span
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="border-t-2 border-gray-400 pt-3 flex items-center gap-2 group-hover:border-transparent transition">
                <span className="text-green-400">{icon}</span>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition">
          {text}
        </span>
            </div>
        </div>
    )
}
