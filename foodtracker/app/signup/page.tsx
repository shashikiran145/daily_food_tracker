"use client";

import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import app from "@/lib/firebase";



export default function SignupPage() {
  const router = useRouter();
  //const auth = getAuth(app);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center px-6 py-10">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 px-8 py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black tracking-tight">
            Create Account
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Start your fitness journey today.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Your Name
            </label>
            <input
              placeholder="e.g. John Doe"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
            />
            <p className="text-xs text-gray-500 mt-1">
              Minimum 6 characters
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Age
            </label>
            <input
              placeholder="e.g. 30"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Height (cm)
            </label>
            <input
              placeholder="e.g. 175"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Current Weight */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Current Weight (kg)
            </label>
            <input
              placeholder="e.g. 85"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Goal Weight */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Goal Weight (kg)
            </label>
            <input
              placeholder="e.g. 75"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

        </div>

        {/* Create Button */}
        <button 
          onClick={() => router.push("/dashboard")}
          className="w-full mt-8 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition shadow-md">
          
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Footer */}
        <button
          onClick={() => router.push("/")}
          className="w-full border border-gray-300 py-3 rounded-xl text-black font-medium hover:bg-gray-100 transition"
        >
          Already have an account? Sign In
        </button>

      </div>
    </main>
  );
}