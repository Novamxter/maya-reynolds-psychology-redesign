import React from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "My Office", href: "#office" },
  { label: "Specialties", href: "#specialties" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const teamMembers = [
  "Anxiety & Panic Therapy",
  "Trauma & EMDR",
  "Burnout & Perfectionism",
  "Cognitive Behavioral Therapy (CBT)",
  "Mindfulness & Somatic Tools",
];

export default function Footer() {
  return (
    <footer className="bg-(--bg-white) text-(--text) pt-16 md:pt-20 font-sans border-t border-gray-100">
      {/* MAIN FOOTER CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-16 md:mb-30">
        {/* DESKTOP LAYOUT (>= 768px): 4 Side-by-Side Flex Columns */}
        <div className="hidden md:flex flex-row items-start justify-between gap-8 lg:gap-16 ">
          {/* Brand Column */}
          <div className="w-1/3 max-w-[40%] space-y-4 lg:min-w-[30%] mx-6">
            <div className="space-y-1 mb-12">
              <Logo />
            </div>
            <p className="text-lg text-(--text-desc) font-light leading-relaxed">
              Getting started is simple. You are welcome to visit my private
              office in Santa Monica or schedule secure virtual appointments
              from anywhere in California—whatever suits your schedule best.
            </p>
          </div>

          {/* Navigate Column */}
          <div className="space-y-4 lg:min-w-[10%] ml-8">
            <h3 className="text-base tracking-[0.2em] uppercase text-(--text-heading) font-semibold">
              NAVIGATE
            </h3>
            <ul className="space-y-2.5 text-sm text-(--text-desc) font-light">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-(--text-highlighted) transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Specialties Column */}
          <div className="space-y-4 lg:min-w-[18%]">
            <h3 className="text-base tracking-[0.2em] uppercase text-(--text-heading) font-semibold">
              CORE SPECIALTIES
            </h3>
            <ul className="space-y-2 text-sm text-(--text-desc) font-light">
              {teamMembers.map((member, idx) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4 max-w-xs">
            <h3 className="text-base tracking-[0.2em] uppercase text-(--text-heading) font-semibold">
              CONTACT
            </h3>
            <div className="space-y-3 text-sm text-(--text-desc) font-light leading-relaxed">
              <p>
                123th Street 45 W, 
                <br />
                Santa Monica,
                <br />
                CA 90401
              </p>
              <p>
                <a
                  href="mailto:drmaya@mayareynoldspsyd.com"
                  className="hover:underline"
                >
                  drmaya@mayareynoldspsyd.com
                </a>
                <br />
                (310) 555-0199
              </p>
              <p className="pt-2 text-sm leading-normal">
                Serving Santa Monica, West Los Angeles, Venice, Pacific Palisades
                &amp; all of CA via Telehealth
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (< 768px): */}
        <div className="flex md:hidden flex-col space-y-10">
          {/* Brand Header & Bio */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-4xl lg:text-5xl font-serif text-(--text-heading) font-normal tracking-tight">
                Conejo Valley
              </h2>
              <p className="text-xs tracking-[0.3em] uppercase text-(--text-highlighted) font-medium">
                FAMILY COUNSELING
              </p>
            </div>
            <p className="text-sm text-(--text-desc) font-light leading-relaxed">
              Getting started is simple. You are welcome to visit my private
              office in Santa Monica or schedule secure virtual appointments
              from anywhere in California—whatever suits your schedule best.
            </p>
          </div>

          {/* Navigate Section */}
          <div className="space-y-3">
            <h3 className="text-xs tracking-[0.2em] uppercase text-(--text-heading) font-semibold">
              NAVIGATE
            </h3>
            <ul className="space-y-2 text-sm text-(--text-desc) font-light">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-(--text-highlighted) transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section (Moved before Team on mobile) */}
          <div className="space-y-3">
            <h3 className="text-xs tracking-[0.2em] uppercase text-(--text-heading) font-semibold">
              CONTACT
            </h3>
            <div className="space-y-3 text-sm text-(--text-desc) font-light leading-relaxed">
              <p>
                123th Street 45 W, 
                <br />
                Santa Monica,
                <br />
                CA 90401
              </p>
              <p>
                <a
                  href="mailto:drmaya@mayareynoldspsyd.com"
                  className="hover:underline"
                >
                  drmaya@mayareynoldspsyd.com
                </a>
                <br />
                (310) 555-0199
              </p>
              <p className="pt-1 text-xs leading-normal">
                Serving Santa Monica, West Los Angeles, Venice, Pacific Palisades
                &amp; all of CA via Telehealth
              </p>
            </div>
          </div>

          {/* Core Specialties Section */}
          <div className="space-y-3">
            <h3 className="text-xs tracking-[0.2em] uppercase text-(--text-heading) font-semibold">
              CORE SPECIALTIES
            </h3>
            <ul className="space-y-2 text-sm text-(--text-desc) font-light">
              {teamMembers.map((member, idx) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM SUB-FOOTER BAR */}
      <div className="bg-[#88B0A8] text-(--text-white) py-4 px-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm font-light tracking-wide gap-2">
          <p className="text-center sm:text-left">
            © 2026 Dr. Maya Reynolds, PsyD. All Rights Reserved. | Terms | Privacy Policy | Disclaimer
          </p>
        </div>
      </div>
    </footer>
  );
}
