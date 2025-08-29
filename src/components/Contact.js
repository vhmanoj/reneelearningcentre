"use client"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <section id="contact">
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-yellow-50 to-green-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-blue-700 mb-12 text-center">
            Contact Us
          </h1>

          {/* Contact Info + Map */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-pink-600">
                Our Daycare Center
              </h2>
              <p>🏚 <strong>Address:</strong> Hno.1, Plot no. 569, Kh.no. 94/18, gali no. 4, Block-B, Baba Colony, Burari, Delhi-110084</p>
              <p>📞 <strong>Phone:</strong> +91 9315006528</p>
              <p>📧 <strong>Email:</strong> reneelearningcentre@gmail.com</p>
              <p>⏰ <strong>Hours:</strong> Mon – Sat: 2:00 PM – 7:00 PM</p>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.62269397060177!2d77.20041193646331!3d28.750518548027312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe2f293b3481%3A0xbdd59e316ec6ff81!2s569%2C%20Prem%20Nagar%2C%20Baba%20Colony%2C%20Burari%2C%20New%20Delhi%2C%20Delhi%2C%20110084%2C%20India!5e0!3m2!1sen!2sus!4v1755681428679!5m2!1sen!2sus"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl shadow-lg border"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
