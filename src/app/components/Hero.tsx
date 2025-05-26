'use client'


export default function Hero() {
    return (
        <section className="relative h-screen bg-[url('/hero-bg.png')] bg-cover bg-center text-white flex items-center px-6 md:px-12 rounded-3xl">
            <div className="max-w-3xl" data-aos="fade-up">
                <p className="text-sm tracking-widest text-green-400">// WELCOME TO KROSE.</p>
                <h1 className="text-5xl md:text-7xl font-light leading-tight mt-2">
                    Expert your life & <br />
                    <span className="text-green-400 font-semibold">business coaching</span>
                </h1>

                <div className="mt-6 flex gap-4">
                    <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
                        Get In Touch →
                    </button>
                    <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition duration-300">
                        Explore More →
                    </button>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm text-white/90" data-aos="fade-up" data-aos-delay="200">
                    <div>
                        <p className="font-semibold">📌 Tailored Coaching Solutions</p>
                        <p className="text-xs text-white/70">for growth.</p>
                    </div>
                    <div>
                        <p className="font-semibold">✅ Proven Coaching Techniques</p>
                        <p className="text-xs text-white/70">Backed by experts.</p>
                    </div>
                    <div>
                        <p className="font-semibold">🧠 Holistic Life Coaching</p>
                        <p className="text-xs text-white/70">and business.</p>
                    </div>
                    <div>
                        <p className="font-semibold">📂 Flexible Client-Centered</p>
                        <p className="text-xs text-white/70">Programs.</p>
                    </div>
                    <div>
                        <p className="font-semibold">🏅 Expert Guidance</p>
                        <p className="text-xs text-white/70">with Ongoing Support.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
