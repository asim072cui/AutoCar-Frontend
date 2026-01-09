'use client'
import Image from 'next/image';
import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const Faqsection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setExpandedQuestion((prev) => (prev === id ? null : id));
  };

  const faqQuestions = [
    {
      id: "what-vehicles",
      question: "What types of vehicles do you service?",
      answer:
        "We service all types of vehicles, including cars, trucks, and SUVs.",
    },
    {
      id: "appointment",
      question: "Do I need an appointment for auto repairs?",
      answer:
        "Appointments are recommended but we also accept walk-ins depending on availability.",
    },
    {
      id: "repair-time",
      question: "How long does it typically take to complete an auto repair?",
      answer:
        "The time depends on the type of repair. Minor services can take a few hours while major repairs may take longer.",
    },
    {
      id: "warranty",
      question: "Do you offer any warranties on your repairs?",
      answer:
        "Yes, we offer warranties on most of our repair services. Please contact us for details.",
    },
    {
      id: "payment",
      question: "What forms of payment do you accept?",
      answer:
        "We accept cash, credit/debit cards, and digital payments.",
    },
  ];

  return (
    <div className="pt-10 text-center bg-[#313131] border-b-2 border-red-600">
      <div className="lg:pt-15  text-center bg-[#313131]">
        <h2 className="lg:text-xl text-sm font-bold text-red-700">FAQ</h2>
        <h2 className="lg:text-4xl text-lg lg:mt-2 font-bold text-white">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:pt-8 pt-5 max-w-6xl mx-auto lg:ml-15 lg:gap-18">
        
     
        <div className="lg:w-full w-full">
          <Image
            src="/image/lab.jpg"
            alt="FAQ Illustration"
            className="w-full h-[70%] object-cover rounded-lg shadow-md"
            width={600}
            height={200}
          />
        </div>

       
        <div className="lg:w-full w-full ">
          <div className="bg-[#313131] dark:bg-[#0B272A]  ">
            <div className="space-y-4">
              {faqQuestions.map((item) => (
                <div
                  key={item.id}
                  className=" text-white  p-4 border-b border-gray-400 bg-[#313131]"
                >
                  <button
                    onClick={() => toggleQuestion(item.id)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="font-medium text-white dark:text-white">
                      {item.question}
                    </span>
                    {expandedQuestion === item.id ? (
                      <FiMinus className="w-5 h-5 text-red-400" />
                    ) : (
                      <FaPlus className="w-5 h-5 text-red-400" />
                    )}
                  </button>

                  {expandedQuestion === item.id && (
                    <p className="mt-3 text-sm text-gray-200 dark:text-gray-300">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faqsection;
