'use client'
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";


const Frenencysection = () => {
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
    <div className=" bg-[#313131] lg:pt-20 pt-10 ">
        <div className='bg-[#3b3a3a] p-10   w-[80%]'>
          <div className='lg:ml-10'>
            <h1 className="lg:text-4xl text-lg  text-white lg:mt-15">Frequenty Asked</h1>
            <h2 className="lg:text-4xl text-lg  text-white lg:mt-4">
              Quanstions
            </h2>
            </div>
            <div className="lg:w-full w-[145%] md:w-full mt-5 lg:ml-40 md:ml-20  ">
                      <div className="bg-none rounded-lg ">
                        <div className="space-y-4">
                          {faqQuestions.map((item) => ( 
                            <div
                              key={item.id}
                              className=" text-white  p-4 border-b border-gray-400 rounded-lg bg-white"
                            >
                              <button
                                onClick={() => toggleQuestion(item.id)}
                                className="flex justify-between items-center w-full text-left"
                              >
                                <span className="font-medium text-black dark:text-white">
                                  {item.question}
                                </span>
                                {expandedQuestion === item.id ? (
                                  <FiMinus className="w-5 h-5 text-red-400" />
                                ) : (
                                  <FaPlus className="w-5 h-5 text-red-400" />
                                )}
                              </button>
            
                              {expandedQuestion === item.id && (
                                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
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
export default Frenencysection;
