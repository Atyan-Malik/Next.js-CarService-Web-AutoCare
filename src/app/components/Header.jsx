"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-red-900 p-4 relative">
      {/* Logo */}
      <div className="flex items-center gap-2 text-amber-50 text-2xl font-bold bg-[rgb(255,255,255,.1)] p-2 rounded-2xl">
        <i className="ri-car-line text-3xl"></i> AutoCare
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-[rgb(255,255,255,.1)] p-3 rounded-2xl gap-4">
        <Link className="text-amber-50 hover:text-white" href="/">
          Home
        </Link>
        <Link className="text-amber-50 hover:text-white" href="/Hero">
          Hero
        </Link>
        <Link className="text-amber-50 hover:text-white" href="/About">
          About
        </Link>
        <Link className="text-amber-50 hover:text-white" href="/Cards">
          Services
        </Link>
        <Link className="text-amber-50 hover:text-white" href="/Contact">
          Contact
        </Link>
        <Link className="text-amber-50 hover:text-white" href="/Blogs">
          Blogs
        </Link>
      </nav>

      {/* Desktop Login Button */}
      <Link href="/Login" className="hidden md:block">
        <button className="text-amber-50 font-semibold bg-[rgb(255,255,255,.1)] px-4 py-2 rounded-2xl hover:bg-[rgb(255,255,255,.2)] transition">
          Login
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-amber-50 text-3xl md:hidden"
      >
        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-red-900 flex flex-col items-center gap-3 py-6 md:hidden z-50 transition-all duration-300">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-amber-50"
          >
            Home
          </Link>
          <Link
            href="/Hero"
            onClick={() => setMenuOpen(false)}
            className="text-amber-50"
          >
            Hero
          </Link>
          <Link
            href="/About"
            onClick={() => setMenuOpen(false)}
            className="text-amber-50"
          >
            About
          </Link>
          <Link
            href="/Cards"
            onClick={() => setMenuOpen(false)}
            className="text-amber-50"
          >
            Services
          </Link>
          <Link
            href="/Contact"
            onClick={() => setMenuOpen(false)}
            className="text-amber-50"
          >
            Contact
          </Link>
          <Link href="/Login" onClick={() => setMenuOpen(false)}>
            <button className="text-amber-50 font-semibold bg-[rgb(255,255,255,.1)] px-4 py-2 rounded-2xl">
              Login
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
