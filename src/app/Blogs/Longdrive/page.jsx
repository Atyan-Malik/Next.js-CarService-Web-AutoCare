
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-28 text-white sm:px-10 lg:px-20">
      <article className="mx-auto max-w-5xl">
        {/* Back Navigation */}
        <Link
          href="/Blogs"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-white"
        >
          <i className="ri-arrow-left-line" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-800" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
              Road Trip Guide
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            How to Prepare Your Car
            <span className="text-red-800"> for Long Drives.</span>
          </h1>

          <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
            <i className="ri-calendar-line text-red-700" />
            <span>Published on Nov 12, 2025</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative mt-10 h-[300px] overflow-hidden rounded-2xl border border-white/10 sm:h-[420px] lg:h-[520px]">
          <Image
            src="/blog3.jpg"
            alt="Car Long Drive Preparation"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Article */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-8 text-base leading-8 text-gray-400 sm:text-lg">
            <p>
              Before heading out on a long road trip, it&apos;s important to
              make sure your vehicle is in good condition. A few simple checks
              can help reduce the risk of unexpected problems during your
              journey.
            </p>

            {/* Point 1 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">01</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Check Fluid Levels
                </h2>
              </div>

              <p>
                Inspect the engine oil, brake fluid, coolant, and windshield
                washer fluid before you leave. Make sure fluid levels are
                within the recommended range and look for any visible leaks.
              </p>
            </section>

            {/* Point 2 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">02</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Inspect Your Tires
                </h2>
              </div>

              <p>
                Check tire pressure and inspect the tread for signs of
                excessive wear or damage. Also make sure your spare tire is
                properly inflated and ready to use if needed.
              </p>
            </section>

            {/* Point 3 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">03</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Test the Battery and Lights
                </h2>
              </div>

              <p>
                Make sure the battery is in good condition and check that the
                headlights, brake lights, indicators, and other exterior lights
                are working properly before starting your trip.
              </p>
            </section>

            {/* Point 4 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">04</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Pack the Essentials
                </h2>
              </div>

              <p>
                Carry useful emergency items such as a first-aid kit, jumper
                cables, drinking water, a flashlight, basic tools, and other
                equipment appropriate for your trip.
              </p>
            </section>
          </div>

          {/* Closing Note */}
          <div className="mt-12 border-l-2 border-red-800 bg-red-900/10 px-6 py-5">
            <div className="flex gap-3">
              <i className="ri-lightbulb-line mt-1 text-xl text-red-700" />

              <p className="text-sm leading-7 text-gray-300 sm:text-base">
                A few checks before the journey can help prevent avoidable
                problems and make your time on the road more comfortable and
                stress-free.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-white">
                Planning a long drive?
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Get your vehicle checked before you hit the road.
              </p>
            </div>

            <Link
              href="/Booking"
              className="inline-flex items-center gap-3 rounded-lg bg-red-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-red-800"
            >
              Book a Service
              <i className="ri-arrow-right-line text-lg" />
            </Link>
          </div>

          {/* Back Link */}
          <div className="mt-10 text-center">
            <Link
              href="/Blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-white"
            >
              <i className="ri-arrow-left-line" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
