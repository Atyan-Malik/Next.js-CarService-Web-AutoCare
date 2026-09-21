
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Full Car Wash",
    desc: "Complete exterior and interior cleaning to make your car shine like new.",
    img: "/car-wash.jpg",
  },
  {
    id: 2,
    title: "Engine Diagnostics",
    desc: "Advanced computer scanning to detect and fix engine issues quickly.",
    img: "/engine-diag.jpg",
  },
  {
    id: 3,
    title: "Oil Change",
    desc: "High-quality oil and filter change to improve performance and efficiency.",
    img: "/oil-ser.jpg",
  },
  {
    id: 4,
    title: "Tire Replacement",
    desc: "Safe and affordable tire replacement, balancing, and alignment.",
    img: "/tire-rep.jpg",
  },
  {
    id: 5,
    title: "Brake Inspection",
    desc: "Professional brake check and replacement for maximum road safety.",
    img: "/break-insp.jpg",
  },
  {
    id: 6,
    title: "Car Detailing",
    desc: "Deep interior cleaning and exterior polishing for a showroom finish.",
    img: "/deep-wash.jpg",
  },
  {
    id: 7,
    title: "Battery Replacement",
    desc: "Quick and reliable battery replacement with top-quality brands.",
    img: "/engine-ser.jpg",
  },
  {
    id: 8,
    title: "AC Repair & Service",
    desc: "Stay cool with our AC inspection, gas refill, and maintenance service.",
    img: "/ac-ser.jpg",
  },
  {
    id: 9,
    title: "Paint Restoration",
    desc: "Premium paint correction and coating to restore your vehicle's gloss.",
    img: "/paint-ser.jpg",
  },
];

export default function CardsPage() {
  return (
    <section className="min-h-screen bg-black px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-800" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
              Our Services
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Everything Your Car
            <br />
            <span className="text-red-800">Needs.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
            From routine maintenance to professional repairs, our team keeps
            your vehicle performing at its best.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:-translate-y-1 hover:border-red-900/70"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex min-h-[245px] flex-col p-6">

                <h2 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-700">
                  {card.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {card.desc}
                </p>

                {/* Divider */}
                <div className="mt-auto border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3">

                    <Link
                      href="/Booking"
                      className="inline-flex items-center gap-2 rounded-lg bg-red-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-red-800"
                    >
                      Book Now
                      <i className="ri-arrow-right-line" />
                    </Link>

                    <Link
                      href={`/Cards/${card.id}`}
                      className="inline-flex items-center gap-2 px-2 py-2.5 text-sm font-semibold text-gray-400 transition-colors duration-300 hover:text-white"
                    >
                      Details
                      <i className="ri-arrow-right-up-line" />
                    </Link>

                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
