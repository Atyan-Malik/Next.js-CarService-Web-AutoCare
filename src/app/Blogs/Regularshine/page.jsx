"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/Blogs"
          className="inline-block mb-6 text-white hover:text-red-900 transition"
        >
          ← Back to Home
        </Link>

        {/* Blog Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
          Top 5 Tips to Keep Your Car Shining
        </h1>
        <p className="text-gray-400 mb-8">Published on Nov 5, 2025</p>

        {/* Blog Image */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src="/blog1.jpg"
            alt="Car Cleaning Tips"
            fill
            className="object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Keeping your car clean not only improves its appearance but also
            extends the lifespan of its paint and parts. A clean car always
            feels better to drive and reflects how much you care about your
            vehicle.
          </p>

          <h2 className="text-2xl font-semibold text-red-500 mt-6">
            1. Wash Regularly
          </h2>
          <p>
            Wash your car every two weeks to remove dirt, grime, and pollutants
            that can damage the paint surface. Use pH-balanced car shampoo
            instead of dish soap.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            2. Use Microfiber Towels
          </h2>
          <p>
            Avoid scratches by using clean microfiber towels for drying and
            polishing. They absorb water effectively without leaving streaks.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            3. Wax for Protection
          </h2>
          <p>
            A layer of car wax not only adds shine but protects the paint from
            UV rays and dirt. Reapply wax every 2-3 months.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            4. Clean the Interior Too
          </h2>
          <p>
            Vacuum the seats and floor mats regularly. Use a dashboard cleaner
            to prevent fading and cracking.
          </p>

          <h2 className="text-2xl font-semibold text-red-900 mt-6">
            5. Don't Forget the Tires
          </h2>
          <p>
            Tires complete the look of your car. Clean them with tire cleaner
            and apply tire shine for a fresh appearance.
          </p>

          <p className="mt-8 text-gray-400 italic">
            Maintaining your car's shine isn't difficult — it just needs
            consistency and the right care products.
          </p>
        </div>
      </div>
    </section>
  );
}
