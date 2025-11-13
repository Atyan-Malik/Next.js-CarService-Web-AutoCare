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
    img: "ava-1.jpg",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    role: "Satisfied Client",
    message:
      "Amazing experience! The staff explained everything clearly and the detailing service was top-notch. Highly recommended!",
    img: "ava-2.jpg",
  },
  {
    id: 3,
    name: "Omar Malik",
    role: "Business Owner",
    message:
      "Great attention to detail and very fair pricing. AutoCare’s team really knows how to take care of customers.",
    img: "ava-3.jpg",
  },
  {
    id: 4,
    name: "Fatima Noor",
    role: "Car Enthusiast",
    message:
      "They restored my car’s paint beautifully. It looks brand new again! I’ll definitely be coming back for regular services.",
    img: "ava-2.jpg",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          What People Are <span className="text-red-900">Saying</span>
        </h2>

        <Slider {...settings}>
          {testimonials.map(({ id, name, role, message, img }) => (
            <div key={id} className="px-4">
              <div className="bg-[rgb(255,255,255,.1)] text-black rounded-2xl shadow-lg p-8 md:p-10 flex flex-col items-center justify-center">
                <i className="ri-double-quotes-l text-red-900 text-4xl mb-4"></i>
                <p className="text-gray-400 italic mb-6">{message}</p>
                <div className="flex flex-col items-center">
                  <img
                    src={img}
                    alt={name}
                    className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-red-900"
                  />
                  <h3 className="text-white font-semibold text-lg">{name}</h3>
                  <p className="text-gray-400 text-sm">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
