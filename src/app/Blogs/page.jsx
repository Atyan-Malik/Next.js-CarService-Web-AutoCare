
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
    <section className="bg-black px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-800" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
                AutoCare Blog
              </span>
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Insights for
              <br />
              <span className="text-red-800">Better Car Care.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
              Stay updated with car care tips, maintenance guides, and
              practical advice from the AutoCare team.
            </p>
          </div>

          <Link
            href="/Blogs"
            className="inline-flex w-fit items-center gap-2 border-b border-red-800 pb-2 text-sm font-semibold text-gray-300 transition-colors hover:text-white"
          >
            View All Articles
            <i className="ri-arrow-right-line text-lg" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:-translate-y-1 hover:border-red-900/60"
            >
              {/* Image */}
              <Link href={blog.link}>
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-md border border-white/10 bg-black/70 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-xs font-medium text-gray-300">
                      {blog.date}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="flex min-h-[245px] flex-col p-6">
                <h3 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-red-700">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {blog.desc}
                </p>

                <div className="mt-auto border-t border-white/10 pt-5">
                  <Link
                    href={blog.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-red-700"
                  >
                    Read Article
                    <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
