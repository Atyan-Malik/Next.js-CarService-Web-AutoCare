"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-6 text-white hover:text-red-400 transition"
        >
          ← Back to home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
          How to Prepare Your Car for Long Drives
        </h1>
        <p className="text-gray-400 mb-8">Published on Nov 12, 2025</p>

        <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src="/blog3.jpg"
            alt="Car Long Drive Preparation"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Before heading out on a long road trip, it's important to ensure
            your vehicle is in top condition to avoid breakdowns.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            1. Check Fluid Levels
          </h2>
          <p>
            Inspect engine oil, brake fluid, coolant, and windshield washer
            fluid before you go.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            2. Inspect Tires
          </h2>
          <p>
            Check tire pressure and tread depth. Don't forget to inspect the
            spare tire too.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            3. Test Battery and Lights
          </h2>
          <p>
            Make sure your car battery is charged and headlights, brake lights,
            and indicators work properly.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            4. Pack Essentials
          </h2>
          <p>
            Carry a first-aid kit, jumper cables, water, and emergency tools.
          </p>

          <p className="mt-8 text-gray-400 italic">
            A few checks before the journey can save you from major troubles on
            the road.
          </p>
        </div>
      </div>
    </section>
  );
}
