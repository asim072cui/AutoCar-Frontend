"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import axios from "axios";
import toast, { Toaster} from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { duration } from "moment";

export default function LoginModal({ show, onClose, onSwitchToSignup, onSwitchToForgotPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading , setIsLoading] =useState(false);
  const router = useRouter();

  if (!show) return null; // Hide modal when not active 

const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Please fill all the fields");
    return;
  }

  setIsLoading(false);
  const loadingToast = toast.loading("Logging in...", {
    position: 'top-center',
  });

  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    console.log("Login successfully", response);
   
    localStorage.setItem(
      "user",
      JSON.stringify({
        _id: response.data.user._id,
        id: response.data.user._id,
        name: response.data.user.name,
        email: response.data.user.email,
        role: response.data.user.role,
        profilePic: response.data.user.profilePic || "/user/user1.png",
        token: response.data.token,

      })
     );
      // console.log("User check this issue", _id);
    console.log("Token:", response.data.token);
    localStorage.setItem("token", response.data.token);

    toast.success("Login successfully!", { id: loadingToast });
      //  window.location.reload();
  // Clear form
    setEmail("");
    setPassword("");

    // Close modal and redirect based on role
    onClose();
    const role = response.data.user.role;
    setTimeout(() => {
      if (role === "admin") {
        router.push("/admin"); // admin landing page
      } else {
        router.push("/"); // user landing page
      }
    }, 500);

  } catch (error) {
    console.error("Login failed", error);
    const errorMessage =
    error.response?.data?.message || "Login failed. Please try again.";
    toast.error(errorMessage, { id: loadingToast }, {
      duration: 5000,
      position: 'top-center',
    });
  } finally {
    setIsLoading(false);
  }
  
};


  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-6 overflow-y-auto max-h-[110vh] transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-center">Log In</h2>
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

        {/* Social Buttons */}
        <div className="space-y-3">
          <button
          onClick={() => window.location.href = "http://localhost:5000/api/auth/google"}
            className="flex items-center justify-center w-full border border-gray-300 rounded-full py-2 hover:bg-gray-100"
          >
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

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email or username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="text-right">
            <button 
              onClick={onSwitchToForgotPassword}
              className="text-blue-600 text-sm hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-700">
          New to our store?{" "}
          <button 
            onClick={onSwitchToSignup}
            className="text-blue-600 hover:underline"
          >
            Sign Up
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
