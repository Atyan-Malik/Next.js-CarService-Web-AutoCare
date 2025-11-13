'use client'
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Booking data:", formData);

    // backend connect
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if(res.ok){
      alert("Service Booked")
    }
    const data = await res.json();
    console.log(data);
    
    
  };

  return (
    <section className="bg-black text-white min-h-screen flex justify-center items-center px-4 py-10">
      <div className="bg-white text-black rounded-2xl shadow-2xl w-full max-w-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-red-900 mb-6">
          Book Your Car Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i className="ri-user-line text-gray-500 mr-2"></i>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i className="ri-mail-line text-gray-500 mr-2"></i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i className="ri-phone-line text-gray-500 mr-2"></i>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Car Model */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="carModel">
              Car Model
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i className="ri-car-line text-gray-500 mr-2"></i>
              <input
                type="text"
                id="carModel"
                name="carModel"
                placeholder="e.g. Toyota Corolla 2022"
                value={formData.carModel}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Service Type */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="serviceType">
              Select Service
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i className="ri-tools-line text-gray-500 mr-2"></i>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              >
                <option value="">Choose a service</option>
                <option value="oil-change">Oil Change</option>
                <option value="engine-repair">Engine Repair</option>
                <option value="tire-replacement">Tire Replacement</option>
                <option value="car-wash">Car Wash</option>
                <option value="battery-check">Battery Check</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="date">
              Preferred Date
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i className="ri-calendar-line text-gray-500 mr-2"></i>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="message">
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Any special request?"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none bg-transparent"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-900 hover:bg-red-800 text-white py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
