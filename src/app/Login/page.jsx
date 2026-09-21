
"use client";

import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Congratulations! You have logged in successfully.");
      } else {
        alert(data.message || "Login failed. Please try again.");
      }

      console.log(data);
    } catch (error) {
      console.error("Login error:", error);
      alert("Unable to login. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600";

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-28 text-white sm:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-5xl items-center lg:grid-cols-2">
        {/* Left Content */}
        <div className="hidden pr-16 lg:block">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-800" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
              AutoCare Account
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            Welcome
            <br />
            <span className="text-red-800">Back.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-gray-500">
            Sign in to manage your service bookings and stay connected with
            AutoCare.
          </p>
        </div>

        {/* Login Card */}
        <div className="w-full">
          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 shadow-2xl shadow-black/50 sm:p-9">
            {/* Header */}
            <div className="mb-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-900/15 text-red-700">
                <i className="ri-user-settings-line text-2xl" />
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Sign In
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter your details to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Full Name
                </label>

                <div className="group flex overflow-hidden rounded-xl border border-white/10 bg-[#111111] transition-all duration-300 focus-within:border-red-800 focus-within:ring-1 focus-within:ring-red-900/40">
                  <div className="flex w-12 shrink-0 items-center justify-center border-r border-white/10 bg-white/[0.02] text-gray-600 transition-colors duration-300 group-focus-within:border-red-900/50 group-focus-within:text-red-700">
                    <i className="ri-user-3-line text-lg" />
                  </div>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Email Address
                </label>

                <div className="group flex overflow-hidden rounded-xl border border-white/10 bg-[#111111] transition-all duration-300 focus-within:border-red-800 focus-within:ring-1 focus-within:ring-red-900/40">
                  <div className="flex w-12 shrink-0 items-center justify-center border-r border-white/10 bg-white/[0.02] text-gray-600 transition-colors duration-300 group-focus-within:border-red-900/50 group-focus-within:text-red-700">
                    <i className="ri-mail-line text-lg" />
                  </div>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Password
                </label>

                <div className="group flex overflow-hidden rounded-xl border border-white/10 bg-[#111111] transition-all duration-300 focus-within:border-red-800 focus-within:ring-1 focus-within:ring-red-900/40">
                  <div className="flex w-12 shrink-0 items-center justify-center border-r border-white/10 bg-white/[0.02] text-gray-600 transition-colors duration-300 group-focus-within:border-red-900/50 group-focus-within:text-red-700">
                    <i className="ri-lock-password-line text-lg" />
                  </div>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-red-900 px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-950/20 transition-all duration-300 hover:bg-red-800 hover:shadow-red-900/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin text-lg" />
                    Signing In...
                  </>
                ) : (
                  <>
                    Login
                    <i className="ri-arrow-right-line text-lg transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-700">
                AutoCare
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
