"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
       
        <div>
          <h2 className="text-2xl font-bold text-white">
            Auto<span className="text-red-600">Works</span>
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-600" />
              123 Car Street, NY, USA
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-600" />
              +123-789-456
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-600" />
              info@autoworks.com
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Opening Hours</h3>
          <p className="text-sm">Mon-Fri: 10:00 - 20:00</p>
          <p className="text-sm">Sat-Sun: 10:00 - 18:00</p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-600">About Us</a></li>
            <li><a href="#" className="hover:text-red-600">Our Services</a></li>
            <li><a href="#" className="hover:text-red-600">How It Works</a></li>
            <li><a href="#" className="hover:text-red-600">Pricing Plans</a></li>
            <li><a href="#" className="hover:text-red-600">Appointment</a></li>
            <li><a href="#" className="hover:text-red-600">Blog</a></li>
            <li><a href="#" className="hover:text-red-600">FAQ</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-sm mb-3">
            Sign up for exclusive promotions, news, and updates.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:flex-1 px-4 py-2 rounded-lg text-white border-gray-200 "
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg  text-white font-semibold shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

     
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2025 AutoWorks. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterPage;
