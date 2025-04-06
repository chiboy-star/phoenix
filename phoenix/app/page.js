'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-white">
      <div className="flex flex-1">
        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-10 py-16">
          <h1 className="text-5xl font-bold mb-6 text-black">The Simpler Way To Sell Online</h1>
          <p className="text-gray-800 mb-8 text-lg ">
            Focus on your products, we’ll handle the rest. Our intuitive platform makes it easy
            to create a stunning online store and reach your customers.
          </p>

          <div className="flex gap-4">
            <Link href="/choose-role">
              <button className="border border-green-600 text-green-600  px-6 py-3 rounded-xl font-semibold \ hover:bg-green-50">
            Sign Up
              </button>
            </Link>
            <Link href="/waitlist">
              <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50">
              Sign In
              </button>
            </Link>
          </div>
        </div>

        {/* Divider with Logo */}
        <div className="w-[100px] bg-[rgba(193,255,114,1)] flex justify-center items-center">
          <Image
            src="/p2.svg" // Replace with your actual logo path
            alt="Logo"
            width={200}
            height={200}
            className="z-20" // Adjust the height as needed
          />
        </div>

        {/* Left Image */}
        <div className="w-full md:w-1/2 relative hidden md:block m-6 ">
          <Image
            src="/p_image.jpeg"
            alt="Landing visual"
            layout="fill"
            objectFit="cover"
            className="rounded-l-2xl"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[rgba(247,247,247,1)] py-4 text-center text-black text-sm">
        Be the first to experience our innovative features and start building your dream business.
      </footer>
    </main>
  );
}
