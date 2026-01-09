"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ResetPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // Handle sending OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email.");
    // simulate sending OTP
    alert(`OTP sent to ${email}`);
    setStep(2);
  };

  // Handle verifying OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      toast.success("OTP verified successfully!", {
        duration: 4000,
        position: 'top-center',
      });
      setStep(3);
    } else {
      toast.error("Invalid OTP. Please try again.", {
        duration: 4000,
        position: 'top-center',
      });
    }
  };

  // Handle setting new password
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      toast.error("Passwords do not match!", {
        duration: 4000,
        position: 'top-center',
      });
      return;
    }
    toast.success(`Password successfully reset for ${email}`, {
      duration: 4000,
      position: 'top-center',
    });
    setStep(1);
    setEmail("");
    setOtp("");
    setPassword("");
    setConfirm("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          {step === 1 && "Forgot Password"}
          {step === 2 && "Enter OTP"}
          {step === 3 && "Set New Password"}
        </h2>

        {step === 1 && (
          <>
            <p className="text-sm text-center text-gray-600">
              Enter your email to receive an OTP for password reset.
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
                className="w-full bg-gray-200 text-gray-500 font-semibold py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                Send OTP
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <p className="text-sm text-center text-gray-600">
              We’ve sent a 6-digit OTP to your email. Please enter it below.
            </p>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  OTP Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-center tracking-widest text-lg"
                  maxLength={6}
                  placeholder="123456"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-200 text-gray-500 font-semibold py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                Verify OTP
              </button>

              <button
                onClick={() => setStep(1)}
                className="w-full text-sm text-blue-600 hover:underline"
                type="button"
              >
                Back to Email
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            <p className="text-sm text-center text-gray-600">
              Enter and confirm your new password below.
            </p>

            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  New Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-200 text-gray-500 font-semibold py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                Set New Password
              </button>
            </form>
          </>
        )}

        <p className="text-center text-sm text-gray-700">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
