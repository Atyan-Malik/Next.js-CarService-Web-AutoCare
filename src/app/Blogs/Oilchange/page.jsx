"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-6 text-white hover:text-red-900 transition"
        >
          ← Back to home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
          Why Regular Oil Changes Matter
        </h1>
        <p className="text-gray-400 mb-8">Published on Nov 10, 2025</p>

        <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src="/blog2.jpg"
            alt="Oil Change Importance"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Oil changes are essential to keep your engine healthy and running
            smoothly. Over time, oil breaks down and collects debris, which can
            damage internal engine parts.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            1. Lubrication Keeps Engine Healthy
          </h2>
          <p>
            Clean oil ensures smooth movement of engine parts and reduces wear
            and tear. Without it, metal components can grind against each other.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            2. Better Fuel Efficiency
          </h2>
          <p>
            Fresh oil reduces friction, helping your engine work more
            efficiently and improving mileage.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            3. Longer Engine Life
          </h2>
          <p>
            Regular oil changes remove contaminants that cause corrosion, thus
            prolonging your engine's lifespan.
          </p>

          <p className="mt-8 text-gray-400 italic">
            Don't ignore your oil change reminders — your engine depends on it.
          </p>
        </div>
      </div>
    </section>
  );
}
