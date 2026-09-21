
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight"
            >
              Auto<span className="text-red-800">Care</span>
            </Link>

            <p className="mt-2 text-sm text-gray-500">
              Professional care for every journey.
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Made by Atyan Shahid
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/About"
              className="transition-colors hover:text-white"
            >
              About
            </Link>

            <Link
              href="/Cards"
              className="transition-colors hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/Blogs"
              className="transition-colors hover:text-white"
            >
              Blog
            </Link>

            <Link
              href="/Contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-all duration-300 hover:border-red-900 hover:bg-red-900 hover:text-white"
            >
              <i className="ri-facebook-circle-fill text-lg" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-all duration-300 hover:border-red-900 hover:bg-red-900 hover:text-white"
            >
              <i className="ri-instagram-line text-lg" />
            </a>

            <a
              href="#"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-all duration-300 hover:border-red-900 hover:bg-red-900 hover:text-white"
            >
              <i className="ri-twitter-x-line text-lg" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} AutoCare. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Built with care for better journeys.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
