
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <section className="bg-black px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-800" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
              Contact AutoCare
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let&apos;s Keep Your
            <br />
            <span className="text-red-800">Car Moving.</span>
          </h2>
        </div>

        {/* Main Contact Layout */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] lg:grid-cols-2">
          {/* Left - Information */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <p className="max-w-lg text-base leading-7 text-gray-400">
                Have a question, need a quote, or ready to book your next
                service? Our team is here to help you get back on the road
                with confidence.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-900/15 text-red-700">
                    <i className="ri-map-pin-line text-xl" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Visit Us
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-300">
                      AutoCare Center, Main Boulevard,
                      <br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-900/15 text-red-700">
                    <i className="ri-phone-line text-xl" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                      +92 300 1234567
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-900/15 text-red-700">
                    <i className="ri-mail-line text-xl" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Email Us
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                      support@autocare.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                Follow AutoCare
              </p>

              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-red-900 hover:bg-red-900 hover:text-white"
                >
                  <i className="ri-facebook-fill text-lg" />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-red-900 hover:bg-red-900 hover:text-white"
                >
                  <i className="ri-instagram-line text-lg" />
                </a>

                <a
                  href="#"
                  aria-label="X"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-red-900 hover:bg-red-900 hover:text-white"
                >
                  <i className="ri-twitter-x-line text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Image CTA */}
          <div className="relative min-h-[450px] overflow-hidden lg:min-h-[600px]">
            <img
              src="/handle.jpg"
              alt="AutoCare professional service"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Image Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
                Need a Service?
              </p>

              <h3 className="max-w-md text-3xl font-bold text-white sm:text-4xl">
                Get your vehicle back on the road.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-gray-300">
                Schedule your service today and let our team take care of the
                rest.
              </p>

              <Link
                href="/Booking"
                className="mt-6 inline-flex items-center gap-3 rounded-lg bg-red-900 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-red-800"
              >
                Book a Service
                <i className="ri-arrow-right-line text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
