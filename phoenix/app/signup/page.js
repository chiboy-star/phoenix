'use client';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUpPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation or send data to your server here
    router.push('/waitlist-success');
  };

  return (
    <main className="min-h-screen bg-gradient-to-r bg-[rgba(195,254,121,1)] to-white relative
    flex flex-col items-center justify-center">
      {/* Logo at top left with blend effect */}
      <div className="absolute top-4 left-4 p-2 bg-white rounded-full">
        <Image src="/p2.svg" alt="Logo" width={100} height={100} />
      </div>

      {/* Sign Up Form Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-4">Sign Up</h1>

        {/* Social Media Sign Up */}
        <div className="flex gap-4 mb-8 ml- mt-6 mr-">
          <button className="flex items-center gap-3 border-2 border-gray-300 bg-white text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-100">
            <FcGoogle className="text-lg flex-shrink-0" />
            <span className="text-sm whitespace-nowrap">Sign up with Google</span>
          </button>

          <button className="flex items-center gap-3 border-2 border-gray-300 bg-white text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-blue-50">
            <FaFacebookF className="text-lg flex-shrink-0" />
            <span className="text-sm whitespace-nowrap">Sign up with Facebook</span>
          </button>
        </div>

        {/* Email and Password Form Fields */}
        <div className="mb-4">
          <label className="block text-lg text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 py-3 px-4 rounded-xl mt-2 focus:outline-none focus:border-green-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 py-3 px-4 rounded-xl mt-2 focus:outline-none focus:border-green-600"
          />
        </div>

        {/* Sign Up Button */}
        <button
          className="w-full bg-[#5e852c] text-white py-3 px-10 rounded-xl font-semibold hover:bg-green-800"
          onClick={handleSubmit}
        >
          Sign Up
        </button>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-800 hover:underline">
            Already have an account? <Link href="/signin">Login</Link>
          </p>
          <br />
          <Link href="/forgot-password">
            <p className="text-green-600 hover:underline">Forgot Password?</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
