"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import axios from "axios";
import toast from "react-hot-toast";

export default function ForgotPasswordModal({ show, onClose, onSwitchToLogin }) {
  const [step, setStep] = useState(1); // 1 = send email, 2 = enter OTP + new password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!show) return null;

  // -----------------
  // STEP 1: SEND OTP
  // -----------------
  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.", {
        duration: 3000,
        position: 'top-center',
      });
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Sending OTP...");

    try {
      await axios.post("https://auto-car-backend.vercel.app/api/auth/request-password-reset", { email });

      toast.success(`OTP sent to ${email}`, { id: loadingToast }, {
        duration: 4000,
        position: 'top-center',
      });
      setStep(2); // ✅ Move to OTP step
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error(
        error.response?.data?.message || "Failed to send OTP. Please try again.",
        { id: loadingToast }
      );
    } finally {
      setIsLoading(false);
    }
  };

  // -----------------
  // STEP 2: VERIFY OTP + RESET PASSWORD
  // -----------------
  const handleVerifyAndReset = async (e) => {
    e.preventDefault();

    if (!otp || !newPassword) {
      toast.error("Please enter OTP and new password.", {
        duration: 3000,
        position: 'top-center',
      });
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Verifying OTP and resetting password...");

    try {
      const response = await axios.post("https://auto-car-backend.vercel.app/api/auth/reset-password", {
        email,
        otp,
        newPassword,
      });

      toast.success("Password reset successful!", { id: loadingToast }, {
        duration: 4000,
        position: 'top-center',
      });

      setEmail("");
      setOtp("");
      setNewPassword("");
      setStep(1);
      onClose(); // close modal
      onSwitchToLogin(); // open login screen
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error(
        error.response?.data?.message || "Invalid OTP or server error.",
        { id: loadingToast },{
          duration: 4000,
          position: 'top-center',
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
        >
          ×
        </button>

        {step === 1 ? (
          <>
            {/* Step 1: Send OTP */}
            <h2 className="text-2xl font-semibold text-center">Forgot Password?</h2>
            <p className="text-sm text-center text-gray-600">
              Enter your email address and we’ll send an OTP to reset your password.
            </p>

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send OTP"}
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Step 2: Verify OTP */}
            <h2 className="text-2xl font-semibold text-center">Verify OTP</h2>
            <p className="text-sm text-center text-gray-600">
              Enter the OTP sent to your email and choose a new password.
            </p>

            <form onSubmit={handleVerifyAndReset} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  OTP Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter 6-digit OTP"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  New Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter new password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
              >
                {isLoading ? "Resetting..." : "Verify & Reset Password"}
              </button>
            </form>

            <button
              onClick={() => setStep(1)}
              className="text-sm text-blue-600 hover:underline text-center w-full mt-3"
            >
              ← Back to email
            </button>
          </>
        )}

        <p className="text-center text-sm text-gray-700 mt-2">
          Remembered your password?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-blue-600 hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
