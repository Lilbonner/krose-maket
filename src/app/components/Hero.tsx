export default function Hero() {
    return (
        <section className="h-screen bg-[url('/hero-bg.png')] bg-cover bg-center text-white flex items-center px-8 rounded-3xl">
            <div className="max-w-3xl">
                <p className="text-sm tracking-widest text-green-400 fade-up delay-100">// WELCOME TO KROSE.</p>
                <h1 className="text-5xl font-extrabold leading-tight mt-2 fade-up delay-300">
                    Expert your life & <br />
                    <span className="text-green-400">business coaching</span>
                </h1>

                <div className="mt-6 flex gap-4 fade-up delay-300">
                    <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90">
                        Get In Touch →
                    </button>
                    <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:opacity-90">
                        Explore More →
                    </button>
                </div>
                <div className="mt-6 flex gap-4 fade-up delay-400 ">
                    <h3 className=''>Tailored coaching</h3>
                    <h3>Proven Coaching</h3>
                    <h3>Holistic life</h3>
                    <h3>flexible client centered</h3>
                    <h3>Expert guidance</h3>
                </div>
            </div>
        </section>
    )
}
