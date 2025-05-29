import InstagramIcon from '@mui/icons-material/Instagram'
import Link from "next/link"

export default function Footer() {
    return (
        <section className="relative bg-[#02221C] text-white py-16 px-4 sm:px-6 lg:px-20 rounded-3xl">
            <div
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10 border-b border-gray-700 pb-12"
                data-aos="fade-up">
                <div className="md:sticky md:top-32 self-start h-fit" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
                        We develop & create <br/>
                        <span className="text-green-400">successful future</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12" data-aos="fade-left">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold">Address</h3>
                        <p className="mt-3 text-sm sm:text-base">
                            Germany - 785 15h Street,<br/>
                            Office 478 Berlin, DE 81566
                        </p>
                        <div className="flex items-center gap-3 pt-4">
                            <InstagramIcon/>
                            <InstagramIcon/>
                            <InstagramIcon/>
                            <InstagramIcon/>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold">Say Hello</h3>
                        <p className="mt-3 text-sm sm:text-base">
                            info@domain.com <br/>
                            <span className="text-lg font-medium">+1 840 841 256</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm font-semibold flex-wrap gap-y-4">
                    <nav className="flex flex-wrap gap-6 justify-center sm:justify-start lg:pl-50">
                        {['Home', 'About Us', 'Services', 'Pages', 'Contact Us'].map((text, i) => (
                            <Link
                                key={i}
                                href={`/${text.toLowerCase().replace(/\s/g, '')}`}
                                className="hover:text-green-400 transition duration-300"
                            >
                                {text}
                            </Link>
                        ))}
                    </nav>
                    <p className="text-sm sm:text-base text-center sm:text-right">
                        © 2024 All Rights Reserved.
                    </p>
                </div>
            </div>

        </section>
    )
}
