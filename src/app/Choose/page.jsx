
import React from "react";

const reasons = [
  {
    icon: "ri-tools-fill",
    title: "Expert Technicians",
    desc: "Experienced professionals delivering precise and dependable automotive service.",
  },
  {
    icon: "ri-car-line",
    title: "Complete Car Care",
    desc: "From routine maintenance to diagnostics and detailing, everything in one place.",
  },
  {
    icon: "ri-timer-line",
    title: "Fast & Reliable",
    desc: "Efficient service and clear communication without compromising on quality.",
  },
];

const Page = () => {
  return (
    <section className="bg-black px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-800" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
              Why AutoCare
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Service You Can
            <br />
            <span className="text-red-800">Count On.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
            Professional workmanship, dependable service, and complete care
            for every vehicle that comes through our doors.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 border-y border-white/10 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group px-6 py-10 transition-colors duration-300 hover:bg-white/[0.03] md:px-8 ${
                index !== 2 ? "border-b md:border-b-0 md:border-r" : ""
              } border-white/10`}
            >
              {/* Icon */}
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-red-900/15 text-red-700 transition-all duration-300 group-hover:bg-red-900 group-hover:text-white">
                <i className={`${reason.icon} text-2xl`} />
              </div>

              {/* Number */}
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gray-600">
                0{index + 1}
              </p>

              <h3 className="text-xl font-bold text-white">
                {reason.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
                {reason.desc}
              </p>

              {/* Bottom accent */}
              <div className="mt-7 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-red-800 transition-all duration-300 group-hover:w-12" />
                <span className="h-[2px] w-2 bg-white/10" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Page;
