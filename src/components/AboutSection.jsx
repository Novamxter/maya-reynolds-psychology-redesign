import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="bg-transparent w-full min-h-screen flex items-center justify-center py-12 xl:py-24 overflow-x-hidden">
      
      {/* Container: Full width on right for desktop edge-bleed */}
      <div className="w-full pl-6 pr-6 md:pr-0 md:pl-12 lg:pl-20 xl:pl-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: Main Content Area */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center pr-0 md:pr-6 lg:pr-10 py-4">
            
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant text-(--text-heading) font-normal leading-tight tracking-tight mb-8 md:mb-12">
              You appear functional on the outside, but internally you're feeling exhausted and overwhelmed.
            </h2>

            {/* Desktop 2-Column Grid / Mobile Stacked */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Text Column 1 */}
              <div className="space-y-4">
                <h3 className="text-xs sm:text-[13px] tracking-[0.18em] uppercase text-(--text) font-semibold leading-relaxed">
                  AT DR. MAYA REYNOLDS PSYCHOLOGY PRACTICE, WE CREATE SPACE TO SLOW DOWN AND RECONNECT.
                </h3>
                <p className="text-sm sm:text-base text-(--text-desc) font-light leading-relaxed">
                  Many of the adults I work with are high-achieving, thoughtful, and self-aware—yet quietly struggle with constant worry, muscle tension, poor sleep, or chronic burnout. Whether coping with perfectionism or earlier life experiences, therapy provides a quiet, grounded space to restore balance.
                </p>
              </div>

              {/* Mobile Only Image (< 768px) between paragraphs */}
              <div className="block md:hidden my-2">
                <div className="relative w-full aspect-9/10 overflow-hidden shadow-sm">
                  <Image
                    src="/Images/Dr. Maya Reynolds.png"
                    alt="Calm ocean shoreline waves"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Text Column 2 */}
              <div className="flex flex-col justify-start">
                <p className="text-sm sm:text-base text-(--text-desc) font-light leading-relaxed">
                  I take a warm, collaborative approach integrating CBT, EMDR, mindfulness, and body-oriented techniques. Whether navigating trauma or chronic stress, our work is paced carefully with an emphasis on safety and emotional regulation. Serving clients in Santa Monica and across California via telehealth, my goal is to help you develop lasting resilience and a stronger relationship with yourself.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Desktop Bleed Image (Touches absolute right edge with 0 padding) */}
          <div className="hidden md:block md:col-span-5 lg:col-span-5 relative w-full h-full min-h-125 lg:min-h-150">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/Images/Dr. Maya Reynolds.png"
                alt="Calm ocean shoreline waves"
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