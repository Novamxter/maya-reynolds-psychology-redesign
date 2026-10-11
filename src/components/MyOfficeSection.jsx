"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const officeImages = [
  {
    src: "/Images/office1.jpeg", // Replace with your hosted image 1 URL
    alt: "Dr. Maya Reynolds Santa Monica office psychotherapy space with natural light and exposed brick",
    caption:
      "Loft-style consultation space featuring natural light, exposed brick, and a calm, grounded atmosphere.",
  },
  {
    src: "/Images/office2.jpeg", // Replace with your hosted image 2 URL
    alt: "Comfortable lounge seating, bookshelf, and olive tree in Santa Monica therapy room",
    caption:
      "Private lounge seating, calming greenery, and a quiet sanctuary away from the fast-paced city.",
  },
];

export default function OurOfficeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding interval (changes slide every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % officeImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? officeImages.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % officeImages.length);
  };

  return (
    <section id="office" className="py-20 px-6 md:px-26 bg-(--bg-white) text-(--text)">
      <div className="max-w-6xl mx-auto">
        {/* Left-Aligned Header Block */}
        <div className="max-w-3xl text-left mb-10">
          <span className="text-xs uppercase tracking-widest text-(--text-heading) font-semibold block mb-2">
            SANTA MONICA PRACTICE SPACE
          </span>
          <h2 className="text-3xl md:text-5xl font-cormorant mb-4 leading-tight">
            A Calm, Grounding Space for{" "}
            <span className="font-allura text-5xl lg:text-6xl xl:text-7xl text-(--text-highlighted) font-normal font-cursive">
              Healing
            </span>
          </h2>
          <p className="text-base md:text-lg text-(--text-desc)/80 leading-relaxed">
            Located at{" "}
            <strong className="font-medium">
              123th Street 45 W, Santa Monica, CA 90401
            </strong>
            , our physical practice is designed with your comfort, privacy, and
            peace in mind. Featuring soft natural light, warm wooden flooring,
            and an uncluttered aesthetic, the space offers a quiet sanctuary
            away from the fast-paced city.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full  overflow-hidden shadow-md bg-(--bg-white)">
          <div className="relative h-80 sm:h-120 w-full">
            {officeImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/70 via-black/30 to-transparent p-4 sm:p-6 text-(--text-white) text-left">
                  <p className="text-sm sm:text-base font-light tracking-wide">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-(--text-heading) p-2.5 sm:p-3 rounded-full shadow-md transition-all"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-(--text-heading) p-2.5 sm:p-3 rounded-full shadow-md transition-all"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Dots Indicators */}
          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
            {officeImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Left-Aligned Note */}
        <p className="mt-6 text-sm text-[#1C2522]/70 italic text-left">
          Both in-person therapy in Santa Monica and secure telehealth sessions
          across California are available.
        </p>
      </div>
    </section>
  );
}
