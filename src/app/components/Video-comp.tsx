'use client';

import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';

export default function VideoComp() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <section
                className="relative h-[80vh] md:h-[90vh] bg-cover bg-center rounded-3xl overflow-hidden flex items-center justify-center px-6 md:px-12"
                style={{ backgroundImage: "url('/about-video.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />

                <div className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl" data-aos="fade-up">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                                Watch our coaching videos for <br />
                                <span className="text-green-400 font-semibold">practical tools</span>
                            </h1>
                        </div>

                        <div className="flex items-center gap-4" data-aos="fade-left" data-aos-delay="300">
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-green-500 hover:bg-green-600 transition rounded-full p-4 shadow-lg"
                            >
                                <PlayArrowIcon className="text-white text-4xl" />
                            </button>
                            <span className="text-white font-medium text-lg">Watch Video</span>
                        </div>
                    </div>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-white/20 pt-6 text-sm text-white"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <Feature icon={<DoneIcon />} text="Personal and Professional Success" />
                        <Feature icon={<DoneIcon />} text="Your Potential with Expert Coaching" />
                        <Feature icon={<DoneIcon />} text="Tailored Strategies for Growth" />
                        <Feature icon={<DoneIcon />} text="Empowering Your Journey Success" />
                    </div>
                </div>
            </section>

            {showModal && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl aspect-video">
                        <button
                            className="absolute -top-4 -right-4 bg-white rounded-full p-1 shadow"
                            onClick={() => setShowModal(false)}
                        >
                            <CloseIcon className="text-black" />
                        </button>

                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Coaching Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-green-400">{icon}</span>
            <span className="text-white">{text}</span>
        </div>
    );
}
