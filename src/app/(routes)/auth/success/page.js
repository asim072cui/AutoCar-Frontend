"use client";
import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

function AuthSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const userParam = searchParams.get("user");

    if (token && userParam) {
      try {
        const user = JSON.parse(decodeURIComponent(userParam));

        localStorage.setItem(
          "user",
          JSON.stringify({
            name: user.name,
            email: user.email,
            token: token,
            profilePic: user.profilePic || "/user/user1.png",
          })
        );

        toast.success("Login successful! Welcome back!");

        setTimeout(() => {
          router.push("/homepage");
        }, 1500);
      } catch (error) {
        console.error("Error parsing user data:", error);
        toast.error("Authentication failed. Please try again.");
        router.push("/login");
      }
    } else {
      toast.error("Invalid authentication data.");
      router.push("/login");
    }
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-md text-center border border-blue-100"
      >
        <div className="relative flex flex-col items-center space-y-6">
          {/* Spinner animation */}
          <div className="relative">
            <div className="h-20 w-20 rounded-full border-t-4 border-b-4 border-blue-600 animate-spin" />
            <CheckCircle2 className="absolute inset-0 m-auto text-blue-600 h-8 w-8 animate-pulse" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Completing your login...
            </h2>
            <p className="text-gray-500 mt-2">
              Please wait while we prepare your account.
            </p>
          </div>

          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="h-1 bg-blue-600 rounded-full mt-4"
          />

          <p className="text-xs text-gray-400 italic mt-2">
            Redirecting you to homepage...
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function AuthSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthSuccessContent />
    </Suspense>
  );
}
