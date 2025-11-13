import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero2.jpg')", 
      }}
    >
     
      <div className="absolute inset-0 bg-black/60"></div>

     
      <div className="relative z-10 text-center text-white px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Get Back on the <span className="text-red-900">Road Fast</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Professional car service and repairs you can trust — quick, reliable,
          and affordable.
        </p>

        <Link
          href="/Booking"
          className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition duration-300 inline-block"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
