"use client";
import React, { useState } from "react";

import "remixicon/fonts/remixicon.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("User login data:", formData);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Congratulation You have been Login Successfully");
    }
    const data = await res.json();
    console.log(data);
  };

  return (
    <section className="bg-black text-white flex items-center justify-center min-h-screen px-4">
      <div className="bg-white text-black rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-900">
          Login to AutoCare
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium" htmlFor="name">
              Name
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
            <label className="block mb-2 font-medium" htmlFor="email">
              Email
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

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i className="ri-lock-2-line text-gray-500 mr-2"></i>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-900 hover:bg-red-800 text-white py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Login
          </button>
        </form>

       
      </div>
    </section>
  );
};

export default Login;
