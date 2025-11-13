import React from 'react'

const page = () => {
  return (
    <div>
        <section className="py-16 bg-black text-center text-white">
  <h2 className="text-3xl font-bold mb-8 text-red-900">Why Choose AutoCare?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
    <div className="bg-[rgb(255,255,255,.1)] p-6 rounded-xl">
      <i className="ri-tools-fill text-5xl text-red-900 mb-4"></i>
      <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
      <p className="text-gray-300">Our certified professionals ensure quality in every service.</p>
    </div>

    <div className="bg-[rgb(255,255,255,.1)] p-6 rounded-xl">
      <i className="ri-car-line text-5xl text-red-900 mb-4"></i>
      <h3 className="text-xl font-semibold mb-2">Complete Car Care</h3>
      <p className="text-gray-300">From washing to diagnostics — we've got you covered.</p>
    </div>

    <div className="bg-[rgb(255,255,255,.1)] p-6 rounded-xl">
      <i className="ri-timer-line text-5xl text-red-900 mb-4"></i>
      <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
      <p className="text-gray-300">Quick turnarounds without compromising on quality.</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default page