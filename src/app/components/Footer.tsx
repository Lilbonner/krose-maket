
export default function Footer() {
    return (
        <section className="relative bg-[#02221C] text-white py-24 px-6 lg:px-20 rounded-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                <div className="md:sticky md:top-32 self-start h-fit" data-aos="fade-up">
                    <p className="text-green-400 text-sm font-semibold">// Services</p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                        Comprehensive coaching for life and{' '}
                        <span className="text-green-400">business</span>
                    </h2>
                    <p className="text-gray-300 mt-6">
                        Our coaching services provide personalized strategies for both personal growth and business
                        success.
                        We focus on your unique challenges, offering expert guidance to help you.
                    </p>
                    <button
                        className="bg-gradient-to-r from-green-400 to-green-600 text-white px-5 mt-10 py-2 rounded-full font-medium hover:opacity-70 transition cursor-pointer">
                        Get In Touch →
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 " data-aos="fade-left">
                    <div className="">
                        <div>Bla</div>
                    </div>
                    <div>
                    </div>
                </div>

            </div>
        </section>
    )
}