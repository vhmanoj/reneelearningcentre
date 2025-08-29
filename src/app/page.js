import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Programs from "@/components/Programs"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import AboutUs from "@/components/About"
import Amenities from "@/components/Amenities"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 text-gray-800">
      <Navbar />
      <Hero />
      <Programs />
      <AboutUs />
      <WhyChooseUs />
      <Amenities />
      <Contact />
      <ContactForm />
      <Footer />
    </main>
  )
}
