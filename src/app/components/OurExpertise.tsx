import Image from "next/image";

export default function OurExpertise() {
    const expertise = [
        { title: "Communication Coaching", image: "/expertise.png" },
        { title: "Strategy", image: "/expertise.png" },
        { title: "Personal Coaching", image: "/expertise.png" },
        { title: "Health Coach", image: "/expertise.png" },
        { title: "Productivity & Efficiency Coaching", image: "/expertise.png" },
        { title: "Marketing Coaching", image: "/expertise.png" },
        { title: "Leadership", image: "/expertise.png" },
        { title: "Career Transition Coaching", image: "/expertise.png" },
    ];

    const offsets = [
        "pl-20 lg:pl-50",
        "pl-30 lg:pl-80",
        "pl-10 lg:pl-30",
        "pl-40 lg:pl-90",
        "pl-0 lg:pl-10",
        "pl-30 lg:pl-80",
        "pl-10 lg:pl-30",
        "pl-20 lg:pl-50 mt-4",
    ];


    return (
        <section className="relative bg-[#f7f7f5] py-24 px-6 lg:px-20 rounded-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                <div className="top-32 self-start h-fit" data-aos="fade-up">
                    <p className="text-green-400 text-sm font-semibold uppercase">// our expertise</p>
                    <h2 className="text-4xl md:text-5xl font-md leading-tight mt-2">
                        Certified and experienced{" "}
                        <span className="font-bold text-green-500">coaching professionals</span>
                    </h2>
                    <p className="text-gray-500 mt-6 text-sm">
                        Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.
                        We offer personalized strategies, proven methods.
                    </p>
                    <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 mt-10 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition">
                        Contact Now →
                    </button>
                </div>

                <div className="flex flex-col" data-aos="fade-up" data-aos-delay="100">
                    {expertise.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center w-full max-w-md bg-white rounded-full shadow-md  ${offsets[index]} transition-all`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={50}
                                height={40}
                                className="object-cover rounded-full"
                            />
                            <span className="pl-4 text-sm text-gray-800 whitespace-nowrap">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
