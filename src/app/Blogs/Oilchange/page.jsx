
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
              Maintenance Guide
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Why Regular Oil Changes
            <span className="text-red-800"> Matter.</span>
          </h1>

          <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
            <i className="ri-calendar-line text-red-700" />
            <span>Published on Nov 10, 2025</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative mt-10 h-[300px] overflow-hidden rounded-2xl border border-white/10 sm:h-[420px] lg:h-[520px]">
          <Image
            src="/blog2.jpg"
            alt="Oil Change Importance"
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
              Oil changes are essential for keeping your engine healthy and
              running smoothly. Over time, engine oil can break down and collect
              contaminants, reducing its ability to protect internal
              components.
            </p>

            {/* Point 1 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">01</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Lubrication Keeps Your Engine Healthy
                </h2>
              </div>

              <p>
                Clean engine oil helps moving components operate smoothly and
                reduces friction and wear. Without adequate lubrication, metal
                components can come into direct contact and experience
                increased wear.
              </p>
            </section>

            {/* Point 2 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">02</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Better Fuel Efficiency
                </h2>
              </div>

              <p>
                Fresh oil can help reduce friction within the engine, allowing
                it to operate efficiently. Maintaining the correct oil level
                and using the recommended oil grade can support normal fuel
                economy.
              </p>
            </section>

            {/* Point 3 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">03</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Longer Engine Life
                </h2>
              </div>

              <p>
                Regular oil changes help remove degraded oil and contaminants
                that can contribute to engine wear. Following the manufacturer
                recommended maintenance schedule can help keep the engine in
                good operating condition.
              </p>
            </section>
          </div>

          {/* Closing Note */}
          <div className="mt-12 border-l-2 border-red-800 bg-red-900/10 px-6 py-5">
            <div className="flex gap-3">
              <i className="ri-lightbulb-line mt-1 text-xl text-red-700" />

              <p className="text-sm leading-7 text-gray-300 sm:text-base">
                Don&apos;t ignore your oil change reminders — regular
                maintenance helps keep your engine protected and performing
                properly.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-white">
                Due for an oil change?
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Let the AutoCare team handle your next service.
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
