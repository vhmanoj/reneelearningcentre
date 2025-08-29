"use client";

export default function Amenities() {
  // ✅ Store amenities in an array
  const amenities = [
    "Boarding From 2:00PM to 7:00PM",
    "Teaching and homework support by qualified teacher",
    "Light snacks provided",
    "Play-based and engaging learning methods",
    "Fun and games with other kids",
    "Experienced and caring staff",
    "Smart learning tools and resources",
  ];
     return (
    <section
      id="amenities"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        Amenities Provided in After School Program
      </h2>

      {/* Paragraph under the title */}
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl text-center">
        At Renee Learning Center, we provide a safe, nurturing, and engaging environment 
        designed to support every child’s growth and creativity. Here are some of the key 
        amenities that make our center a special place for learning and fun.
      </p>

      {/* ✅ Auto-balanced columns */}
      <ul className="columns-1 md:columns-2 gap-12 max-w-5xl text-lg md:text-xl text-gray-700">
        {amenities.map((item, index) => (
          <li
            key={index}
            className="mb-4 flex items-center gap-2 break-inside-avoid transition-all duration-200 hover:text-blue-600 hover:translate-x-1"
          >
            <span className="text-blue-600 font-bold">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
