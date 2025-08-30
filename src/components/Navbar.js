"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" >
          <h1 className="text-2xl font-bold text-blue-700">Reene Learning Center</h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><a href="#programs" className="hover:text-blue-600">Programs</a></li>
          <li><a href="#about"className="hover:text-blue-600">About Us</a></li>
          <li><a href="#why" className="hover:text-blue-600">Why Us</a></li>
          {/* <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li> */}
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#enrol-form">
            <Button className="bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col items-center py-6 gap-6 text-gray-700 font-medium">
            <li><a href="#programs" onClick={() => setOpen(false)}>Programs</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About Us</a></li>
            <li><a href="#why" onClick={() => setOpen(false)}>Why Us</a></li>
            {/* <li><a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a></li> */}
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            <a href="#enrol-form"><Button className="bg-blue-600 hover:bg-blue-700">Enroll Now</Button></a>
          </ul>
        </div>
      )}
    </header>
  )
}
