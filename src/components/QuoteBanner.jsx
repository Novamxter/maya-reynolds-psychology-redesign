import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full bg-(--bg-white) overflow-hidden py-8 md:py-16">
      {/* Banner Container: Height adjusts responsively */}
      <div className="relative w-full h-90 sm:h-102 md:h-115 lg:h-128 flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/Images/sky-with-hills-on-background.jpg" // Replace with your beach image path
          alt="Children running along the beach shore"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered Text Overlay */}
        <div className="relative z-10 md:mx-26 px-6">
          <blockquote className="text-(--text-white) text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:pt-[18%] lg:pr-[20%] font-cormorant font-normal leading-relaxed md:leading-[1.35] tracking-tight drop-shadow-sm">
            Therapy works best when you feel respected, understood, and actively
            involved.{" "}
            <span className="italic font-normal text-(--text-white)/95">
              You don't have to navigate burnout and worry alone.
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
