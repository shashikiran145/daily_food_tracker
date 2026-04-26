"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center px-6">
      
      {/* Card */}
      <div className="w-full max-w-md min-h-[88vh] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col justify-center px-8 py-10">

        {/* Logo / Title */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-black tracking-tight">
            Food Tracker
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Track calories. Build discipline.
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-black mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="example@example.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block text-sm font-semibold text-black mb-2">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-20 text-black outline-none focus:ring-2 focus:ring-gray-400"
            />

            {/* <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-sm text-gray-600 hover:text-black"
            >
              {showPassword ? "Hide" : "Show"} */}
            {/* </button> */}
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <button className="text-sm text-gray-700 hover:text-black hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* Login */}
        <button 
          onClick={() => router.push("/dashboard")}
          className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 shadow-md">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Link
          href="/signup"
          className="w-full border border-gray-300 py-3 rounded-xl text-black font-medium hover:bg-gray-100 transition text-center block"
        >
          Create Account
        </Link>

      </div>
    </main>
  );
}