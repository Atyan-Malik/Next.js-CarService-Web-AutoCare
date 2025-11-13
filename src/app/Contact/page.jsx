import React from 'react'

const page = () => {

  return (
    <section className="bg-black py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Info */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
           <span className='text-white'>Get in</span>  <span className="text-red-900">Touch</span>
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Have a question or need to book a service? Our team at{" "}
            <strong>AutoCare</strong> is always here to help. Reach out to us
            for inquiries, quotes, or appointments.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <i className="ri-map-pin-line text-red-900 text-2xl"></i>
              <p className="text-gray-400">
                AutoCare Center, Main Boulevard, Karachi, Pakistan
              </p>
            </div>
            <div className="flex items-center gap-3">
              <i className="ri-phone-line text-red-900 text-2xl"></i>
              <p className="text-gray-400">+92 300 1234567</p>
            </div>
            <div className="flex items-center gap-3">
              <i className="ri-mail-line text-red-900 text-2xl"></i>
              <p className="text-gray-400">support@autocare.com</p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href="#" className="text-red-900 hover:text-black text-2xl">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="#" className="text-red-900 hover:text-black text-2xl">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="text-red-900 hover:text-black text-2xl">
              <i className="ri-twitter-x-line"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[rgb(255,255,255,.1)] md:w-1/2 shadow-lg rounded-2xl p-8">
          <img src="/handle.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default page