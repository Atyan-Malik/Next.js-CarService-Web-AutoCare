
"use client";

import React from "react";
import Slider from "react-slick";
import "remixicon/fonts/remixicon.css";

const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    role: "Regular Customer",
    message:
      "AutoCare has been my go-to car service for years. They are professional, fast, and honest. My car has never run better!",
    img: "/ava-1.jpg",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    role: "Satisfied Client",
    message:
      "Amazing experience! The staff explained everything clearly and the detailing service was top-notch. Highly recommended!",
    img: "/ava-2.jpg",
  },
  {
    id: 3,
    name: "Omar Malik",
    role: "Business Owner",
    message:
      "Great attention to detail and very fair pricing. AutoCare's team really knows how to take care of customers.",
    img: "/ava-3.jpg",
  },
  {
    id: 4,
    name: "Fatima Noor",
    role: "Car Enthusiast",
    message:
      "They restored my car's paint beautifully. It looks brand new again! I'll definitely be coming back for regular services.",
    img: "/ava-2.jpg",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    pauseOnHover: true,
    dotsClass: "slick-dots !bottom-[-45px]",
  };

  return (
    <section className="bg-black px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-red-800" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
              Customer Reviews
            </span>
            <span className="h-[2px] w-10 bg-red-800" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            What Our Customers
            <br />
            <span className="text-red-800">Have to Say.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-400">
            Real experiences from customers who trust AutoCare with their
            vehicles.
          </p>
        </div>

        {/* Slider */}
        <div className="mx-auto max-w-4xl">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-1 sm:px-4">
                <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] px-7 py-9 sm:px-12 sm:py-12">
                  {/* Quote Icon */}
                  <div className="absolute right-7 top-6 text-red-900/30 sm:right-10">
                    <i className="ri-double-quotes-r text-7xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-7 flex items-center gap-1 text-red-700">
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                    </div>

                    <p className="max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
                      &quot;{testimonial.message}&quot;
                    </p>

                    <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-7">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full border-2 border-red-900 object-cover"
                      />

                      <div>
                        <h3 className="font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
