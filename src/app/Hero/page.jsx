
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero2.jpg')",
      }}
    >
      {/* Dark gradient — stronger on left, lighter on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20"></div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-28">
        <div className="max-w-3xl">

          {/* Small accent */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-red-800"></span>

            <span className="text-red-700 text-sm font-semibold uppercase tracking-[0.25em]">
              Professional Auto Care
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight">
            Your Car.
            <br />
            <span className="text-red-800">Our Expertise.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed">
            Reliable maintenance, expert repairs, and professional care
            designed to keep your vehicle performing at its best.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/Booking"
              className="inline-flex items-center gap-3 bg-red-900 hover:bg-red-800 text-white px-7 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-black/30"
            >
              Book a Service
              <i className="ri-arrow-right-line text-lg"></i>
            </Link>

            <Link
              href="/Cards"
              className="inline-flex items-center gap-3 border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View Services
              <i className="ri-tools-line text-lg"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Right-side visual accent */}
      <div className="absolute right-8 bottom-10 hidden lg:flex items-center gap-3 text-gray-300 text-sm">
        <span>Drive with confidence</span>
        <span className="w-10 h-px bg-red-800"></span>
      </div>
    </section>
  );
};

export default Hero;
