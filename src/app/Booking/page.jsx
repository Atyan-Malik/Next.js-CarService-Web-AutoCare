
"use client";

import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    serviceType: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Service booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          carModel: "",
          serviceType: "",
          date: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Unable to submit your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-28 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-800" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
              Book a Service
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Keep Your Car
            <br />
            <span className="text-red-800">Running Right.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
            Tell us about your vehicle and the service you need. Our team will
            take care of the rest.
          </p>
        </div>

        {/* Booking Layout */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] lg:grid-cols-[0.75fr_1.25fr]">
          {/* Information Panel */}
          <div className="relative hidden overflow-hidden border-r border-white/10 bg-[#090909] p-10 lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-900/15 text-red-700">
                <i className="ri-tools-line text-2xl" />
              </div>

              <h2 className="mt-7 text-3xl font-bold text-white">
                Professional care for your vehicle.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                From routine maintenance to repairs and diagnostics, our
                services are designed to keep your vehicle safe and performing
                at its best.
              </p>
            </div>

            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-red-700">
                  <i className="ri-calendar-check-line text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Flexible Scheduling
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Choose a date that works for you.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-red-700">
                  <i className="ri-shield-check-line text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Professional Service
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Quality work from experienced technicians.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-red-700">
                  <i className="ri-customer-service-2-line text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Expert Support
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    We are here when your vehicle needs us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-7 bg-red-800" />
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                    Your Information
                  </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Full Name
                    </label>

                    <div className="flex items-center rounded-lg border border-white/10 bg-black px-4 transition-colors focus-within:border-red-900">
                      <i className="ri-user-line text-gray-600" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent px-3 py-3.5 text-sm text-white outline-none placeholder:text-gray-700"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Email Address
                    </label>

                    <div className="flex items-center rounded-lg border border-white/10 bg-black px-4 transition-colors focus-within:border-red-900">
                      <i className="ri-mail-line text-gray-600" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent px-3 py-3.5 text-sm text-white outline-none placeholder:text-gray-700"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Phone Number
                    </label>

                    <div className="flex items-center rounded-lg border border-white/10 bg-black px-4 transition-colors focus-within:border-red-900">
                      <i className="ri-phone-line text-gray-600" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent px-3 py-3.5 text-sm text-white outline-none placeholder:text-gray-700"
                        required
                      />
                    </div>
                  </div>

                  {/* Car Model */}
                  <div>
                    <label
                      htmlFor="carModel"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Car Model
                    </label>

                    <div className="flex items-center rounded-lg border border-white/10 bg-black px-4 transition-colors focus-within:border-red-900">
                      <i className="ri-car-line text-gray-600" />
                      <input
                        type="text"
                        id="carModel"
                        name="carModel"
                        placeholder="e.g. Toyota Corolla 2022"
                        value={formData.carModel}
                        onChange={handleChange}
                        className="w-full bg-transparent px-3 py-3.5 text-sm text-white outline-none placeholder:text-gray-700"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-7 bg-red-800" />
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                    Service Details
                  </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Service */}
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Select Service
                    </label>

                    <div className="flex items-center rounded-lg border border-white/10 bg-black px-4 transition-colors focus-within:border-red-900">
                      <i className="ri-tools-line text-gray-600" />

                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-transparent px-3 py-3.5 text-sm text-white outline-none"
                        required
                      >
                        <option value="" className="bg-black">
                          Choose a service
                        </option>
                        <option value="oil-change" className="bg-black">
                          Oil Change
                        </option>
                        <option value="engine-repair" className="bg-black">
                          Engine Repair
                        </option>
                        <option
                          value="tire-replacement"
                          className="bg-black"
                        >
                          Tire Replacement
                        </option>
                        <option value="car-wash" className="bg-black">
                          Car Wash
                        </option>
                        <option value="battery-check" className="bg-black">
                          Battery Check
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Preferred Date
                    </label>

                    <div className="flex items-center rounded-lg border border-white/10 bg-black px-4 transition-colors focus-within:border-red-900">
                      <i className="ri-calendar-line text-gray-600" />

                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-transparent px-3 py-3.5 text-sm text-white outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Additional Message
                  <span className="ml-2 text-xs font-normal text-gray-600">
                    Optional
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us anything we should know about your vehicle..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-gray-700 focus:border-red-900"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-red-900 px-6 py-4 font-semibold text-white shadow-lg shadow-red-950/20 transition-all duration-300 hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin text-lg" />
                    Booking...
                  </>
                ) : (
                  <>
                    Book Your Service
                    <i className="ri-arrow-right-line text-lg transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-600">
                We&apos;ll use your information only to process your service
                booking.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingForm;