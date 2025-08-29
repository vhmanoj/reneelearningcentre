import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center h-screen px-6 bg-white snap-start"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-700">
        Play. Learn. Grow.
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        A safe and nurturing environment where children discover, explore, and shine every day.
      </p>

      <div className="flex gap-4">
        <a href="#about">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Learn More
          </Button>
        </a>
        <a href="#contact">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600"
          >
            Schedule a Tour
          </Button>
        </a>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-pink-200 opacity-50 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-yellow-200 opacity-60 animate-bounce"></div>
    </section>
  )
}
