"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-18 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Logo className="scale-75 origin-left" />
        </Link>

        {/* Desktop Navigation - 1024px and above */}
        <div className="hidden lg:flex items-center gap-8 text-md text-(--text)">
          <a href="#about">ABOUT</a>
          <a href="#office">MY OFFICE</a>
          <a href="#specialties">SPECIALTIES</a>
          <a href="#approach">APPROACH</a>
          <a href="#services">SERVICES</a>
          
          <a href="#contact" className="hidden lg:block border border-gray-700 px-6 py-4 rounded-[60%]">
            CONTACT
          </a>
        </div>

        {/* Desktop Button */}
        {/* <button className="hidden lg:block bg-black text-white px-5 py-2 rounded-full">
          Contact Us
        </button> */}

        {/* Hamburger - below 1024px */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-5 flex flex-col gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <button className="px-5 py-2 border border-gray-700 rounded-[60%]">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
