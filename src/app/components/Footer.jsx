import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-6 px-4 text-center font-semibold">
      <p className="mb-3">Made by Atyan Shahid</p>

      <div className="flex justify-center gap-4 text-2xl">
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-pink-500 transition-colors"
        >
          <i className="ri-facebook-circle-fill"></i>
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors"
        >
          <i className="ri-instagram-line"></i>
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-pink-500 transition-colors"
        >
          <i className="ri-twitter-x-line"></i>
        </a>
      </div>

      <p className="mt-4 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
