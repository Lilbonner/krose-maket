'use client'
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const faqItems = [
    {
        question: "What is a Life & Business Coach?",
        answer: "Coaching focuses on future goals, actionable steps, and personal development. While therapy often deals with healing past issues, coaching is more about improving present circumstances and building a path forward. Coaches do not diagnose or treat mental health conditions.",
    },
    {
        question: "How does coaching differ from therapy?",
        answer: "Coaching helps you take action and set future goals, while therapy often focuses on healing past traumas or emotional issues.",
    },
    {
        question: "Who can benefit from life and business coaching?",
        answer: "Anyone looking to achieve personal or professional goals, improve productivity, or find clarity in life or business.",
    },
    {
        question: "How long does the coaching process take?",
        answer: "It varies based on your goals, but most clients see results within a few weeks to a few months.",
    },
    {
        question: "Can coaching help my business grow?",
        answer: "Absolutely! Coaching can help identify growth opportunities, improve leadership, and streamline strategies.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="max-w-7xl mx-auto bg-[#F2F2ED] py-24 px-4 md:px-16 grid md:grid-cols-2 gap-12">
            <div>
                <p className="text-green-500 font-medium">//
                    <span className="text-green-800"> FAQ </span>
                </p>
                <h2 className="text-4xl font-bold mt-2 leading-tight">
                    Your coaching questions <br />
                    <span className="text-green-500">answered simply here</span>
                </h2>

                <div className="bg-white rounded-2xl p-6 mt-10 shadow-md w-full max-w-md">
                    <div className="flex items-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                src={`https://randomuser.me/api/portraits/thumb/men/${i + 10}.jpg`}
                                alt="avatar"
                                className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
                            />
                        ))}
                    </div>
                    <p className="font-semibold mt-4 text-lg">Still have you any question?</p>
                    <p className="text-gray-600 text-sm mt-1">
                        We're ready to help you to answer any questions.
                    </p>
                    <div className="flex items-center gap-2 text-green-500 mt-4 font-semibold cursor-pointer hover:text-green-800">
                        <FaPhoneAlt /> +01 789 859 664
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {faqItems.map((item, index) => (
                    <div key={index}>
                        <button
                            className="w-full text-left p-4 bg-white rounded-xl shadow-md flex justify-between items-center text-base font-semibold hover:bg-gray-50 transition cursor-pointer"
                            onClick={() =>
                                setActiveIndex(index === activeIndex ? null : index)
                            }
                        >
                            {item.question}
                            {index === activeIndex ? (
                                <IoClose className="text-xl text-gray-500" />
                            ) : (
                                <FaPlus className="text-sm text-gray-500" />
                            )}
                        </button>

                        {index === activeIndex && (
                            <div className="mt-2 p-4 rounded-xl bg-gradient-to-br from-green-500 to-green-400 text-white text-sm shadow-md" data-aos="fade-left">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
