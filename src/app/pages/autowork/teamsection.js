"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Landingpage from "@/app/constant/landingpage.text";
import { useRouter, usePathname } from "next/navigation";

const Teamsection = () => {
  const people = Landingpage.people;
  const [filter, setFilter] = useState("All"); 
  const router = useRouter();
   const filteredPeople =
    filter === "All"
      ? people
      : people.filter((p) => p.role.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="bg-[#222121]  py-16 px-6 lg:px-10 ">
      <div className="lg:w-[93%] lg:ml-11">
      
      <div className="flex flex-col items-center text-center mb-14">
        <h1 className="text-red-500 text-sm lg:text-xl">TESTIMONIAL</h1>
        <h2 className="text-xl lg:text-6xl text-white font-bold mt-3">
          What our Client Says
        </h2>
      </div>

      
      <div className="flex justify-center gap-4 mt-2 flex-wrap">
        {["All", "Service Manger", "Cerified Techician", "Marketing", "Customer service"].map(
          (btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-6 py-1 border border-gray-300 rounded-xl shadow 
                ${
                  filter === btn
                    ? "bg-red-600 text-white"
                    : "text-white hover:bg-red-600"
                }`}
            >
              {btn}
            </button>
          )
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        {filteredPeople.map((p) => (
          <div
            key={p.id}
            className="relative bg-[#383838] hover:bg-white text-white hover:text-black rounded-2xl shadow-md p-6 pt-14 text-center transition-all"
              onClick={() => router.push("/contactus")}
          >
          
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full shadow overflow-hidden">
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
           <h3 className="font-semibold text-lg mt-2">{p.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{p.role}</p>

            {/* Social Icons */}
            <div className="mt-4 flex justify-center gap-3">
              {p.socials?.linkedin && (
                <a
                  href={p.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-red-600 hover:bg-gray-100"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              )}
              {p.socials?.twitter && (
                <a
                  href={p.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-red-600 hover:bg-gray-100"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              )}
              {p.socials?.github && (
                <a
                  href={p.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-red-600 hover:bg-gray-100"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Teamsection;
