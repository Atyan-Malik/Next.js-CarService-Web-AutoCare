
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Full Car Wash",
    desc: "Complete exterior and interior cleaning to make your car shine like new.",
    img: "/car-wash.jpg",
    button: "Book Now",
  },
  {
    id: 2,
    title: "Engine Diagnostics",
    desc: "Advanced computer scanning to detect and fix engine issues quickly.",
    img: "/engine-diag.jpg",
    button: "Book Now",
  },
  {
    id: 3,
    title: "Oil Change",
    desc: "High-quality oil and filter change to improve performance and efficiency.",
    img: "/oil-ser.jpg",
    button: "Book Now",
  },
  {
    id: 4,
    title: "Tire Replacement",
    desc: "Safe and affordable tire replacement, balancing, and alignment.",
    img: "/tire-rep.jpg",
    button: "Book Now",
  },
  {
    id: 5,
    title: "Brake Inspection",
    desc: "Professional brake check and replacement for maximum road safety.",
    img: "/break-insp.jpg",
    button: "Book Now",
  },
  {
    id: 6,
    title: "Car Detailing",
    desc: "Deep interior cleaning and exterior polishing for a showroom finish.",
    img: "/deep-wash.jpg",
    button: "Book Now",
  },
  {
    id: 7,
    title: "Battery Replacement",
    desc: "Quick and reliable battery replacement with top-quality brands.",
    img: "/engine-ser.jpg",
    button: "Book Now",
  },
  {
    id: 8,
    title: "AC Repair & Service",
    desc: "Stay cool with our AC inspection, gas refill, and maintenance service.",
    img: "/ac-ser.jpg",
    button: "Book Now",
  },
  {
    id: 9,
    title: "Paint Restoration",
    desc: "Premium paint correction and coating to remove scratches and restore gloss.",
    img: "/paint-ser.jpg",
    button: "Book Now",
  },
];

export default function CardsPage() {
  return (
    <>
      <h1 className="text-red-900 mt-8 text-3xl md:text-4xl font-bold text-center">
        Services We Provide!
      </h1>

      <div className="p-6 sm:p-8 grid gap-6 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[rgb(255,255,255,.1)] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-[1.02] flex flex-col"
          >
            <img
              className="w-full h-48 object-cover"
              src={card.img}
              alt={card.title}
            />

            <div className="p-4 flex flex-col  justify-between">
              <div>
                <h2 className="text-xl text-white font-semibold mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-300 text-sm mb-3">{card.desc}</p>
              </div>

              <div className="mt-auto">
                <a href="/Booking">
                  <button className="bg-red-900 hover:bg-black text-amber-50 px-4 py-2 rounded-md text-sm mr-2">
                    {card.button}
                  </button>
                </a>

                <Link href={`/Cards/${card.id}`}>
                  <button className="bg-red-900 hover:bg-black text-amber-50 px-4 py-2 rounded-md text-sm">
                    View Details →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
