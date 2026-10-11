import React from "react";
import Image from "next/image";

export default function TherapyApproach() {
  return (
    <section id="approach" className="bg-(--bg-secondary) text-(--text) w-full  py-12 md:py-24 overflow-x-hidden">
      {/* Outer Container: Right padding removed on desktop to bleed the image to the right edge */}
      <div className="w-full pl-6 pr-6 md:pr-0 md:pl-12 lg:pl-20 xl:pl-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-12 items-stretch">
          {/* LEFT CONTENT AREA */}
          <div className="md:col-span-9 lg:col-span-9 flex flex-col justify-center pr-0 md:pr-6 lg:pr-18">
            {/* Tagline Header */}
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-(--text-heading) font-medium mb-4 md:mb-35">
              MY THERAPEUTIC APPROACH
            </p>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant text-(--text-heading) font-normal leading-tight tracking-tight mb-8 md:mb-12">
              A grounded, collaborative path to lasting resilience.
            </h2>

            {/* Mobile Only Banner Image (< 768px) inserted between title and body text */}
            <div className="block md:hidden my-4">
              <div className="relative w-full overflow-hidden aspect-square shadow-sm">
                <Image
                  src="/Images/therapy-room.webp" 
                  alt="Therapy room"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Desktop 2-Column Text Grid / Mobile Stacked Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Column 1 */}
              <div className="space-y-4">
                <h3 className="text-xs sm:text-[13px] tracking-[0.16em] uppercase text-(--text-heading) font-semibold leading-relaxed">
                  STRUCTURED ENOUGH TO FEEL SUPPORTIVE, WITH SPACE FOR REFLECTION AND DEPTH.
                </h3>
                <p className="text-sm sm:text-base text-(--text-desc) font-light leading-relaxed">
                  Many of the adults I work with are high-achieving, thoughtful, and self-aware—yet internally, they feel exhausted, stuck in overthinking, or emotionally on edge. Here, your needs are always the top priority, and you have a dedicated space to finally put yourself first. I take the time to deeply listen and understand your unique story, recognizing that no two people are the same. Therapy with me is never one-size-fits-all; instead, it is an intentional, tailored journey designed to help you navigate life's complexities.
                </p>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col justify-start">
                <p className="text-sm sm:text-base text-(--text-desc) font-light leading-relaxed">
                  By integrating evidence-based methods such as Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, we address both the emotional and physiological sides of what you are experiencing, including constant worry and tension. Whether we are gently challenging you to look at things differently or processing long-standing patterns from chronic stress or trauma, our work is paced carefully. With a strong emphasis on safety, stabilization, and feeling more regulated in your daily life, my goal is to walk alongside you as you build lasting resilience and embrace a deeper sense of peace.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#book"
                className="relative inline-block text-xs pt-4 sm:pt-16 sm:text-sm md:pt-0 uppercase tracking-[0.2em] text-(--text-heading) font-semibold pb-1 md:mt-20 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-700 after:origin-left after:transition-transform after:duration-700 after:ease-in-out hover:after:scale-x-0"
              >
                LEARN MORE ABOUT MY APPROACH
              </a>
            </div>
          </div>


          {/* RIGHT IMAGE AREA: Desktop Bleed Image (Touches absolute right edge with 0 padding) */}
          <div className="hidden md:block md:col-span-3 lg:col-span-3 relative w-full h-full min-h-65 lg:min-h-175">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/Images/therapy-room.webp" 
                alt="Therapy room"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
