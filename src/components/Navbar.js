"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#programs", label: "Programs" },
    { href: "#about", label: "About Us" },
    { href: "#why", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#">
          <h1 className="text-2xl font-bold text-blue-700">
            Reene Learning Center
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-blue-600">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#enrol-form">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Enroll Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col items-center py-6 gap-6 text-gray-700 font-medium">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
            <a href="#enrol-form" onClick={() => setOpen(false)}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Enroll Now
              </Button>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
