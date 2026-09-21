
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
              Car Care Guide
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Top 5 Tips to Keep Your Car
            <span className="text-red-800"> Shining.</span>
          </h1>

          <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
            <i className="ri-calendar-line text-red-700" />
            <span>Published on Nov 5, 2025</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative mt-10 h-[300px] overflow-hidden rounded-2xl border border-white/10 sm:h-[420px] lg:h-[520px]">
          <Image
            src="/blog1.jpg"
            alt="Car Cleaning Tips"
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
              Keeping your car clean not only improves its appearance but can
              also help protect its paint and interior surfaces. A clean car
              feels better to drive and reflects the care you put into your
              vehicle.
            </p>

            {/* Tip 1 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">01</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Wash Regularly
                </h2>
              </div>

              <p>
                Wash your car regularly to remove dirt, grime, road salt, and
                other contaminants that can affect the paint surface. Use a
                pH-balanced car shampoo instead of household dish soap.
              </p>
            </section>

            {/* Tip 2 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">02</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Use Microfiber Towels
                </h2>
              </div>

              <p>
                Use clean microfiber towels when drying and polishing your car.
                They absorb water effectively while helping reduce the chance
                of scratches and streaks.
              </p>
            </section>

            {/* Tip 3 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">03</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Wax for Protection
                </h2>
              </div>

              <p>
                A quality car wax can add shine while providing an additional
                layer of protection against UV exposure, dirt, and
                environmental contaminants. Follow the product instructions
                for reapplication.
              </p>
            </section>

            {/* Tip 4 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">04</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Clean the Interior Too
                </h2>
              </div>

              <p>
                Vacuum the seats, carpets, and floor mats regularly. Use
                appropriate interior cleaners on the dashboard and other
                surfaces to help keep the cabin clean and well maintained.
              </p>
            </section>

            {/* Tip 5 */}
            <section>
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-red-700">05</span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Don&apos;t Forget the Tires
                </h2>
              </div>

              <p>
                Clean tires complete the look of your vehicle. Use a suitable
                tire cleaner and, if desired, a tire dressing to give the tires
                a clean and finished appearance.
              </p>
            </section>
          </div>

          {/* Closing Note */}
          <div className="mt-12 border-l-2 border-red-800 bg-red-900/10 px-6 py-5">
            <div className="flex gap-3">
              <i className="ri-lightbulb-line mt-1 text-xl text-red-700" />

              <p className="text-sm leading-7 text-gray-300 sm:text-base">
                Maintaining your car&apos;s shine isn&apos;t difficult — it
                just requires consistency, proper cleaning techniques, and the
                right care products.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-white">
                Need professional car care?
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Let the AutoCare team take care of your vehicle.
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
