export default function Programs() {
  const programs = [
    // { title: "Toddlers", desc: "Play-based learning for ages 18 months – 3 years." },
    { title: "Tuition Classes", desc: "Regular tuition classes for nursery to 8th class." },
    { title: "After School", desc: "Homework help, fun activities, and safe care." },
  ]

  return (
    <section
      id="programs"
      className="py-20 px-6 bg-gradient-to-r from-pink-50 via-yellow-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
          Our Programs
        </h2>
        <p className="mb-12 text-gray-700">
          Tailored learning and care for every stage of childhood
        </p>

        {/* Flex wrapper for centering */}
        <div className="flex flex-wrap justify-center gap-10">
          {programs.map((p, i) => (
            <div
              key={i}
              className="w-80 h-56 shadow-xl border-t-4 border-green-400 rounded-3xl bg-white p-8 
                         transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">
                {p.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
