"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import {MODEL_SIZE} from "../option";
export default function SignupModal({ show, onClose, onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!show) return null;

const handleSignup = async (e) => {
  e.preventDefault();


  if (!email || !username || !password) {
    toast.error("Please fill in all fields", {
      duration: 3000,
      position: 'top-center',
    });
    return;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long", {
      duration: 3000,
      position: 'top-center',
    });
    return;
  }

  setIsLoading(true);
  const loadingToast = toast.loading("Signing up...");

  try {
   
    const response = await axios.post("http://localhost:5000/api/auth/register", {
      name:username,
      email,
      password,
    });

    console.log("Signup Successfully", response.data);

  
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: response.data.username,
        email: response.data.email,
        profilePic: response.data.profilePic || "/user/user1.png",
        token : response.data.token,
      })
    );


    toast.success("Signup successfully!", { id: loadingToast } , {
      duration: 4000,
      position: 'top-center',
    });

  
    window.location.reload();

  
    setEmail("");
    setUsername("");
    setPassword("");


    setTimeout(() => {
      onClose();
    }, 1000);
  } catch (err) {
    console.error("Signup error:", err);
    const errorMessage =
      err.response?.data?.message || "Signup failed. Please try again.";
    toast.error(errorMessage, { id: loadingToast });
  } finally {
    setIsLoading(false);
  }
};
return (
    <>
    <div className="fixed inset-0 z-50  flex items-center justify-center backdrop-blur-sm bg-black/50">
     <div
     className="relative w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-6 overflow-y-auto max-h-[110vh] transition-all"
     >
      <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <p className="text-sm text-center text-gray-600">
          By continuing, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            User Agreement
          </a>{" "}
          and acknowledge that you understand the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>.
        </p>

   
        <div className="space-y-3">
          <button
           onClick={() => window.location.href = "http://localhost:5000/api/auth/google"}
           className="flex items-center justify-center w-full border border-gray-300 rounded-full py-2 hover:bg-gray-100">
            <FcGoogle className="text-xl mr-2" />
           
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-full py-2 hover:bg-gray-100">
            <FaApple className="text-xl mr-2" />
            Continue with Apple
          </button>
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-full py-2 hover:bg-gray-100">
            <FiLink className="text-lg mr-2" />
            Email me a one-time link
          </button>
        </div>

 
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>


        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

       <p className="text-center text-sm text-gray-700">
      Already have an account?{" "}
  <button
    onClick={() => {
      onSwitchToLogin();
    }}
    className="text-blue-600 hover:underline"
  >
    Log In
  </button>


</p>

      </div>
    </div>
      <Toaster
    position="top-center"
    reverseOrder={false}
  />
  </>
  );
}
