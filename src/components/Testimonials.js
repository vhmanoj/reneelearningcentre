import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    { name: "Sarah M.", text: "The teachers are amazing! My daughter loves going here every day." },
    { name: "James K.", text: "Safe, fun, and educational. We couldn’t be happier with our choice." },
    { name: "Priya S.", text: "A wonderful place that feels like family. Highly recommended!" },
  ]

  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">What Parents Say</h2>
        <p className="mb-12 text-gray-600">Trusted by families in our community</p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="shadow-md border">
              <CardContent className="p-6">
                <p className="italic text-gray-600 mb-4">“{t.text}”</p>
                <h4 className="font-semibold text-blue-700">{t.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
