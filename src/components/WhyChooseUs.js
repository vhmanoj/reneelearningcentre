import { CheckCircle } from "lucide-react"

export default function WhyChooseUs() {
  const points = [
    "Safe & secure environment",
    "Experienced and caring teachers",
    "Fun, play-based curriculum",
    "Healthy meals & snacks",
    "Regular parent communication",
    "Flexible schedules",
  ]

  return (
    <section id="why" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">Why Choose Us?</h2>
        <p className="mb-12 text-gray-600">We go beyond daycare – we nurture growth and curiosity</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-700">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
