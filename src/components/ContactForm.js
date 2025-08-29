"use client"
import { Section } from "lucide-react"
import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const wordLimit = 300
  const [wordCount, setWordCount] = useState(0)

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  function handleChange(e) {
    const { name, value } = e.target
    let newErrors = { ...errors }

    if (name === "name") {
      if (value.length > 20) return
      newErrors.name = value.trim() ? "" : "Name is required"
    }

    if (name === "email") {
      newErrors.email = validateEmail(value)
        ? ""
        : "Enter a valid email address"
    }

    if (name === "message") {
      const words = value.trim().split(/\s+/).filter(Boolean)
      if (words.length > wordLimit) return
      setWordCount(words.length)
      newErrors.message = value.trim() ? "" : "Message is required"
    }

    setFormData({ ...formData, [name]: value })
    setErrors(newErrors)

    const valid =
      (name === "name" ? value.trim() : formData.name.trim()).length > 0 &&
      validateEmail(name === "email" ? value : formData.email) &&
      (name === "message" ? value.trim() : formData.message.trim()).length > 0

    setIsFormValid(valid)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    form.append("access_key", "6b8a3922-2eff-4d94-9701-a2f10b77c6f9") // replace with your Web3Forms key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    })

    if (response.ok) {
      setStatus("✅ Thank you! Your message has been sent.")
      setFormData({ name: "", email: "", message: "" })
      setIsFormValid(false)
      setErrors({})
      setWordCount(0)
      e.target.reset()
    } else {
      setStatus("❌ Oops! Something went wrong.")
    }
  }

  return (
    <section
    id="enrol-form">
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      {/* Full-width container but compact inner form */}
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 font-bold">Your Name (max 20 chars)</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full border-2 rounded-lg p-2 font-bold ${
                errors.name ? "border-red-500 text-red-600" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-bold">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full border-2 rounded-lg p-2 font-bold ${
                errors.email ? "border-red-500 text-red-600" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-bold">Message (max {wordLimit} words)</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full border-2 rounded-lg p-2 font-bold ${
                errors.message
                  ? "border-red-500 text-red-600"
                  : "border-gray-300"
              }`}
            ></textarea>
            <div className="flex justify-between text-xs mt-1">
              {errors.message && <p className="text-red-500">{errors.message}</p>}
              <p
                className={`${
                  wordCount > wordLimit * 0.9 ? "text-red-600 font-bold" : "text-gray-500"
                }`}
              >
                {wordCount}/{wordLimit} words
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 text-lg font-bold rounded-xl shadow-md transition ${
              isFormValid
                ? "bg-pink-600 text-white hover:bg-pink-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            ✉️ Send Message
          </button>
        </form>

        {status && <p className="mt-6 text-pink-600 font-bold text-center">{status}</p>}
      </div>
    </div>
    </section>
  )
}
