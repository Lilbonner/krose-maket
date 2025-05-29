'use client'

import { Briefcase, Lightbulb, Target, Users } from 'lucide-react';
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";

const steps = [
    {
        icon: <Lightbulb className="w-10 h-10 text-green-500" />,
        title: 'Discover',
        description: 'Understanding your needs and gathering insights.'
    },
    {
        icon: <Users className="w-10 h-10 text-green-500" />,
        title: 'Plan',
        description: 'Strategizing and setting goals for success.'
    },
    {
        icon: <Briefcase className="w-10 h-10 text-green-500" />,
        title: 'Execute',
        description: 'Turning plans into action with precision.'
    },
    {
        icon: <Target className="w-10 h-10 text-green-500" />,
        title: 'Deliver',
        description: 'Providing results and continuous improvement.'
    }
];

export default function HowWeWork() {
    return (
        <section className="py-30 bg-white text-center" id="how-we-work">
            <p className="text-sm tracking-widest text-green-400" data-aos="fade-up" data-aos-delay="100">
                // <span className="text-green-900 text-md font-medium">How we work</span>
            </p>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-5xl font-md mb-4">Step by step process for<br/>
                    <span className="text-green-600 from-green-400 to-blue-300">achieving success</span></h2>
                <p className="text-gray-500 mb-12">
                    Our process is designed to ensure your success every step of the way.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="p-6 rounded-lg hover:shadow-lg transition ">
                            <div
                                className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white mx-auto">
                                <AccessibilityNewOutlinedIcon/>
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-500">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
