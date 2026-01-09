"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const FooterPage = () => {
  const router = useRouter();
  return (
    <footer className="bg-[#1E1E1E] text-gray-300">
      <div className="flex justify-center py-6">
  <div className="w-full h-[4px] bg-gradient-to-r from-red-700 to-[#1E1E1E] mt-2"></div> <Image
    className=" w-45 h-auto "
    src={'/image/prologo1.png'}
    width={300}
    height={300}
    alt="some"
  /> <div className="w-full h-[4px] bg-gradient-to-r mt-2 from-[#1E1E1E] to-red-700 "></div>
</div>

      <div className="max-w-7xl mx-auto  px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
      
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-600 pb-2 inline-block">
            Reach to Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-600" />
              123 Car Street, NY, USAw
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
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-600 pb-2 inline-block">
            Opening Hours
          </h3>
          <p className="text-sm">Mon-Fri: 08:00 - 20:00</p>
          <p className="text-sm">Sat-Sun: 10:00 - 16:00</p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-600 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-600">About Us</a></li>
            <li><a href="#" className="hover:text-red-600">Why with Us</a></li>
            <li><a href="#" className="hover:text-red-600">Our Services</a></li>
            <li><a href="#" className="hover:text-red-600">How It Works</a></li>
            <li><a href="#" className="hover:text-red-600">Pricing Plan</a></li>
            <li><a href="#" className="hover:text-red-600">Appointment</a></li>
            <li><a href="#" className="hover:text-red-600">Blog</a></li>
            <li><a href="#" className="hover:text-red-600">FAQ</a></li>
          </ul>
        </div>
      <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-600 pb-2 inline-block">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm mb-3">
            Sign up for our newsletter to receive exclusive promotions, news, and tips straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:flex-1 px-4 py-2 rounded-lg text-gray-300 bg-transparent border border-gray-500 focus:outline-none focus:border-red-600"
            />
            <button
               onClick={() => router.push("/contactus")}
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white font-semibold shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
  <div className="bg-red-600 py-3 text-center text-sm text-white">
        © 2025 AutoWorks. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterPage;
