"use client";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Top 5 Tips to Keep Your Car Shining",
    desc: "Learn the best car cleaning practices to maintain that fresh, glossy look all year long.",
    img: "/blog1.jpg",
    date: "Nov 5, 2025",
    link: "/Blogs/Regularshine",
  },
  {
    id: 2,
    title: "Why Regular Oil Changes Matter",
    desc: "Understand why timely oil changes are crucial for your car's engine health and performance.",
    img: "/blog2.jpg",
    date: "Nov 10, 2025",
    link: "/Blogs/Oilchange",
  },
  {
    id: 3,
    title: "How to Prepare Your Car for Long Drives",
    desc: "Before you hit the road, follow these essential checks to ensure a smooth journey.",
    img: "/blog3.jpg",
    date: "Nov 12, 2025",
    link: "/Blogs/Longdrive",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-2">
          Latest from Our Blog
        </h2>
        <p className="text-gray-400">
          Stay updated with car care tips, maintenance guides, and expert advice.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[rgb(255,255,255,.1)] rounded-2xl overflow-hidden shadow-lg hover:shadow-red-900/40 transition-shadow duration-300"
          >
            <div className="relative h-52 w-full">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-400 mb-1">{blog.date}</p>
              <h3 className="text-xl font-semibold mb-2 ">
                {blog.title}
              </h3>
              <p className="text-gray-400 mb-4">{blog.desc}</p>
              <Link
                href={blog.link}
                className="inline-block text-red-900 font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
