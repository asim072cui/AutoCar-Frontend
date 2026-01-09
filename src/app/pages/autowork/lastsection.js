'use client'
import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

import Speaksection from '../homepage/speaksection';
const Lastsection = () => {
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
        <>
        <div className="bg-[#222121]   lg:p-10">
         <div className=" text-center lg:pt-10 ">
        <h1 className="lg:text-3xl text-sm text-white ">Frequently Asked Questions</h1>
        </div>
   <div className="flex flex-col lg:flex-row lg:pt-8 pt-5 max-w-6xl mx-auto lg:ml-15 lg:gap-18">
                
              <div className="lg:w-full w-full ">
                  <div className="bg-none  ">
                    <div className="space-y-4">
                      {faqQuestions.map((item) => (
                        <div
                          key={item.id}
                          className=" text-white  p-4 hover:bg-red-800"
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

                <div className="lg:w-full w-full">
                  <div className=' flex flex-col gap-10 lg:p-0 p-11'>
                    <h1 className='text-lg lg:p-4 p-5 text-white text-center whitespace-nowrap'>Ask A different Questions</h1>
                    <input type="text" placeholder="Name" className="border border-gray-600 text-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                    <input type="text" placeholder="Email" className="border border-gray-600  text-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                    <input type="text" placeholder="Your Message" className="border border-gray-600 text-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                   <button className=' mt-2 lg:w-[14%] text-center px-2 py-2 text-white cursor-pointer hover:bg-red-500 bg-red-700 rounded-lg'>Submit</button>
                  </div>
                </div>           
              </div>
              <Speaksection  showSection={false}/>
     
     </div>
     </>
)
};
export default Lastsection; 