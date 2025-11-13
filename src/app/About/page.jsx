import React from "react";

const page = () => {
  return (
   <section className="bg-black py-16 px-6 md:px-20 mt-3">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    <div className="md:w-1/2">
      <img 
        src="/About (2).jpg"
        alt="Car Service"
        className="rounded-2xl shadow-lg w-full object-cover h-100"
      />
    </div>

    <div className="md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
       <span className="text-white">About</span> <span className="text-red-900">AutoCare</span>
      </h2>
      <p className="text-gray-400 mb-6 leading-relaxed">
        At <strong>AutoCare</strong>, we believe your car deserves the best.
        With over 10 years of experience, we specialize in premium car repairs,
        detailing, and maintenance — ensuring your vehicle performs at its
        peak. From oil changes to engine diagnostics, our expert mechanics take
        care of it all.
      </p>
      <p className="text-gray-400 mb-8 leading-relaxed">
        We value honesty, quality, and trust. Every service is done with precision,
        using high-grade tools and original parts to keep your car running like new.
      </p>
      <a
        href="/Booking"
        className="inline-block bg-red-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-black transition"
      >
        Book Your Service
      </a>
    </div>

  </div>
</section>

    
  );
};

export default page;
