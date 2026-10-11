import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-transparent text-(--text) relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto py-12 md:py-16">
        {/* Main Grid: Stacked on Mobile (< 768px), Horizontal on Desktop (>= 768px) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-12 items-center">
          {/* LEFT COLUMN: Main Image (Below text on mobile, Left on desktop) */}
          <div className="order-2 md:order-1 md:col-span-4 lg:col-span-5">
            <div className="relative w-[88%] h-80 -ml-4 md:-ml-6 md:h-135 rounded-sm overflow-hidden shadow-sm">
              <Image
                src="/images/peaceful-window-moment-stockcake.jpg" // Replace with your image path
                alt="Family playing on the beach"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* CENTER COLUMN: Hero Text Content */}
          <div className="px-6 sm:px-10 pt-4 pb-12 sm:py-16 order-1 md:order-2 md:col-span-6 md:px-0 md:py-0 lg:col-span-6 flex flex-col justify-between space-y-6 md:space-y-8 pr-0 lg:pr-6 h-full">
            {/* Sub-heading / Tagline */}
            <p className="w-[90%] text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-700 font-medium leading-relaxed py-6 md:py-0 md:w-[60%]">
              ONLINE & IN-PERSON THERAPY IN SANTA MONICA & ACROSS CA
            </p>

            {/* Main Headline */}
            <div className="flex flex-col gap-8 mb-2">
              <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl text-(--text-heading) leading-tight tracking-tight w-[90%]">
                Find{" "}
                <span className="font-allura italic text-(--text-highlighted) font-normal font-cursive text-5xl lg:text-6xl xl:text-7xl inline-block mr-8">
                  relief
                </span>
                from anxiety, trauma, and burnout—and reconnect with yourself.
              </h1>

              {/* Subtitle / Description */}
              <p className="w-[90%] md:w-full text-base sm:text-lg text-(--text-desc)  leading-relaxed max-w-xl">
                Evidence-based, compassionate therapy for thoughtful adults navigating stress, panic, and high internal pressure.
              </p>

              {/* CTA Button / Link */}
              <div className="pt-2">
                <a
                  href="#book"
                  className="inline-block text-xs pt-4 sm:pt-16 sm:text-sm md:pt-0 uppercase tracking-[0.2em] text-(--text) font-semibold pb-1 border-b-2 border-gray-400 hover:border-gray-800 transition-colors"
                >
                  BOOK A CONSULTATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR PREVIEW IMAGE (Visible on Desktop >= 1024px) */}
      <div className="-right-8 bottom-12 h-[20%] w-20 absolute md:-right-16 md:bottom-16 md:w-30 md:block xl:w-40 md:h-[50%] opacity-90 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-right.jpg" // Replace with your right-hand side preview image
            alt="Ocean landscape preview"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
