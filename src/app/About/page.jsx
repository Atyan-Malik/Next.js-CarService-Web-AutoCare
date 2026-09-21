
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-800" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
              About AutoCare
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/About (2).jpg"
                alt="Professional AutoCare service"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[520px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-md">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Built Around
              <br />
              <span className="text-red-800">Your Vehicle.</span>
            </h2>

            <p className="mt-7 text-base leading-7 text-gray-400">
              At <span className="font-semibold text-white">AutoCare</span>,
              we believe your car deserves professional care. With over 10
              years of experience, we provide reliable repairs, maintenance,
              diagnostics, and detailing designed to keep your vehicle
              performing at its best.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-400">
              From routine oil changes to complex engine diagnostics, our
              experienced technicians focus on quality workmanship, honest
              service, and attention to every detail.
            </p>

            {/* Values */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-900/20 text-red-700">
                  <i className="ri-shield-check-line text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Trusted Service
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Honest recommendations and dependable work.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-900/20 text-red-700">
                  <i className="ri-tools-line text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Expert Technicians
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Professional tools and experienced mechanics.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/Booking"
                className="inline-flex items-center gap-3 rounded-lg bg-red-900 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-red-800"
              >
                Book Your Service
                <i className="ri-arrow-right-line" />
              </Link>

              <Link
                href="/Cards"
                className="inline-flex items-center gap-2 font-semibold text-gray-400 transition-colors hover:text-white"
              >
                Explore Services
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 border-y border-white/10 py-8 sm:grid-cols-4">

          <div className="border-white/10 px-5 text-center sm:border-r">
            <p className="text-2xl font-bold text-white">10+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
              Years Experience
            </p>
          </div>

          <div className="border-white/10 px-5 text-center sm:border-r">
            <p className="text-2xl font-bold text-white">5K+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
              Cars Serviced
            </p>
          </div>

          <div className="border-white/10 px-5 pt-6 text-center sm:border-r sm:pt-0">
            <p className="text-2xl font-bold text-white">20+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
              Services
            </p>
          </div>

          <div className="px-5 pt-6 text-center sm:pt-0">
            <p className="text-2xl font-bold text-red-700">4.9/5</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
              Customer Rating
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Page;
