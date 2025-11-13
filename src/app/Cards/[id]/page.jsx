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
    notes: "Recommended every 5,000-7,500 miles depending on your car.",
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
    notes: "Regular checks prevent accidents and maintain stopping power.",
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
    notes: "Recommended before summer or if AC is blowing warm air.",
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
  const card = cards.find((c) => c.id === parseInt(id));

  if (!card) {
    return <div className="p-8 text-red-500 text-center">Card not found!</div>;
  }

  return (
   <div className="max-w-6xl mx-auto p-6 sm:p-8">
  {/* Title */}
  <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left text-white">
    {card.title}
  </h1>

  {/* Side-by-side layout */}
  <div className="flex flex-col md:flex-row md:gap-8 items-start">
    {/* Image on left */}
    <div className=" mb-6 md:mb-0 md:w-1/2">
      <img
        className="w-full rounded-lg shadow-lg object-cover"
        src={card.img}
        alt={card.title}
      />
    </div>

    {/* Details on right */}
    <div className="md:w-1/2 text-gray-400 space-y-4">
      {/* Description */}
      <p>{card.desc}</p>

      {/* Price & Duration */}
      <div className="flex flex-col sm:flex-row sm:gap-6">
        <p className="font-semibold">
          Price: <span className="text-red-800">{card.price}</span>
        </p>
        <p className="font-semibold">
          Duration: <span className="text-red-800">{card.duration}</span>
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-white text-xl font-semibold mb-2">Included Services:</h2>
        <ul className="list-disc list-inside space-y-1">
          {card.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Notes */}
      {card.notes && (
        <div className="bg-gray-100 p-4 rounded text-gray-700">
          <h2 className="font-semibold mb-1">Notes:</h2>
          <p>{card.notes}</p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 mt-4">
        <Link href="/Booking">
        <button className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded transition">
          {card.button}
        </button>
        </Link>
        <Link href="/Cards" className="text-white hover:underline">
          ← Back to all services
        </Link>
      </div>
    </div>
  </div>
</div>

  );
}
