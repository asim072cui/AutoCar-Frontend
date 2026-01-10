"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { menuItems } from "../../config/menu-items";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiLogOut, FiSettings, FiHelpCircle } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { LuCloudUpload } from "react-icons/lu";
import LoginModal from "../auth/login";
import SignupModal from "../auth/signup";
import ForgotPasswordModal from "../auth/forgetpassword";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const routeMap = {
  About: "/homepage",
  Gallery: "/autowork",
  Pricing: "/about",
  Blog: "/blog",
  Services: "/services",
  Feature: [
    { name: "Car Rent", href: "/car-rent" },
    { name: "Car Booking info", href: "/car-booking-info" },
    { name: "Apply for Employee", href: "/employee" },
    { name: "Job Portal", href: "/job-portal" }

  ],
  Contact: "/ourservice",
};

const NavItems = ({ item, closeMenu }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const itemRoute = item.href || routeMap[item.name] || "";
  const isActive = pathname === itemRoute;

  const handleClick = (e, route) => {
    e.preventDefault();
    router.push(route);
    closeMenu?.();
    setOpen(false);
  };
  if (!item.children) {
    return (
      <li>
        <button
          onClick={(e) => handleClick(e, itemRoute)}
          className={`text-sm px-3 py-2 whitespace-nowrap transition-colors duration-200 ${isActive
            ? "text-green-600 font-semibold"
            : "text-white hover:text-green-600 text-lg font-bold"
            }`}
        >
          {item.name}
        </button>
      </li>
    );
  }

  /* 🔹 FEATURE DROPDOWN */
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="text-sm px-3 py-2 text-white font-bold hover:text-green-600"
      >
        {item.name}
      </button>

      {open && (
        <ul className="absolute top-full left-0 mt-0 w-44 bg-black border border-gray-700 rounded-lg shadow-lg z-50">
          {item.children.map((child, index) => (
            <li key={index}>
              <button
                onClick={(e) => handleClick(e, child.href)}
                className="block w-full text-left px-4 py-2   text-white hover:bg-green-600"
              >
                {child.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};


const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);
  const profileBtnRef = useRef(null);

  // Modal states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Close dropdown on outside click (fixed)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        profileBtnRef.current &&
        !profileBtnRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsDropdownOpen(false);
    router.push("/");
  };

  const handleProfilePicUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const loadingToast = toast.loading("Uploading picture...");
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "https://auto-car-backend.vercel.app/api/upload/load",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const { url } = response.data;
      const updatedUser = { ...user, profilePic: url };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      toast.success("Profile picture updated!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to upload image");
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    if (!query.trim()) return;
    console.log("Searching for:", query);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full shadow-md z-50 bg-black/80">
        <div className="w-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              onClick={() => router.push("/")}
              className="cursor-pointer w-28 lg:w-40"
              src="/image/Logo.png"
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item, index) => (
              <NavItems key={index} item={item} />
            ))}

            {/* Search */}
            {/* <div className="flex items-center gap-2 relative">
              <button
                onClick={() => setShowInput(!showInput)}
                className="text-white hover:text-green-600 px-2 cursor-pointer font-medium flex items-center justify-center"
              >
                <CiSearch size={25} />
              </button>
              {showInput && (
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  autoFocus
                  className="border border-gray-300 text-white rounded-md px-3 py-1 w-48 transition-all duration-200 bg-black/80"
                />
              )}
            </div> */}

            {/* User Dropdown */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <img
                  ref={profileBtnRef}
                  src={user.profilePic || "/user/user1.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-green-500 cursor-pointer"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-[9999]">
                    <div className="p-3 border-b border-gray-200">
                      <p className="text-red-600 font-medium">
                        {user.email || user.name || "User"}
                      </p>
                    </div>
                    <ul className="text-gray-800 text-sm">
                      <li
                        onClick={() => fileInputRef.current.click()}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <LuCloudUpload size={18} /> Upload pic
                      </li>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleProfilePicUpload}
                      />
                      <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <MdPersonOutline size={18} /> Personalization
                      </li>
                      <li
                        onClick={() => router.push("/settings")}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <FiSettings size={18} /> Settings
                      </li>
                      <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          router.push("/chat");
                          // setIsSidebarOpen(false);
                        }}
                      >
                        <FiHelpCircle size={18} /> Help

                      </li>
                      <hr className="my-1" />
                      <li
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600 cursor-pointer"
                      >
                        <FiLogOut size={18} /> Log out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="text-white hover:font-bold cursor-pointer bg-red-500 rounded-lg px-3 py-1 border-gray-500 font-medium flex items-center"
              >
                Login
              </button>
            )}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-black shadow-lg transform transition-transform duration-300 z-[9998] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <img
              onClick={() => {
                router.push("/");
                setIsSidebarOpen(false);
              }}
              src="/image/Logo.png"
              className="w-28 cursor-pointer"
              alt="Logo"
            />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-2xl text-white"
            >
              <IoClose />
            </button>
          </div>

          <ul className="flex flex-col space-y-2 p-4">
            {menuItems.map((item, index) => (
              <NavItems
                key={index}
                item={item}
                closeMenu={() => setIsSidebarOpen(false)}
              />
            ))}
            {/* <div className="flex items-center gap-2 relative">
              <button
                onClick={() => setShowInput(!showInput)}
                className="text-white hover:text-green-600 px-2 cursor-pointer font-medium flex items-center justify-center"
              >
                <CiSearch size={25} />
              </button>
              {showInput && (
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  autoFocus
                  className="border border-gray-300 text-white rounded-md px-3 py-1 w-full bg-black/70 transition-all duration-200"
                />
              )}
            </div> */}

            {/* {user ? (
              <div className="relative mt-4" ref={dropdownRef}>
                <img
                  src={user.profilePic || "/user/user1.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-green-500 cursor-pointer"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-[9999]">
                    <div className="p-3 border-b border-gray-200">
                      <p className="text-red-600 font-medium">
                        {user.email || user.name || "User"}
                      </p>
                    </div>
                    <ul className="text-gray-800 text-sm">
                      <li
                        onClick={() => fileInputRef.current.click()}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <LuCloudUpload size={18} /> Upload pic
                      </li>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleProfilePicUpload}
                      />
                      <li
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600 cursor-pointer"
                      >
                        <FiLogOut size={18} /> Log out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="text-white hover:font-bold cursor-pointer bg-red-500 rounded-lg px-3 py-1 w-[40%] border-gray-500 font-medium flex items-center"
              >
                Login
              </button>
            )} */}
          </ul>
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-[9997]"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
      </nav>

      {/* Modals */}
      <LoginModal
        show={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginOpen(false);
          setIsSignupOpen(true);
        }}
        onSwitchToForgotPassword={() => {
          setIsLoginOpen(false);
          setIsForgotPasswordOpen(true);
        }}
      />
      <SignupModal
        show={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupOpen(false);
          setIsLoginOpen(true);
        }}
      />
      <ForgotPasswordModal
        show={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        onSwitchToLogin={() => {
          setIsForgotPasswordOpen(false);
          setIsLoginOpen(true);
        }}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Navbar;
