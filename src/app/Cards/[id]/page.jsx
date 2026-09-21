
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Full Car Wash",
    desc: "Complete exterior and interior cleaning to make your car shine like new.",
    img: "/car-wash.jpg",
    button: "Book Now",
    price: "$50",
    duration: "1.5 hours",
    features: [
      "Exterior hand wash",
      "Interior vacuuming",
      "Window cleaning",
      "Tire shine",
      "Dashboard wipe down",
    ],
    notes: "Recommended once a month for best results.",
  },
  {
    id: 2,
    title: "Engine Diagnostics",
    desc: "Advanced computer scanning to detect and fix engine issues quickly.",
    img: "/engine-diag.jpg",
    button: "Book Now",
    price: "$80",
    duration: "1 hour",
    features: [
      "Computer scan for error codes",
      "Battery and alternator check",
      "Fuel system inspection",
      "Engine performance assessment",
    ],
    notes: "Essential if your check engine light is on.",
  },
  {
    id: 3,
    title: "Oil Change",
    desc: "High-quality oil and filter change to improve performance and efficiency.",
    img: "/oil-ser.jpg",
    button: "Book Now",
    price: "$40",
    duration: "45 minutes",
    features: [
      "Engine oil replacement",
      "Oil filter change",
      "Fluid level check",
      "Quick inspection of belts and hoses",
    ],
    notes:
      "Recommended every 5,000-7,500 miles depending on your car.",
  },
  {
    id: 4,
    title: "Tire Replacement",
    desc: "Safe and affordable tire replacement, balancing, and alignment.",
    img: "/tire-rep.jpg",
    button: "Book Now",
    price: "$100",
    duration: "1 hour",
    features: [
      "Old tire removal",
      "New tire installation",
      "Wheel balancing",
      "Alignment check",
      "Tire pressure adjustment",
    ],
    notes: "Essential for smooth and safe driving.",
  },
  {
    id: 5,
    title: "Brake Inspection",
    desc: "Professional brake check and replacement for maximum road safety.",
    img: "/break-insp.jpg",
    button: "Book Now",
    price: "$60",
    duration: "1 hour",
    features: [
      "Brake pad inspection",
      "Disc condition check",
      "Brake fluid level check",
      "Caliper function test",
    ],
    notes:
      "Regular checks prevent accidents and maintain stopping power.",
  },
  {
    id: 6,
    title: "Car Detailing",
    desc: "Deep interior cleaning and exterior polishing for a showroom finish.",
    img: "/deep-wash.jpg",
    button: "Book Now",
    price: "$120",
    duration: "3 hours",
    features: [
      "Interior shampooing",
      "Leather treatment",
      "Exterior polish",
      "Scratch removal",
      "Wheel and tire cleaning",
    ],
    notes: "Perfect for cars that need a complete refresh.",
  },
  {
    id: 7,
    title: "Battery Replacement",
    desc: "Quick and reliable battery replacement with top-quality brands.",
    img: "/engine-ser.jpg",
    button: "Book Now",
    price: "$90",
    duration: "30 minutes",
    features: [
      "Battery testing",
      "Safe removal of old battery",
      "New battery installation",
      "Disposal of old battery",
    ],
    notes:
      "Ideal if your car struggles to start or battery is over 3 years old.",
  },
  {
    id: 8,
    title: "AC Repair & Service",
    desc: "Stay cool with our AC inspection, gas refill, and maintenance service.",
    img: "/ac-ser.jpg",
    button: "Book Now",
    price: "$70",
    duration: "1.5 hours",
    features: [
      "Compressor inspection",
      "Cooling coils check",
      "Gas level refill",
      "System performance test",
    ],
    notes:
      "Recommended before summer or if AC is blowing warm air.",
  },
  {
    id: 9,
    title: "Paint Restoration",
    desc: "Premium paint correction and coating to remove scratches and restore gloss.",
    img: "/paint-ser.jpg",
    button: "Book Now",
    price: "$150",
    duration: "4 hours",
    features: [
      "Scratch removal",
      "Paint polishing",
      "Protective coating application",
      "Gloss restoration",
    ],
    notes: "Ideal for older cars or after minor accidents.",
  },
];

export default function CardDetail() {
  const { id } = useParams();

  const card = cards.find((item) => item.id === Number(id));

  if (!card) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6">
        <div className="text-center">
          <div className="mb-4 text-5xl text-red-800">
            <i className="ri-error-warning-line" />
          </div>

          <h1 className="text-2xl font-bold text-white">
            Service Not Found
          </h1>

          <p className="mt-2 text-gray-400">
            The service you are looking for does not exist.
          </p>

          <Link
            href="/Cards"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-900 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
          >
            <i className="ri-arrow-left-line" />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link
            href="/Cards"
            className="transition hover:text-white"
          >
            Services
          </Link>

          <i className="ri-arrow-right-s-line" />

          <span className="text-gray-300">{card.title}</span>
        </div>

        {/* Main Content */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/50 lg:grid-cols-2">
          {/* Image */}
          <div className="group relative min-h-[380px] overflow-hidden lg:min-h-[650px]">
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

            {/* Service Number */}
            <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/70 text-sm font-bold text-white backdrop-blur-md">
              {String(card.id).padStart(2, "0")}
            </div>

            {/* Image Content */}
            <div className="absolute bottom-7 left-6 right-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
                AutoCare Service
              </p>

              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                {card.title}
              </h2>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            {/* Heading */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-700">
                Professional Service
              </p>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {card.title}
              </h1>

              <p className="mt-5 text-base leading-7 text-gray-400">
                {card.desc}
              </p>
            </div>

            {/* Price / Duration */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-2 flex items-center gap-2 text-gray-500">
                  <i className="ri-price-tag-3-line text-lg" />

                  <span className="text-xs font-medium uppercase tracking-wider">
                    Starting From
                  </span>
                </div>

                <p className="text-2xl font-bold text-red-700">
                  {card.price}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-2 flex items-center gap-2 text-gray-500">
                  <i className="ri-time-line text-lg" />

                  <span className="text-xs font-medium uppercase tracking-wider">
                    Duration
                  </span>
                </div>

                <p className="text-lg font-bold text-white">
                  {card.duration}
                </p>
              </div>
            </div>

            {/* Included Services */}
            <div className="mt-9">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-red-800" />

                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                  What&apos;s Included
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {card.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.025] p-3 transition hover:border-red-900/40 hover:bg-white/[0.05]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-900/20 text-red-700">
                      <i className="ri-check-line text-sm" />
                    </span>

                    <span className="text-sm leading-5 text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 rounded-xl border-l-2 border-red-800 bg-red-900/10 p-4">
              <div className="flex gap-3">
                <i className="ri-information-line mt-0.5 text-lg text-red-700" />

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Service Note
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    {card.notes}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto flex flex-col gap-3 pt-9 sm:flex-row">
              <Link
                href="/Booking"
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-lg bg-red-900 px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-950/20 transition-all duration-300 hover:bg-red-800 hover:shadow-red-900/20"
              >
                {card.button}
                <i className="ri-arrow-right-line text-lg" />
              </Link>

              <Link
                href="/Cards"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <i className="ri-arrow-left-line" />
                All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
