"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-18 py-6 flex items-center justify-between relative z-50 bg-inherit">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Logo className="scale-75 origin-left" />
        </Link>

        {/* Desktop Navigation - 1024px and above */}
        <div className="hidden lg:flex items-center gap-8 text-md text-(--text)">
          <a href="#about" className="hover:opacity-80 transition-opacity">ABOUT</a>
          <a href="#office" className="hover:opacity-80 transition-opacity">MY OFFICE</a>
          <a href="#specialties" className="hover:opacity-80 transition-opacity">SPECIALTIES</a>
          <a href="#approach" className="hover:opacity-80 transition-opacity">APPROACH</a>
          <a href="#services" className="hover:opacity-80 transition-opacity">SERVICES</a>

          <a
            href="#contact"
            className="border border-gray-700 px-6 py-2 rounded-[60%] hover:bg-gray-800 hover:text-white transition-all"
          >
            CONTACT
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-8 h-8 relative flex flex-col justify-center items-center gap-1.5 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Slide-Down Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-24 bg-[#F4F0EA]/95 backdrop-blur-md shadow-xl border-b border-gray-200/50 transition-all duration-500 ease-in-out z-40 overflow-hidden ${
          menuOpen ? "max-h-125 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-12 flex flex-col gap-5 text-lg text-(--text) font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:opacity-75 transition-opacity">
            HOME
          </Link>

          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:opacity-75 transition-opacity">
            ABOUT
          </a>

          <a href="#office" onClick={() => setMenuOpen(false)} className="hover:opacity-75 transition-opacity">
            MY OFFICE
          </a>

          <a href="#specialties" onClick={() => setMenuOpen(false)} className="hover:opacity-75 transition-opacity">
            SPECIALTIES
          </a>

          <a href="#approach" onClick={() => setMenuOpen(false)} className="hover:opacity-75 transition-opacity">
            APPROACH
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:opacity-75 transition-opacity">
            SERVICES
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block text-center border border-gray-700 px-6 py-2.5 rounded-[60%] w-full max-w-40 mt-2 hover:bg-gray-800 hover:text-white transition-all"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}