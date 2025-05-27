'use client'

import Image from 'next/image'
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

export default function About() {
    return (
        <section
            className="py-24 px-6 md:px-16 bg-white text-gray-800 relative overflow-hidden"
            id="about"
            data-aos="fade-up"
        >
            <div className="absolute left-0 bottom-0 w-64 h-32 bg-green-100 rounded-full blur-3xl opacity-30 -z-10" />

            <style jsx>{`
                @keyframes floatX {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(20px);
                    }
                }
                .animate-floatX {
                    animation: floatX 1.7s ease-in-out infinite;
                }
            `}</style>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group" data-aos="zoom-in-right">
                    <div className="relative z-10 overflow-hidden rounded-lg shadow-sm fill-white ">
                        <Image
                            src="/about.png"
                            alt="About Image"
                            width={600}
                            height={400}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div
                        className={`p-4text-white flex flex-col absolute z-20 bg-[linear-gradient(263deg,#6EE7B7_0.16%,#059669_99.84%)] rounded-lg top-[150px] left-[-50px] w-[180px] min-h-[150px] animate-floatX pl-8 pt-7`}>
                        <GradeOutlinedIcon/>
                        <p className="font-bold text-xl text-white">30+ years of experience</p>
                    </div>
                </div>

                <div data-aos="zoom-in-left">
                    <p className="text-green-500 text-sm tracking-widest uppercase mb-2">// About Us</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
                        We help you grow <br/>
                        your business
                    </h2>
                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                        Receive tailored coaching that empowers you to navigate challenges and achieve your personal and
                        professional goals. With expert guidance.
                    </p>

                    <ul className="space-y-3 mb-6 text-sm text-gray-700">
                        <li className="flex items-center gap-2"><DoneOutlinedIcon/> Certified professional coaches</li>
                        <li className="flex items-center gap-2"><DoneOutlinedIcon/> Customized client solutions</li>
                    </ul>

                    <button
                        className="bg-gradient-to-l from-green-600 to-green-800 text-white px-5 py-2 rounded-full font-medium hover:opacity-70 transition cursor-pointer">
                        Learn More →
                    </button>
                </div>
            </div>
        </section>
    )
}
