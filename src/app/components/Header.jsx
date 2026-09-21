
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Hero", href: "/Hero" },
    { name: "About", href: "/About" },
    { name: "Services", href: "/Cards" },
    { name: "Contact", href: "/Contact" },
    { name: "Blogs", href: "/Blogs" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-8 pt-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-4 md:px-6 py-3 shadow-2xl">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-red-900 flex items-center justify-center shadow-lg shadow-red-900/30 group-hover:bg-red-800 transition">
              <i className="ri-car-line text-2xl text-white"></i>
            </div>

            <div className="leading-none">
              <span className="block text-white text-xl md:text-2xl font-extrabold tracking-tight">
                Auto<span className="text-red-800">Care</span>
              </span>
              <span className="hidden sm:block text-gray-400 text-[10px] uppercase tracking-[0.25em] mt-1">
                Premium Auto Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-red-900/80 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/Login"
              className="px-4 py-2.5 text-sm font-semibold text-gray-200 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              href="/Booking"
              className="flex items-center gap-2 bg-red-900 hover:bg-red-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-red-900/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Service
              <i className="ri-arrow-right-line text-lg"></i>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-red-900 transition"
            aria-label="Toggle menu"
          >
            <i
              className={
                menuOpen
                  ? "ri-close-line text-2xl"
                  : "ri-menu-line text-2xl"
              }
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl">

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-red-900/80 transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="border-t border-white/10 mt-3 pt-3 flex flex-col gap-2">
              <Link
                href="/Login"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                Login
              </Link>

              <Link
                href="/Booking"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-red-900 hover:bg-red-800 text-white px-4 py-3 rounded-xl font-semibold transition"
              >
                Book Service
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;